
const quiz=[
    {question: "魔王ムウスのHPは？",answer: 300},
    {question: "魔王ムウスの攻撃力は？",answer: 50},
    {question: "魔王ムウスの防御力は？",answer: 20},
    {question: "魔王ムウスの素早さは？",answer: 30},
    {question: "魔王バスカーのHPは？",answer: 280}
];
let questionIndex=0;
function askQuestion(){
    if(questionIndex<quiz.length){
        const currentQuestion=quiz[questionIndex]; 
        console.log(currentQuestion.question);
    }
}
askQuestion();
const button9=document.querySelector(".button9");
const button8=document.querySelector(".button8");
button9.addEventListener("click",function(){   
        const currentQuestion=quiz[questionIndex];
        if(currentQuestion.answer===200){
            console.log("正解！");
        }else{
            console.log("不正解！");
    }
    questionIndex++;
    askQuestion();
});
button8.addEventListener("click",function(){
    
        const currentQuestion=quiz[questionIndex];
        if(currentQuestion.answer===300){
            console.log("正解！");
        }else{
            console.log("不正解！");
        }
    questionIndex++;
    askQuestion();
});
