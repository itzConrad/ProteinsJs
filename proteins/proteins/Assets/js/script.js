const url = 'https://0s2c1n4v.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27parceiros%27%5D%7B%0A++%22URL%22%3A+LogoParceiros.asset-%3Eurl%0A%7D'; // Substitua pela sua URL

window.addEventListener("load", async () => {
    const wrapper = document.querySelector("div.Parceiros");

    if (!wrapper) {
        console.error("Elemento 'div.Parceiros' não encontrado no DOM.");
        return; 
    }

    try {
        const result = await fetch(url, {
            method: "GET",
        });

        const data = await result.json();
        console.log(data); 

        const parceiros = data.result; 
        if (Array.isArray(parceiros)) {
            parceiros.forEach(item => {

                const div = document.createElement("div");
                div.className = "Parceiros"; 

                const img = document.createElement("img");
                img.src = item.URL; 
                img.alt = "Imagem do parceiro"; 
                div.appendChild(img);
                wrapper.appendChild(div);
            });
        } else {
            console.log('A propriedade result não é um array.');
        }
    } catch (error) {
        console.error('Erro ao buscar os dados:', error);
    }
});
