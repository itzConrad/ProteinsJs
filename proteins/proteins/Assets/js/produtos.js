const URL = "https://0s2c1n4v.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27produto%27%5D%7B%0A++%22URL%22%3A+Imagem.asset-%3Eurl%2C+Produto%2C+Descricao%0A%7D"

window.addEventListener("load", async () => {
    const wrapper = document.querySelector("section.sections");

    console.log(wrapper);

    try {
        const result = await fetch(URL, {
            method: "GET",
        });

        const data = await result.json();

        data.result.forEach(item => {


            console.log(item)
            //wrapper.appendChild(section);

            const section = document.createElement("section");
            const h2 = document.createElement("h2");
            const p = document.createElement("p");
            const img = document.createElement("img");
            const a = document.createElement("a");
            const div = document.createElement("div");
            const divFilho = document.createElement("div");
            const divTesteLink = document.createElement("div");

            a.href = "contato.html";
            divTesteLink.innerText = "Entre em contato"
            h2.textContent = item.Produto;
            p.textContent = item.Descricao;
            img.src = item.URL;

            a.classList.add("button");
            section.classList.add("sections");
            div.classList.add("main-content");
            div.classList.add("flex-content");
            divFilho.classList.add("content-text");
            
            a.appendChild(divTesteLink);
            divFilho.append(h2, p, a);
            div.append(img, divFilho);
            section.appendChild(div);

            wrapper.appendChild(section);
            //wrapper.append(section,div);
        });
    } catch (error) {
        console.error("Erro ao buscar os dados: ", error);
    }
});

    // <section class="sections" id="larva-viva">
    //     <div class="main-content flex-content">
    //         <img src="Assets/img/img-products/larvaViva.png"/>
    //         <div class="content-text">
    //             <h2>Larvas Vivas</h2>
    //             <p>
    //                 As larvas de Tenébrio são servidas como alimento vivo e podem ser oferecidas como parte de uma dieta variada para pogonas, geckos, hedgehogs, tarântulas, peixes, escorpiões, pássaros, rãs e o utros animais de estimação exóticos.
    //                 É uma ótima opção para pessoas que querem uma alternativa prática e nutritiva para alimentar seu Pet.
    //             </p>
    //             <p>
    //                 Ricos em proteína animal, carboidratos, fosfato, fibras, além de ômega 3 e 6. Alimento necessário para saúde dos seus Pets, macaco, lagarto, rã, pássaros, peixes e roedores.
    //                 Medindo de 1 a 2 centímetros, os tenébrios são criados, em condições controladas, seguindo boas práticas de manejo (BPM) utilizando rações apropriadas e mix de legumes, frutas e verduras - livres de fungos e quaisquer tipos de pragas que possam comprometer a saúde do seu animal.
    //             </p>
    //             <a href="contato.html" class="button"><div>Entre em contato</div></a>
    //         </div>
    //     </div>
    // </section>
