import { Component, inject } from '@angular/core';
// import { FlowbiteService } from '../../core/services/flowbit.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  // constructor(private _FlowbiteService:FlowbiteService){}

  // ngOnInit(): void {
  //   this._FlowbiteService.loadFlowbite(()=>{})
  // }

  ngOnInit(): void {
    const toggleButton = document.querySelector('[data-collapse-toggle="navbar-default"]');
    const navbar = document.getElementById('navbar-default');

    if (toggleButton && navbar) {
      toggleButton.addEventListener('click', () => {
        navbar.classList.toggle('hidden');
        navbar.classList.toggle('block');
      });
    }
  }


}
