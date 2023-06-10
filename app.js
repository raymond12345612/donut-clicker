let autoClickerCount = 0;
let donutCounter = 0;
let autoClickerCost = 100;

const donutCountElement=document.getElementById("donut-count");
const autoDonutCountElement=document.getElementById("auto-clicker-count");
const autoDonutCostElement=document.getElementById("auto-clicker-cost");

//this function for time
setInterval(autoAddDonut,1000);

//this function purchase auto clicker
function purchaseAutoClicker(){
  if(donutCounter >= autoClickerCost){
    donutCounter = donutCounter - autoClickerCost;
    autoClickerCost =Math.round(autoClickerCost * 1.1);
    autoClickerCount ++;
    donutCountElement.innerHTML = donutCounter;
    autoDonutCountElement.innerHTML = autoClickerCount;
    autoDonutCostElement.innerHTML = autoClickerCost;
  }
}
//this function add donut
function addDonut(){
  donutCounter++;
  donutCountElement.innerHTML = donutCounter;
}
//this function for auto add donut
function autoAddDonut(){
  if(autoClickerCount > 0){
    donutCounter = donutCounter + autoClickerCount;
    donutCountElement.innerHTML = donutCounter;
  }
}