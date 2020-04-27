
 //scroll indicator
window.onscroll = function() {myIndicator()};

function myIndicator(){
    var winScroll = document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progress").style.width = scrolled + "%";
}


// navigation bar

function myFunction(){
    document.getElementById("myList").className = "nav-item";
}

// //make the sticky nav bar
// //Execute myFunction


// var navbar = document.getElementsById("navbar");

// //Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction(){
//     if (window.pageXOffset >= sticky){
//         navbar.classList.add("sticky-top")
//     } else {
//         navbar.classList.remove("sticky-top")
//     }






//create an infiniteContent function 

const infiniteContent = () => {

    // find the section with the ID of element
    const $element = document.querySelector('#element');

    if ($element.getBoundingClientRect().top < window.innerHeight) {
    
        //create an H2 heading
        const $createHeading = document.createElement('H2');

        //Add text to the H2 heading
        $createHeading.textContent = 'More content coming soon!';

        //create the h2 as a child of the $element section
        $element.appendChild($createHeading);
    
		//create a new paragraph
		const $createParagraph = document.createElement('p');

		//add text to the paragraph
		$createParagraph.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, quos impedit fugit velit magni quidem, qui molestiae, aliquam sequi nobis repellat null doloremque';

		//create the paragraph as a child of the $element section
        $element.appendChild($createParagraph);

        //create a new img element
        const $createImage =document.createElement('img');
        
        //add an image to that img element
        $createImage.setAttribute('src','https://via.placeholder.com/1600x900');

        //create the img as a child of the $element section
        $element.appendChild($createImage)
    }
}
 
//run the event
window.addEventListener('scroll', infiniteContent)
