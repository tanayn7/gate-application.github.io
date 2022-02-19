const quizDB = [
    {
        question: "The simplified SOP (Sum Of Product) form of the boolean expression (P + Q' + R') . (P + Q' + R) . (P + Q + R') is",
        a:"(P'.Q + R')",
        b:"(P + Q'.R')",
        c:"(P'.Q + R)",
        d:"(P.Q + R)",
        ans:"ans2",
        textAns:"(P + Q'.R')"
    },
    {
        question: "In an SR latch made by cross-coupling two NAND gates, if both S and R inputs are set to 0, then it will result in",
        a:"Q = 0, Q' = 1",
        b:"Q = 1, Q' = 0",
        c:"Q = 1, Q' = 1",
        d:"Indeterminate states",
        ans:"ans3",
        textAns:"Q = 1, Q' = 1"
    },
    {
        question: "The minterm expansion of f(P, Q, R) = PQ + QR' + PR' is",
        a:"m2 + m3 + m4 + m5",
        b:"m2 + m4 + m6 + m7",
        c:"m0 + m1 + m6 + m7",
        d:"m0 + m1 + m3 + m5",
        ans:"ans4",
        textAns:"m0 + m1 + m3 + m5"
    },
    {
        question: "The maximum gate delay for any output to appear in an array multiplier for multiplying two n bit number is:",
        a:"O(n^2)",
        b:"O(n)",
        c:"O(log n)",
        d:"O(1)",
        ans:"ans2",
        textAns:"O(n)"
    },
    {
        question: "The Excess-3 code is also called",
        a:"Cyclic Redundancy Code",
        b:"Weighted Code",
        c:"Self-Complementing Code",
        d:"Algebraic Code",
        ans:"ans3",
        textAns:"Self-Complementing Code"
    },
    {
        question: "The switching expression corresponding to f(A, B, C, D) = Σ (1, 4, 5, 9, 11, 12) is",
        a:"BC'D' + A'C'D + AB'D",
        b:"ABC' + ACD + B'C'D",
        c:"ACD' + A'BC' + AC'D'",
        d:"A'BD + ACD' + BCD'",
        ans:"ans1",
        textAns:"BC'D' + A'C'D + AB'D"
    },
    {
        question: "How many 3-to-8 line decoders with an enable input are needed to construct a 6-to-64 line decoder without using any other logic gates?",
        a:"7",
        b:"8",
        c:"9",
        d:"10",
        ans:"ans3",
        textAns:"9"
    },
    {
        question: "The following circuit implements a two-input AND gate using two 2-1 multiplexers. What are the values of X1, X2, X3 ?",
        a:"X1=b, X2=0, X3=a",
        b:"X1=b, X2=1, X3=b",
        c:"X1=a, X2=b, X3=1",
        d:"X1=a, X2=0, X3=b",
        ans:"ans1",
        textAns:"X1=b, X2=0, X3=a"
    },
    {
        question: "The number of fill and half-address required to add 16-bit number is:",
        a:"8 half-adders, 8 full-adders",
        b:"1 half-adder, 15 full-adders",
        c:"16 half-adders, 0 full-adders",
        d:"4 half-adders, 12 full-adders",
        ans:"ans2",
        textAns:"1 half-adder, 15 full-adders"
    },
    {
        question: "The functional difference between SR flip-flop and JK flip-flop is that",
        a:"JK Flip-flop is faster than SR flip-flop",
        b:"JK flip-flop has a feedback path",
        c:"JK flip-flop accepts both inputs 1",
        d:"none of them",
        ans:"ans3",
        textAns:"JK flip-flop accepts both inputs 1"
    },
    {
        question: "A modulus -12 ring counter requires a minimum of",
        a:"10 flip-flops",
        b:"6 flip-flops",
        c:"8 flip-flops",
        d:"12 flip-flops",
        ans:"ans4",
        textAns:"12 flip-flops"
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