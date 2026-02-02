import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Notfound } from './shared/notfound/notfound';
import { Blog } from './pages/blog/blog';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: "home", component: Home },
    {path: "blog", component: Blog },
    {path: "about", component: Home },
    {path: '**', component: Notfound}
];
