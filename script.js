// ==============================
// 돈키호테 웹 방탈출 - 시작 부분
// ==============================

// 화면에 있는 요소 가져오기
const innScene = document.getElementById("innScene");
const autopsyButton = document.getElementById("autopsyButton");
const suspectButton = document.getElementById("suspectButton");
const recordButton = document.getElementById("recordButton");
const morgueScene = document.getElementById("morgueScene");
const investigateButton = document.getElementById("investigateButton");
const poster = document.getElementById("poster");
const posterButton = document.getElementById("posterButton");
const opening = document.getElementById("opening");
const guideScene = document.getElementById("guideScene");

const startButton = document.getElementById("startButton");
const nextButton = document.getElementById("nextButton");

const speaker = document.getElementById("speaker");
const text = document.getElementById("text");


// ==============================
// 안내자 대사
// ==============================

const dialogues = [
    {
        speaker: "산초의 종자",
        text: "쉿! 조용! 조용!"
    },

    {
        speaker: "산초의 종자",
        text: "앗! 안녕하세요. 여러분들이 이번 사건을 맡으신 탐정분이시군요."
    },

    {
        speaker: "산초의 종자",
        text: "저는 여러분의 안내를 맡게 된 산초의 종자 ■■■입니다."
    },

    {
        speaker: "산초의 종자",
        text: "이렇게 끔찍한 사건으로 모시게 되어 정말 유감입니다."
    },

    {
        speaker: "산초의 종자",
        text: "산초의 편지는 다들 읽어보셨나요?"
    },

    {
        speaker: "산초의 종자",
        text: "그렇다면, 우선은 피해자의 시신을 확인하는 게 이야기가 빠르겠군요."
    },

    {
        speaker: "산초의 종자",
        text: "가시죠!"
    }
];


// 현재 몇 번째 대사인지 기억
let dialogueIndex = 0;

// ==============================
// 메인 포스터
// ==============================

posterButton.addEventListener("click", function() {

    poster.classList.add("hidden");

    opening.classList.remove("hidden");

});

// ==============================
// 게임 시작 버튼
// ==============================

startButton.addEventListener("click", function() {

    // 오프닝 화면 숨기기
    opening.classList.add("hidden");

    // 안내자 화면 보여주기
    guideScene.classList.remove("hidden");

    // 첫 번째 대사 보여주기
    showDialogue();

});


// ==============================
// 대사 보여주기
// ==============================

function showDialogue() {

    const currentDialogue = dialogues[dialogueIndex];

    speaker.textContent = currentDialogue.speaker;
    text.textContent = currentDialogue.text;

}


// ==============================
// 계속 버튼
// ==============================

nextButton.addEventListener("click", function() {

    dialogueIndex++;

    // 아직 대사가 남아 있다면
    if (dialogueIndex < dialogues.length) {

        showDialogue();

    } 
    
    // 모든 대사가 끝났다면
    else {

        enterMorgue();

    }

});


// ==============================
// 시체 보관소로 이동
// ==============================

function enterMorgue() {

    guideScene.classList.add("hidden");

    morgueScene.classList.remove("hidden");

}// JavaScript source code

// 시체 보관소 대사

const morgueDialogues=[

"이 분이 바로 돈키호테입니다. 진짜 이름은 알론소 키하노죠.",

'최근 스스로를 "기사"라고 칭하며 미친 짓들을 일삼고 다녔지만… 그 전까진 정말 평범한 사람이었습니다.',

"여기 있는 파일이 바로 그의 부검 소견서입니다. 한 번 읽어보시고 수첩에 기록하셔도 괜찮습니다.",

"그리고 이 파일은 이번 사건의 유력한 용의자들입니다. 돈키호테에게 원한이 있는 사람도 있고 사소한 접점이 있다면 모두 모았습니다.",

"행적 기록도 반드시 확인해주세요.",

"세 자료를 모두 확인하면 다음 장소로 이동할 수 있습니다."

];

let morgueDialogueIndex=0;

const morgueText=document.getElementById("morgueText");
const morgueDialogue = document.getElementById("morgueDialogue");

morgueNext.addEventListener("click", function () {

    morgueDialogueIndex++;

    if (morgueDialogueIndex < morgueDialogues.length) {

        morgueText.textContent =
            morgueDialogues[morgueDialogueIndex];

    } else {

    // 종자의 대화창 숨기기
    morgueDialogue.classList.add("hidden");

    // 조사 자료 활성화
    autopsyButton.disabled = false;
    suspectButton.disabled = false;
    recordButton.disabled = false;

}

});

