import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { PlayerComponent } from './player/player.component';
import { ItemsComponent} from './items/items.component';

const routes: Routes = [
  { path: 'items', component: ItemsComponent },
  { path: 'youtube',component: PlayerComponent}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
