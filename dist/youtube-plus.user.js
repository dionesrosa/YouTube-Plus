// ==UserScript==
// @name         Youtube Plus
// @namespace    https://github.com/dionesrosa
// @version      1.2.3
// @description  Adiciona funcionalidades para o Youtube.
// @author       Diones Souza
// @license      MIT
// @icon         data:image/png;base64,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
// @homepageURL  https://github.com/dionesrosa/YouTube-Plus
// @supportURL   https://github.com/dionesrosa/YouTube-Plus/issues
// @updateURL    https://raw.githubusercontent.com/dionesrosa/YouTube-Plus/main/dist/youtube-plus.user.js
// @downloadURL  https://raw.githubusercontent.com/dionesrosa/YouTube-Plus/main/dist/youtube-plus.user.js
// @match        *://www.youtube.com/*
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