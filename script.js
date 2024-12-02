document.addEventListener("DOMContentLoaded", function() {
    const faqList = [
        { question: "O que é o Mapeamento Socioemocional?", answer: "O Mapeamento Socioemocional é um questionário avaliativo obrigatório que visa identificar e desenvolver competências socioemocionais dos alunos. Não há resposta certa ou errada e ele vale 6 pontos na média de cada disciplina. É respondido 1 a cada semestre." },
        { question: "O que é a Formação Socioemocional e as Horas AAC?", answer: "A Formação Socioemocional são temas complementares não obrigatórios que em sua totalidade equivalem a 120 Horas AAC (Atividades Acadêmicas Complementares) que essas por sua vez são obrigatórias para a obtenção do diploma (É possível realizar até o final do curso). Cada curso tem uma quantidade de horas AAC obrigatórias; 40, 80 ou 120. Não é necessário fazer toda a formação Socioemocional, mas fazer a quantidade necessária para completar a quantidade de horas AAC. É possivel fazer os temas em cerca de 30min a 3 horas e mesmo assim será computado o total de horas do tema." },
        { question: "O que são os Simulados 1 e 2?", answer: "Os Simulados 1 e 2 são avaliações relacionadas aos temas de cada uma das disciplinas, sendo que cada disciplina tem 2 simulados. Os simulados valem 2 pontos cada e servem como um preparatório para a Prova AV e complemento da nota final." },
        { question: "O que são as Provas AV?", answer: "As Provas AV (Avaliações Virtuais) são exames realizados online para avaliar o conhecimento dos alunos. Valem 6 pontos no máximo. Estão presentes em todas as disciplinas." },
        { question: "O que é o Nova Chance?", answer: "A Nova Chance é uma oportunidade concedida ao aluno depois de ter realizado os Simulados e a Prova AV e ainda assim não ter conseguido a nota mínima de aprovação da disciplina (6,0)." },
        { question: "O que são as Prova AVS?", answer: "A Prova AVS se trata do último recurso avaliativo, AVS significa Avaliação Substitutiva (6 pontos), serve para substituir a nota da prova AV caso depois dos Simulados, Prova AV e Nova Chance ainda não tenha alcançado os 6 pontos mínimos, ou caso já esteja aprovado na matéria e não tenha alcançado 10 pontos para melhorar o desempenho da nota final. Ela só substitui a nota da Prova AV se for maior." },
        { question: "Por que aparece para mim Prova AV: Socioemocional, o que isso quer dizer?", answer: "Prova AV-S: Socioemocional ou Avaliações Sociemocionais vale igual às Provas AV-S comum (6 pontos). Estão presentes em algumas Disciplinas. Necessário fazer apenas um vez de acordo com informações da Estácio (É basicamente o questionário do mapeamento socioemocional)." },
        { question: "Quais são as data dos Simulados e Provas AV/AVS?", answer: "Os simulados já foram liberados desde o dia 12/11 e vão até o dia 15/03. As Provas liberam a partir do dia 15/01 e vão até dia 15/03 e 18/03 com exceção da Prova AVS que libera dia 18/03 e vai até 27/03." },
        { question: "Haverão provas presenciais?", answer: "Provas presenciais: Neste primeiro periodo até então não haverão provas presenciais. Nesses próximos períodos haverão provas presenciais no polo em que se matricularam tendo que ser agendadas. Avisarei quando liberar o calendário de agendamento. Lembrando que as provas presenciais são uma exigência do MEC e não são permitidas 'colas' durante as avaliações, que por sua vez serão conduzidas nos computadores da instituição." },
        { question: "Como acessar as Bibliotecas Virtuais?", answer: "Atualmente a Estácio conta com 2 Bibliotecas funcionais uma delas é a 'Minha Biblioteca'.Para acessar basta entrar no Campus Virtual SIA (sia.estacio.br/sianet/) clicar na aba 'Bibliotecas Virtuais' e depois em 'Biblioteca Virtual - Minha Biblioteca'. A biblioteca abrirá automaticamente, caso contrário, crie uma conta com seu email acadêmico e tente acessar novamente. Lembrando que para funcionar corretamente é necessário que qualquer AdBlocker (Bloqueador de Anúncios  ou PopUp) esteja desligado caso tenha em suas extensões de navegador. Outra é a Biblioteca Pearson: O processo de acesso é o mesmo, porém nessa você deve criar um usuário. Faça com seu email acadêmico. Confirme o código recebido e pronto, você já tem acesso à biblioteca." },
        { question: "Como conseguir a carteirinha de estudante?", answer: "Você tem acesso gartuito a sua Carteirinha Estudantil Digital de forma gratuita no app Minha Estácio. É só abrir o app, ir em Perfil e depois em Acessar Carteirinha. A carteirinha estudantil se renova a cada 6 meses e tem validade em todo o território nacional mediante a apresentação de um documento de identidade." }
    ];

    const faqContainer = document.getElementById('faq-list');
    const searchInput = document.getElementById('search');

    function displayFaqs(faqs) {
        faqContainer.innerHTML = '';
        faqs.forEach(faq => {
            const li = document.createElement('li');
            li.className = 'faq-item';
            li.innerHTML = `<strong>${faq.question}</strong><div class="faq-answer">${faq.answer}</div>`;
            li.addEventListener('click', function() {
                const answer = li.querySelector('.faq-answer');
                if (answer.style.display === 'block') {
                    answer.style.display = 'none';
                } else {
                    answer.style.display = 'block';
                }
            });
            faqContainer.appendChild(li);
        });
    }

    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        const filteredFaqs = faqList.filter(faq => faq.question.toLowerCase().includes(query) || faq.answer.toLowerCase().includes(query));
        displayFaqs(filteredFaqs);
    });

    displayFaqs(faqList);
});