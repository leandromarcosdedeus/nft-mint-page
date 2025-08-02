src/
│
├── app/
│   ├── core/                 # Serviços e utilitários globais
│   │   ├── services/         # Serviços (ex: Web3Service, AuthService)
│   │   ├── models/           # Interfaces e classes de modelo
│   │   └── guards/           # Guards de rota
│   │
│   ├── shared/               # Componentes reutilizáveis
│   │   └── components/       # (ex: CardComponent, LoaderComponent)
│   │
│   ├── pages/                # Páginas da aplicação
│   │   ├── home/
│   │   ├── mint/
│   │   └── my-nfts/
│   │
│   ├── app-routing.module.ts
│   └── app.module.ts
│
└── assets/
