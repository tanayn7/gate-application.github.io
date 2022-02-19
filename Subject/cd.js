const quizDB = [
    {
        question: "In a compiler, keywords of a language are recognized during",
        a:"parsing of the program",
        b:"the code generation",
        c:"the lexical analysis of the program",
        d:"dataflow analysis",
        ans:"ans3",
        textAns:"the lexical analysis of the program"
    },
    {
        question: "A grammar that is both left and right recursive for a non-terminal is",
        a:"Ambiguous",
        b:"Information is not sufficient",
        c:"Unambiguous",
        d:"None of the above",
        ans:"ans2",
        textAns:"Information is not sufficient"
    },
    {
        question: "Debugger is a program that",
        a:"allows to examine and modify the contents of registers",
        b:"does not allow execution of a segment of program",
        c:"allows to execute a segment of program and display contents of register",
        d:"All of the above",
        ans:"ans3",
        textAns:"allows to execute a segment of program and display contents of register"
    },
    {
        question: "A linker reads four modules whose lengths are 200, 800, 600 and 500 words respectively. If they are loaded in that order, what are the relocation constants?",
        a:"0, 200, 500, 600",
        b:"0, 200, 1000, 1600",
        c:"200, 500, 600, 800",
        d:"200, 700, 1300, 2100",
        ans:"ans2",
        textAns:"0, 200, 1000, 1600"
    },
    {
        question: "The output of a lexical analyzer is",
        a:"A parse tree",
        b:"Intermediate code",
        c:"Machine code",
        d:"A stream of tokens",
        ans:"ans4",
        textAns:"A stream of tokens"
    },
    {
        question: "The grammar A → AA | (A) | ε is not suitable for predictive-parsing because the grammar is",
        a:"ambiguous",
        b:"left-recursive",
        c:"right-recursive",
        d:"an operator-grammar",
        ans:"ans1",
        textAns:"ambiguous"
    },
    {
        question: "In a resident- OS computer, which of the following system software must reside in the main memory under all situations?",
        a:"Assembler",
        b:"Linker",
        c:"Loader",
        d:"Compiler",
        ans:"ans3",
        textAns:"Loader"
    },
    {
        question: "Some code optimizations are carried out on the intermediate code because",
        a:"they enhance the portability of the compiler to other target processors",
        b:"program analysis is more accurate on intermediate code than on machine code",
        c:"the information from dataflow analysis cannot otherwise be used for optimization",
        d:"the information from the front end cannot otherwise be used for optimization",
        ans:"ans1",
        textAns:"they enhance the portability of the compiler to other target processors"
    },
    {
        question: "Peephole optimization is form of",
        a:"Loop optimization",
        b:"Local optimization",
        c:"Constant folding",
        d:"Data flow analysis",
        ans:"ans2",
        textAns:"Local optimization"
    },
    {
        question: "In compiler terminology reduction in strength means",
        a:"Replacing run time computation by compile time computation",
        b:"Removing loop invariant computation",
        c:"Removing common subexpressions",
        d:"replacing a costly operation by a relatively cheaper one",
        ans:"ans4",
        textAns:"replacing a costly operation by a relatively cheaper one"
    },
    {
        question: "Which one of the following is a top-down parser?",
        a:"Recursive descent parser.",
        b:"Operator precedence parser.",
        c:" An LR(k) parser.",
        d:"An LALR(k) parser",
        ans:"ans1",
        textAns:"Recursive descent parser."
    }
];    


const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const sumbit = document.querySelector('#submit');
const showScore = document.querySelector('#showScore');
const showAnswerArea = document.querySelector('#answer-area-id');


//Question Counter
const quesID = document.querySelector('#quesid');
function qID(no){
    quesID.innerHTML =no; 
};


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
 

let score =0;
let val=1;
let questionCount = getRandomInt(quizDB.length - 5);
var MyAns = questionCount;
let length = questionCount+5;


const loadQuestion = () => {
    question.innerHTML = quizDB[questionCount].question;
    qID(val);
    const questionList = quizDB[questionCount];

    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
    val++;
};

loadQuestion();


