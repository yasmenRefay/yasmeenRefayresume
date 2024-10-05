import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const toggleButton = document.querySelector('[data-collapse-toggle="navbar-default"]');
      const navbar = document.getElementById('navbar-default');
      const navbarLinks = document.querySelectorAll('a')


      if (toggleButton && navbar) {
        toggleButton.addEventListener('click', () => {
          navbar.classList.toggle('hidden');
          navbar.classList.toggle('block');
        });
      }

      navbarLinks.forEach(link => {
        link.addEventListener('click' , () => {
          navbar?.classList.add('hidden');
          navbar?.classList.remove('block');
        })
      });



    }
  }
}



