const quizDB = [
    {
        question: "Relations produced from E-R Model will always be in",
        a:"1 NF",
        b:"2 NF",
        c:"3 NF",
        d:"4 NF",
        ans:"ans3",
        textAns:"3 NF"
    },
    {
        question: "ACID properties of a transactions are",
        a:"Atomicity, consistency, isolation, database",
        b:"Atomicity, consistency, isolation, durability",
        c:"Atomicity, consistency, integrity, durability",
        d:"Atomicity, consistency, integrity, database",
        ans:"ans2",
        textAns:"Atomicity, consistency, isolation, durability"
    },
    {
        question: "The employee salary should not be greater than Rs.2000. This is",
        a:"Integrity constraint",
        b:"Feasible constraint",
        c:"Over-defined constraint",
        d:"Referential constraint",
        ans:"ans1",
        textAns:"Integrity constraint"
    },
    {
        question: "Normalization from which is based on transitive dependency is classified as:",
        a:"Second normal form",
        b:"Fourth normal form",
        c:"Third normal form",
        d:"First normal form",
        ans:"ans3",
        textAns:"Third normal form"
    },
    {
        question: "BCNF is not used for cases where a relation has",
        a:"A Two (or more) candidate keys",
        b:"Two candidate keys and composite",
        c:"The candidate key overlap",
        d:"Two mutually exclusive foreign keys",
        ans:"ans4",
        textAns:"Two mutually exclusive foreign keys"
    },
    {
        question: "Given the basic ER and relational models, which of the following is INCORRECT?",
        a:"An attribute of an entity can have more than one value",
        b:"An attribute of an entity can be composite",
        c:"In a row of a relational table, an attribute can have more than one value",
        d:"In a row of a relational table, an attribute can have exactly one value or a NULL value",
        ans:"ans3",
        textAns:"In a row of a relational table, an attribute can have more than one value"
    },
    {
        question: "Which of the following command is used to delete a table in SQL?",
        a:"delete",
        b:"truncate",
        c:"remove",
        d:"drop",
        ans:"ans4",
        textAns:"drop"
    },
    {
        question: "In SQL, relations can contain null values, and comparisons with null values are treated as unknown. Suppose all comparisons with a null value are treated as false. Which of the following pairs is not equivalent?",
        a:"x = 5 AND not(not(x = 5))",
        b:"x = 5 AND x> 4 and x < 6, where x is an integer",
        c:"x < 5 AND not (x = 5)",
        d:"None of the above",
        ans:"ans2",
        textAns:""
    },
    {
        question: "The statement that is executed automatically by the system as a side effect of the modification of the database is",
        a:"backup",
        b:"assertion",
        c:"recovery",
        d:"trigger",
        ans:"ans4",
        textAns:"trigger"
    },
    {
        question: " A ________ means that one record in a particular record type is related to only one record of another record type.",
        a:"One-to-one relationship",
        b:"One-to-many relationship",
        c:"Many-to-one relationship",
        d:"Many-to-many relationship",
        ans:"ans1",
        textAns:"One-to-one relationship"
    },
    {
        question: "A logical description of some portion of database that is required by a user to perform task is called as",
        a:"System View",
        b:"User View",
        c:"Logical View",
        d:"Data View",
        ans:"ans2",
        textAns:"User View"
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