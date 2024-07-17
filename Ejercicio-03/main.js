import "./style.css";

const url = "http://www.omdbapi.com/";
const peliculaContainer = document.querySelector("#peliculaContainer");

async function getPelicula(movieTitle) {
  const urlArmada =
    url + `?apikey=${import.meta.env.VITE_SOME_KEY}&t=${movieTitle}&type=movie`;
  peliculaContainer.innerHTML = null;
  try {
    const objRespuesta = await fetch(urlArmada);
    if (!objRespuesta.ok) {
      throw new Error("Ha ocurrido un error en el fetch de pelicula");
    }
    const data = await objRespuesta.json();
    if (data.Response === "True") {
      const ul = document.createElement("ul");
      const li = document.createElement("li");
      let h2Titulo = document.createElement("h2");
      let pRelease = document.createElement("p");
      let imgPoster = document.createElement("img");
      let descripcion = document.createElement("p");
      h2Titulo.innerText = data.Title;
      pRelease.innerText = `Lanzada el ${data.Released}.`;
      imgPoster.src = data.Poster;
      descripcion.innerText = data.Plot;
      descripcion.style.width = "300px";
      descripcion.style.color = "#515151";
      li.appendChild(h2Titulo);
      li.appendChild(pRelease);
      li.appendChild(imgPoster);
      li.appendChild(descripcion);
      ul.appendChild(li);
      peliculaContainer.appendChild(ul);
    } else {
      let h2Titulo = document.createElement("h2");
      h2Titulo.innerText = "La película que buscas no existe";
      peliculaContainer.appendChild(h2Titulo);
    }
  } catch (error) {
    console.error(error);
  }
}

btnSubmitPelicula.addEventListener("click", () => {
  getPelicula(inputPelicula.value);
});
