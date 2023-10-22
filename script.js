
// window event listeners
window.addEventListener(
    "load",
    createStoryRightObserver
);

window.addEventListener(
    "load",
    createWorkCardObserver
);

window.addEventListener(
    "load",
    animateHandPoint
);


let options = {
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList()
};

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

  function animateHandPoint() {

    const handPoint = document.getElementById("hand-point");
    let translateArr = [1, 2, 3, 4, 50]
    let direction = true;
    let counter = 0;

    // loop animation
    setInterval( () => {
        
        // check direction
        if (counter == translateArr.length - 1) {
            direction = false;
        } else if (counter == 0) {
            direction = true;
        }

        // increment or decrement counter based on direction
        if (direction) {
            counter++;
        } else {
            counter--;
        }

        let translate = translateArr[counter];
        
        handPoint.style.transform = `translateY(${translate}%)`;
        
    }, 100);

  }
