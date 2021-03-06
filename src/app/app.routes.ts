
import { RouterModule, Routes } from '@angular/router';


import {
    AboutComponent,
    PortafolioComponent,
    PageComponent
 } from './components/index.paginas';


const app_routes: Routes = [

    { path: 'home', component:   PortafolioComponent },
    { path: 'about', component:  AboutComponent  },
    { path: 'page', component:  PageComponent  },
    { path: '**', pathMatch:'full', redirectTo: 'home'}


];
export const app_routing = RouterModule.forRoot(app_routes, {useHash:true});

