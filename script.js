
let container = document.getElementById("container")


fetch('https://rickandmortyapi.com/api/character',{method:"get"})
      .then(res => res.json())

      .then((data) => {for(let i=0;i<data.results.length;i++){

        let card = document.createElement("div");
        container.appendChild(card);
        card.classList.add("card-style");

        let para = document.createElement("p");
        card.appendChild(para);
        para.innerText= data.results[i].name;

        let image = document.createElement("img");
        card.appendChild(image);
        image.style.width="85%";
        image.style.height="75%";
        image.src= data.results[i].image;
      }})

      .catch((err)=> console.log(err))