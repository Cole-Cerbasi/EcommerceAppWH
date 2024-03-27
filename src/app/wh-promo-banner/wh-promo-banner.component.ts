import { Component, OnInit } from '@angular/core';
import { GETFormServiceService } from '../service/get-form-service.service';
import { LoginService } from '../service/login.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-wh-promo-banner',
  templateUrl: './wh-promo-banner.component.html',
  styleUrl: './wh-promo-banner.component.css'
})
export class WhPromoBannerComponent {

  notLoggedIn: boolean = true;

  constructor(private getForm: GETFormServiceService, private getLogin: LoginService, private cookie: CookieService){}

  formData = {
    email: "",
    password: "",
    allow_promo: false,
    confirm_password: "",
    agreeTOS: false,
  }

  ngOnInit(): void{

    if(this.cookie.get("uat") != ''){
      this.notLoggedIn = false;
    }

  }

  isPasswordGood(): boolean {
    return /[^\p{L}]/u.test(this.formData.password) && this.formData.password.length > 3;
  }
  isConfirmPasswordGood(): boolean {
    return this.formData.password == this.formData.confirm_password;
  }
  isEmailGood(): boolean {
    return this.formData.email.includes('@');
  }
  isTOSCheckGood(): boolean {
    return this.formData.agreeTOS;
  }
  isFormGood(): boolean {
    return this.isPasswordGood() && this.isEmailGood() && this.isTOSCheckGood();
  }

  refreshPage(){
    window.location.reload();
  }

  postData(){
    const data = {
      email: this.formData.email,
      password: this.formData.password,
      allow_promo: this.formData.allow_promo,
    }

    console.log("submitted");
    this.getForm.postData(data).subscribe((r)=>{

      //login and get token
      this.getLogin.postData(data).subscribe((r)=>{
        this.cookie.set("uat", r[0]);
        this.refreshPage();
      });

    },(e)=>{
      console.warn("Something didn't go right "+e);
    });
  }
}
