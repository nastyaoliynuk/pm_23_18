document.getElementById("btn1").addEventListener("click", function() {
    var pageContent = document.getElementById("page-content");
    
    if (pageContent.style.display === "none" || pageContent.style.display === "") {
        pageContent.style.display = "block";
    } else {
        pageContent.style.display = "none";
    }
});
