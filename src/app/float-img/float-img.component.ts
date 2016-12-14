import { ViewChild, Component, OnInit, AfterViewInit } from '@angular/core';
declare var jQuery:any;

@Component({
  selector: 'float-img',
  templateUrl: './float-img.component.html',
  styleUrls: ['./float-img.component.css']
})
export class FloatImgComponent implements OnInit, AfterViewInit {
  @ViewChild('resizableDiv') resizableDiv;

  ngOnInit() {

  }

  ngAfterViewInit() {
    jQuery(this.resizableDiv.nativeElement).resizable();
  }

}
