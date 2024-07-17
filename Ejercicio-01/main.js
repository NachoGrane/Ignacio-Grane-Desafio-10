import "./style.css";

const url = "https://icanhazdadjoke.com/";

async function getJokeAPI() {
  const objRespuesta = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
  });
  console.log(objRespuesta);
  try {
    if (!objRespuesta.ok) {
      throw new Error("Ha ocurrido un error en el fetch del chiste");
    }

    const data = await objRespuesta.json();
    console.log(data);
    const divContainer = document.querySelector("#chiste");
    const p = document.createElement("p");
    p.innerText = data.joke;
    divContainer.appendChild(p);
  } catch (error) {
    console.error(error);
  }
}

btnSubmitChiste.addEventListener("click", () => {
  getJokeAPI();
});
