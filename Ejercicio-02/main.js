import "./style.css";

const url = "https://jsonplaceholder.typicode.com/posts";
const postContainer = document.querySelector("#postContainer");
async function getPost(id, allClick) {
  const respuesta = await fetch(url);
  try {
    if (!respuesta.ok) {
      throw new Error("Ha ocurrido un error en el fetch de post");
    }
    const data = await respuesta.json();
    if (allClick) {
      showAllPost(id, data);
    } else {
      const post = document.createElement("div");
      const h2 = document.createElement("h2");
      const p = document.createElement("p");
      const a = document.createElement("a");
      h2.innerText = data[id].title;
      p.innerText = data[id].body;
      a.href = url + "/" + id;
      a.innerText = url + "/" + id;
      post.style.marginBottom = "15px";
      post.style.border = "1px solid #000";
      post.appendChild(h2);
      post.appendChild(p);
      post.appendChild(a);
      postContainer.appendChild(post);
    }
  } catch (error) {
    console.error(error);
  }
}

function showAllPost(id, data) {
  let i = id;
  data.forEach((e) => {
    const post = document.createElement("div");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const a = document.createElement("a");
    h2.innerText = e.title;
    p.innerText = e.body;
    a.href = url + "/" + i;
    a.innerText = url + "/" + i;
    post.style.marginBottom = "15px";
    post.style.border = "1px solid #000";
    post.appendChild(h2);
    post.appendChild(p);
    post.appendChild(a);
    postContainer.appendChild(post);
    i++;
  });
}

btnSubmitPost.addEventListener("click", () => {
  getPost(3, false);
});
btnSubmitAllPost.addEventListener("click", () => {
  let allClick = true;
  getPost(0, allClick);
});
