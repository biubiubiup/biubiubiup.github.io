window.onload = function() {
    var sideNav = document.querySelector(".side-nav"),
        sideNavList = sideNav.querySelectorAll("li"),
        pageNum = document.querySelectorAll(".page-num");
    
    for(var i=0; i<sideNavList.length; i++) {
        (function(i) {
            sideNavList[i].onmouseover = function(event) {
                pageNum[i].style.color = "#F47920";
            }
            
            sideNavList[i].onmouseout = function(event) {
                pageNum[i].style.color = "";
            }
        })(i);
    }
    
    
    
}