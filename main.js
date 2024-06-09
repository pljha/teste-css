    const destaqueContainer = document.querySelector('.destaque');
        const larguraTela = window.innerWidth;

        if (larguraTela > 0 && larguraTela < 400) {
            // Verifica se a largura da tela está entre 200px e 400px
            const ultimaDiv = document.createElement('div');
            ultimaDiv.classList.add('imagem');

            const img = document.createElement('img');
            img.src = "cricketleague.png";
            img.alt = "Descrição da imagem";

            const legendaDiv = document.createElement('div');
            legendaDiv.classList.add('legenda');
            legendaDiv.textContent = "CRICKET LEAGUE";

            ultimaDiv.appendChild(img);
            ultimaDiv.appendChild(legendaDiv);
            destaqueContainer.appendChild(ultimaDiv);
        } else {
            const lancamentoContainer = document.querySelector('.lancamento');
            const h1Element = lancamentoContainer.querySelector('h1');
            
            const novaDiv = document.createElement('div');
            novaDiv.classList.add('imagem');

            const img = document.createElement('img');
            img.src = "golfbattlemini.png"; // Substitua "nova-imagem.png" pelo caminho da sua nova imagem
            img.alt = "Descrição da nova imagem";

            const legendaDiv = document.createElement('div');
            legendaDiv.classList.add('legenda');
            legendaDiv.textContent = "NOVO LANÇAMENTO";

            novaDiv.appendChild(img);
            novaDiv.appendChild(legendaDiv);
            
            // Adiciona a nova div após o h1 na classe .lancamento
            lancamentoContainer.insertBefore(novaDiv, h1Element.nextSibling);
        }

function toggleMenu(x) {
    x.classList.toggle("change");
    const menu = document.getElementById("myMenu");
    menu.classList.toggle("open");
}

function ajustarLinks() {
    const links = document.querySelectorAll('a.ajustavel');
    const larguraTela = window.innerWidth;

    links.forEach(link => {
        const url = link.getAttribute('data-url');
        if (larguraTela < 400) {
            link.onclick = function(event) {
                event.preventDefault();
                abrirEmNovaAba(url);
            };
            link.removeAttribute('href');
        } else {
            link.onclick = null;
            link.setAttribute('href', url);
        }
    });
}

function abrirEmNovaAba(url) {
    window.open(url, '_blank');
}

window.onload = ajustarLinks;
window.onresize = ajustarLinks;