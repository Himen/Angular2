import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './my-dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';

import { WikiComponent } from './wikipedia/wikipedia.component';
import { WikiSmartComponent } from './wikipedia/wikipedia-smart.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'heroes', component: HeroesComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'wiki', component: WikiComponent },
    { path: 'wikismart', component: WikiSmartComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
