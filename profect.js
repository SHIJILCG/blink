let delytime = 0;
let value = 0;
let intervalId;
let intervalId2;
let flag = 0;
let flag3 = 0;
let flag2 = 0;

function starttheflow() {
  flag3 = 1;
  flag = 1;

  console.log(`Starting flow with delytime: ${delytime}, value: ${value}`);

  if (delytime != 0 && value != 0 && flag2 == 0) { 
    flag2 = 1;
    let items = document.getElementsByClassName('maincontent');
    let index = 0;

    clearInterval(intervalId);
    clearInterval(intervalId2);

    if (items.length === 0) return; 

    if (items.length === 1) {
      let div = getElementById('circular');
      if (div) {
        intervalId2 = setInterval(() => {
          div.style.backgroundColor = (div.style.backgroundColor === 'red' || div.style.backgroundColor === '') ? 'white' : 'red';
        }, delytime);
      } else {
        console.error("Element with class 'circular' not found in single item");
      }
    } else {
      intervalId = setInterval(() => {
        for (let item of items) {
          let children = item.children;
          for (let child of children) {
            child.style.background = 'white';
          }
        }
        if (items[index]) {
          makeblink(items[index]);
          index = (index + 1) % items.length; 
        }
      }, delytime); 
    }
  } else {
    console.log("Please fill the input field");
  }
}

function makeblink(item) {
  if (item) {
    let children = item.children;
    if (children.length > 0) {
      for (let child of children) {
        child.style.background = 'red';
      }
    } else {
      console.error("No children found for item in makeblink function");
    }
  } else {
    console.error("Item is undefined in makeblink function");
  }
}

function stoptheflow() {
  flag2 = 0;
  let items = document.getElementsByClassName('maincontent');
  if (delytime != 0 && value != 0) { 
    if (items.length === 1) {
      clearInterval(intervalId2);
    } else {
      clearInterval(intervalId);
    }
  } else {
    console.log("Please fill the input field");
  }
}

function chandedtheline(event) {
  let k = 1;
  flag2 = 0;
  stoptheflow();

  let innercontent = document.getElementsByClassName('resultentspace')[0];
  innercontent.innerHTML = '';
  value = event.target.value;

  console.log(`Updating number of rows to: ${value}`);

  for (let i = 0; i < value; i++) {
    let mainContentDiv = document.createElement('div');
    mainContentDiv.className = 'maincontent';
    
    for (let j = 1; j <= k; j++) {
      let circularDiv = document.createElement('div');
      circularDiv.className = 'circular'; 
      mainContentDiv.appendChild(circularDiv);
    }
    
    innercontent.appendChild(mainContentDiv);
    k += 2;
  }
  setTimeout(() => {
    starttheflow();
  }, 0); 
  
}

function chandedthetime(event) { 
  if (flag3 == 0) {
    delytime = event.target.value;
    console.log(`Delay time set to: ${delytime}`);
  } else {
    flag2 = 0;
    clearInterval(intervalId);
    clearInterval(intervalId2);
    delytime = event.target.value;
    console.log(`Updating delay time to: ${delytime}`);
    starttheflow();
  }
}
