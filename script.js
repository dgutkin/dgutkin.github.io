

window.addEventListener(
    "load",
    createHeroRightObserver
)

window.addEventListener(
    "load",
    createStoryRightObserver
)

window.addEventListener(
    "load",
    createWorkCardObserver
)

animateHeroRight();

let options = {
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList()
};

function createHeroRightObserver() {
    
    heroRight = document.getElementById("hero-right");
      
    let observer = new IntersectionObserver(heroRightHandler, options);
    observer.observe(heroRight);

}

function createStoryRightObserver() {

    storyRight = document.getElementById("story-right");
      
    let observer = new IntersectionObserver(storyRightHandler, options);
    
    observer.observe(storyRight);

}

function createWorkCardObserver() {

    workCardOne = document.getElementById("project-one");
    workCardTwo = document.getElementById("project-two");

    let observer = new IntersectionObserver(workCardHandler, options);

    observer.observe(workCardOne);
    observer.observe(workCardTwo);

}

function buildThresholdList() {

    let thresholds = [];
    let numSteps = 20;
  
    for (let i = 1.0; i <= numSteps; i++) {
      let ratio = i / numSteps;
      thresholds.push(ratio);
    }
  
    thresholds.push(0);
    return thresholds;

  }
  
function heroRightHandler(entries, observer) {

    entries.forEach( (entry) => {
        
        entry.target.style.opacity = entry.intersectionRatio;

        entry.target.style.transform = `translateX(${(1-entry.intersectionRatio) * 50}%)`
        
    });

}

function storyRightHandler(entries, observer) {

    entries.forEach( (entry) => {
        
        entry.target.style.opacity = entry.intersectionRatio;

        entry.target.style.transform = `translateX(${(1-entry.intersectionRatio) * 50}%)`
        
    });

}

function workCardHandler(entries, observer) {

    entries.forEach( (entry) => {
        
        entry.target.style.opacity = entry.intersectionRatio;

        entry.target.style.transform = `translateX(${(1-(entry.intersectionRatio)) * 30}%)`
        
    });

}

function scrollToHome() {

    // scroll to the top of the page
    window.scrollTo(0, 0);
  
}
  
  function scrollToElement(elementId) {
  
    // fetch the element based on the id
    const element = document.getElementById(elementId);
  
    // get the top absolute position of the element
    const positionY = window.scrollY + element.getBoundingClientRect().top;
  
    // scroll to the position
    window.scrollTo(0, positionY);
  
  }

  function animateHeroRight() {

    let large = false;
    heroRight = document.getElementById("hero-right");
    let scaleArr = [0.99, 0.993, 0.996, 1, 1.003]
    let direction = true;
    let counter = 0;

    setInterval( () => {
        
        if (counter == scaleArr.length - 1) {
            direction = false;
        } else if (counter == 0) {
            direction = true;
        }
        if (direction) {
            counter++;
        } else {
            counter--;
        }

        let scale = scaleArr[counter];

        console.log(large);
        if (large) {
            heroRight.style.transform = `scale(${scale})`;
        } else {
            heroRight.style.transform = `scale(${scale})`;
        }
    }, 100);

  }
