import { Component, HostListener, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();


  constructor(private modalService: NgbModal,) { }

  navbarfixed: boolean = false;
  
   toggleButton = document.getElementsByClassName('navbar-toggle')[0];


  @HostListener('window:scroll', ['$event']) onscroll(){
      if(window.scrollY > 10){
        this.navbarfixed = true;
      }
      else{

        this.navbarfixed = false;
      }
  }



  ngOnInit() {   
  
  }


  toggleSideBar(){
    this.toggleSideBarForMe.emit();
  }


}