# Password Generator Extension (PWD)

Uma extensão minimalista para o Chrome que gera senhas seguras com apenas um clique.

## 🎯 Visão do Produto

### Proposta de Valor
Geração instantânea de senhas seguras, eliminando a necessidade de criar senhas manualmente ou usar serviços online. Com apenas um clique, você obtém uma senha segura que já é copiada automaticamente para a área de transferência.

### Características Principais
- Geração instantânea com apenas um clique
- Três opções de tamanho: 8, 16 e 32 caracteres
- Cópia automática para área de transferência
- Interface minimalista e intuitiva
- Sem necessidade de configurações adicionais

### Segurança
- Utiliza apenas caracteres não ambíguos (evita confusões como O/0, l/I)
- Combina letras maiúsculas, minúsculas, números e @
- Gera senhas localmente (não envia dados para servidores)

## 🔧 Documentação Técnica

### Requisitos
- Node.js
- NPM
- Google Chrome

### Tecnologias Utilizadas
- TypeScript
- Chrome Extension API
- HTML/CSS

### Estrutura do Projeto
```
pwd-extension/
├── src/
│   ├── popup/
│   │   ├── popup.html
│   │   ├── popup.css
│   │   └── popup.ts
│   ├── background/
│   │   └── background.ts
│   └── utils/
│       └── passwordGenerator.ts
├── assets/
│   └── icons/
├── manifest.json
└── package.json
```

### Instalação e Desenvolvimento

1. Clone o repositório:
```bash
git clone [url-do-repositorio]
cd pwd-extension
```

2. Instale as dependências:
```bash
npm install
```

3. Build do projeto:
```bash
npm run build
./copy-files.sh
```

4. Instalação no Chrome:
- Abra chrome://extensions/
- Ative o "Modo do desenvolvedor"
- Clique em "Carregar sem compactação"
- Selecione a pasta `dist`

### Build e Distribuição

Para criar um pacote de distribuição:
```bash
./package-extension.sh
```
Isso irá gerar um arquivo `extension.zip` que pode ser distribuído.

### Regras de Geração de Senha
- Caracteres permitidos:
  - Minúsculas: a-z (exceto i,l,o)
  - Maiúsculas: A-Z (exceto I,O)
  - Números: 1-9 (exceto 0)
  - Caractere especial: @
- Garante pelo menos um caractere de cada tipo
- Embaralhamento aleatório dos caracteres

### Permissões Necessárias
- `clipboardWrite`: Para copiar senhas geradas

## 📝 Contribuição

1. Fork o projeto
2. Crie sua branch de feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.