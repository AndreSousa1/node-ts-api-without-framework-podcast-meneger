# 🎧 Gerenciador de Podcast

## 📌 Descrição

Aplicação Node.js com TypeScript que funciona como um **catálogo estilo Netflix** para organizar e listar episódios de podcasts em vídeo.  
O sistema fornece uma **API REST** que retorna informações sobre episódios, permitindo listagem e filtragem por categorias.

---

## 🌍 Domínio

Podcasts produzidos em **formato de vídeo**.

---

## 🚀 Funcionalidades

- Listar os podcasts em sessões de categorias
- Categorias de exemplo: `Saúde`, `Fitness`, `Mentalidade`, `Humor`
- Filtrar episódios por nome do podcast
- Retornar informações como título do episódio, imagem de capa, link e categorias

### Exemplo de resposta da API:

```json
[
  {
    "podcastName": "Inteligência Ltda",
    "episode": "[EN] 3I/ATLAS: OVNI?: SÉRGIO SACANI, HIME, AVI LOEB E DANIEL LOPEZ - Inteligência Ltda.Podcast #1639",
    "videoId": "j23Q3w74uy4",
    "cover": "https://i.ytimg.com/vi/j23Q3w74uy4/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=j23Q3w74uy4",
    "category": ["OVNI", "SACANI"]
  },
  {
    "podcastName": "Inteligência Ltda",
    "episode": "MARCELO ADNET - Inteligência Ltda. Podcast #1632",
    "videoId": "m6qO1b0UUw",
    "cover": "https://i.ytimg.com/vi/am6qO1b0UUw/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=am6qO1b0UUw",
    "category": ["OVNI", "ADNET"]
  }
]
```

## 🛠️ Estrutura de Pastas

```
src/
├── controllers/ # Controladores (recebem requisições e chamam services)
│ └── podcasts-controller.ts
├── models/ # Modelos de dados (interfaces e tipos)
│ ├── podcast-Model.ts
│ └── podcast-Transfer-Model.ts
├── repositories/ # Camada de dados (simulação com JSON)
│ ├── podcasts.json
│ └── repository-Podcast.ts
├── routes/ # Rotas da API
│ └── routes.ts
├── services/ # Regras de negócio
│ ├── Service-Filter-Episodes.ts
│ └── Service-List-Episodes.ts
├── utils/ # Utilitários e enums
│ └── status-Code.ts
├── app.ts # Configuração principal do servidor (middleware e rotas)
└── server.ts # Ponto de entrada da aplicação
```

## ▶️ Como executar

1. **Clone o repositório**

   ```bash
   git clone https://github.com/seu-usuario/gerenciador-de-podcasts.git
   cd gerenciador-de-podcasts
   ```

2. **Instale as dependências**

   ```bash
   git clone https://github.com/seu-usuario/gerenciador-de-podcasts.git
   cd gerenciador-de-podcasts
   ```

3. **Configure a porta no arquivo .env**

   ```bash
   PORT=3636
   ```

4. **Rode o projeto em desenvolvimento**

   ```bash
   npm run start:dev
   ```

5. **Acesse a API**
   ```bash
   http://localhost:3636/
   ```

## 📡 Endpoints

GET api/list → Lista todos os episódios

GET api/episodes?p=PodcastName → Filtra por nome de podcast
