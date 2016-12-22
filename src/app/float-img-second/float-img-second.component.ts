import { ViewChild, Component, OnInit, AfterViewInit } from '@angular/core';
declare var jQuery:any;

@Component({
  selector: 'float-img-second',
  templateUrl: './float-img-second.component.html',
  styleUrls: ['./float-img-second.component.css']
})
export class FloatImgSecondComponent implements OnInit {
  @ViewChild('resizableDivSecond') resizableDivSecond;
  
  images = [ '1.png' ]
  minWidth = 225
  minHeight = 130

  // Usage of jQuery-ui resizable function
  ngOnInit() {
    jQuery(this.resizableDivSecond.nativeElement).resizable()
  }
  // This is only for testing purposes
  ngAfterViewInit() {
    var self = this
    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutationRecord) {
        self.computeContainerMinHeight()
      })    
    })

    var target = document.getElementById('floating_img_container_resizable_second');
    observer.observe(target, { attributes : true, attributeFilter : ['style'] })
  }
  
  // Adds random image when "+ ADD IMAGE" button is clicked
  addRandomImg() {
    // Add a random image to the "images" array
    this.images.push(Math.floor(Math.random() * 29 + 1) + '.png')
    
    this.computeContainerMinHeight()
  }  
  // Takes out the last added image when "- REMOVE IMAGE" button is clicked
  popImg() {
    // "Pop" comes from "Popeye" that comes in angry when the button is pressed, and kicks out the last added element in the array (after it eats its spinach of course)
    this.images.pop()
   
    this.computeContainerMinHeight()
  }
  // For the sake of simplicity
  private computeNoOfRows(elemsOnRow) {
    return Math.ceil(this.images.length / elemsOnRow)
  }
  
  computeContainerMinHeight() {
    // This is mathematical wizardry. It's a speel that magically computes the needed min-height for the images's container
    var noOfRowsNeeded = Math.ceil((this.images.length * 97 + 29) / ($('.floating_img_container_second').width() + 31))
    this.minHeight = noOfRowsNeeded * 115 + 15
//    this.minHeight = Math.ceil((this.images.length * 97 + 30) / ($('.floating_img_container_second').width() + 31)) * 115 + 15
    
    console.log('Number of rows needed: ' + noOfRowsNeeded)
  }
   
  // Blurs Bootstrap button after click
  deselectBtn() {
    jQuery('.btn').blur()
  }
   


}
