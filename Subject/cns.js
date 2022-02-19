const quizDB = [
    {
        question: "Which of the following transport layer protocols is used to support electronic mail?",
        a:"SMTP",
        b:"IP",
        c:"TCP",
        d:"UDP",
        ans:"ans3",
        textAns:"TCP"
    },
    {
        question: "In the IPv4 addressing format, the number of networks allowed under Class C addresses is",
        a:"2^14",
        b:"2^7",
        c:"2^21",
        d:"2^24",
        ans:"ans3",
        textAns:"2^21"
    },
    {
        question: "A layer-4 firewall ( a device that can look at all protocol headers up to the transport layer) CANNOT",
        a:"block HTTP traffic during 9:00PM and 5:00AM ",
        b:"block all ICMP traffic ",
        c:"stop incoming traffic from a specific IP address but allow outgoing traffic to same IP",
        d:"block TCP traffic from a specific user on a specific IP address on multi-user system during 9:00PM and 5:00AM",
        ans:"ans4",
        textAns:"block TCP traffic from a specific user on a specific IP address on multi-user system during 9:00PM and 5:00AM"
    },
    {
        question: "Determine the maximum length of the cable (in km) for transmitting data at a rate of 500 Mbps in an Ethernet LAN with frames of size 10,000 bits. Assume the signal speed in the cable to be 2,00,000 km/s.",
        a:"1",
        b:"2",
        c:"2.5",
        d:"5",
        ans:"ans2",
        textAns:"2"
    },
    {
        question: "In Ethernet when Manchester encoding is used, the bit rate is:",
        a:"Half the baud rate.",
        b:"Twice the baud rate.",
        c:"Same as the baud rate.",
        d:"None of the above",
        ans:"ans1",
        textAns:"Half the baud rate."
    },
    {
        question: "The transport layer protocols used for real time multimedia, file transfer, DNS and email, respectively are:",
        a:"TCP, UDP, UDP and TCP",
        b:"UDP, TCP, TCP and UDP",
        c:"UDP, TCP, UDP and TCP",
        d:"TCP, UDP, TCP and UDP",
        ans:"ans3",
        textAns:"UDP, TCP, UDP and TCP"
    },
    {
        question: "If a class B network on the Internet has a subnet mask of 255.255.248.0, what is the maximum number of hosts per subnet?",
        a:"1022",
        b:"1023",
        c:"2046",
        d:"2047",
        ans:"ans3",
        textAns:"2046"
    },
    {
        question: "Which one of the following uses UDP as the transport protocol?",
        a:"HTTP",
        b:"Telnet",
        c:"DNS",
        d:"SMTP",
        ans:"ans3",
        textAns:"DNS"
    },
    {
        question: "A sender is employing public key cryptography to send a secret message to a receiver. Which one of the following statements is TRUE?",
        a:"Sender encrypts using receiver’s public key",
        b:"Sender encrypts using his own public key",
        c:"Receiver decrypts using sender’s public key",
        d:"Receiver decrypts using his own public key",
        ans:"ans1",
        textAns:"Sender encrypts using receiver’s public key"
    },
    {
        question: "Which of the following can be used as both Source and Destination IP?",
        a:"198.168.1.255",
        b:"10.0.0.1",
        c:"127.0.0.1",
        d:"255.255.255.255",
        ans:"ans2",
        textAns:"10.0.0.1"
    },
    {
        question: "If link transmits 4000 frames per second and each slot has 8 bits, the transmission rate of circuit of this TDM is ______.",
        a:"64 Kbps",
        b:"32 Mbps",
        c:"32 Kbps",
        d:"64 Mbps",
        ans:"ans3",
        textAns:"32 Kbps"
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