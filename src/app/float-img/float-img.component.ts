import { ViewChild, Component, OnInit, AfterViewInit } from '@angular/core';
declare var jQuery:any;

@Component({
  selector: 'float-img',
  templateUrl: './float-img.component.html',
  styleUrls: ['./float-img.component.css']
})
export class FloatImgComponent implements OnInit, AfterViewInit {
  @ViewChild('resizableDiv') resizableDiv;
  
  images = [ '1.png' ];

  ngOnInit() {

  }

  ngAfterViewInit() {
    jQuery(this.resizableDiv.nativeElement).resizable();
  }
  
  addRandomImg() {
    this.images.push(Math.floor(Math.random()*29+1)+'.png');
  }
  
  popImg() {
    this.images.pop();
  }

}
