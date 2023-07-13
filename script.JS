const button = document.querySelector("button");

const onSubmit = () => {
  let estraiNumero = Math.floor(Math.random() * 76);
  //console.log(estraiNumero);
  const celle = document.querySelectorAll("main div div");
  for (let i = 0; i < 76; i++) {
    const className = document.getElementsByClassName(".selezione");
    if (celle[i] === className[i]) {
      estraiNumero = Math.floor(Math.random() * 76);
      console.log("numerocambiato");
    }
    //console.log(className);
  }
  for (let i = 0; i < 76; i++) {
    //console.log("cicia");
    if (celle[i].innerText == estraiNumero) {
      celle[i].classList.add("selezione");
      //console.log("dso");
    }
  }
};
button.onclick = onSubmit;
const tabellone = document.querySelector("main div");
for (let i = 0; i < 76; i++) {
  const celle = document.createElement("div");
  const valoreCelle = document.createElement("h3");
  valoreCelle.innerText = i + 1;
  tabellone.appendChild(celle);
  celle.appendChild(valoreCelle);
  celle.classList.add("celle");
  //console.log(celle);
}
console.log("estraiNumero");
