import { ViewChild, Component, OnInit } from '@angular/core';
import { ImageModel } from '../models/image.model';
declare var jQuery:any;

@Component({
  selector: 'fill-images',
  templateUrl: './fill-images.component.html',
  styleUrls: ['./fill-images.component.css']
})
export class FillImagesComponent implements OnInit {
  @ViewChild('horizontalResizableDiv') horizontalResizableDiv;
  
  images = [];
  minWidth = 64;
  minHeight = 64;

  ngOnInit() {
    jQuery(this.horizontalResizableDiv.nativeElement).resizable({ handles: 'e' });
  }

  addImg(imageName) {
    this.images.push(imageName);
  }
  removeImg(imageName) {
    this.removeItem(this.images, imageName);
  }
  
  orderByFileSize() {
    
  }
  orderByImgArea() {
    
  }
  takeSmallestHeight() {
    
  }
  takeBiggestHeight() {
    
  }
   
  removeItem(imageArray, item) {
    var index = imageArray.indexOf(item);
    imageArray.splice(index, 1);
  }
  
  // Blurs Bootstrap button after click
  deselectBtn() {
    jQuery('.btn').blur();
  }
   
}
