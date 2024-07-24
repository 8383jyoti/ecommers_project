 function backTop() {
    console.log("hello");
    window.scrollTo({ top: 0, behavior: "smooth" });
  
}



let btn = document.getElementById("scroll_top");
window.onscroll = function show() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};