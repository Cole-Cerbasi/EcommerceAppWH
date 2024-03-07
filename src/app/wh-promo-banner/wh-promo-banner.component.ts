import { Component } from '@angular/core';
import { GETFormServiceService } from '../service/get-form-service.service';

@Component({
  selector: 'app-wh-promo-banner',
  templateUrl: './wh-promo-banner.component.html',
  styleUrl: './wh-promo-banner.component.css'
})
export class WhPromoBannerComponent {
  constructor(private getForm: GETFormServiceService){}

  formData = {
    email: "",
    password: "",
    allow_promo: false,
    confirm_password: "",
    agreeTOS: false,
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

  postData(){
    const data = {
      email: this.formData.email,
      password: this.formData.password,
      allow_promo: this.formData.allow_promo,
    }
    console.log("submitted");
    this.getForm.postData(data).subscribe((r)=>{
      console.log("success");
    },(e)=>{
      console.warn("Something didn't go right "+e);
    });
  }
}
