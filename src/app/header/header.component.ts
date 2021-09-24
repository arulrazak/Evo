import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'aerodyne-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.router.navigate(['auth']);
  }

}
