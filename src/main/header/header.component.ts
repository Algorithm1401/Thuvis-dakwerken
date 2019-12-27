import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.css', './header-phone.component.css'],
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {
  public href = '';
  constructor(private router: Router) {}
  ngOnInit() {
    this.href = this.router.url;
    let selectedButton;
    let index = 0;
    switch (this.href) {
      case '/start':
        index = 0;
        break;
      case '/prijzen':
        index = 1;
        break;
      case '/projecten':
        index = 2;
        break;
      case '/contact':
        index = 3;
        break;
    }
    selectedButton = document.getElementsByClassName('draw-border').item(index);
    selectedButton.style.color = '#FF650A';
    selectedButton.style.boxShadow = 'inset 0 0 0 4px #FF650A';
    const x = document.getElementById('routing-buttons');
    document.getElementsByClassName('fa-bars').item(0).addEventListener('click', () => {
      if (x.style.display === 'block') {
        x.style.display = 'none';
      } else {
        x.style.display = 'block';
      }
    });
  }
}
