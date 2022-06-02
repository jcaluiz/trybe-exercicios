const cryptoItem = (name) => {
    const listContainer = document.getElementById('crypto-container');
    const list = document.createElement('ul');
    const listItem = document.createElement('li');
    listContainer.appendChild(list);
    list.appendChild(listItem);

    listItem.innerHTML = name;
}

async function cryptoFetch() {
    try {
        const api = await fetch(`https://api.coincap.io/v2/assets/`);
        const { data } = await api.json();
        const dados = data.filter((_, index) => index < 10)
        
        dados.forEach(({ name, symbol, supply }) => {
            const cryptoMoeda = `${name} (${symbol}): ${parseFloat(supply, 10).toFixed(2)}`;
            cryptoItem(cryptoMoeda);
        });
    } catch (error) {
        cryptoItem('Algo deu errado');
    }
}

function requestCrypto() {
    cryptoFetch();
}

window.onload = requestCrypto;