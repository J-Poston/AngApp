import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BossDetailsComponent } from './boss-monsters/boss-details/boss-details.component';
import { BossListComponent } from './boss-monsters/boss-list/boss-list.component';
import { HomeComponent } from './core/home/home.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { GreaterComponent } from './greater/greater.component';
import { CharacterClassListComponent } from './character-class/character-class-list/character-class-list.component';

const routes: Routes = [
  { path: 'home-component', component: HomeComponent },
  { path: 'boss-list', component: BossListComponent},
  { path: 'greater', component: GreaterComponent},
  { path: 'boss-details/:index', component: BossDetailsComponent},
  { path: 'character-class-list', component: CharacterClassListComponent},
  { path: '', redirectTo: '/home-component', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }

