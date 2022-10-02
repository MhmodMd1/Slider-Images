// Get Slider Items | Array.from
var sliderImages = Array.from(document.querySelectorAll(".slider-container img"))

// Get Number Of Slides 
var slidesCount = sliderImages.length 

// Set Current Slide 
var currentSlide = 1

// Slide Number Element 
var slideNumberElement = document.getElementById("slide-number")

// Previous and Next Buttons
var nextButton = document.getElementById("next")
var prevButton = document.getElementById("prev")

// Handle Click on Previous and Next Buttons
nextButton.onclick = nextSlide
prevButton.onclick = prevSlide

// Create The Main Ul Element
var paginationElement = document.createElement('ul')

// Set Id On Created Ul Element 
paginationElement.setAttribute('id','pagination-ul')

// Create List Items Based On Slides Count
for (var i = 1; i <= slidesCount;i++) {

    // Create The LI
    var paginationItem = document.createElement('li')

    // Set Custom Attribute
    paginationItem.setAttribute('data-index',i)

    // Set Item Content 
    paginationItem.appendChild(document.createTextNode(i))

    // Append Items to The Main Ul List
    paginationElement.appendChild(paginationItem)
}

// Add The Created Ul Elements To The Page
document.getElementById("indicators").appendChild(paginationElement)

// Get The New Created UL
var paginationCreatedUl = document.getElementById("pagination-ul")

// Get Pagination Items | Array.from
var paginationsBullets = Array.from(document.querySelectorAll("#pagination-ul li"))

// Loop Through All Bullets Items 
for (var i = 0; i < paginationsBullets.length;i++) {

    paginationsBullets[i].onclick = function () {

        currentSlide = parseInt(this.getAttribute('data-index'))

        theChecker()

    }

}

// Trigger The Checker Function 
theChecker()

// Next Slide Function 
function nextSlide() {

    if (nextButton.classList.contains('disabled')) {

        // Do nothing
        return false

    } else {

        currentSlide++;

        theChecker()
    }

}

// Previous Slide Function 
function prevSlide() {
    
    if (prevButton.classList.contains('disabled')) {

        // Do nothing
        return false

    } else {

        currentSlide--;

        theChecker()
    }

}

// Creat The Checker Function 
function theChecker() {

    // Set The Slide Number
    slideNumberElement.textContent = 'Slide # ' + (currentSlide) + ' of ' + (slidesCount)

    // Remove All Active Classes 
    removeAllActive()

    // Set Active Class On Current Slide
    sliderImages[currentSlide - 1].classList.add('active')

    // Set Active Class On Current Pagination Item
    paginationCreatedUl.children[currentSlide - 1].classList.add('active')

    // Check if The Current Slide is The First
    if (currentSlide == 1) {

        // Add Disabled Class on Previous Button 
        prevButton.classList.add('disabled')

    } else {

        // Remove Disabled Class From Previous Button 
        prevButton.classList.remove('disabled')

    }

    // Check if The Current Slide is The Last
    if (currentSlide == slidesCount) {

        // Add Disabled Class on Next Button 
        nextButton.classList.add('disabled')

    } else {

        // Remove Disabled Class From Next Button 
        nextButton.classList.remove('disabled')

    }
}

// Remove All Active Classes From Images And Pagination Bullets 
function removeAllActive() {

    // Loop Through Images
    sliderImages.forEach(function (img) {

        img.classList.remove('active')

    })

    // Loop Through Bullets 
    paginationsBullets.forEach(function (bullet) {

        bullet.classList.remove('active')

    })

}