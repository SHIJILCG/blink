let delytime=0;
let value =0;
let intervalId;
let intervalId2;
let flag=0;
let flag3=0;
let flag2=0;
let flag4=0;
function starttheflow() {
  flag3=1;
  flag = 1;
  if(delytime!=0 && value!=0 && flag2==0){ 
      flag2=1;
     let items=document.getElementsByClassName('maincontent');
     let index = 0;
     clearInterval(intervalId);
     clearInterval(intervalId2);
    if (items.length === 0) return; 

    if(items.length === 1){

      let div=document.getElementById('circular')
      intervalId2 = setInterval(() => {
        div.style.backgroundColor = (div.style.backgroundColor === 'red' || div.style.backgroundColor === '') ? 'white' : 'red';
      }, delytime);

    }else{

     intervalId = setInterval(() => {
      for(let item of items){
        let children=item.children;
       for(let child of children){
          child.style.background='white';
       }
      }
      makeblink(items[index]);
      index = (index + 1) % items.length; 
    },delytime); 

  }
}
else{
  console.log("Please fill the input field")
}
}
 
function makeblink(item){

     let childrens=item.children;
     for(let child of childrens){
        child.style.background='red';
     }
}


function stoptheflow() {
  flag2=0;
  let items=document.getElementsByClassName('maincontent');
  if(delytime!=0 && value!=0){ 
    if(items.length===1){
      clearInterval(intervalId2);
    }else{
      clearInterval(intervalId);

    }
 }
 else{
   console.log("Please fill the input field")
 }
 
}

function chandedtheline(event) {
  let k=1;
  flag2=0;
  if(flag4===1){
    console.log("this code is running");
    stoptheflow()
    let innercontent= document.getElementsByClassName('resultentspace')[0];
   innercontent.innerHTML='';
      value=0;
       value = event.target.value;
      console.log(value)
      for(i = 0; i < value; i++){
         innercontent.innerHTML +=`<div class="maincontent"></div>`;
         for(j=1; j <= k; j++){
              
             let innercontent= document.getElementsByClassName('maincontent')[i];  
             innercontent.innerHTML +=`<div id="circular"></div>`;
         }
         k=k+2;
         console.log("\n")
      }
      starttheflow();
  }else{
    flag4=1;
    stoptheflow()
    let innercontent= document.getElementsByClassName('resultentspace')[0];
   innercontent.innerHTML='';
      value=0;
       value = event.target.value;
      console.log(value)
      for(i = 0; i < value; i++){
         innercontent.innerHTML +=`<div class="maincontent"></div>`;
         for(j=1; j <= k; j++){
              
             let innercontent= document.getElementsByClassName('maincontent')[i];  
             innercontent.innerHTML +=`<div id="circular"></div>`;
         }
         k=k+2;
         console.log("\n")
      }
  }

}
function chandedthetime(event) { 
  if(flag3 == 0){
    delytime=event.target.value;
  }else{
    flag2=0;
    clearInterval(intervalId);
    clearInterval(intervalId2);
    delytime=event.target.value;
    starttheflow();
  }
}

