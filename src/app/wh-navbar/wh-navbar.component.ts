import { Component } from '@angular/core';
import { APISearchService } from '../service/api_search.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { LoginService } from '../service/login.service';
import { CookieService } from 'ngx-cookie-service';

interface Result {
  name: string;
}

@Component({
  selector: 'app-wh-navbar',
  templateUrl: './wh-navbar.component.html',
  styleUrl: './wh-navbar.component.css'
})
export class WhNavbarComponent {
  isCollapseOpen = false;
  isLoginGood = true;
  loggingIn = false;
  notLoggedIn: boolean = true;
  inputValue: SafeHtml = "Search For Anything";

  formData = {
    email: "",
    password: ""
  }

  constructor(private APISearchService: APISearchService, private sanitizer: DomSanitizer, private getLogin: LoginService, private cookie: CookieService) {}

  openCollapse() {
    this.isCollapseOpen = true;
  }

  closeCollapse(){
    setTimeout(() => {
      this.isCollapseOpen = false;
    }, 100);
  }

  updateContent(event: any){

    const data = {
      search: event.target.value,
    }

    if(event.target.value.length > 3){
      this.inputValue = "Loading...";
      this.APISearchService.postData(data).subscribe((r)=>{
        this.inputValue = "";
        let res_builder = '';
        r.forEach((result: Result) => {
          res_builder += `<button class="btn subtle-underline w-100">${result.name}</button><br>`;
        });
        this.inputValue = this.sanitizer.bypassSecurityTrustHtml(res_builder);
      },(e)=>{
        console.warn(e);
      });
    }else{
      this.inputValue = "Search For Anything";
    }

  }

  search(){
    //nothing here for now, no page to go to
  }

  loginIsGood(){
    return this.isLoginGood;
  }

  refreshPage(){
    window.location.reload();
  }

  logOut(){
    this.cookie.delete("uat");
    this.refreshPage();
  }

  logIn(){
    this.loggingIn = true;
    const data = {
      email: this.formData.email,
      password: this.formData.password,
    }
    this.getLogin.postData(data).subscribe((r)=>{
      console.log(r[0]);
      if(r[0] != "bad"){
        this.cookie.set("uat", r[0]);
        this.refreshPage();
      }else{
        this.isLoginGood = false;
        this.loggingIn = false;
      }
    });
  }

  ngOnInit(): void{

    if(this.cookie.get("uat") != ''){
      this.notLoggedIn = false;
    }

  }
}
