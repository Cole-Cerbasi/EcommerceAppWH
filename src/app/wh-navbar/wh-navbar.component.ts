import { Component } from '@angular/core';
import { APISearchService } from '../service/api_search.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

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
  inputValue: SafeHtml = "Search For Anything";

  constructor(private APISearchService: APISearchService, private sanitizer: DomSanitizer) {}

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
}
