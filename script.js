
// set listeners for scroll behaviour
window.addEventListener("load", setScrollBehaviour);
window.addEventListener("scroll", setScrollBehaviour);
window.addEventListener("resize", setScrollBehaviour);

window.addEventListener("scroll", setMyStoryScroll);

// add on mouseover show description and button with link for the hero cards

function setScrollBehaviour() {
    
  // calculate the percent of height scrolled
  const htmlElement = document.documentElement;
  const scrollFactor =
    htmlElement.scrollTop / htmlElement.clientHeight * 100;

  setBackgroundOpacity(scrollFactor, document.getElementById("hero-right"));
  setBackgroundOpacity(scrollFactor, document.getElementById("hero-left"));

  setBackgroundOpacity(scrollFactor - 100, document.getElementById("story-right"));
  setBackgroundOpacity(scrollFactor - 100, document.getElementById("story-left"));

  moveHeroCards(scrollFactor);

  moveStoryRight(scrollFactor - 100);

  if (scrollFactor > 100) {
    moveProjectOne(scrollFactor);  
  }

}

function setHeroScroll() {

  const element = document.getElementById("hero");
  const scrollFactor = element.scrollTop / element.clientHeight * 100;
  console.log(element.scrollTop);
  // setBackgroundOpacity(scrollFactor, element);

}

function setMyStoryScroll() {

  const myStory = document.getElementById("my-story");
  const scrollFactor = myStory.scrollTop / myStory.clientHeight * 100;
  
  setBackgroundOpacity(scrollFactor, myStory);

}

function moveHeroCards(scrollFactor) {
  let moveY = -1 * 3 * scrollFactor;
  let moveX = 2 * scrollFactor;
  //document.getElementById("project-one-card").style.transform = `translate(${moveX}%,${moveY}%)`;
  // document.getElementById("project-one-card").style.transform = `translateX(${moveX}%)`;

  let rotation = moveX % 360;
  document.getElementById("project-two-card").style.transform = `rotate(${moveX}deg)`;
  document.getElementById("project-one-card").style.transform = `rotate(${moveX}deg)`;

  document.getElementById("hero-right").style.transform = `translateX(${moveX}%)`;
}

function moveStoryRight(scrollFactor) {

  let moveX = 2 * scrollFactor;

  document.getElementById("story-right").style.transform = `translateX(${moveX}%)`;

}

function moveProjectOne(scrollFactor) {

  // calculate the X-axis translation (quadratic)
  let moveX = 1.5 * Math.abs(scrollFactor - 200);
  //let moveXQ = 1000 + (-0.5 * Math.pow(scrollFactor - 150,2));

  // set the X-axis translation for Project One
  document.getElementById("project-one").style.transform = `translateX(${moveX}%)`;

}

function moveProjectTwo(scrollFactor) {

  // calculate the X-axis translation
  let moveX = 0 + 1 * 5 * scrollFactor;

  // set the X-axis translation for Project Two
  document.getElementById("project-two").style.transform = `translateX(${moveX}%)`;

}

function setBackgroundOpacity(scrollFactor, element) {
  
  // calculate the opacity based on the scroll factor
  let opacity = 1 - 0.005 * Math.min(scrollFactor, 30) * 100 / 30;
  
  element.style.opacity = opacity;

}

function scrollToHome() {
  window.scrollTo(0, 0);
}

function scrollToElement(elementId) {

  const element = document.getElementById(elementId);

  const positionY = window.scrollY + element.getBoundingClientRect().top;

  window.scrollTo(0, positionY);

}
