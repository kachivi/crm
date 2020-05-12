import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  links = [{label: 'Customer', path: '/customer'}, 
           {label: 'Employee', path: '/employee'},
           {label: 'Courses',  path: '/courses/home'},
           {label: 'Reports',  path: '/reports'},
          ]
  activeLink = this.links[0];
  background = '';

  toggleBackground() {
    this.background = this.background ? '' : 'primary';
  }
  constructor() { }

  ngOnInit(): void {
  }

}
