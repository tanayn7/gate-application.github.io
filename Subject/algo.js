const quizDB = [
    {
        question: "The minimum number of comparisons required to find the minimum and the maximum of 100 numbers is ______________.",
        a:"148",
        b:"147",
        c:"146",
        d:"140",
        ans:"ans1",
        textAns:"148"
    },
    {
        question: "You have an array of n elements. Suppose you implement quicksort by always choosing the central element of the array as the pivot. Then the tightest upper bound for the worst case performance is",
        a:"O(n^2)",
        b:"O(nLogn)",
        c:"Theta(nLogn)",
        d:"O(n^3)",
        ans:"ans1",
        textAns:"O(n^2)"
    },
    {
        question: "A sorting technique is called stable if:  ",
        a:"It takes O(n logn)time",
        b:"It maintains the relative order of occurrence of non-distinct elements",
        c:"It uses divide and conquer paradigm",
        d:"It takes O(n) space",
        ans:"ans2",
        textAns:"It maintains the relative order of occurrence of non-distinct elements"
    },
    {
        question: "To determine the efficiency of an algorithm the time factor is measured by:",
        a:"Counting micro seconds",
        b:"Counting number of key operations",
        c:"Counting number of statements",
        d:"Counting kilobytes of algorithm",
        ans:"ans2",
        textAns:"Counting number of key operations"
    },
    {
        question: "If one uses straight two-way merge sort algorithm to sort the following elements in ascending order 20, 47, 15, 8, 9, 4, 40, 30, 12, 17 then the order of these elements after the second pass of the algorithm is:",
        a:"8, 9, 15, 20, 47, 4, 12, 17, 30, 40",
        b:"8, 15, 20, 47, 4, 9, 30, 40, 12, 17",
        c:"15, 20, 47, 4, 8, 9, 12, 30, 40, 17",
        d:"4, 8, 9, 15, 20, 47, 12, 17, 30, 40",
        ans:"ans2",
        textAns:"8, 15, 20, 47, 4, 9, 30, 40, 12, 17"
    },
    {
        question: "The minimum number of record movements required to merge five files A (with 10 records), B (with 20 records), C (with 15 records), D (with 5 records) and E (with 25 records) is:",
        a:"165",
        b:"90",
        c:"75",
        d:"65",
        ans:"ans1",
        textAns:"165"
    },
    {
        question: "Which of the following algorithm design technique is used in finding all pairs of shortest distances in a graph?",
        a:"Dynamic programming",
        b:"Backtracking",
        c:"Greedy",
        d:"Divide and Conquer",
        ans:"ans1",
        textAns:"Dynamic programming"
    },
    {
        question: "A list of n string, each of length n, is sorted into lexicographic order using the merge-sort algorithm. The worst case running time of this computation is ...",
        a:"O (n logn)",
        b:"O (n^2 logn)",
        c:"O (n^2 + logn)",
        d:"O (n^2)",
        ans:"ans2",
        textAns:"O (n^2 logn)"
    },
    {
        question: "What does it mean when we say that an algorithm X is asymptotically more efficient than Y ?",
        a:"X will be a better choice for all inputs",
        b:"X will be a better choice for all inputs except possibly small inputs",
        c:"X will be a better choice for all inputs except possibly large inputs",
        d:"Y will be a better choice for small inputs",
        ans:"ans2",
        textAns:"X will be a better choice for all inputs except possibly small inputs"
    },
    {
        question: "What is the worst case time complexity of insertion sort where position of the data to be inserted is calculated using binary search ?",
        a:"N",
        b:"N (logN)",
        c:"N^2",
        d:"N(logN)^2",
        ans:"ans3",
        textAns:"N^2"
    },
    {
        question: "What is the best time complexity of bubble sort ?",
        a:"N^2",
        b:"NlogN",
        c:"N",
        d:"N(logN)^2",
        ans:"ans3",
        textAns:"N"
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