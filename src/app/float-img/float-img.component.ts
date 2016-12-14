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
  minWidth = 275;
  minHeight = 130;

  ngOnInit() {

  }

  ngAfterViewInit() {
    jQuery(this.resizableDiv.nativeElement).resizable();
  }
  
  addRandomImg() {
    this.images.push(Math.floor(Math.random()*29+1)+'.png');    
    this.minWidth = (this.images.length > 1) && (this.images.length <= 6) ? this.minWidth + 100 : this.minWidth;
    let noOfRows = this.computeNoOfRows(6);
    this.minHeight = noOfRows > 1 ? noOfRows * 115 + 15 : 130;
  }
  
  popImg() {
    this.images.pop();
    this.minWidth = ((this.images.length >= 1) && (this.images.length < 6)) ? this.minWidth - 100 : this.minWidth;
    let noOfRows = this.computeNoOfRows(6);
    this.minHeight = (noOfRows > 1) ? noOfRows * 115 + 15 : 130;
  }
  
  private computeNoOfRows(elemsOnRow) {
    return Math.ceil(this.images.length / elemsOnRow);
  }

}
