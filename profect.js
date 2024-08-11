let delytime=0;
function starttheflow() {
  let innercontent= document.getElementsByClassName('resultentspace');
  innercontent.forEach(element => {
     
  });
}
function stoptheflow() {
  console.log(delytime);
}
function chandedtheline(event) {
   let innercontent= document.getElementsByClassName('resultentspace')[0];
  innercontent.innerHTML='';
    let value = event.target.value;
   
     for(i = 0; i < value; i++){
        innercontent.innerHTML +=`<div class="maincontent"></div>`;
        for(j=0; j <= i; j++){
            let innercontent= document.getElementsByClassName('maincontent')[i];  
            innercontent.innerHTML +=`<div id="circular"></div>`;
        }
        console.log("\n")
     }
}
function chandedthetime(event) {
  delytime=event.target.value;
}
