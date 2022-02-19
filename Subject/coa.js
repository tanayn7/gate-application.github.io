const quizDB = [
    {
        question: "The minterm expansion of f(P, Q, R) = PQ + QR' + PR' is",
        a:"m2 + m4 + m6 + m7",
        b:"m0 + m1 + m3 + m5",
        c:"m0 + m1 + m6 + m7",
        d:"m2 + m3 + m4 + m5",
        ans:"ans1",
        textAns:"m2 + m4 + m6 + m7"
    },
    {
        question: "Consider the equation (123)5 = (x8)y with x and y as unknown. The number of possible solutions is ____ .",
        a:"1",
        b:"2",
        c:"3",
        d:"4",
        ans:"ans3",
        textAns:"3"
    },
    {
        question: "Let f(A, B) = A' + B. Simplified expression for function f(f(x + y, y)z) is :",
        a:"x' + z",
        b:"xyz",
        c:"xy' + z",
        d:"None of these",
        ans:"ans3",
        textAns:"xy' + z"
    },
    {
        question: "Consider a 4 bit Johnson counter with an initial value of 0000. The counting sequence of this counter is:",
        a:"0, 1, 3, 7, 15, 14, 12, 8, 0",
        b:"0, 1, 3, 5, 7, 9, 11, 13, 15, 0",
        c:"0, 2, 4, 6, 8, 10, 12, 14, 0",
        d:"0, 8, 12, 14, 15, 7, 3, 1, 0",
        ans:"ans4",
        textAns:"0, 8, 12, 14, 15, 7, 3, 1, 0"
    },
    {
        question: "The hexadecimal representation of 6578 is",
        a:"1AF",
        b:"D78",
        c:"D71",
        d:"32F",
        ans:"ans1",
        textAns:"1AF"
    },
    {
        question: "What is the minimum number of NAND gates required to implement a 2-input EXCLUSIVE-OR function without using any other logic gate?",
        a:"3",
        b:"4",
        c:"5",
        d:"6",
        ans:"ans2",
        textAns:"4"
    },
    {
        question: "The addition of 4-bit, two's complement, binary numbers 1101 and 0100 results in",
        a:"0001 and an overflow",
        b:"1001 and no overflow",
        c:"0001 and no overflow",
        d:"1001 and an overflow",
        ans:"ans3",
        textAns:"0001 and no overflow"
    },
    {
        question: "The function AB'C + A'BC + ABC' + A'B'C + AB'C' is equivalent to",
        a:"A'B+AC'+AB'",
        b:"AC'+AB+A'C",
        c:"A'B+AC+AB'",
        d:"AB'+AC'+A'C",
        ans:"ans4",
        textAns:"AB'+AC'+A'C"
    },
    {
        question: "To put the 8085 microprocessor in the wait state",
        a:"lower the-HOLD input",
        b:"lower the READY input",
        c:"raise the HOLD input",
        d:"raise the READY input",
        ans:"ans2",
        textAns:"lower the READY input"
    },
    {
        question: "The 2's complement representation of (-539)10 in hexadecimal is",
        a:"DBC",
        b:"ABE",
        c:"DE5",
        d:"9E7",
        ans:"ans3",
        textAns:"DE5"
    },
    {
        question: "A low memory can be connected to 8085 by using",
        a:"INTER",
        b:"RESET IN",
        c:"HOLD",
        d:"READY",
        ans:"ans4",
        textAns:"READY"
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