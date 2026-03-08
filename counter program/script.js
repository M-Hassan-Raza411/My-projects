let counter = document.getElementById("counter")
let increase = document.getElementById("Increase-btn");
let decrease = document.getElementById("Decrease-btn");
let reset = document.getElementById("reset-btn");

let count=0;
console.log(counter);

increase.addEventListener("click",function () {
    count++;
    counter.textContent=count;
});

decrease.addEventListener("click",function () {
    
    if(count <= 0){
        count--;
        alert("counter cant be less than zero please increase");
    }else{
        count--;
        counter.textContent=count;
    }
});

reset.addEventListener("click",function () {
    count=0;
    counter.textContent=count;
});