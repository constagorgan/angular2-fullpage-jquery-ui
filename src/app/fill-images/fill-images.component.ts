import { ViewChild, Component, OnInit } from '@angular/core';
import { ImageModel } from '../models/image.model';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise'

declare var jQuery:any;

@Component({
  selector: 'fill-images',
  templateUrl: './fill-images.component.html',
  styleUrls: ['./fill-images.component.css']
})
export class FillImagesComponent implements OnInit {
  @ViewChild('horizontalResizableDiv') horizontalResizableDiv;
  
  constructor(private http: Http) {
    
  }
  images = [];
  minWidth = 64;
  minHeight = 64;

  ngOnInit() {
    jQuery(this.horizontalResizableDiv.nativeElement).resizable({ handles: 'e' });
  }

  addImg(imageName) {
    
//    this.http.get(`/assets/img/filling_imgs/${imageName}`).toPromise().then(response => {
//      this.images.push(response.arrayBuffer());
//    });
    this.images.push(imageName)
  }
  removeImg(imageName) {
    this.removeItem(this.images, imageName);
  }
  
  orderByFileSize() {
    jQuery('.filling_img_container').find('img').each(function() {
      
    })
  }
  orderByImgArea() {
    jQuery('.filling_img_container').find('img').each(function() {
      var area = parseInt(jQuery(this).innerWidth) * parseInt(jQuery(this).innerHeight)
      console.log(area)
    })
  }
  takeSmallestHeight() {
    
  }
  takeBiggestHeight() {
    
  }
   
  removeItem(imageArray, item) {
    var index = imageArray.indexOf(item);
    if(index >= 0) {
      imageArray.splice(index, 1);
    }
  }
  
  // Blurs Bootstrap button after click
  deselectBtn() {
    jQuery('.btn').blur();
  }
   
}
