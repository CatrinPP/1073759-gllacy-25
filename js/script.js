var background = document.querySelector(".background-wrapper");
var sliderBtn1 = document.querySelector(".slider1-control");
var sliderBtn2 = document.querySelector(".slider2-control");
var sliderBtn3 = document.querySelector(".slider3-control");
var slider1 = document.querySelector(".slider1");
var slider2 = document.querySelector(".slider2");
var slider3 = document.querySelector(".slider3");

sliderBtn2.addEventListener("click", function(evt){
  sliderBtn2.classList.add("is-active");
  sliderBtn1.classList.remove("is-active");
  sliderBtn3.classList.remove("is-active");
  background.classList.add("blue-background");
  background.classList.remove("green-background");
  background.classList.remove("rose-background");
  slider1.classList.remove("slider-show");
  slider3.classList.remove("slider-show");
  slider2.classList.add("slider-show");
});

sliderBtn3.addEventListener("click", function(evt){
  sliderBtn3.classList.add("is-active");
  sliderBtn2.classList.remove("is-active");
  sliderBtn1.classList.remove("is-active");
  background.classList.add("rose-background");
  background.classList.remove("blue-background");
  background.classList.remove("green-background");
  slider2.classList.remove("slider-show");
  slider1.classList.remove("slider-show");
  slider3.classList.add("slider-show");
});

sliderBtn1.addEventListener("click", function(evt){
  sliderBtn1.classList.add("is-active");
  sliderBtn2.classList.remove("is-active");
  sliderBtn3.classList.remove("is-active");
  background.classList.add("green-background");
  background.classList.remove("blue-background");
  background.classList.remove("rose-background");
  slider2.classList.remove("slider-show");
  slider3.classList.remove("slider-show");
  slider1.classList.add("slider-show");
});
