let counts = setInterval(updated, 100);
let count = document.getElementById("count");
            let counter = 0;
            function updated() {
                count.innerHTML = ++counter;
                if (counter === 85) {
                    clearInterval(counts);
                }
                
            }
            window.addEventListener('scroll', updated, {
                once: true
            });

 
var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down").;
    
  });
}
