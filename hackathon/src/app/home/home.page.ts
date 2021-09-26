import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  
import { DataService, Message } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  showSearchBar = false;
  searchTerm :any;
  filteredMessages :Message[];
  constructor(private data: DataService, private router: Router) {
  
  }
  ngOnInit() {
    this.filteredMessages = this.getMessages();
    this.searchTerm = "";
    this.setFiltre();
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

  go() {  
    console.log('navigate');
    this.router.navigateByUrl("/master");  
  }  

    

  clickSearchButton() {​​​​​​
    this.showSearchBar = !this.showSearchBar;
  }​​​​​​
  

    
  
  setFiltre() {​​​​​​
    this.filteredMessages = this.data.getMessages().filter(currentEtiquette=> {​​​​​​
    return ((currentEtiquette.porte.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1) ||
          (currentEtiquette.voyage.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1))
        }​​​​​​);
    

  }​​​​​​
  
  
}
