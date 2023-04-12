function escolhaSigno() {
    var texto;
    var signo = document.querySelector('#signos').value
    var img = document.getElementById('imagem');

    switch (signo) {
        case 'Áries':
            texto = "Os mais estressadinho do zodíaco, os arianos são impulsivos, determinados e nada pacientes. "
            img.src = 'https://content-media.astrologialuzesombra.com.br/wp-content/uploads/2021/11/02184353/aries.jpg'
            break;
        case 'Touro':
            texto = "Tão calmos e apegados, mas pisa no calo deles para ver o que acontece. Não vamos esquecer da fome sem fim que eles têm!"
            img.src = 'https://content-media.astrologialuzesombra.com.br/wp-content/uploads/2021/12/03131837/horos-touro.jpg'
            break;
        case 'Gêmeos':
            texto = "Donos da razão e falantes, com essa junção não dá nem para tentar discutir com eles. "
            img.src = 'https://content-media.astrologialuzesombra.com.br/wp-content/uploads/2021/10/02192332/gemeos.jpg'
            break;
        case 'Câncer':
            texto = "Emotivos e sensíveis, quem tem sol no signo de Câncer costuma ter uma forte conexão com as lembranças do passado, que podem contribuir para posturas muito sentimentais ou até melancólicas. Cancerianas e cancerianos podem ser muito apegados, mas costumam ter um cuidado ímpar com todas as pessoas que amam. Tendem a buscar segurança e proteção, e isso pode se demonstrar com comportamentos no dia a dia que não oferecem grandes riscos."
            img.src = 'https://content-media.astrologialuzesombra.com.br/wp-content/uploads/2021/10/02185511/Cancer.jpg'
            break;
        case 'Leaõ':
            texto = "Com enorme coração e de sangue quente, os leoninos exalam carisma e generosidade. São pessoas que se sentem responsáveis pelas pessoas que estão ao seu redor e defende-as como um verdadeiro leão. Os nativos do signo podem agir de maneira explosiva e impulsiva, mas sabem perdoar e dificilmente guardam rancor."
            img.src = 'https://content-media.astrologialuzesombra.com.br/wp-content/uploads/2021/12/02192750/leao.jpg'
            break;
        case 'Virgem':
            texto = "A busca pela perfeição pode ser bem presente na personalidade de quem tem o sol no signo de Virgem. Naturalmente adeptos da praticidade, virginianas e virginianos podem melhorar sua auto-estima se sentindo mais úteis e produtivos. O nível elevado de autocrítica, porém, pode levá-los a subestimar seus próprios talentos com certa facilidade."
            img.src = 'https://content-media.astrologialuzesombra.com.br/wp-content/uploads/2021/12/03132620/virgem.jpg'
            break;
        case 'Libra':
            texto = "as pessoas do signo de Libra nascem entre os dias 23/9 e 22/10. Características de Libra: charmosa, elegante e cheia de estilo, você busca harmonia e equilíbrio em tudo o que faz. Simpática e preocupada com as pessoas, não suporta a ideia de ser injusta ou de magoar alguém."
            img.src = 'https://content-media.astrologialuzesombra.com.br/wp-content/uploads/2021/12/02193620/libra.jpg'
            break;
        case 'Escorpião':
            texto = "Uma forte intuição é uma das marcas registradas de quem tem Sol no signo Escorpião, geralmente orientados pelas suas emoções, escorpianos e escorpianas conseguem enxergar nas entrelinhas e identificar o que não foi dito. Bastante conectados com seus sentimentos, podem desenvolver comportamentos possessivos e obsessivos."
            img.src = 'https://content-media.astrologialuzesombra.com.br/wp-content/uploads/2021/12/02190753/escorpiao.jpg'
            break;
        case 'Sagitário':
            texto = "Vaidosos e bem humorados, quem tem sol no signo de Sagitário costuma enxergar com facilidade o lado positivo de cada situação. Cidadãos do mundo, sagitarianas e sagitarianos geralmente são pessoas extrovertidas, espontâneas e comunicativas que não gostam nenhum pouco de solidão. O idealismo sempre presente, também faz do signo de Sagitário o incentivador ideal, capaz de contagiar qualquer equipe sem muitos esforços."
            img.src = 'https://content-media.astrologialuzesombra.com.br/wp-content/uploads/2021/12/03131017/sagitario.jpg'
            break;
        case 'Capricórnio':
            texto = "Praticidade e maturidade são típicas características de Capricórnio. Independentes, costumam fazer seu próprio caminho e não confiar muito em rotas traçadas por outras pessoas. Quem tem um acúmulo de planetas em Capricórnio signo pode ter um perfil workaholic, mas a carreira profissional é apenas um dos aspectos que chamam a atenção dos capricornianos."
            img.src = 'https://content-media.astrologialuzesombra.com.br/wp-content/uploads/2021/11/02190302/capricornio.jpg'
            break;
        case 'Aquário':
            texto = "A busca por inovação e independência podem ser características fortes em pessoas com o sol no signo de Aquário. Com criatividade sempre em alta, costumam ser bastante inventivas e direcionadas a solução de problemas. Quem tem um acúmulo de planetas no signo de Aquário pode ter um perfil questionador e radical, e em algumas situações pode discordar da maioria pelo simples fato de querer ser sempre diferente."
            img.src = 'https://content-media.astrologialuzesombra.com.br/wp-content/uploads/2021/11/02183301/Aquario.jpg'
            break;
        case 'Peixes':
            texto = "Piscianos costumam ter forte intuição e guiam as ações com base nas emoções. Peixes está ligado a diversas virtudes, são compreensivos, compassivos, empáticos e humildes. Por amor ao próximo, são capazes de se doar totalmente a algum objetivo, esquecendo, às vezes, até de si próprios."
            img.src = 'https://content-media.astrologialuzesombra.com.br/wp-content/uploads/2021/12/03125928/peixes.jpg'
            break;

        default:
            texto = 'insira uma signo existente'
    }

    document.querySelector('#frase').innerHTML = texto

}