import {Component, OnInit} from '@angular/core';
import {el} from '@angular/platform-browser/testing/src/browser_util';
import {Router} from '@angular/router';
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
  selectedItem: string;

  constructor(private router: Router) {
    this.selectedItem = undefined;
  }

  ngOnInit() {
    const url: string = this.router.url;
    if (url.match('/current')) {
      this.selectedItem = 'current';
    } else if (url.match('/lists')) {
      this.selectedItem = 'list';
    } else {
      this.selectedItem = 'product';
    }
  }

  toggleMenu(): void {
    this.hamburgerClass = this.hamburgerClass == '' ? 'active' : '';
    of(null).pipe(delay(500)).subscribe(() => {
      this.searchClass = this.hamburgerClass == '' ? 'hidden' : '';
    })
  }

  setSelectedItem(selectedItem: string): void {
    this.selectedItem = selectedItem;
  }

}
