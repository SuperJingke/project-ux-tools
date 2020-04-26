//scroll indicator
window.onscroll = function() {myIndicator()};

function myIndicator(){
    var winScroll = document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100
    document.getElementById("progress").style.width = scrolled + "%";
}

