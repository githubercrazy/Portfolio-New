
const btnedu = document.querySelector('.tab-links3') 
const tabedu = document.querySelector('.tab-edu');

const btn = document.querySelector('.tab-links2');
const div = document.querySelector('.tab-exp');

const btn2 = document.querySelector('.tab-links');
const div2 = document.querySelector('.tab-contents');
let monitorOccupied = false;


btn2.addEventListener("click", () => {
    if (div2.style.display === "none") {
      
      div.style.display = "none";
      tabedu.style.display = 'none';
      div2.style.display = "block";
    } else {
      div2.style.display = "none";
    }
  });



btn.addEventListener("click", () => {
    if (div.style.display === "none") {
      div2.style.display = "none";
      tabedu.style.display = 'none';
      div.style.display = "block";
      monitorOccupied = true;
    } else {
      div.style.display = "none";
      monitorOccupied = false;
    }
  });


btnedu.addEventListener('click', () =>{ 
    if(tabedu.style.display === 'none'){
      div2.style.display = "none";
      div.style.display = "none";
        tabedu.style.display  = 'block'
    }
    else {
        tabedu.style.display = 'none';
    }
})


ScrollReveal().reveal(".header-text h1, .header-text h6, .header-text h5, .header-text p, .button", {
  duration: 2000,
  origin: "left",
  // distance: "100px",
  easing: "ease-in-out"
});
ScrollReveal().reveal(".picture, .button2, .row", {
  duration: 2000,
  origin: "right",
  // distance: "100px",
  easing: "ease-in-out"
});

ScrollReveal().reveal(" #projects", {
  delay: 500,
  duration: 2000,
  rotate: {
    x: 20,
    z: 20
  }
});

ScrollReveal().reveal(".skills_section, .skills_head, .skills_main", {
  duration: 2000,
  origin: "down",
  // distance: "100px",
  easing: "ease-in-out"
});

ScrollReveal().reveal("#contact", {
  duration: 2000,
  move: 0
});

