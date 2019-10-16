import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatCardModule } from '@angular/material';
// import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'
import { ItemEditModalComponent } from './item-edit-modal/item-edit-modal.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { ItemComponent } from './item/item.component';
import { MatVideoModule } from 'mat-video';
import { PlayerComponent } from './player/player.component';
import { ItemsComponent } from './items/items.component';
import {DataService} from './data.service';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    ItemEditModalComponent,
    ItemComponent,
    MainNavComponent,
    ItemComponent,
    PlayerComponent,
    ItemsComponent
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    MatCardModule,
    LayoutModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatVideoModule,
    AppRoutingModule,
    MatDialogModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  entryComponents:[ItemEditModalComponent]
})
export class AppModule { }
