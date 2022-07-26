onmousemove = (e) => {
  windowWidth = window.innerWidth
  windowHeight = window.innerHeight;

  mouseX = Math.round(e.pageX / windowWidth * 100);
  mouseY = Math.round(e.pageY / windowHeight * 100);
  document.getElementsByClassName("background").style
  document.getElementsByClassName("background")[0].style.background = `radial-gradient(at ${mouseX}% ${mouseY}%, #91fbfb, #61dbfb`
  //document.getElementsByClassName("background")[0].style.background = `radial-gradient(at ${mouseX}% ${mouseY}%, #34495e, #41b883`
}