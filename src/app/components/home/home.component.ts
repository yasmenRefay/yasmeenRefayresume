import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router, RouterOutlet } from '@angular/router';
import { Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent }
];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private router: Router) { }

  navigateToOtherPage() {
    this.router.navigate(['/about']);
  }


    onDownload() {
      const link = document.createElement('a');
      link.setAttribute('target', '_blank');
      link.setAttribute(
        'href',
        'https://drive.google.com/file/d/1p9XL2dA7TLysDpNeg43NmgtWjX1jYgUC/view'
      );
      link.setAttribute('download', `CV.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    }

  }


