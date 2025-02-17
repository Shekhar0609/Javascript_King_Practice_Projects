const countersEl = document.querySelectorAll(".counter");

countersEl.forEach((counterEl) => {
  counterEl.innerText = "0";

  incrementCounter();
  function incrementCounter() {
    let currentNum = +counterEl.innerText;
    const dataCeil = counterEl.getAttribute("data-ceil");
    const increment = dataCeil / 15;
    // console.log(increment);

    currentNum = Math.ceil(currentNum + increment);
    // console.log("currentNum = " + currentNum);
    // console.log("currentNum + increment = " + Math.ceil(currentNum + increment));
    
    if (currentNum < dataCeil) {
        console.log("currentNum < dataCeil = " + currentNum < dataCeil);
      counterEl.innerText = currentNum;
      setTimeout(incrementCounter, 50);
    } else {
      counterEl.innerText = dataCeil;
    }
  }
});
