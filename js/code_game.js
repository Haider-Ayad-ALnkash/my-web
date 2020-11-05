
document.querySelector(".start span").onclick=function () {
    setTimeout(()=>{
      blocks.forEach(block=>{
        block.classList.add('is-flipped');
      })
    },duration);
    setTimeout(()=>{
      blocks.forEach(block=>{
        block.classList.remove('is-flipped');
      })
    },8000);

    let yourName=prompt("Enter Your Name ");
    let name= document.querySelector(".name span");
    if (yourName ==null || yourName=="") {
       name.innerHTML="Unknown";
       
    }else{
      name.innerHTML=yourName;  
    }
    document.querySelector(".start").remove();
    
    
}

//Varebals

let duration=1000;
let blocksContainer=document.querySelector(".memory-game-blocks");
let blocks=Array.from(blocksContainer.children);
let orderRange=[...Array(blocks.length).keys()];
shuffle(orderRange);
console.log(orderRange);
//Order Range Css propety 
blocks.forEach((block,index)=>{
  block.style.order=orderRange[index];
  block.addEventListener("click",function() {
    isFlipped(block);
  })
});

// Shuffle function 
function shuffle(array) {
  let current=array.length,
    temp,
    random;
    while (current > 0 ) {
      random=Math.floor(Math.random()*current);
      current--;
      temp=array[current];
      array[current]=array[random];
      array[random]=temp;
    }
    return array;
    
}

// function Is Flipped
function isFlipped(selectBlock) {
  selectBlock.classList.add('is-flipped');
  let allflippBlocks=blocks.filter(
    flippedBlock=>flippedBlock.classList.contains("is-flipped"));
  if (allflippBlocks.length === 2) {
  //  Stop Clicking 
  stopClicking();
  // cheak match TWO blocks
    checkMatchBlock(allflippBlocks[0],allflippBlocks[1]);
  }
}
function stopClicking() {
  blocksContainer.classList.add("stop_clicking");
  setTimeout(()=>{
    blocksContainer.classList.remove("stop_clicking");
  },duration);
  document.getElementById("faild").play();
}


// Function Match blocks
function checkMatchBlock(firstBlock,secondBlock) {
  let good=document.querySelector(".good span");
  let tries=document.querySelector(".tries span");
  if (firstBlock.dataset.fruit === secondBlock.dataset.fruit) {
    firstBlock.classList.remove('is-flipped');
    secondBlock.classList.remove('is-flipped');
    firstBlock.classList.add('has-match');
    secondBlock.classList.add('has-match');
    document.getElementById("success").play();
    good.innerHTML=parseInt(good.innerHTML)+1;
    if (parseInt(good.innerHTML)*2 == blocks.length) {
      let div=document.createElement("div");
    div.className='popup';
    div.appendChild(document.createTextNode(`Good ${name} Success Game "`));
    document.body.appendChild(div);
       document.getElementById("song").play();
       setTimeout(() => {
        window.location.reload();
       },5000);
      
       
    }
  
   



  }else{
    tries.innerHTML=parseInt(tries.innerHTML)+1;
    setTimeout(()=>{
      firstBlock.classList.remove('is-flipped');
      secondBlock.classList.remove('is-flipped');
    },duration)
  }
  console.log(parseInt(countersucces));
} 

console.log(blocks.length);