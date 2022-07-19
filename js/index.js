//1---------------------------------
let app = document.getElementById("main");
app.lastElementChild.style.background = "darkblue";

footer.before(main);

//2---------------------------------

const lightColor = document.querySelectorAll(".light");
console.log(lightColor);
let currentLight = 0;

setInterval(() => {
  changeLight();
}, 3000);

function changeLight() {
  lightColor[currentLight].className = "light";
  currentLight++;

  if( currentLight > 2) {
    currentLight = 0;
  }

  const trafficLight = lightColor[currentLight];
  trafficLight.classList.add(trafficLight.getAttribute("color"));
}

//3---------------------------------

let arrey = [[1,2,3],[4,5,6],[7,8,9]];
let table = document.querySelector('#table');

for (let subArr of arrey) {
  let tr = document.createElement('tr');
  
  for (let elem of subArr) {
    let td = document.createElement('td');
    td.innerHTML = elem;
    tr.appendChild(td);
  }

  table.appendChild(tr);
}