import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

@HostListener('document:click', ['$event'])
onClick(event:MouseEvent):void {
  const newFavicon = 'assets/favicon1.ico';
  const link:any = document.querySelector('link[rel="icon"]');
  link.href = newFavicon;
}

}