// ==============================
// 자료 확인 상태
// ==============================

const nextRoom = document.getElementById("nextRoom");

let autopsyRead = false;
let suspectRead = false;
let recordRead = false;


// 세 자료를 모두 읽었는지 확인
function checkAllDocuments() {

    console.log(
        "부검:", autopsyRead,
        "용의자:", suspectRead,
        "행적:", recordRead
    );

    if (autopsyRead && suspectRead && recordRead) {

        nextRoom.classList.remove("hidden");

    }
}

// ==============================
// 부검 소견서
// ==============================

const autopsyModal = document.getElementById("autopsyModal");
const closeAutopsy = document.getElementById("closeAutopsy");


// 부검 소견서 열기
autopsyButton.addEventListener("click", function () {

    autopsyModal.classList.remove("hidden");

    autopsyRead = true;

    checkAllDocuments();

});


// 부검 소견서 닫기
closeAutopsy.addEventListener("click", function () {

    autopsyModal.classList.add("hidden");

});

// ==============================
// 용의자 리스트
// ==============================

const suspectModal = document.getElementById("suspectModal");
const closeSuspect = document.getElementById("closeSuspect");


// 용의자 리스트 열기
suspectButton.addEventListener("click", function () {

    suspectModal.classList.remove("hidden");

    suspectRead = true;

    checkAllDocuments();

});


// 용의자 리스트 닫기
closeSuspect.addEventListener("click", function () {

    suspectModal.classList.add("hidden");

});

// ==============================
// 돈키호테 행적 기록
// ==============================

const recordModal = document.getElementById("recordModal");
const closeRecord = document.getElementById("closeRecord");


// 행적 기록 열기
recordButton.addEventListener("click", function () {

    recordModal.classList.remove("hidden");

    recordRead = true;

    checkAllDocuments();

});


// 행적 기록 닫기
closeRecord.addEventListener("click", function () {

    recordModal.classList.add("hidden");

});

// ==============================
// 시체 보관소 → 여관
// ==============================

// ==============================
// 본격적인 조사 시작 안내
// ==============================

const investigationGuide =
    document.getElementById("investigationGuide");

const investigationText =
    document.getElementById("investigationText");

const investigationNext =
    document.getElementById("investigationNext");


const investigationGuideDialogues = [

    "수첩에서 다시 한번 확인하실 수 있으니 넘어가도록 하죠.",

    "여러분들은 지금부터 돈키호테의 행적을 따라 장소를 이동하며 조사를 하게 됩니다.",

    "조사를 진행하며, 의심되는 단서들은 수첩에 기록할 수 있습니다.",

    "단, 단서를 놓치게 되면 다시 돌아올 수 없으니 신중하게 조사해주시길 바랍니다.",

    "또한 사람들이 오지 않는 깊은 밤 조사를 하는 것이니만큼 들키지 않게 주의해주십시오.",

    "혹시나 범인이 찾아올지도 모릅니다.",

    "첫 번째 행선지는 여관입니다."

];


let investigationGuideIndex = 0;


// 조사 시작 버튼
nextRoom.addEventListener("click", function () {

    nextRoom.classList.add("hidden");

    investigationGuideIndex = 0;

    investigationText.textContent =
        investigationGuideDialogues[0];

    investigationGuide.classList.remove("hidden");

});


// 계속 버튼
investigationNext.addEventListener("click", function () {

    investigationGuideIndex++;

    if (
        investigationGuideIndex <
        investigationGuideDialogues.length
    ) {

        investigationText.textContent =
            investigationGuideDialogues[investigationGuideIndex];

    } else {

        // 안내 종료 → 여관으로 이동

        investigationGuide.classList.add("hidden");

        morgueScene.classList.add("hidden");

        innScene.classList.remove("hidden");

        startInnIntro();
    }

});

// ==============================
// 여관 입장 대화
// ==============================

const innDialogue =
    document.getElementById("innDialogue");

const innText =
    document.getElementById("innText");

const innNext =
    document.getElementById("innNext");


const innIntroDialogues = [

    '이곳은 돈키호테가 "성"이라 칭했던 여관입니다.',

    "그리고 여관 주인에게 기사 임명식을 받기도 했었죠.",

    "그녀가 왜 그 행동을 받아주었는지는 아직도 의문입니다.",

    "사실 이 여관의 안주인은, 원래 이런 사람입니다.",

    "손님이 무엇을 하든, 어떤 물건이 들어오든, 벽난로에 무엇을 던져 넣든 크게 신경 쓰지 않아요.",

    "자신에게 해가 되는 일만 아니라면 말이죠.",

    "이곳에서 여러분들은 첫 번째 조사를 진행하시면 됩니다."

];


