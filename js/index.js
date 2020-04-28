
 //scroll indicator
window.onscroll = function() {myIndicator()};

function myIndicator(){
    var winScroll = document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById(`progress`).style.width = scrolled + `%`;
}

// Make the progress increase at a steady rate
var progress_element = document.getElementById(`progress`);
function stepProgress(){
    progress_element.value += 1;
    if (progress_element.value < 100){
        setTimeout(stepProgress, 100);
    }
};

// navigation bar

function myFunction(){
    document.getElementById(`myList`).className = `nav-item`;
}

//make the navigation menu fixed

window.addEventListener('scroll', event => {
    // As an example, check if you've passed a certain point...
    if (window.scrollY > 0) {
      document.querySelector('.nav').style.position = 'fixed'
    }
  })


//create an infiniteContent function 
const infiniteContent = () => {

    // find the section with the ID of element
    const $element = document.querySelector(`#element`);

    if ($element.getBoundingClientRect().top < window.innerHeight) {
    
        //create an H2 heading
        const $createHeading = document.createElement(`H2`);

        //Add text to the H2 heading
        $createHeading.textContent = `More content coming soon!`;

        //create the h2 as a child of the $element section
        $element.appendChild($createHeading);
    
		//create a new paragraph
		const $createParagraph = document.createElement(`p`);

		//add text to the paragraph
		$createParagraph.textContent = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, quos impedit fugit velit magni quidem, qui molestiae, aliquam sequi nobis repellat null doloremque`;

		//create the paragraph as a child of the $element section
        $element.appendChild($createParagraph);

        //create a new img element
        const $createImage =document.createElement(`img`);
        
        //add an image to that img element
        $createImage.setAttribute(`src`,`https://via.placeholder.com/1600x900/000000/FFFFFF/?text=More+content+coming+soon`);

        //create the img as a child of the $element section
        $element.appendChild($createImage)
    }
}
 
//run the event
window.addEventListener(`scroll`, infiniteContent)



