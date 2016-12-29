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
  containerCellWidth = 100
  
  readonly elementWidth = 97
  readonly containerSidePadding = 29

  // Usage of jQuery-ui resizable function
  ngOnInit() {
    jQuery(this.resizableDivSecond.nativeElement).resizable()
  }
  // The most efficient way to bind a resize listener on #floating_img_container_resizable_second element
  ngAfterViewInit() {
    let self = this
    let observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutationRecord) {
        self.doTheMath()
      })    
    })
    let target = document.getElementById('floating_img_container_resizable_second');
    observer.observe(target, { attributes : true, attributeFilter : ['style'] })
  }
  
  // Adds random image when "+ ADD IMAGE" button is clicked
  addRandomImg() {
    // Add a random image to the "images" array
    this.images.push(Math.floor(Math.random() * 29 + 1) + '.png')
    this.doTheMath()
  }
  // Takes out the last added image when "- REMOVE IMAGE" button is clicked
  popImg() {
    // "Pop" comes from "Popeye" that comes in angry when the button is pressed, and kicks out the last added element in the array (after it eats its spinach of course)
    this.images.pop()
    this.doTheMath()
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
    let totalWidthOfImagesContainer = $('.floating_img_container_second').width()
    let spaceOccupiedByImages = this.images.length * this.elementWidth + this.containerSidePadding
    // console.log('Space occupied by the images: ' + spaceOccupiedByImages)
    let floorOfTotalWidthOfImagesContainer = (Math.floor(totalWidthOfImagesContainer / this.elementWidth) * this.elementWidth) - 2
    // Mathemagic
    let noOfRowsRequired = Math.ceil(spaceOccupiedByImages / floorOfTotalWidthOfImagesContainer)
    // console.log('Number of rows required: ' + noOfRowsRequired)
    return noOfRowsRequired
  }
   
  computeWidthForCellContainer() {
    let totalWidthOfImagesContainer = $('.floating_img_container_second').width()
    let divisionFactor = Math.floor(totalWidthOfImagesContainer / this.elementWidth)
//    let divisionFactor = totalWidthOfImagesContainer / this.elementWidth
    if(this.images.length >= divisionFactor) {
      this.containerCellWidth = 100 / divisionFactor
    } else {
      this.containerCellWidth = 100 / this.images.length
    }
  }

  doTheMath() {
    this.computeContainerMinHeight()
    this.computeWidthForCellContainer()
  }
   
  // Blurs Bootstrap button after click
  deselectBtn() {
    jQuery('.btn').blur()
  }

}
