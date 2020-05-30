import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';
import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent {
  public images: string[] = [];
  private _imagePickerOptions: ImagePickerOptions = {
    maximumImagesCount: 3,
    width: 300,
    height: 300,
    allow_video: false,
    quality: 50,
  };

  constructor(private _camera: Camera, private _imagePicker: ImagePicker, private _file: File) {}

  async pickImages() {
    const loadedImages = await this._imagePicker.getPictures(this._imagePickerOptions);
    for (const loadedImage of loadedImages) {
      const nameIndex = loadedImage.lastIndexOf('/') + 1;
      const name = loadedImage.substring(nameIndex);
      const path = loadedImage.substring(0, nameIndex);

      const hash = await this._file.readAsDataURL(path, name);
      this.images.push(hash);
    }
  }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this._camera.DestinationType.DATA_URL,
      encodingType: this._camera.EncodingType.JPEG,
      mediaType: this._camera.MediaType.PICTURE,
    };

    this._camera.getPicture(options).then(
      (imageData) => {
        // Do something with the new photo
      },
      (err) => {
        // Handle error
        console.log('Camera issue: ' + err);
      }
    );
  }
}
