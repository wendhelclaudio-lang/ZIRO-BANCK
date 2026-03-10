# 🏦 ZIRO-BANCK

![GitHub repo size](https://img.shields.io/github/repo-size/wendhelclaudio-lang/ZIRO-BANCK)
![GitHub last commit](https://img.shields.io/github/last-commit/wendhelclaudio-lang/ZIRO-BANCK)
![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-success)

> Plataforma financeira com interface moderna, focada em experiência do usuário e alta responsividade.

### 🌐 Status do Projeto: Em Desenvolvimento

## 💻 Sobre o projeto

O **ZIRO-BANCK** é uma aplicação web construída com foco em simular uma experiência bancária premium. O projeto foi desenvolvido como um **Progressive Web App (PWA)**, o que significa que ele pode ser instalado diretamente no celular (Android/iOS) ou Desktop, funcionando como um aplicativo nativo.

**Link para acessar a plataforma:** https://wendhelclaudio-lang.github.io/ZIRO-BANCK/

## ✨ Funcionalidades

- **Progressive Web App (PWA):** Instalação facilitada via navegador (`manifest.json` e `sw.js` configurados).
- **Interface Premium:** Design moderno com suporte a visualização mobile-first.
- **Deploy Contínuo:** Configurado com GitHub Actions (`static.yml`) para atualizações automáticas no GitHub Pages a cada novo commit.
- **Armazenamento:** Salva os dados localmente de forma segura e offline no navegador do usuário utilizando IndexedDB e LocalStorage.

## 🛠 Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- **HTML5** (Estrutura e semântica)
- **CSS3** (Estilização e Glassmorphism)
- **Vanilla JavaScript** (Lógica de interação e Service Workers)
- **GitHub Actions & Pages** (Hospedagem e CI/CD)

## 📁 Estrutura do Projeto

- `index.html` - Página principal e estrutura da aplicação.
- `manifest.json` - Configurações do PWA (nome, cores, display).
- `sw.js` - Service Worker responsável pelo cache e funcionamento offline.
- `icon.svg` - Ícone vetorial da aplicação.
- `.github/workflows/static.yml` - Rotina de automação de deploy.

## 🚀 Como executar o projeto localmente

Como é uma aplicação estática (Front-end), rodar este projeto é muito simples:

1. Clone este repositório:
```bash
git clone [https://github.com/wendhelclaudio-lang/ZIRO-BANCK.git](https://github.com/wendhelclaudio-lang/ZIRO-BANCK.git)
