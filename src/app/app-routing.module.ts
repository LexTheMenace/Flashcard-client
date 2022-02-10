import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ManageDeckComponent } from './manage-deck/manage-deck.component';
import { EditDeckComponent } from './edit-deck/edit-deck.component';
import { StudyModeComponent } from './study-mode/study-mode.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'manage', component: ManageDeckComponent},
  {path: 'manage/add', component: EditDeckComponent},
  {path: 'manage/:deck', component: EditDeckComponent},
  {path: 'study/:name', component: StudyModeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
