let questionContainer = document.getElementById('question-container');
let questionElement = document.getElementById('question')
let answerButtons = document.getElementById('answer-buttons');
let nextButton = document.getElementById('next-btn');
let restartButton = document.getElementById('restart-btn');
let resultDiv = document.getElementById('result');



let  currentQuestionIndex , score ;


let questions = [
{
    question:"what html stand's for :",
    answer:[
        {text:"hyperText markUp language",correct:true},
        {text:"scripting language",correct:false},
        {text:"Database manager",correct:false}
    ]
},
{
    question:"how we link a css file in html",
    answer:[
        {text:"<script></script>",correct:false},
        {text:"<link>",correct:true},
        {text:"<title></title>",correct:false}
    ]
}
];

 //startQuiz

 startQuiz();

 function startQuiz() {
    score=0;
    questionContainer.style.display ="flex";
    currentQuestionIndex = 0;
    nextButton.classList.remove('hide');
    restartButton.classList.add('hide');
    resultDiv.classList.add('hide');
    setNextQuestion();
 }


 

 function showQuestion(question){
    questionElement.innerText = question.question;
    
    for (let i = 0; i < question.answer.length; i++) {
    
        let inputGroup = document.createElement('div');
        inputGroup.classList.add('input-group');
        let radio = document.createElement('input');
        radio.type ="radio";
        radio.id = `answer ${i}`
        radio.name="answer";
        radio.value = i;

        let label = document.createElement('label');
        label.htmlFor = `answer ${i}`;
        label.innerText = question.answer[i].text;

        inputGroup.appendChild(radio);
        inputGroup.appendChild(label);
        answerButtons.appendChild(inputGroup);
    }
 }

 function resetState(){
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
 }

 function setNextQuestion() {
    resetState();
    showQuestion(questions[currentQuestionIndex]) 
  }

 nextButton.addEventListener('click',function(){
    let answerIndex = Array.from(
        answerButtons.querySelectorAll('input')
    ).findIndex((radio)=>radio.checked)

    console.log(answerIndex);
   
         if(answerIndex !== -1){
            if(questions[currentQuestionIndex].answer[answerIndex].correct){
                score++;
             }
             currentQuestionIndex++;
             if(questions.length > currentQuestionIndex){
                setNextQuestion()
             }else{
                endQuiz()
             }
         }else{
            alert("please select answer")
         }
         

    
 })



 restartButton.addEventListener('click',startQuiz);

 function endQuiz () {
    
    questionContainer.style.display="none";
    nextButton.classList.add("hide");
    restartButton.classList.remove("hide");
    resultDiv.classList.remove('hide');
    resultDiv.innerText =`your final score : ${score} / ${questions.length}`  



 }