let innIntroIndex = 0;


// 여관 대화 시작
function startInnIntro() {

    innIntroIndex = 0;

    innText.textContent =
        innIntroDialogues[0];

    innDialogue.classList.remove("hidden");

}


// 여관 대화 계속
innNext.addEventListener("click", function () {

    innIntroIndex++;

    if (innIntroIndex < innIntroDialogues.length) {

        innText.textContent =
            innIntroDialogues[innIntroIndex];

    } else {

        // 대화 종료 → 자유 조사 시작

        innDialogue.classList.add("hidden");

    }

});

// ==============================
// 여관 - 실종 포스터 뷰어
// ==============================

const missingPosterButton =
    document.getElementById("missingPosterButton");

const missingPosterModal =
    document.getElementById("missingPosterModal");

const missingPosterImage =
    document.getElementById("missingPosterImage");

const closeMissingPoster =
    document.getElementById("closeMissingPoster");

const previousPoster =
    document.getElementById("previousPoster");

const nextPoster =
    document.getElementById("nextPoster");

const posterNumber =
    document.getElementById("posterNumber");


let currentPoster = 1;

const totalPosters = 6;


// 포스터 표시
function showPoster() {

    missingPosterImage.src =
        `images/poster${currentPoster}.jpg`;

    posterNumber.textContent =
        `${currentPoster} / ${totalPosters}`;
}


// 포스터 묶음 열기
missingPosterButton.addEventListener("click", function () {

    currentPoster = 1;

    showPoster();

    missingPosterModal.classList.remove("hidden");

});


// 다음 포스터
nextPoster.addEventListener("click", function () {

    currentPoster++;

    if (currentPoster > totalPosters) {
        currentPoster = 1;
    }

    showPoster();

});


// 이전 포스터
previousPoster.addEventListener("click", function () {

    currentPoster--;

    if (currentPoster < 1) {
        currentPoster = totalPosters;
    }

    showPoster();

});


// 닫기
closeMissingPoster.addEventListener("click", function () {

    missingPosterModal.classList.add("hidden");

});


// ==============================
// 여관 - 대걸레 조사
// ==============================

const mopArea =
    document.getElementById("mopArea");

const mopImage =
    document.getElementById("mopImage");

const mopDialogue =
    document.getElementById("mopDialogue");

const mopText =
    document.getElementById("mopText");

const mopNext =
    document.getElementById("mopNext");


const mopDialogues = [
    "요즘은 다 그런 거 써요.",
    "누구 머리냐고?",
    "내가 그것까지 알아야 해?"
];


let mopDialogueIndex = 0;

// false = 물통 안
// true = 꺼낸 상태
let mopIsOut = false;


// ==============================
// 대걸레 클릭
// ==============================

mopArea.addEventListener("click", function () {

    if (mopIsOut) {

        mopIsOut = false;

        mopDialogue.classList.add("hidden");

        mopImage.src = "images/mop-bucket.png";

        mopImage.classList.remove("mopLift");
        mopImage.classList.remove("mopJumpScare");

        return;
    }


    mopIsOut = true;

    // 클릭하자마자 바로 변경
    mopImage.src = "images/mop-reveal.png";

    // 즉시 중앙으로 점프스케어
    mopImage.classList.add("mopJumpScare");


    // 아주 짧게 보여준 뒤 원래 조사 위치로
    setTimeout(function () {

        mopImage.classList.remove("mopJumpScare");

        mopImage.classList.add("mopLift");

    }, 380);


    // 거의 바로 여관 주인 대사
    setTimeout(function () {

        mopDialogueIndex = 0;

        mopText.textContent =
            mopDialogues[0];

        mopDialogue.classList.remove("hidden");

    }, 550);

});


// ==============================
// 여관 주인 대화
// ==============================

mopNext.addEventListener("click", function (event) {

    event.stopPropagation();

    mopDialogueIndex++;

    if (mopDialogueIndex < mopDialogues.length) {

        mopText.textContent =
            mopDialogues[mopDialogueIndex];

    } else {

        // 마지막 대사 종료
        mopDialogue.classList.add("hidden");

        // 대걸레 다시 넣기
        mopIsOut = false;

        mopImage.src =
            "images/mop-bucket.png";

        mopImage.classList.remove("mopLift");

    }

});