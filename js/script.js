function myFunction(instru) {
    let dots = document.querySelector(`.block[id="${instru}"] .dots`);
    let moreText = document.querySelector(`.block[id="${instru}"] .more`); 
    let btnText = document.querySelector(`.block[id="${instru}"] .myBtn`);

    console.log(dots);
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.textContent  = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.textContent  = "Read less";
      moreText.style.display = "inline";
    }
}
