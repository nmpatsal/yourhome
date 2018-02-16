import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent implements OnInit {

  isCollapsed = true;


  toggleMenu() {
  this.isCollapsed = !this.isCollapsed;
  }


  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

}
