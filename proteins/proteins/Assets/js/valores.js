const URL = "https://0s2c1n4v.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27missaoevalores%27%5D";

window.addEventListener("load", async () => {
    const wrapper = document.querySelector("div.valores");

    try {
        const result = await fetch(URL, {
            method: "GET",
        });

        const data = await result.json();

        console.log(data);

        if (data.result && data.result.length > 0) {
            data.result.forEach(item => {

                const h3 = document.createElement("h3");
                const hr = document.createElement("hr");
                const p = document.createElement("p");
                const divValor = document.createElement("div");


                h3.innerText = item.title || 'Sem título';
                p.innerText = item.body || 'Sem conteúdo';

                divValor.classList.add("valor");
                divValor.append(h3, hr, p);

                wrapper.appendChild(divValor);
                console.log(wrapper);


            });
        } else {
            wrapper.innerHTML = "<p>Nenhum dado encontrado.</p>";
        }
    } catch (error) {
        console.error('Erro ao carregar dados:', error);
    }
});

/*              <div class="valor">
                    <h3>Adaptabilidade</h3>
                    <hr>
                    <p>Com uma equipe comprometida com a inovação contínua, encontramos soluções ágeis para cada desafio. </p>
                </div>
                <div class="valor">
                    <h3>Soliedariedade</h3>
                    <hr>
                    <p>Estamos comprometidos em apoiar nossa comunidade através de iniciativas que promovem o bem-estar social e ambiental.</p>
                </div>
                <div class="valor">
                    <h3>Autenticidade</h3>
                    <hr>
                    <p>Desde nossa fundação, valorizamos a transparência e a integridade em todas as nossas relações. </p>
                </div>*/