const answers = document.querySelectorAll('.answer');
const getCheckAnswer = () => {
    let answer;

    answers.forEach(curAnsElem => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
        
    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}


var totalTime;
var Subject_Name ;
var Answered_Questions=0 ;
var Unanswered_Questions=0 ;
var Correct_Answers=0 ;
var Wrong_Answers=0 ;
var Total_Time_Taken ;
var Accuracy ;
var arr_pre_answers = [];
var pre_count=0;
var arr_post_answers = [];
var count = 0;


sumbit.addEventListener('click',() => {
    const checkedAnswer = getCheckAnswer();
    arr_post_answers[count] = checkedAnswer;
    
    arr_pre_answers[count] =  quizDB[questionCount].ans;

    count++;
    if(checkedAnswer == quizDB[questionCount].ans){
        score++;
    };

    deselectAll();
    
    questionCount++;
    if(questionCount < length){
        loadQuestion();
    }
    else{
        totalTime = 300 - sec-1;
        clearInterval(id);


        for(var i=0; i<5; i++)
        {
            if(arr_post_answers[i] !== undefined){
                Answered_Questions++;
            }

            if(arr_pre_answers[i] === arr_post_answers[i])
            {
                Correct_Answers++;
            }
        }
        Unanswered_Questions = 5 - Answered_Questions;
        Wrong_Answers = 5 - Correct_Answers;

        Accuracy = (Correct_Answers/5)*100;
        showScore.innerHTML = 
        `
        <h2 id="score-area-head"> Your Detailed Statistical Analysis  </h2>

        <table>
            <tr>
                <td> Total Questions  </td>
                <td> 5 </td>
            </tr>
            <tr>
                <td> Answered Questions  </td>
                <td> ${Answered_Questions} </td>
            </tr>
            <tr>
                <td> Unanswered Questions  </td>
                <td> ${Unanswered_Questions} </td>
            </tr>
            <tr>
                <td> Correct Answers   </td>
                <td> ${Correct_Answers} </td>
            </tr>
            <tr>
                <td> Wrong Answers  </td>
                <td> ${Wrong_Answers} </td>
            </tr>
            <tr>
                <td> Final Score </td>
                <td> ${score}/${5} </td>
            </tr>
            <tr>
                <td> Total Time Taken  </td>
                <td> ${totalTime} Sec </td>
            </tr>
            <tr>
                <td> Accuracy  </td>
                <td> ${Accuracy}% </td>
            </tr>
        </table>

        <button class="btn" onclick="location.reload()"> Play Again </button> 
        `;

        showScore.classList.remove('scoreArea');

        document.getElementById('qna').style.display = "block";
        

        showAnswerArea.innerHTML = 
        `   <h3> Question and Answers </h3>
        <p class="divide">
            <p class="show-quetions"> 1]  Question : ${quizDB[MyAns].question} </p>
            <p> 1- ${quizDB[MyAns].a}  <span class="even"> 2- ${quizDB[MyAns].b} </span>  </p>
            <p> 3- ${quizDB[MyAns].c}  <span class="even"> 4- ${quizDB[MyAns].d} </span> </p>
            <p class="show-answers"> Answer : ${quizDB[MyAns].textAns} </p>
        </p>
        <p class="divide">
            <p class="show-quetions"> 2]  Question : ${quizDB[MyAns+1].question}  </p>
            <p> 1- ${quizDB[MyAns+1].a}  <span class="even"> 2- ${quizDB[MyAns+1].b} </span>  </p>
            <p> 3- ${quizDB[MyAns+1].c}  <span class="even"> 4- ${quizDB[MyAns+1].d} </span> </p>
            <p class="show-answers"> Answer : ${quizDB[MyAns+1].textAns} </p>
        </p>
        <p class="divide">
            <p class="show-quetions"> 3]  Question : ${quizDB[MyAns+2].question}  </p>
            <p> 1- ${quizDB[MyAns+2].a}  <span class="even"> 2- ${quizDB[MyAns+2].b} </span>  </p>
            <p> 3- ${quizDB[MyAns+2].c}  <span class="even"> 4- ${quizDB[MyAns+2].d} </span> </p>
            <p class="show-answers"> Answer : ${quizDB[MyAns+2].textAns} </p>
        </p>
        <p class="divide">
            <p class="show-quetions"> 4]  Question : ${quizDB[MyAns+3].question}  </p>
            <p> 1- ${quizDB[MyAns+3].a}  <span class="even"> 2- ${quizDB[MyAns+3].b} </span>  </p>
            <p> 3- ${quizDB[MyAns+3].c}  <span class="even"> 4- ${quizDB[MyAns+3].d} </span> </p>
            <p class="show-answers"> Answer : ${quizDB[MyAns+3].textAns} </p>
        </p>
        <p class="divide">
            <p class="show-quetions"> 5]  Question : ${quizDB[MyAns+4].question}  </p>
            <p> 1- ${quizDB[MyAns+4].a}  <span class="even"> 2- ${quizDB[MyAns+4].b} </span>  </p>
            <p> 3- ${quizDB[MyAns+4].c}  <span class="even"> 4- ${quizDB[MyAns+4].d} </span> </p>
            <p class="show-answers"> Answer : ${quizDB[MyAns+4].textAns} </p>
        </p>
        `;

        var btn1 = document.querySelector('#submit');
        btn1.style.backgroundColor = 'rgb(200, 180, 219)';
        btn1.style.color = 'gray';
        btn1.style.border = 'none';
        btn1.style.cursor = 'not-allowed';
        btn1.disabled = true;
    }
});


function showDiv() {
    showAnswerArea.classList.remove('answer-area-class');
}


//Time Counter
var sec = 300;
const counter = document.querySelector('#time');
var id = setInterval(() => {
    console.log(sec);
    counter.innerHTML = sec;
    sec--;
    if(sec == -1)
    {
        console.log("Countdown End");
        clearInterval(id);
    }
}, 1000);