const quizData = {
    "初級": [
        {
            question: "(1) 火属性の弱点属性はつぎのうちどれか？",
            choices: ["水属性", "土属性", "風属性"],
            answer: "風属性"
        },
        {
            question: "(2)土属性の弱点はつぎのうちどれか？",
            choices: ["火属性", "水属性", "風属性"],
            answer: "水属性"
        },
        {
            question: "(3) 魔王ソジュは次のうち何章の魔王か？",
            choices: ["新3章", "新4章", "新5章"],
            answer: "新3章"
        },
        {
            question: "(4) 魔皇が始まった章はつぎのうちどれ？",
            choices: ["4章", "3章", "2章"],
            answer: "4章"
        },
        {
            question: "(5) 魔王ムウスと因縁があるのはつぎのキャラクターのうちどれか？",
            choices: ["魔王ソジュ", "夜魔デメララ", "魔王バスカー"],
            answer: "魔王バスカー"
        },
        {
            question: "(6) モンスターの潜在値が最高なことを◯◯◯◯潜在という、つぎのうちどれ？",
            choices: ["コマンド", "ステータス", "マックス"],
            answer: "コマンド"
        },
        {
            question: "(7) 乙姫マヨリと魔王オロロソの関係はつぎのうちどれ？",
            choices: ["親子", "兄妹", "主従"],
            answer: "親子"
        },
        {
            question: "(8) シルバードラゴンは次のうち何章に出現する？",
            choices: ["序章", "3章", "1章"],
            answer: "1章"
        },
        {
            question: "(9) 第3章に出現するヤマトとスサノヲの関係はつぎのうちどれか？",
            choices: ["先祖", "ライバル", "師弟"],
            answer: "先祖"
        },
        {
            question: "(10) 週間少年サンデーでコラボしたキャラクターはつぎのうちどれ？",
            choices: ["フリーレン", "コナン", "ワンピース"],
            answer: "フリーレン"
        }
    ],
    "中級": [
        {
            question: "(1) 魔王バスカーのドロップアイテムはつぎのうちどれ？",
            choices: ["竜のウロコ", "竜の涙", "竜の生贄"],
            answer: "竜の生贄"
        },
        {
            question: "(2) バトル終了後に敵モンスターが落とすノーマルアイテムの確率について正しい説明はつぎのうちどれ？",
            choices: ["80%", "90%", "100%"],
            answer: "100%"
        },
        {
            question: "(3) 攻撃の会心の一撃と必殺の一撃に対するダメージ倍率は次のうちどれ？",
            choices: ["2倍・2.5倍", "1.5倍・2.5倍", "2.5倍・4倍"],
            answer: "2倍・2.5倍"
        },
        {
            question: "(4) 属性有利に対する倍率はつぎのうちどれ？",
            choices: ["1.2倍", "1.5倍", "2.0倍"],
            answer: "1.5倍"
        },
        {
            question: "(5) ボスの霧雨の将グレンのカットインセリフがでる2体のモンスターはつぎのうちどれ？",
            choices: ["赤騎士スタン、赤の女王", "赤騎士スタン、魔導士マナナール", "赤騎士スタン、親衛騎士アリア"],
            answer: "赤騎士スタン、親衛騎士アリア"
        },
        {
            question: "(6) 水属性モンスターで統一した時のチームボーナスはつぎのうちどれ？",
            choices: ["HPアップ", "攻撃アップ", "素早さアップ"],
            answer: "HPアップ"
        },
        {
            question: "(7) 悪魔モンスターで統一した時のチームボーナスはつぎのうちどれ？",
            choices: ["素早さアップ", "攻撃アップ", "HPアップ"],
            answer: "攻撃アップ"
        },
        {
            question: "(8) 魔王オロロソのオロロソの名前の由来はつぎのうちどれ？",
            choices: ["ワインの名前", "地名", "人の名前"],
            answer: "ワインの名前"
        },
        {
            question: "(9) おれもんの「属性」は、カメラ撮影のときの何によって決まる？",
            choices: ["服の色", "背景の色", "撮影した時間"],
            answer: "服の色"
        },
        {
            question: "(10) テレビアニメオレカバトルの曲「オレカ オマエカ 限界バトル!!」を歌っている歌手は次のうち誰？",
            choices: ["串田アキラ", "玉置浩二", "影山ヒロノブ"],
            answer: "串田アキラ"
        }
    ],
    "上級": [
        {
            question: "(1) モンスターのコマンドに設定されている「容量」で「ミス」が持つコストは通常いくらとして計算されますか？",
            choices: ["0", "1", "-1"],
            answer: "0"
        },
        {
            question: "(2) 技「移動（★→★★など）」のコスト計算について。リールが上がるごとに「移動」のコストはどのように変化しますか？",
            choices: ["重くなる", "軽くなる", "変わらない"],
            answer: "重くなる"
        },
        {
            question: "(3) コマンド潜在の個体と、そうではない普通の個体とでは、1つのリールにつきどれくらいのコマンド容量の差がありますか？",
            choices: ["0.5", "1.0", "1.5"],
            answer: "0.5"
        },
        {
            question: "(4) 聖・邪属性攻撃は、火・水・土・風属性モンスターに対するダメージがプラス何パーセント上乗せされる？",
            choices: ["1.00倍", "1.25倍", "1.07倍"],
            answer: "1.07倍"
        },
        {
            question: "(5) 流血の魔王が放つ崩壊の一撃は天竜騎士に対してどのくらいの倍率のダメージをあたえる？",
            choices: ["3.00倍", "2.8倍", "3.5倍"],
            answer: "3.5倍"
        },
        {
            question: "(6) 上級者がコマンドを厳選する際、あえて強力な技を「ミス」や「こうげき」といった弱い技へ変化させるコマンド劣化を狙う最大の理由は何でしょうか？",
            choices: ["移動や強い技を入れるため", "見た目を良くするため", "加減するため"],
            answer: "移動や強い技を入れるため"
        },
        {
            question: "(7) オレカバトル2で初代のカードを読ませた時のパンドラの反応はつぎのうちどれ？",
            choices: ["いつもありがとうな！", "そのカードは使えないぜ！", "懐かしいカードを連れてきたな！"],
            answer: "懐かしいカードを連れてきたな！"
        },
        {
            question: "(8) 凍傷について、重ねがけが可能な回数はつぎのうちどれ？",
            choices: ["2回", "3回", "制限なし"],
            answer: "3回"
        },
        {
            question: "(9) 悪魔エスティがはなつ虹色吐息を食らった水属性モンスターの状態異常はつぎのうちどれ？",
            choices: ["毒", "混乱", "麻痺"],
            answer: "混乱"
        },
        {
            question: "(10) 魔皇ミードのBGMのテーマ曲を手掛けたバンド名は次のうちどれ？",
            choices: ["Chevan", "Chevon", "Chevun"],
            answer: "Chevon"
        }
    ]
};


