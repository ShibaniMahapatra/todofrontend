import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatCardModule,MatFormFieldModule ,MatInputModule} from '@angular/material';
// import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'

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
import { DialogpageComponent } from './dialogpage/dialogpage.component';
import { DialogComponent } from './dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';

  
@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    MainNavComponent,
    ItemComponent,
    PlayerComponent,
    ItemsComponent,
    DialogpageComponent,
    DialogComponent,
    
  ],
  entryComponents: [DialogComponent],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    MatCardModule,
    MatInputModule,
    LayoutModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatVideoModule,
    AppRoutingModule,
    MatDialogModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
