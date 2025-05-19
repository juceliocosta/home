document.querySelector("#avatar")
.addEventListener("click", ()=>{
    if (avatar.src.includes("images/avatar.png")) {
        avatar.src = "images/avatar2.png";
    } 
    else {
        avatar.src = "images/avatar.png";
    } 
});


document.querySelectorAll("h2")
.forEach((elemento)=>{
    elemento.addEventListener("click", ()=>{
        let el = elemento.nextElementSibling;
        while(el){
            el.style.display = "none";
            el = el.nextElementSibling;
        }
    })

    elemento.addEventListener("dblclick", ()=>{
        let el = elemento.nextElementSibling;
        while(el){
            el.style.display = "block";
            el = el.nextElementSibling;
        }
    })
});
