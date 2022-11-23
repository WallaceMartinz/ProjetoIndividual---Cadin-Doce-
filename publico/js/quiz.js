const quizData = [
    {
        question: "Qual dessas receitas NÃO é brasileira?",
        a:"Palha italiana",
        b:"Pudim",
        c:"Brigadeiro",
        d:"Pé-de-Moleque",
        correct: "b"
    },
    {
        question:"Qual a origem do bolo Floresta Negra",
        a:"Alemanha",
        b:"Inglaterra",
        c:"Suiça",
        d:"Brasil",
        correct: "a",
    },
    {
        question:"O bolo gelado de coco também é chamado de…",
        a:"Bolo molhado",
        b:"Toalha felpuda",
        c:"Coco cake",
        d:"cocadão",
        correct: "b",
    },
    {
        question:"Bolo de rolo e rocambole são…",
        a:"A mesma coisa!",
        b:"O bolo de rolo é muito mais fininho e criado em Pernambuco",
        c:"O rocambole sempre é feito com chantilly",
        d:"Bolo de rolo sempre é recheados de doce de leite",
        correct: "b",
    },
    {
        question:"Qual a diferença entre creme de confeiteiro e creme delícia?",
        a:"O creme delícia é uma versão abrasileirada que contém leite condensado",
        b:"O creme delícia é brasileiro e tem coco",
        c:"Os dois são iguais, só muda o nome",
        d:"No creme de confeiteiro não há baunilha",
        correct: "a",
    },
    {
        question:"Qual dessas coberturas é mais resistente ao calor?",
        a:"Glaçagem",
        b:"Pasta americana",
        c:"Creme de manteiga",
        d:"Chantily",
        correct: "b",
    },
    {
        question:"O que é temperar chocolate?",
        a:"É saborizar com algum ingrediente, como de laranja, amendoim...",
        b:"É uma técnica de aquecer e resfriar, para melhorar a textura",
        c:"Derreter qualquer chocolate para fazer ovos de páscoa",
        d:"Misturar diferentes tipo de chocolate",
        correct: "b",
    },
    {
        question:"O ponto napê é…",
        a:"É quando está cremoso e denso e a marca do dedo ainda continua na colher",
        b:"É quando está borbulhando nas laterais da panela",
        c:"É o ponto de chantilly",
        d:"É Quando grudou no fundo",
        correct: "a",
    },
    {
        question:"O macaron é feito com…",
        a:"Farinha de aveia",
        b:"Farinha de trigo",
        c:"Farinha de amêndoas",
        d:"Farinha de milho",
        correct: "c",
    },
    {
        question:"Entremet é um bolo...",
        a:"Sem recheio",
        b:"Bolo geralmente muito alto, como os de casamento",
        c:"Os que não tem cobertura na lateral",
        d:"Com muitas camadas e cobertura brilhante",
        correct: "d",
    },

];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0 
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
    
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl =>{
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
    
}

 submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        }else {
            quiz.innerHTML = `
            <h2>Você acertou ${score} de ${quizData.length} questões</h2>
            
            <button onclick="location.reload()">Tente denovo!</button>`
        }
         }
}
);