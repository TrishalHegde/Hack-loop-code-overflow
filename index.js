document.getElementById("startButton").addEventListener("click",function(){
    document.getElementById("nextPage").scrollIntoView({behavior:"smooth"});
});
document.getElementById("next").addEventListener("click",function(){
    window.location.href="index2.html";}
);
document.getElementById("page").addEventListener("click",function(){
   window.location.href="index1.html";
});

