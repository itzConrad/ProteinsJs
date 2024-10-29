document.addEventListener("DOMContentLoaded", async function() {
    const apiUrl = 'https://ebg40ypc.api.sanity.io/v2022-03-07/data/query/production?query=*[_type == "nossaproducao"]';

    async function fetchProductionData() {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            const productionInfo = data.result && data.result[0];
            
            if (productionInfo) {
                document.querySelector('.text-production h2 span').textContent = 'Nossa';
                document.querySelector('.text-production p:nth-of-type(1)').textContent = productionInfo.introText;
                document.querySelector('.text-production p:nth-of-type(2)').textContent = productionInfo.body;
            } else {
                console.log('Nenhum dado encontrado.');
            }
        } catch (error) {
            console.error('Erro ao buscar dados da API:', error);
        }
    }

    fetchProductionData();
});
