import {Component, OnInit} from '@angular/core';
import {el} from '@angular/platform-browser/testing/src/browser_util';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  hamburgerClass: string = 'active';
  searchClass: string = '';

  constructor() {
  }

  ngOnInit() {
  }

  toggleMenu(): void {
    this.hamburgerClass = this.hamburgerClass == '' ? 'active' : '';
    of(null).pipe(delay(500)).subscribe(() => {
      this.searchClass = this.hamburgerClass == '' ? 'hidden' : '';
    })
  }

}
