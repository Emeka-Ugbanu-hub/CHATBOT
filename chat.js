const chat = document.querySelector("#chat");
const send = document.querySelector("#send");
const text = document.querySelector("#text__box");
const robotBox = document.querySelector("#robot__box");
const  key = "278b8f47d0c87b7441667cb98d6b6ae9";
var arr = [
    "happy"
]
var arr2 = [
    "yes"
]
send.addEventListener("click",()=>{ 
  const li =   document.createElement("LI");
  const para =   document.createElement("P");
  li.className = "human__text";
  para.innerHTML = chat.value;
  li.append(para);
  text.append(li);
const url = `https://api.openweathermap.org/data/2.5/weather?q=${chat.value}&appid=${key}&units=metric`;
fetch(url)
.then(response => response.json())
.then(data => {
  var {name, main} = data;
  const res = Math.floor(main.temp);
  if(main.temp > 32){
    const li =   document.createElement("LI");
    const para =   document.createElement("P");
    li.className = "text__two";
    para.innerHTML =name + "    "+ "is quite hot hope you've had a lot of water today &#127781; &#127781; &#127781; &#128513; &#128513; &#128513; ";
    li.append(para);
    robotBox.append(li);
  }
  if(main.temp <= 24){
    const li =   document.createElement("LI");
    const para =   document.createElement("P");
    li.className = "text__two";
    para.innerHTML =name + "    "+ "is quite cold hope you've put on your warm clothes and have a cup of coffee please &#127784; &#127784; &#127784; &#128513; &#128513; &#128513;";
    li.append(para);
    robotBox.append(li);
  }
  if(main.temp <= 32){
    const li =   document.createElement("LI");
    const para =   document.createElement("P");
    li.className = "text__two";
    para.innerHTML =name + "    "+ "is great lets go party &#127926; &#127918; &#128513; &#128513; &#128513; ";
    li.append(para);
    robotBox.append(li);
  }
})
.catch((e) => {
  const li =   document.createElement("LI");
  const para =   document.createElement("P");
  li.className = "text__two";
  para.innerHTML ="Please search for a valid city &#128531; ";
  li.append(para);
  robotBox.append(li);
});


})