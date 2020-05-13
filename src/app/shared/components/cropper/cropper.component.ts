import { Component, OnInit, ViewChild, Input, ElementRef, OnChanges } from '@angular/core';
import Cropper from "cropperjs";

@Component({
  selector: 'image-cropper',
  templateUrl: './cropper.component.html',
  styleUrls: ['./cropper.component.scss']
})
export class CropperComponent implements OnInit, OnChanges  {

    @ViewChild("image", { static: false })
    public imageElement: ElementRef;

    @Input("src")
    public imageSource: string;

    public imageDestination: string;
    private cropper: Cropper;

    public constructor() {
        this.imageDestination = "";
    }
    crop(){
      this.imageSource = "assets/s1.png";
      this.cropper.replace(this.imageSource, false);
    }

    ngOnChanges() {
      this.ngAfterViewInit();
    }

    public ngAfterViewInit() {
       this.newCropper();
    }
    public uploadCroppedImage(){

    }
    public newCropper(){
//      if(this.cropper){
//        this.cropper.destroy();
//      }
      this.cropper = new Cropper(this.imageElement.nativeElement, {
        zoomable: false,
        scalable: false,
        aspectRatio: 1,
        crop: () => {
            const canvas = this.cropper.getCroppedCanvas();
            this.imageDestination = canvas.toDataURL("image/png");
        }
      });
//      this.cropper.enable();
//      this.cropper.crop();
    }
    public ngOnInit() { 
      //this.imageSource = "assets/s1.png";
    }

}