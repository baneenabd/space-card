const container = document.getElementById("space-container")


const title=document.createElement('h2')
const planetsContainer=document.createElement('div')
const planetsListTitle=document.createElement('h3')
const planetsList=document.createElement('ul')
title.textContent='the universe'
title.style.color='purple'
planetsListTitle.textContent='Our Planets.'

planetsContainer.setAttribute('style', 'background-color:gray','width:100px','border:15px','pading:60px')
planetsList.innerHTML="<li>mars</li><li>venus</li><li>earth</li>"
let img =document.createElement('img')
img.src = "https://nasainarabic.net/uploads/articles/08429fbdc4931135d3a1a2c09f76f18e.jpg"
container.appendChild(title);
container.appendChild(img);
container.appendChild(planetsContainer);

planetsContainer.appendChild(planetsListTitle);

planetsContainer.appendChild(planetsList);



