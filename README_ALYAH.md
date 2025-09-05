# Alyah Web - Landing Page

Uma landing page moderna desenvolvida com **Vite**, **TypeScript**, **SWC** e **React**, apresentando três páginas principais: Home, Sobre e Contato.

## 🚀 Tecnologias Utilizadas

- **React 19** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **Vite** - Build tool rápido e moderno
- **SWC** - Compilador JavaScript/TypeScript ultra-rápido
- **React Router DOM** - Roteamento para aplicações React
- **OGL** - Biblioteca WebGL leve para animações performáticas
- **React Bits Threads** - Componente de animação de threads fluídas

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Navigation.tsx      # Componente de navegação
│   ├── ReactBitsDemo.tsx   # Demonstração do componente Threads
│   └── Threads.tsx         # Componente Threads do React Bits
├── pages/
│   ├── Home.tsx           # Página inicial
│   ├── Sobre.tsx          # Página sobre a empresa
│   └── Contato.tsx        # Página de contato com formulário
├── App.tsx                # Componente principal com roteamento
├── main.tsx              # Ponto de entrada da aplicação
└── assets/               # Recursos estáticos
```

## 🎯 Páginas

### 🏠 Home
- Apresentação da empresa
- Cards com serviços oferecidos
- Componente Threads animado com WebGL
- Call-to-action para contato

### ℹ️ Sobre
- História da empresa
- Missão, visão e valores
- Tecnologias utilizadas
- Cards informativos com ícones

### 📞 Contato
- Formulário de contato funcional
- Informações de contato
- Layout responsivo em grid
- Validação de campos obrigatórios

## 🛠️ Como Executar

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone [url-do-repositorio]

# Entre na pasta do projeto
cd alyah-web

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

### Scripts Disponíveis

```bash
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Cria build de produção
npm run preview  # Preview do build de produção
npm run lint     # Executa o linter
```

## 🎨 Design e Layout

- **Design System**: Cores consistentes e tipografia moderna
- **Responsividade**: Grid layouts que se adaptam a diferentes telas
- **Interatividade**: Hover effects e transições suaves
- **Acessibilidade**: Estrutura semântica e navegação clara

### Paleta de Cores
- **Primary**: `#3498db` (Azul)
- **Secondary**: `#2c3e50` (Azul escuro)
- **Success**: `#27ae60` (Verde)
- **Danger**: `#e74c3c` (Vermelho)
- **Text**: `#333` (Cinza escuro)
- **Muted**: `#7f8c8d` (Cinza claro)

## 📱 Recursos

- ✅ Navegação entre páginas com React Router
- ✅ Layout responsivo
- ✅ Formulário de contato funcional
- ✅ Componentes reutilizáveis
- ✅ TypeScript para tipagem segura
- ✅ Build otimizado com Vite + SWC
- ✅ Animações WebGL com componente Threads do React Bits

## 🚀 Deploy

Para fazer o deploy em produção:

```bash
# Gerar build de produção
npm run build

# Os arquivos estarão na pasta 'dist'
# Faça upload da pasta 'dist' para seu servidor
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido com ❤️ por [Alyah Web](https://alyahweb.com.br)
