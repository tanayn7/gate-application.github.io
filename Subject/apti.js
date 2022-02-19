const quizDB = [
    {
        question: "Two pipes can fill a tank in 10hours and 12 hours respectively while a third, pipe empties the full tank in 20 hours. If all the three pipes operate simultaneously, in how much time will the tank be filled?",
        a:"7 hrs",
        b:"7 hrs 30 min",
        c:"5 hrs",
        d:"5 hrs 30 min",
        ans:"ans2",
        textAns:"7 hrs 30 min"
    },
    {
        question: "In what time will Rs. 1000 become Rs. 1331 at 10% per annum compounded annually?",
        a:"1 year",
        b:"4 year",
        c:"3 year",
        d:"6 year",
        ans:"ans3",
        textAns:"3 year"
    },
    {
        question: "Simplify :(log 75/16-2 log 5/9+log 32/243)",
        a:"1",
        b:"1.2",
        c:"2",
        d:"2.02",
        ans:"ans3",
        textAns:"2"
    },
    {
        question: "At what time between 4 and 5 o'clock will the hands of a clock be at right angle?",
        a:"at 32/11 min. past 4",
        b:"at 32/11 min. past 4",
        c:"at 35/11 min. past 4",
        d:"at 40/11 min. past 4",
        ans:"ans4",
        textAns:"at 40/11 min. past 4"
    },
    {
        question: "A person incurs a loss of 5% be selling a watch for Rs. 1140. At what price should the watch be sold to earn 5% profit.",
        a:"1200",
        b:"1260",
        c:"1280",
        d:"1240",
        ans:"ans2",
        textAns:"1260"
    },
    {
        question: "A man takes 3 hours 45 minutes to row a boat 15 km downstream of a river and 2hours30minutes to cover a distance of 5km upstream. find the speed of the river current in km/hr.",
        a:"1km/hr",
        b:"2km/hr",
        c:"3km/hr",
        d:"4km/hr",
        ans:"ans1",
        textAns:"1km/hr"
    },
    {
        question: "In how many ways can 10 examination papers be arranged so that the best and the worst papers never come together?",
        a:"8*8!",
        b:"8*9!",
        c:"7*9!",
        d:"9*8!",
        ans:"ans2",
        textAns:"8*9!"
    },
    {
        question: "A father is twice as old as his son. 20 years ago, the age of the father was 12 times the age of the son. The present age of the father (in years) is",
        a:"11",
        b:"22",
        c:"33",
        d:"44",
        ans:"ans4",
        textAns:"44"
    },
    {
        question: "A farmer travelled a distance of 61 km in 9 hours. He travelled partly on foot @ 4 km/hr and partly on bicycle @ 9 km/hr. The distance travelled on foot is:",
        a:"14 km",
        b:"15 km",
        c:"16 km",
        d:"17 km",
        ans:"ans3",
        textAns:"16 km"
    },
    {
        question: "The average age of the mother and her six children is 12 years which is reduced by 5 years if the age of the mother is excluded. How old is the mother",
        a:"40",
        b:"41",
        c:"42",
        d:"43",
        ans:"ans3",
        textAns:"42"
    },
    {
        question: "The volume of a wall, 5 times as high as it is broad and 8 times as long as it is high, is 12.8 cu. meters. Find the breadth of the wall.",
        a:"30 cm",
        b:"40 cm",
        c:"50 cm",
        d:"55 cm",
        ans:"ans2",
        textAns:"40 cm"
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