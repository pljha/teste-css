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
