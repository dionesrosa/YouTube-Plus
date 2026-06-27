# 🖼️ YouTube Thumbnail Downloader

**Extensão para Tampermonkey** que adiciona um botão "Miniaturas" ao lado do título dos vídeos do YouTube, permitindo visualizar e baixar as miniaturas em diferentes resoluções com um único clique.

[![Licença MIT](https://img.shields.io/badge/licença-MIT-green)](LICENSE)
[![Tampermonkey](https://img.shields.io/badge/Tampermonkey-suportado-orange)](https://www.tampermonkey.net/)

---

## ✨ Funcionalidades

- Adiciona um botão **"Miniaturas"** ao lado do título em páginas de vídeo do YouTube (`/watch`).
- Ao clicar, abre um popup com a miniatura em **qualidade máxima disponível**.
- Detecta automaticamente a resolução ideal (tenta `maxresdefault.jpg`, depois `hqdefault.jpg`, etc.).
- Oferece **botões de download** para todas as resoluções padrão do YouTube:
  - `MAXRESDEFAULT` (1280×720)
  - `HQDEFAULT` (480×360)
  - `MQDEFAULT` (320×180)
  - `SDDEFAULT` (640×480)
- **Leve e otimizado**: não causa travamentos nem consumo excessivo de CPU.
- Navegação SPA (navegação interna do YouTube) suportada sem necessidade de recarregar a página.

---

## 🚀 Instalação

1. Instale a extensão [Tampermonkey](https://www.tampermonkey.net/) no seu navegador.
2. Acesse o script diretamente pelo link:
   - **[script.js](https://raw.githubusercontent.com/dionesrosa/YouTube-Thumbnail-Downloader/master/script.js)**
3. O Tampermonkey detectará automaticamente e abrirá a janela de instalação. Clique em **Instalar**.
4. Acesse qualquer vídeo do YouTube e veja o botão **Miniaturas** ao lado do título.

---

## 🖱️ Como usar

- Navegue até um vídeo do YouTube (ex: `https://www.youtube.com/watch?v=...`)
- Ao lado do título, clique no botão **"Miniaturas"**
- Um popup abrirá com a miniatura do vídeo
- Utilize os botões abaixo da imagem para baixar em diferentes resoluções
- Clique fora do popup ou no **X** vermelho para fechar

---

## 🛠️ Tecnologias e otimizações

O script foi desenvolvido com foco em desempenho:

- **Throttle** de verificação do DOM para evitar processamento excessivo
- **Observer inteligente** que monitora apenas a área do título, reduzindo drasticamente os eventos de mutação
- **Desconexão automática** do observer quando o usuário não está em uma página de vídeo
- **Fallback progressivo** para carregar a melhor miniatura disponível

Testado no Chrome e Firefox com Tampermonkey.

---

## 🤝 Contribuindo

Sinta-se à vontade para abrir issues e pull requests no [repositório oficial](https://github.com/dionesrosa/YouTube-Thumbnail-Downloader).

Sugestões de melhorias, correções de bugs e traduções são muito bem-vindas!

---

## 📜 Licença

Este projeto é distribuído sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 📬 Contato

- **Autor:** Diones Souza
- **GitHub:** [@dionesrosa](https://github.com/dionesrosa)
- **Suporte:** [Issues](https://github.com/dionesrosa/YouTube-Thumbnail-Downloader/issues)