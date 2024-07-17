import "./style.css";

const url = "https://api.unsplash.com/search/photos";
const imagenesContainer = document.querySelector("#imagenesContainer");
async function getPhoto(word) {
  const urlArmada =
    url + `?query=${word}&client_id=${import.meta.env.VITE_SOME_KEY}`;
  imagenesContainer.innerHTML = null;
  try {
    const objRespuesta = await fetch(urlArmada);
    if (!objRespuesta.ok) {
      throw new Error("Ha habido un error en el fetch de la imagen");
    }

    const data = await objRespuesta.json();
    console.log(data);
    data.results.forEach((e) => {
      const divMain = document.createElement("div");
      const divDescription = document.createElement("div");
      const a = document.createElement("a");
      a.target = "_blank";
      a.href = e.urls.full;
      const img = document.createElement("img");
      img.src = e.urls.full;
      img.alt = e.alt_description;
      img.width = "180";
      img.height = "150";
      divDescription.innerText = e.alt_description;
      divDescription.setAttribute("class", "desc");
      divMain.setAttribute("class", "gallery");
      a.appendChild(img);
      divMain.appendChild(a);
      divMain.appendChild(divDescription);
      imagenesContainer.appendChild(divMain);
    });
  } catch (error) {
    console.error(error);
  }
}

btnSubmitPalabra.addEventListener("click", () => {
  getPhoto(inputPalabra.value);
});
