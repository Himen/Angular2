import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './my-dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';

import { WikiComponent } from './wikipedia/wikipedia.component';
import { WikiSmartComponent } from './wikipedia/wikipedia-smart.component';

import { DragulaTestComponent } from './dragulatest/dragulatest.component';
import { SecondBagComponent } from './dragulatest/second-bag.component';

import { DnDComponent } from './ng2DnD/ng2DnD.component';

import { BeThereGridComponent } from './bethere-grid/bethere-grid.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'heroes', component: HeroesComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'wiki', component: WikiComponent },
    { path: 'wikismart', component: WikiSmartComponent },
    { path: 'dragula', component: DragulaTestComponent },
    { path: 'dragulas/secondbag', component: SecondBagComponent },
    { path: 'dnd', component: DnDComponent },
    { path: 'betheregrid', component: BeThereGridComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
