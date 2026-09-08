# KantosPlace — Vue 3 + Vite

Site da KantosPlace construído em **Vue 3** com **Vue Router** e **Vite**.

## Estrutura do Projeto

```
kantos-vue/
├── index.html
├── vite.config.js
├── package.json
├── public/
│   └── logo.jpeg          ← Coloca aqui a logo da KANTOS
└── src/
    ├── main.js
    ├── App.vue             ← Root: NavBar + RouterView
    ├── assets/
    │   └── main.css        ← Variáveis CSS, estilos globais e botões
    ├── router/
    │   └── index.js        ← Rotas: /, /como, /vender, /comprar, /sobre, /contacto
    ├── components/
    │   ├── NavBar.vue      ← Navegação fixa com logo e menu mobile
    │   └── SiteFooter.vue  ← Rodapé
    └── views/
        ├── HomeView.vue
        ├── ComoFuncionaView.vue
        ├── VenderView.vue
        ├── ComprarView.vue
        ├── SobreView.vue
        └── ContactoView.vue
```

## Como usar

### 1. Instalar dependências
```bash
npm install
```

### 2. Adicionar a logo
Coloca o ficheiro da logo KANTOS em:
```
public/logo.jpeg
```
> A logo tem fundo preto — usa `mix-blend-mode: screen` na navbar preta para o fundo desaparecer automaticamente.

### 3. Arrancar em desenvolvimento
```bash
npm run dev
```
Abre em: `http://localhost:5173`

### 4. Build para produção
```bash
npm run build
```
Os ficheiros finais ficam em `dist/`.

### 5. Preview do build
```bash
npm run preview
```

## Adicionar formulários

Quando o CEO enviar os links dos formulários, substitui os `mailto:` nos ficheiros:
- `src/views/VenderView.vue` → botão "Candidatar-se à Plataforma"
- `src/views/ComprarView.vue` → botão "Demonstrar Interesse"
- `src/views/ContactoView.vue` → botões do CTA box

## Paleta de Cores

| Variável       | Cor       | Uso                          |
|---------------|-----------|------------------------------|
| `--blue`      | `#1A1FA8` | Botões primários, navbar links ativo |
| `--lime`      | `#CCEE00` | Acentos, checks, CTA buttons |
| `--black`     | `#111111` | Fundo dark sections, texto   |
| `--white`     | `#FFFFFF` | Cards, fundo claro           |

## Tecnologias

- [Vue 3](https://vuejs.org/) — Composition API + `<script setup>`
- [Vue Router 4](https://router.vuejs.org/) — SPA routing
- [Vite 5](https://vitejs.dev/) — Build tool
