 // toggle menu/navbar script
$('.menu-btn').click(function(){
     $('.navbar .menu').toggleClass("active");
     $('.menu-btn i').toggleClass("active");
 });

 
   

function progressBarAndCountNumber () {
    const progress = document.querySelectorAll('.progress');
    let count = 0;
    // You must put the maximum number in the MAX variable.

  setInterval(() => {
        count++;
        progress.forEach(element => {
            if (count <= element.dataset.progress) {
                element.parentElement.style.background = `conic-gradient(#f9004d ${count}%, #212428 0)`;
                element.firstElementChild.textContent = `${count}%`;
            };
            
        });
    }, 20);
}

progressBarAndCountNumber();
