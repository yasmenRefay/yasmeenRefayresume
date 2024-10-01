import { Component, inject } from '@angular/core';
import { FlowbiteService } from '../../core/services/flowbit.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(private _FlowbiteService:FlowbiteService){}

  ngOnInit(): void {
    this._FlowbiteService.loadFlowbite(()=>{})
  }


}
