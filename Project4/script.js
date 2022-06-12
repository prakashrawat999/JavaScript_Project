
const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
    //console.log(counter);
    counter.innerHTML = 0;

    const updateCounter = () =>{
        const targetCount = +counter.getAttribute('data-target');
        //console.log(targetCount);
        //console.log(typeof targetCount);

        const startingCount = Number(counter.innerHTML);
        const incr = targetCount / 100;

        if(startingCount < targetCount){
            counter.innerHTML = `${Math.round(startingCount + incr)}`;
            setTimeout(updateCounter, 100);
        }else{
            counter.innerHTML = targetCount;
        }
    }

    updateCounter();
})



/*
There are several ways to achieve it : 

Using the unary plus operator:
var n = +str // convert string into number

The number contructor:
var n = Number(str);

The parseFloat function:
var n = parseFloat(str);

*/