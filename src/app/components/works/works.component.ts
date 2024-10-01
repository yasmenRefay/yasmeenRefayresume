import { Component } from '@angular/core';
import { user } from '../../../data/user';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [],
  templateUrl: './works.component.html',
  styleUrl: './works.component.scss'
})
export class WorksComponent {


  user: any = user;
  
}



