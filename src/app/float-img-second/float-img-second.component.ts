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
  // The most efficient way to bind a resize listener on #floating_img_container_resizable_second element
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
   
  // This is mathematical wizardry. It's a spell that magically computes the needed min-height for the images's container
  computeContainerMinHeight() {
    this.minHeight = this.getNoOfRowsRequired() * 115 + 15
  }
  
  // Returns number of rows required to fit the images correctly
  getNoOfRowsRequired() {
    var elementWidth = 97
    var containerSidePadding = 29
    var spaceOccupiedByImages = this.images.length * elementWidth + containerSidePadding
    // console.log('Space occupied by the images: ' + spaceOccupiedByImages)
    var totalWidthOfImagesContainer = $('.floating_img_container_second').width()
    var floorOfTotalWidthOfImagesContainer = (Math.floor(totalWidthOfImagesContainer / elementWidth) * elementWidth) - 2
    // Mathemagic
    var noOfRowsRequired = Math.ceil(spaceOccupiedByImages / floorOfTotalWidthOfImagesContainer)
    // console.log('Number of rows required: ' + noOfRowsRequired)
    return noOfRowsRequired
  }

  // Blurs Bootstrap button after click
  deselectBtn() {
    jQuery('.btn').blur()
  }

}
