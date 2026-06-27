// ==UserScript==
// @name         YouTube Thumbnail Downloader
// @namespace    https://github.com/dionesrosa
// @version      1.2.1
// @description  Exibe miniaturas de vídeos do YouTube e permite download (versão leve)
// @author       Diones Souza
// @icon         https://cdn-icons-png.magnific.com/64/3938/3938026.png
// @homepageURL  https://github.com/dionesrosa/YouTube-Thumbnail-Downloader
// @supportURL   https://github.com/dionesrosa/YouTube-Thumbnail-Downloader/issues
// @updateURL    https://raw.githubusercontent.com/dionesrosa/YouTube-Thumbnail-Downloader/master/script.js
// @downloadURL  https://raw.githubusercontent.com/dionesrosa/YouTube-Thumbnail-Downloader/master/script.js
// @license      MIT
// @match        *://www.youtube.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    const TAMANHOS_MINIATURAS = ['/maxresdefault.jpg', '/hqdefault.jpg', '/mqdefault.jpg', '/sddefault.jpg'];
    const LARGURA_MINIMA = 120;
    let idVideo = "";
    let ultimoIdVideo = '';
    let throttleTimer = null;
    let observer = null;

    function obterIdVideo() {
        const url = new URL(window.location.href);
        return url.searchParams.get('v') || null;
    }

    function aplicarEstilo(el, estilos) {
        Object.assign(el.style, estilos);
    }

    function tentarCarregarMiniatura(indice) {
        const imagem = new Image();
        imagem.onload = function() {
            if (imagem.naturalWidth > LARGURA_MINIMA) {
                exibirPopup(imagem.src);
            } else if (indice < TAMANHOS_MINIATURAS.length - 1) {
                tentarCarregarMiniatura(indice + 1);
            }
        };
        imagem.src = 'https://img.youtube.com/vi/' + idVideo + TAMANHOS_MINIATURAS[indice];
    }

    function exibirPopup(urlImagem) {
        const modal = document.createElement('div');
        aplicarEstilo(modal, {
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: '10000',
        });

        modal.onclick = (e) => {
            if (e.target === modal) modal.remove();
        };

        const conteudo = document.createElement('div');
        aplicarEstilo(conteudo, {
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '8px',
            position: 'relative',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            maxWidth: '90%',
        });

        const botaoFechar = document.createElement('button');
        botaoFechar.textContent = '×';
        aplicarEstilo(botaoFechar, {
            position: 'absolute',
            top: '10px',
            right: '10px',
            width: '30px',
            height: '30px',
            border: 'none',
            borderRadius: '50%',
            backgroundColor: '#ff4d4d',
            color: 'white',
            cursor: 'pointer',
            fontSize: '16px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        });
        botaoFechar.title = 'Fechar';
        botaoFechar.onclick = () => modal.remove();

        const img = document.createElement('img');
        img.src = urlImagem;
        aplicarEstilo(img, {
            maxWidth: '100%',
            maxHeight: '80vh',
            borderRadius: '6px',
        });

        const botoes = document.createElement('div');
        aplicarEstilo(botoes, { marginTop: '10px' });

        TAMANHOS_MINIATURAS.forEach((tamanho) => {
            const link = document.createElement('a');
            link.href = `https://img.youtube.com/vi/${idVideo}${tamanho}`;
            link.target = '_blank';
            link.download = '';
            aplicarEstilo(link, { textDecoration: 'none' });

            const btn = document.createElement('button');
            btn.textContent = tamanho.replace('/', '').replace('.jpg', '').toUpperCase();
            aplicarEstilo(btn, {
                margin: '5px',
                padding: '6px 10px',
                border: 'none',
                borderRadius: '5px',
                backgroundColor: '#0073e6',
                color: 'white',
                cursor: 'pointer',
            });

            link.appendChild(btn);
            botoes.appendChild(link);
        });

        conteudo.appendChild(botaoFechar);
        conteudo.appendChild(img);
        conteudo.appendChild(botoes);
        modal.appendChild(conteudo);
        document.body.appendChild(modal);
    }

    function adicionarBotaoMiniatura(destino) {
        // Remove botão antigo se existir
        const existente = destino.querySelector('#viewThumbnailBtn');
        if (existente) existente.remove();

        const temp_botao = document.createElement('a');
        temp_botao.id = 'viewThumbnailBtn';
        temp_botao.textContent = 'Miniaturas';
        temp_botao.title = 'Ver miniatura do vídeo';
        temp_botao.setAttribute('role', 'button');

        aplicarEstilo(temp_botao, {
            display: 'inline',
            verticalAlign: 'middle',
            marginLeft: '12px',
            padding: '4px 8px',
            fontSize: '12px',
            fontWeight: '500',
            border: 'none',
            borderRadius: '4px',
            backgroundColor: '#fd4712',
            color: 'white',
            cursor: 'pointer',
            boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
            transition: 'background-color 0.3s, transform 0.2s',
        });

        temp_botao.onmouseover = () => { temp_botao.style.backgroundColor = '#ff6f45'; };
        temp_botao.onmouseout = () => { temp_botao.style.backgroundColor = '#fd4712'; };
        temp_botao.onmousedown = () => { temp_botao.style.transform = 'scale(0.95)'; };
        temp_botao.onmouseup = () => { temp_botao.style.transform = 'scale(1)'; };
        temp_botao.onmouseleave = () => { temp_botao.style.transform = 'scale(1)'; };
        temp_botao.onclick = () => {
            idVideo = obterIdVideo();
            if (idVideo) tentarCarregarMiniatura(0);
        };

        destino.appendChild(temp_botao);
    }

    function verificarEAdicionarBotao() {
        const idAtual = obterIdVideo();

        // Se não estamos em uma página de vídeo, pausamos o observer
        if (!idAtual) {
            if (observer) observer.disconnect();
            return;
        }

        // Se voltamos para uma página de vídeo, reativamos o observer (se necessário)
        if (observer && observer.observing !== true) {
            // Reactivar: vamos apenas garantir que o observer está ativo
            // Na verdade não temos uma propriedade observing, vamos apenas reconectar se estiver desconectado
            // Vamos usar uma flag
        }

        if (idAtual !== ultimoIdVideo) {
            ultimoIdVideo = idAtual;
        }

        const destino = document.querySelector('#above-the-fold #title yt-formatted-string');
        if (destino) {
            adicionarBotaoMiniatura(destino);
        }
    }

    function throttledVerify() {
        if (throttleTimer) return;
        throttleTimer = setTimeout(() => {
            throttleTimer = null;
            verificarEAdicionarBotao();
        }, 300);
    }

    function iniciarObserver() {
        // Observa apenas o container principal, que contém o título
        const container = document.querySelector('#above-the-fold');
        if (!container) {
            // Se ainda não existir, observa o body até que ele apareça (fallback leve)
            observer = new MutationObserver(() => {
                const c = document.querySelector('#above-the-fold');
                if (c) {
                    observer.disconnect();
                    iniciarObserver(); // reinicia com o container correto
                } else {
                    throttledVerify();
                }
            });
            observer.observe(document.body, { childList: true, subtree: false }); // subtree false
            return;
        }

        observer = new MutationObserver(throttledVerify);
        observer.observe(container, {
            childList: true,
            subtree: true // agora sim, pois é uma área bem menor
        });
    }

    // Inicia a verificação inicial
    verificarEAdicionarBotao();
    iniciarObserver();

    // Escuta navegações SPA para reavaliar se estamos em watch
    window.addEventListener('yt-navigate-finish', () => {
        // Limpa o timer pendente para resposta rápida na navegação
        if (throttleTimer) clearTimeout(throttleTimer);
        throttleTimer = null;
        verificarEAdicionarBotao();
        // Reinicia o observer se estiver desconectado
        if (!observer || observer.disconnected) iniciarObserver();
    });

})();