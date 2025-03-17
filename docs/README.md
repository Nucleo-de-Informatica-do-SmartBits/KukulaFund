# KukulaFund 🌱

<div align="left">A crowdfunding plataform for small projects and social initiatives.</div>

### The impact of the solution 🌎
<p>Through funds or donations, projects, social initiatives,
and others will be supported, and donors can use this as 
source of investment to make profits.</p>

### Features ⚡
- Users
    - Cadastro e login(tradicional e social)
    - Histórico de doações recebidas e feitas
    - Recuperação de senha
    - 2 Factor-Authentication
    - Comentar em campanhas
    - Reagir à campanhas
    - Doar fundos a uma campanha
    - Perfil
- Projects
    - Adicionar campanha (Título, Descrição, Mídea, Encerramento -> meta ou prazo)
    - Editar campanha
    - Deletar campanha
    - Acompanhar a meta com sistema de progresso
    - Contactar o dono do projecto
    - Ver doadores
    - Actualização dos resultados da campanha
    - Recompensas para doadores
    - Ranking dos maiores doadores da plataforma
- Payments
    - Pagamento Online(Multicaixa Express, BAI Directo)
    - Pagamento Seguro(atomicidade)
- Notificações em realtime e Mensageria
- Sponsor da plataforma/Ajudar a KukulaFund 

### Stacks/Techs 🚀
- **Backend:** Django + Django Ninja  
- **Frontend:** HTML, CSS, Alpine.js, HTMX, JavaScript  
- **Database:** PostgreSQL  
- **Payments:** Stripe API  
- **Hosting:** DigitalOcean, AWS, or Railway

### Project Structure 🛠️
```bash
kukulafund/
│── docs/              # Documentation
│── core/              # The project core(settings, urls)
│── payments/          # Payment processing app
│── users/             # User authentication and profiles
│── projects/          # Project creation and management
│── static/            # All project static files
│── templates/         # All project templates
│── media/             # All project media files
│── requirements.txt   # Dependencies
│── .gitignore.txt     # Git ignore file