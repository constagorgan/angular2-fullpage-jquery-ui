import { ViewChild, Component, OnInit } from '@angular/core';
declare var jQuery:any;

@Component({
  selector: 'fill-images',
  templateUrl: './fill-images.component.html',
  styleUrls: ['./fill-images.component.css']
})
export class FillImagesComponent implements OnInit {
  @ViewChild('horizontalResizableDiv') horizontalResizableDiv;
  
  images = [ '1.png' ];
  minWidth = 64;
  minHeight = 64;

  ngOnInit() {
    jQuery(this.horizontalResizableDiv.nativeElement).resizable({ handles: 'e' });
  }

}
