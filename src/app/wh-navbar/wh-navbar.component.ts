import { Component } from '@angular/core';

@Component({
  selector: 'app-wh-navbar',
  templateUrl: './wh-navbar.component.html',
  styleUrl: './wh-navbar.component.css'
})
export class WhNavbarComponent {
  isCollapseOpen = false;
  inputValue = "Search For Anything";

  openCollapse() {
    this.isCollapseOpen = true;
  }

  closeCollapse(){
    setTimeout(() => {
      this.isCollapseOpen = false;
    }, 100);
  }

  updateContent(event: any){
    if (event && event.target) {
      this.inputValue = event.target.value === "" ? "Search For Anything" : event.target.value + " not found.";
    }
  }

  search(){

  }
}
