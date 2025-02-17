const countersEl = document.querySelectorAll(".counter");

countersEl.forEach((counterEL) => {
  console.log(counterEL);
  counterEL.innerText = "0";

  incrementCounter();
  function incrementCounter() {
    let currentCount = +counterEL.innerText;
    const dataCeil = counterEL.getAttribute("data-ceil");
    const incrementCount = dataCeil/15
    currentCount = Math.ceil(currentCount + incrementCount)
    
    if(currentCount < dataCeil){
        counterEL.innerText = currentCount
        setTimeout(incrementCounter,50)
    }     
  }
});
