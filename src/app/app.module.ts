import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './study-mode/card/card.component';
import { ManageDeckComponent } from './manage-deck/manage-deck.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StudyModeComponent } from './study-mode/study-mode.component';
import { HomeComponent } from './home/home.component';
import { EditDeckComponent } from './edit-deck/edit-deck.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeckListItemComponent } from './shared/deck-list-item/deck-list-item.component';
import { DeckEditItemComponent } from './shared/deck-edit-item/deck-edit-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ManageDeckComponent,
    NavbarComponent,
    StudyModeComponent,
    HomeComponent,
    EditDeckComponent,
    DeckListItemComponent,
    DeckEditItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
