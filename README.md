# YouTube Plus

Userscript para o YouTube desenvolvido por Diones Souza com Tampermonkey.

[![Licença MIT](https://img.shields.io/badge/licença-MIT-green)](LICENSE)
[![Tampermonkey](https://img.shields.io/badge/Tampermonkey-suportado-orange)](https://www.tampermonkey.net/)

[![Instalar](https://img.shields.io/badge/Instalar-Userscript-blue?style=for-the-badge&logo=Tampermonkey)](https://raw.githubusercontent.com/dionesrosa/YouTube-Plus/main/dist/youtube-plus.user.js)

---

## ✨ O que o script faz

Este userscript adiciona um botão chamado "Miniaturas" na área do título dos vídeos do YouTube. Ao clicar, ele exibe uma sobreposição com a miniatura em melhor qualidade disponível.

## 🔧 Funcionalidades

- Adiciona o botão "Miniaturas" na interface do YouTube
- Tenta carregar a melhor miniatura disponível em ordem de qualidade
- Exibe uma janela modal com a imagem selecionada
- Oferece links para abrir ou baixar as versões padrão do YouTube
- Funciona com a navegação SPA do YouTube sem recarregar a página

## 🚀 Instalação

1. Instale a extensão [Tampermonkey](https://www.tampermonkey.net/) no navegador.
2. Instale o userscript disponível no link acima.
3. Acesse qualquer vídeo do YouTube e veja o botão "Miniaturas" ao lado do título.

## 🖱️ Como usar

1. Abra um vídeo no YouTube.
2. Clique no botão "Miniaturas".
3. O popup exibirá a miniatura em melhor qualidade disponível.
4. Use os botões abaixo da imagem para abrir cada resolução.

## 🛠️ Compilação com userscript-builder

Para gerar o arquivo final localmente:

```bash
usb build
```

## 🧩 Estrutura do projeto

- [src/index.js](src/index.js): lógica principal do userscript
- [userscript.config.json](userscript.config.json): metadados e configuração do build

## 👤 Autor

Diones Souza

## 📜 Licença

MIT