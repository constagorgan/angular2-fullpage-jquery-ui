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

  // Usage of jQuery-ui resizable function
  ngOnInit() {
    jQuery(this.resizableDiv.nativeElement).resizable();
  }
  // This is only for testing purposes
  ngAfterViewInit() {
  // jQuery(this.resizableDiv.nativeElement).resizable();
  }
  
  // Adds random image when "+ ADD IMAGE" button is clicked
  addRandomImg() {
    // Add a random image to the "images" array
    this.images.push(Math.floor(Math.random() * 29 + 1) + '.png');
    // This condition checks your window width in order to compute the resizable limits in regard to it
    if (window.innerWidth < 768) {
      // The 2 lines below ↓ compute the minimum height for the resizable div
      let noOfRows = this.computeNoOfRows(2);
      this.minHeight = noOfRows > 1 ? noOfRows * 115 + 15 : 130;
    } else {
      // This ↓ decides the minimum width for the resizable div (this is optional for "< 768" devices, but mandatory for small, medium & large screens)
      this.minWidth = (this.images.length > 1) && (this.images.length <= 6) ? this.minWidth + 100 : this.minWidth;
      // The 2 lines below ↓ compute the minimum height for the resizable div
      let noOfRows = this.computeNoOfRows(6);
      this.minHeight = noOfRows > 1 ? noOfRows * 115 + 15 : 130;
    }
  }  
  // Takes out the last added image when "- REMOVE IMAGE" button is clicked
  popImg() {
    // "Pop" comes from "Popeye" that comes in angry when the button is pressed, and kicks out the last added element in the array (after it eats its spinach of course)
    this.images.pop();
    // This condition checks your window width in order to compute the resizable limits in regard to it
    if (window.innerWidth < 768) {
      // The 2 lines below ↓ compute the minimum height for the resizable div
      let noOfRows = this.computeNoOfRows(2);
      this.minHeight = (noOfRows > 1) ? noOfRows * 115 + 15 : 130;
    } else {
      // This ↓ decides the minimum width for the resizable div
      this.minWidth = ((this.images.length >= 1) && (this.images.length < 6)) ? this.minWidth - 100 : this.minWidth;
      // The 2 lines below ↓ compute the minimum height for the resizable div
      let noOfRows = this.computeNoOfRows(6);
      this.minHeight = (noOfRows > 1) ? noOfRows * 115 + 15 : 130;
    }
  }
  // For the sake of simplicity
  private computeNoOfRows(elemsOnRow) {
    return Math.ceil(this.images.length / elemsOnRow);
  }
  
  // Blurs Bootstrap button after click
  deselectBtn() {
    jQuery('.btn').blur();
  }

}
