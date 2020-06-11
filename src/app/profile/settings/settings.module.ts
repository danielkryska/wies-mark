import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@NgModule({
  declarations: [SettingsComponent, EditProfileComponent],
  imports: [CommonModule, SettingsRoutingModule, IonicModule, ReactiveFormsModule, FormsModule]
})
export class SettingsModule {}