let quiz = [];
const easy_btn = document.querySelector(".easy_btn");
const  normal_btn= document.querySelector(".normal_btn");
const  hard_btn= document.querySelector(".hard_btn");

easy_btn.addEventListener("click", function() {
    quiz = quizData["初級"];
    questionIndex = 0;
    document.querySelector(".button-container").style.display = "none";
    document.querySelector(".Quiz").style.display = "block";
    displayQuestion();
});

normal_btn.addEventListener("click", function() {
    quiz = quizData["中級"];
    questionIndex = 0;
    document.querySelector(".button-container").style.display = "none";
    document.querySelector(".Quiz").style.display = "block";
    displayQuestion();
});

hard_btn.addEventListener("click", function() {
    quiz = quizData["上級"];
    questionIndex = 0;
    document.querySelector(".button-container").style.display = "none";
    document.querySelector(".Quiz").style.display = "block";
    displayQuestion();
}); 


let questionIndex = 0;
let score=0;

const questionElement = document.querySelector(".question");
const resultElement = document.querySelector(".result");
const buttons = document.querySelectorAll(".choice-btn");

const selectScreen = document.querySelector(".quiz");
const quizScreen = document.querySelector(".Quiz");

function startQuiz() {
    selectScreen.style.display = "none";
    quizScreen.style.display = "flex";
    document.querySelector(".retry-btn").style.display = "none";
     displayQuestion(); 
}
easy_btn.addEventListener("click", startQuiz);
normal_btn.addEventListener("click", startQuiz);
hard_btn.addEventListener("click", startQuiz);

function displayQuestion() {

    if (questionIndex >= quiz.length) {
        questionElement.textContent = `${quiz.length}問中、${score}問正解！`;
        document.querySelectorAll(".choice-btn").forEach(btn => btn.style.display = "none");
        document.querySelector(".retry-btn").style.display = "block";
        return;
    }
        document.querySelectorAll(".choice-btn").forEach(btn =>btn.style.display="inline-block");
        const currentQuiz=quiz[questionIndex];
        questionElement.textContent=currentQuiz.question;


    questionElement.textContent = currentQuiz.question;

    
    buttons.forEach((button, index) => {
        button.textContent = currentQuiz.choices[index];
    });
}

buttons.forEach(button => {
    button.addEventListener("click", function() {
        const currentQuiz = quiz[questionIndex];
        buttons.forEach(btn => btn.disabled = true);
        if (button.textContent === currentQuiz.answer) {
            resultElement.textContent = "正解！⭕";
            score++;
        } else {
            resultElement.textContent = "不正解！❌";
        }

        
        setTimeout(() => {
            resultElement.textContent = ""; 
            questionIndex++;                
            displayQuestion();         
            buttons.forEach(btn => btn.disabled = false);
        }, 1000);
    });
});

function gotoHome(){
        document.querySelector(".Quiz").style.display="none";
        document.querySelector(".quiz").style.display="flex";
        document.querySelector(".retry-btn").style.display="none";
        questionIndex=0;
        score=0;
        document.querySelector(".button-container").style.display="flex";
    }


