import { AddProductRoutingModule } from './add-product-routing.module';
import { AddProductComponent } from './add-product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Camera } from '@ionic-native/camera/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { File } from '@ionic-native/file/ngx';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [AddProductComponent],
  imports: [CommonModule, IonicModule, AddProductRoutingModule],
  providers: [Camera, ImagePicker, File],
})
export class AddProductModule {}
