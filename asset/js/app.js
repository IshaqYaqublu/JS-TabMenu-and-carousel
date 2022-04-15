
let mySlider = [
    "/asset/Photos/1.jpg",
    "/asset/Photos/2.jpg",
    "/asset/Photos/3.jpg"
]

let imag = document.getElementById("imgslider")
let current = 0;
imag.src = mySlider[current];

let right = document.querySelector(".right");
let left = document.querySelector(".left");

right.addEventListener("click", function(){
    current++;
    if(current > mySlider.length - 1)
    {
        current = 0;
    }
    imag.src = mySlider[current]
})

left.addEventListener("click", function(){
    current--;
    if(current ==-1)
    {
        current = mySlider.length - 1
    }
    imag.src = mySlider[current]
})

function AutoPlay(){
    current++;
    if(current > mySlider.length - 1)
    {
        current = 0;
    }
    imag.src = mySlider[current]
}
setInterval(AutoPlay,2000)

// *********************************************************
// *********************************************************

let buttons = document.querySelectorAll(".tabs button");

let content = document.querySelectorAll(".contents div");

for(let btn of buttons){
    console.log(btn);
    btn.addEventListener('click',function(){
        let active =document.querySelector(".dsx");
        console.log(active);
        active.classList.remove("dsx")
        this.classList.add("dsx")
    
        let index = this.getAttribute("data-tab");
        console.log(index);
        
        for(let div of content) {
            if(div.getAttribute("data-tab") === index){
                div.classList.remove('d-none');
            }
            else{
                div.classList.add('d-none');
            }
        }
    })
}

