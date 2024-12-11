import { Component } from '@angular/core';
import { user } from '../../../data/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [],
  templateUrl: './works.component.html',
  styleUrl: './works.component.scss'
})
export class WorksComponent {

  constructor(private router: Router) { }

  navigateToDetailsPageBooking() {
    this.router.navigate(['/bookingWebsite'])
  }

  navigateToDetailsPageSapetrol() {
    this.router.navigate(['/sapetrolApp'])
  }


  user: any = user;

}



