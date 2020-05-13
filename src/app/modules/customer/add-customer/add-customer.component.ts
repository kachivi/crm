import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {debounceTime, distinctUntilChanged, startWith, tap, delay} from 'rxjs/operators';
import {merge, fromEvent} from "rxjs";


//import { CropperComponent } from '../../../shared/components/cropper/cropper.component';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  uploadedImageURL: any;

  constructor() { 
  }

  ngOnInit(): void {
    this.uploadedImageURL = "assets/kachi.jpg";//default image
  }

  onFileComplete(data: any) {
    console.log(data.link); // We just print out data bubbled up from event emitter.
    this.uploadedImageURL = data.link;
  }
}
