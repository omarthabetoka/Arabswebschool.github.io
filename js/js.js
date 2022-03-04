var lastScrollTop = 0;
navbar = document.getElementById("navbar");

window.addEventListener("scroll", function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop){
        navbar.style.top="-52px";
    } else {
        navbar.style.top="0";
    }
        lastScrollTop = scrollTop;
})


function book(){
    let book = document.getElementById("book");
    book.classList.toggle("book");
}
function search_op(){
    let search = document.getElementById("search");
    let searchBox = document.getElementById("searchBox");
    search.classList.toggle("search");
    searchBox.classList.toggle("searchBox");
}