# YouTube Plus

Userscript para o YouTube desenvolvido com Tampermonkey que adiciona um botão de visualização de miniaturas diretamente ao lado do título dos vídeos.

[![Licença MIT](https://img.shields.io/badge/licença-MIT-green)](LICENSE)
[![Tampermonkey](https://img.shields.io/badge/Tampermonkey-suportado-orange)](https://www.tampermonkey.net/)
[![Instalar](https://img.shields.io/badge/Instalar-Userscript-blue?style=for-the-badge&logo=Tampermonkey)](https://raw.githubusercontent.com/dionesrosa/YouTube-Plus/main/dist/youtube-plus.user.js)

---

## ✨ O que o script faz

O arquivo principal em [src/index.js](src/index.js) adiciona um botão chamado "Miniaturas" na área do título dos vídeos do YouTube.

Ao clicar, ele:

- captura o ID do vídeo a partir da URL;
- tenta carregar a melhor miniatura disponível em ordem de qualidade;
- abre um popup com a imagem selecionada;
- exibe botões para acessar as versões padrão do YouTube em diferentes resoluções.

---

## 🔧 Funcionalidades

- Adiciona o botão "Miniaturas" na interface de vídeo do YouTube.
- Usa a ordem de tentativa: `maxresdefault.jpg`, `hqdefault.jpg`, `mqdefault.jpg` e `sddefault.jpg`.
- Mostra a miniatura em uma sobreposição modal, sem sair da página.
- Oferece links para abrir/baixar cada versão disponível da miniatura.
- Funciona em navegação SPA do YouTube, sem exigir recarregar a página.
- Mantém o uso leve com `throttle` e `MutationObserver`.

---

## 🚀 Instalação

1. Instale a extensão [Tampermonkey](https://www.tampermonkey.net/) no navegador.
2. Instale o userscript gerado a partir do projeto.
3. Acesse qualquer vídeo do YouTube e veja o novo botão "Miniaturas" ao lado do título.

---

## 🖱️ Como usar

1. Abra um vídeo no YouTube.
2. Clique no botão "Miniaturas" próximo ao título.
3. O popup exibirá a miniatura em melhor qualidade disponível.
4. Use os botões abaixo da imagem para abrir cada resolução padrão.
5. Clique fora da janela ou no botão de fechar para encerrar a visualização.

---

## 🧩 Estrutura do projeto

- [src/index.js](src/index.js): lógica principal do userscript.
- [userscript.config.json](userscript.config.json): metadados e configuração do userscript.

---

## 🤝 Contribuição

Contribuições são bem-vindas. Caso queira sugerir melhorias, corrigir bugs ou adaptar o script para novas mudanças da interface do YouTube, abra uma issue ou envie um pull request.

---

## 📜 Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.