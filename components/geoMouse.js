onmousemove = (e) => {
  windowWidth = window.innerWidth
  windowHeight = window.innerHeight;

  mouseX = Math.round(e.pageX / windowWidth * 100);
  mouseY = Math.round(e.pageY / windowHeight * 100);

  document.querySelector(".background").style.background = `radial-gradient(at ${mouseX}% ${mouseY}%, ${libraryColors()}`

  iconeX = Math.round(e.pageX / windowWidth * 30);
  iconeY = Math.round(e.pageY / windowHeight * 30);

  document.querySelector(".image1").style.transform = `translateX(${iconeX}px) translateY(${iconeY}px)`
  document.querySelector(".image2").style.transform = `translateX(${30 - iconeX}px) translateY(${30 - iconeY}px)`
  document.querySelector(".image3").style.transform = `translateX(${iconeY}px) translateY(${iconeX}px)`
  document.querySelector(".image4").style.transform = `translateX(${30 - iconeY}px) translateY(${30 - iconeX}px)`
}