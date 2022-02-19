const quizDB = [
    {
        question: "How many words can be made from the word “APPLE” using all the alphabets with repetition and without repetition respectively?",
        a:"1024, 60",
        b:"60, 1024",
        c:"1024, 1024",
        d:"240, 1024",
        ans:"ans1",
        textAns:"1024, 1024"
    },
    {
        question: "What is the number of possible words that can be made using the word “EASYQUIZ” such that the vowels always come together?",
        a:"120",
        b:"720",
        c:"2880",
        d:"4320",
        ans:"ans3",
        textAns:"2880"
    },
    {
        question: "Which one of the following is the most appropriate logical formula to represent the statement? 'Gold and silver ornaments are precious'. The following notations are used: G(x): x is a gold ornament S(x): x is a silver ornament P(x): x is precious",
        a:"∀x(P(x)→(G(x)∧S(x)))",
        b:"∀x((G(x)∧S(x))→P(x))",
        c:"∃x((G(x)∧S(x))→P(x)",
        d:"∀x((G(x)∨S(x))→P(x))",
        ans:"ans4",
        textAns:"∀x((G(x)∨S(x))→P(x))"
    },
    {
        question: "Let G be the non-planar graph with the minimum possible number of edges. Then G has",
        a:"10 edges and 6 vertices",
        b:"10 edges and 5 vertices ",
        c:"9 edges and 6 vertices",
        d:"9 edges and 5 vertices",
        ans:"ans3",
        textAns:"9 edges and 6 vertices"
    },
    {
        question: "Which of the following statements is true for every planar graph on n vertices?",
        a:"The graph has a vertex-cover of size at most 3n/4",
        b:"The graph is Eulerian",
        c:"The graph is connected",
        d:"The graph has an independent set of size at least n/3",
        ans:"ans1",
        textAns:"The graph has a vertex-cover of size at most 3n/4"
    },
    {
        question: "Mala has a colouring book in which each English letter is drawn two times. She wants to paint each of these 52 prints with one of k colours, such that the colour-pairs used to colour any two letters are different. Both prints of a letter can also be coloured with the same colour. What is the minimum value of k that satisfies this requirement ?",
        a:"9",
        b:"8",
        c:"7",
        d:"6",
        ans:"ans3",
        textAns:"7"
    },
    {
        question: "What is the possible number of reflexive relations on a set of 5 elements?",
        a:"225",
        b:"220",
        c:"215",
        d:"210",
        ans:"ans2",
        textAns:"220"
    },
    {
        question: "Consider the function f(x) = sin(x) in the interval [π/4, 7π/4]. The number and location(s) of the local minima of this function are",
        a:"Two, at π/2 and 3π/2",
        b:"One, at 3π/2",
        c:"One, at π/2",
        d:"Two, at π/4 and 3π/2",
        ans:"ans4",
        textAns:"Two, at π/4 and 3π/2"
    },
    {
        question: "How many of the following matrices have an eigenvalue 1?",
        a:"four",
        b:"three",
        c:"two",
        d:"one",
        ans:"ans4",
        textAns:"one"
    },
    {
        question: "Which one of the following in NOT necessarily a property of a Group?",
        a:"Commutativity",
        b:"Associativity",
        c:"Existence of inverse for every element",
        d:"Existence of identity",
        ans:"ans1",
        textAns:"Commutativity"
    },
    {
        question: "Consider the set S = {1, ω, ω2}, where ω and w2 are cube roots of unity. If * denotes the multiplication operation, the structure (S, *) forms",
        a:"group",
        b:"ring",
        c:"An integral domain",
        d:"A field",
        ans:"ans1",
        textAns:"group"
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