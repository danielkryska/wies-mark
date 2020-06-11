import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { SettingsComponent } from './settings.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: SettingsComponent },
  { path: 'edytuj-profil', component: EditProfileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {}
