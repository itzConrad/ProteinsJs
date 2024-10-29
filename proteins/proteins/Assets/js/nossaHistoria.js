const api = "https://svlhxawk.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27historia%27%5D";

window.addEventListener("load", async () => {
    const wrapper = document.querySelector("div.content-text");

    if (!wrapper) {
        console.error("Elemento 'div.content-text' não encontrado no DOM.");
        return; 
    }

    try {
        const result = await fetch(api, {
            method: "GET",
        });

        const data = await result.json();
        console.log(data); 

        const historias = data.result; 
        if (Array.isArray(historias)) {
            historias.forEach(item => {
                
                const paragraph = document.createElement("p");
                paragraph.textContent = item.texto; // Supondo que 'texto' é a propriedade correta

                wrapper.appendChild(paragraph);
            });
        } else {
            console.log('A propriedade result não é um array.');
        }
    } catch (error) {
        console.error('Erro ao buscar os dados:', error);
    }
});

