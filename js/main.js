import { projetos } from "./projetos.js";

const projetosSection = document.querySelector("#projetos");

window.addEventListener("load", ()=>{
    projetos(projetosSection);
});