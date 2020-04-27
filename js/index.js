//scroll indicator
window.onscroll = function() {myIndicator()};

function myIndicator(){
    var winScroll = document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100
    document.getElementById("progress").style.width = scrolled + "%";
}


// navigation bar
document.querySelectorAll('myList') = ".nav-item";


// const indicator = document.querySelector('.nav-indicator');
// const items = document,querySelectorAll('nav-item');

// function handleIndicator(tag) {
//     items.forEach(item =>{
//         item.classlist.remove('is-active');
//         item.removeAttribute('style');
//     });
//     indicator.style.width = `${tag.offsetWidth}px`;
//     indicator.style.left = `${tag.setLeft}px`;
//     indicator.style.backgroundColor = tag.getAttribute('active-color');

//     tag.classlist.add(`is-active`);
//     tag.style.color = tag.getAttribute('active-color');

// }

// items.forEach((item, index)=>{
//     item.addEventListener('click',tab => {
//         handleIndicator(tab.target);});
//         item.classlist.contains('is-active') && handleIndicator(item);
//     });





