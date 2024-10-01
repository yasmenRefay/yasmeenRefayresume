import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
// import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { WorksComponent } from './components/works/works.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent,title:'Home'},
  {path:'about',component:AboutComponent,title:'About'},
  // {path:'blog',component:BlogComponent,title:'Home'},
  {path:'contact',component:ContactComponent,title:'Contact'},
  {path:'services',component:ServicesComponent,title:'Services'},
  {path:'projects',component:WorksComponent,title:'Services'},



  {path:'**',component:NotfoundComponent}

];
