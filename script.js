const params = new URLSearchParams(window.location.search);
const key = params.get("key");

/*if (key !== "donqui1901") {
    document.body.innerHTML = `
        <div style="
            height:100vh;
            display:flex;
            align-items:center;
            justify-content:center;
            text-align:center;
            background:#111;
            color:white;
            font-family:sans-serif;
            padding:30px;
        ">
            <div>
                <h2>접근할 수 없는 기록입니다.</h2>
                <p>현장에 설치된 QR 코드를 통해 접속해주세요.</p>
            </div>
        </div>
    `;
    throw new Error("Invalid access key");
}*/

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

        // 수첩 지급
        notebookButton.classList.remove("hidden");

        // 시체 보관소 자료 기록
        morgueNotebookRecords.classList.remove("hidden");

        // "아직 기록된 내용이 없습니다" 제거
        notebookEmpty.classList.add("hidden");
    }
}

const notebookMissingPosters =
    document.getElementById("notebookMissingPosters");


notebookMissingPosters.addEventListener("click", function () {

    // 수첩 닫기
    notebookModal.classList.add("hidden");

    // 첫 번째 포스터부터 표시
    currentPoster = 1;
    showPoster();

    // 기존 실종자 포스터 뷰어 열기
    missingPosterModal.classList.remove("hidden");
});

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

let posterChecked = false;
let tableChecked = false;
let fireplaceChecked = false;
let mopChecked = false;
let visitLogChecked = false;


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

    posterChecked = true;
    checkInnInvestigation();

    // 수첩에 실종자 포스터 기록
    notebookMissingPosters.classList.remove("hidden");

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

const silverHairpinRecord =
    document.getElementById("silverHairpinRecord");

let silverHairpinFound = false;

// ==============================
// 여관 - 대걸레 조사
// ==============================

const mopArea =
    document.getElementById("mopArea");

const mopImage =
    document.getElementById("mopImage");

const mopDialogue =
    document.getElementById("mopDialogue");

const mopSpeaker =
    document.getElementById("mopSpeaker");

const mopText =
    document.getElementById("mopText");

const mopNext =
    document.getElementById("mopNext");

const mopDialogues = [
    {
        speaker: "조사",
        text: "대걸레에 엉킨 머리카락 사이에서 무언가 반짝인다."
    },
    {
        speaker: "발견물",
        text: "은빛 나비 모양 머리핀 1점 — 머리카락 뭉치 깊숙이 엉켜 있다."
    },
    {
        speaker: "여관 주인",
        text: "그거요? 이발소에서 잘라낸 머리로 만든 거예요."
    },
    {
        speaker: "여관 주인",
        text: "요즘은 다들 그렇게 써요. 아깝잖아요, 버리기엔."
    }
];

let mopDialogueIndex = 0;

// false = 물통 안
// true = 꺼낸 상태
let mopIsOut = false;


// ==============================
// 대걸레 클릭
// ==============================

mopArea.addEventListener("click", function () {

    mopChecked = true;
    checkInnInvestigation();

    if (mopIsOut) {

        mopIsOut = false;

        mopDialogue.classList.add("hidden");

        mopImage.src = "images/mop-bucket.png";

        mopImage.classList.remove("mopLift");
        mopImage.classList.remove("mopJumpScare");

        return;
    }


    mopIsOut = true;

    if (!silverHairpinFound) {

    silverHairpinFound = true;

    silverHairpinRecord.classList.remove("hidden");

}


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

        mopSpeaker.textContent =
            mopDialogues[0].speaker;

        mopText.textContent =
            mopDialogues[0].text;

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

        const dialogue =
            mopDialogues[mopDialogueIndex];

        mopSpeaker.textContent =
            dialogue.speaker;

        mopText.textContent =
            dialogue.text;

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

// ==============================
// 여관 - 벽난로 조사
// ==============================

const fireplaceButton =
    document.getElementById("fireplaceButton");

const fireplaceDialogue =
    document.getElementById("fireplaceDialogue");

const fireplaceSpeaker =
    document.getElementById("fireplaceSpeaker");

const fireplaceText =
    document.getElementById("fireplaceText");

const fireplaceNext =
    document.getElementById("fireplaceNext");


const fireplaceDialogues = [
    {
        speaker: "조사",
        text: "벽난로 안쪽에서 금속성 물체 하나가 눈에 띈다."
    },
    {
        speaker: "발견물",
        text: "그을린 금반지 1점 — 안쪽에 'T . M'이라는 각인이 남아 있다."
    },
    {
        speaker: "조사",
        text: "실종자 토마스가 착용하고 있었다는 결혼반지와 특징이 일치한다."
    },
    {
        speaker: "여관 주인",
        text: "밤늦게 벽난로 좀 쓰겠다는 손님이 종종 있어요."
    },
    {
        speaker: "여관 주인",
        text: "뭘 태우는지야... 제가 알 게 뭐예요. 돈만 내면 되죠."
    }
];

let goldRingFound = false;
let fireplaceDialogueIndex = 0;

const goldRingRecord =
    document.getElementById("goldRingRecord");

fireplaceButton.addEventListener("click", function () {

    fireplaceDialogueIndex = 0;

    fireplaceSpeaker.textContent =
        fireplaceDialogues[0].speaker;

    fireplaceText.textContent =
        fireplaceDialogues[0].text;

    fireplaceDialogue.classList.remove("hidden");

});


fireplaceNext.addEventListener("click", function () {

    fireplaceDialogueIndex++;

    if (fireplaceDialogueIndex < fireplaceDialogues.length) {

        const dialogue =
            fireplaceDialogues[fireplaceDialogueIndex];

        fireplaceSpeaker.textContent =
            dialogue.speaker;

        fireplaceText.textContent =
            dialogue.text;

   } else {

        fireplaceDialogue.classList.add("hidden");

        fireplaceChecked = true;
        checkInnInvestigation();

        if (!goldRingFound) {

            goldRingFound = true;

            goldRingRecord.classList.remove("hidden");
            showRingButton.classList.remove("hidden");

        }
}

});

const showRingButton =
    document.getElementById("showRingButton");

const ringDialogue =
    document.getElementById("ringDialogue");

const ringSpeaker =
    document.getElementById("ringSpeaker");

const ringText =
    document.getElementById("ringText");

const ringNext =
    document.getElementById("ringNext");

const visitLogModal =
    document.getElementById("visitLogModal");

const closeVisitLog =
    document.getElementById("closeVisitLog");

const notebookVisitLog =
    document.getElementById("notebookVisitLog");


const ringDialogues = [
    {
        speaker: "여관 주인",
        text: "...그 반지는 어디서 찾았죠?"
    },
    {
        speaker: "여관 주인",
        text: "벽난로에서요?"
    },
    {
        speaker: "여관 주인",
        text: "잠깐만요. 그날 밤 기록이 있을지도 모르겠네요."
    },
    {
        speaker: "여관 주인",
        text: "여기요. 야간 방문일지입니다."
    }
];

let ringDialogueIndex = 0;

// 반지를 보여준다
showRingButton.addEventListener("click", function () {

    ringDialogueIndex = 0;

    ringSpeaker.textContent =
        ringDialogues[0].speaker;

    ringText.textContent =
        ringDialogues[0].text;

    ringDialogue.classList.remove("hidden");

});

//대화 진행
ringNext.addEventListener("click", function () {

    ringDialogueIndex++;

    if (ringDialogueIndex < ringDialogues.length) {

        const dialogue =
            ringDialogues[ringDialogueIndex];

        ringSpeaker.textContent =
            dialogue.speaker;

        ringText.textContent =
            dialogue.text;

    } else {

        ringDialogue.classList.add("hidden");
        showRingButton.classList.add("hidden");

        visitLogModal.classList.remove("hidden");

        // 방문일지를 수첩에 기록
        notebookVisitLog.classList.remove("hidden");

        visitLogChecked = true;
        checkInnInvestigation();
    }

});

// 방문일지 닫기
closeVisitLog.addEventListener("click", function () {

    notebookModal.classList.add("hidden");

    visitLogModal.classList.add("hidden");

});

notebookVisitLog.addEventListener("click", function () {

    notebookModal.classList.add("hidden");

    visitLogModal.classList.remove("hidden");

});

// ==============================
// 여관 - 식탁 조사
// ==============================

const tableButton =
    document.getElementById("tableButton");

const tableDialogue =
    document.getElementById("tableDialogue");

const tableSpeaker =
    document.getElementById("tableSpeaker");

const tableText =
    document.getElementById("tableText");

const tableNext =
    document.getElementById("tableNext");


const tableDialogues = [

    {
        speaker: "조사",
        text: "여관에서 판매하고 남은 주류와 음식이다."
    },

    {
        speaker: "조사",
        text: "특히 술은 돈키호테가 즐겨 마시던 제품이며, 다른 사람들은 잘 찾지 않는다고 한다."
    },

    {
        speaker: "여관 주인",
        text: "음식에 손 대면 사야 되는 거 알죠?"
    },

    {
        speaker: "조사",
        text: "여관에서 사용하는 식탁이다. 밑이 넉넉한 게 누군가 숨어 있어도 알지 못할 것 같다."
    }

];


let tableDialogueIndex = 0;


tableButton.addEventListener("click", function () {

    tableDialogueIndex = 0;

    tableSpeaker.textContent =
        tableDialogues[0].speaker;

    tableText.textContent =
        tableDialogues[0].text;

    tableDialogue.classList.remove("hidden");

});


tableNext.addEventListener("click", function () {
    tableChecked = true;
    checkInnInvestigation();

    tableDialogueIndex++;

    if (tableDialogueIndex < tableDialogues.length) {

        const dialogue =
            tableDialogues[tableDialogueIndex];

        tableSpeaker.textContent =
            dialogue.speaker;

        tableText.textContent =
            dialogue.text;

    } else {

        tableDialogue.classList.add("hidden");

    }

});

const finishInnButton =
    document.getElementById("finishInnButton");

const innEndDialogue =
    document.getElementById("innEndDialogue");

const innEndText =
    document.getElementById("innEndText");

const innEndNext =
    document.getElementById("innEndNext");


function checkInnInvestigation() {

    if (
        posterChecked &&
        tableChecked &&
        fireplaceChecked &&
        mopChecked &&
        visitLogChecked
    ) {

        finishInnButton.classList.remove("hidden");

    }

}

let innEndIndex = 0;

const innEndDialogues = [
    "충분히 조사를 마치셨나요?",
    "그럼 다음 장소로 이동하겠습니다."
];

finishInnButton.addEventListener("click", function () {

    finishInnButton.classList.add("hidden");

    innEndIndex = 0;

    innEndText.textContent =
        innEndDialogues[0];

    innEndDialogue.classList.remove("hidden");
});


innEndNext.addEventListener("click", function () {

    console.log("여관 종료 계속 버튼 클릭");

    innEndIndex++;

    console.log("현재 innEndIndex:", innEndIndex);

    if (innEndIndex < innEndDialogues.length) {

        innEndText.textContent =
            innEndDialogues[innEndIndex];

    } else {

        console.log("서재로 이동 시작");

        innEndDialogue.classList.add("hidden");
        innScene.classList.add("hidden");

        console.log("studyScene:", studyScene);

        studyScene.classList.remove("hidden");

        startStudyIntro();

        console.log("서재 이동 완료");
    }

});

const notebookButton =
    document.getElementById("notebookButton");

const notebookModal =
    document.getElementById("notebookModal");

const closeNotebook =
    document.getElementById("closeNotebook");


notebookButton.addEventListener("click", function () {

    notebookModal.classList.remove("hidden");

});


closeNotebook.addEventListener("click", function () {

    notebookModal.classList.add("hidden");

});

const morgueNotebookRecords =
    document.getElementById("morgueNotebookRecords");

const notebookEmpty =
    document.getElementById("notebookEmpty");

const notebookAutopsy =
    document.getElementById("notebookAutopsy");

const notebookSuspects =
    document.getElementById("notebookSuspects");

const notebookActionRecord =
    document.getElementById("notebookActionRecord");


notebookAutopsy.addEventListener("click", function () {

    notebookModal.classList.add("hidden");

    autopsyModal.classList.remove("hidden");

});


notebookSuspects.addEventListener("click", function () {

    notebookModal.classList.add("hidden");

    suspectModal.classList.remove("hidden");

});


notebookActionRecord.addEventListener("click", function () {

    notebookModal.classList.add("hidden");

    recordModal.classList.remove("hidden");

});

// ==============================
// CHAPTER 2 - 서재
// ==============================

let safeNoteFound = false;

const finishStudyButton =
    document.getElementById("finishStudyButton");

const studyEndDialogue =
    document.getElementById("studyEndDialogue");

const studyEndText =
    document.getElementById("studyEndText");

const studyEndNext =
    document.getElementById("studyEndNext");

const notebookSafeNote =
    document.getElementById("notebookSafeNote");

const studyScene =
    document.getElementById("studyScene");

const studyDialogue =
    document.getElementById("studyDialogue");

const studyText =
    document.getElementById("studyText");

const studyNext =
    document.getElementById("studyNext");

const safeNoteModal =
    document.getElementById("safeNoteModal");

const closeSafeNote =
    document.getElementById("closeSafeNote");

const furnaceButton =
    document.getElementById("furnaceButton");

const diaryModal =
    document.getElementById("diaryModal");

const closeDiary =
    document.getElementById("closeDiary");

const notebookDiary =
    document.getElementById("notebookDiary");

let diaryFound = false;

function checkStudyInvestigation() {

    if (safeNoteFound && diaryFound) {

        finishStudyButton.classList.remove("hidden");

    }
}

const windmillScene =
    document.getElementById("windmillScene");

const windmillDialogue =
    document.getElementById("windmillDialogue");

const windmillText =
    document.getElementById("windmillText");

const windmillNext =
    document.getElementById("windmillNext");

furnaceButton.addEventListener("click", function () {

    diaryModal.classList.remove("hidden");

    if (!diaryFound) {
        diaryFound = true;
        notebookDiary.classList.remove("hidden");
    }
    checkStudyInvestigation();
});

notebookDiary.addEventListener("click", function () {

    notebookModal.classList.add("hidden");
    diaryModal.classList.remove("hidden");

});

closeDiary.addEventListener("click", function () {
    diaryModal.classList.add("hidden");
});

closeSafeNote.addEventListener("click", function () {
    safeNoteModal.classList.add("hidden");
});


// ==============================
// 서재 입장 대화
// ==============================

const studyDialogues = [

    '이곳은 돈키호테의 "서재"입니다.',

    '돈키호테는 이곳에서 줄곧 "기사와 관련된" 책을 읽곤 했었죠.',

    '한 번 읽기 시작하면 3시간이고 4시간이고 나오질 않을 정도였으니 말이죠.',

    '돈키호테가 이상 행동을 보이기 시작한 후, 자신을 기사라 칭하는 것을 보고 신부와 산초, 그리고 그의 조카가 기사와 관련된 모든 책을 태워버리는 "책 화형식"을 진행하였다고 합니다.',

    '이후 잠시 정신을 차리는가 싶더니, 어느새 다시 기사 행세를 하기 시작했다고 하죠.',

    '이곳에서 잠시 조사를 진행하신 후, 이동할 수 있도록 하겠습니다.'

];

let studyDialogueIndex = 0;


function startStudyIntro() {

    studyDialogueIndex = 0;

    studyText.textContent =
        studyDialogues[0];

    studyDialogue.classList.remove("hidden");
}


studyNext.addEventListener("click", function () {

    studyDialogueIndex++;

    if (studyDialogueIndex < studyDialogues.length) {

        studyText.textContent =
            studyDialogues[studyDialogueIndex];

    } else {

        studyDialogue.classList.add("hidden");

    }

});


// ==============================
// 책장 조사
// ==============================

const bookshelfButton =
    document.getElementById("bookshelfButton");

const bookshelfModal =
    document.getElementById("bookshelfModal");

const closeBookshelf =
    document.getElementById("closeBookshelf");


bookshelfButton.addEventListener("click", function () {

    bookshelfModal.classList.remove("hidden");

});


closeBookshelf.addEventListener("click", function () {

    bookshelfModal.classList.add("hidden");

});


// ==============================
// 책 금고
// ==============================

const bookSafeButton =
    document.getElementById("bookSafeButton");

const bookSafeModal =
    document.getElementById("bookSafeModal");

const closeBookSafe =
    document.getElementById("closeBookSafe");

const bookSafeInput =
    document.getElementById("bookSafeInput");

const openBookSafe =
    document.getElementById("openBookSafe");

const bookSafeMessage =
    document.getElementById("bookSafeMessage");



bookSafeButton.addEventListener("click", function () {

    bookSafeInput.value = "";
    bookSafeMessage.textContent = "";

    bookSafeModal.classList.remove("hidden");

});


// 금고 정답 확인
openBookSafe.addEventListener("click", function () {

    if (bookSafeInput.value === "317") {

        bookSafeModal.classList.add("hidden");

        safeNoteModal.classList.remove("hidden");

        notebookSafeNote.classList.remove("hidden");

        safeNoteFound = true;
        checkStudyInvestigation();
    }

});

notebookSafeNote.addEventListener("click", function () {

    notebookModal.classList.add("hidden");

    safeNoteModal.classList.remove("hidden");

});

let studyEndIndex = 0;

const studyEndDialogues = [
    "충분히 조사를 마치셨나요?",
    "그럼 다음 장소로 이동하겠습니다."
];


finishStudyButton.addEventListener("click", function () {

    finishStudyButton.classList.add("hidden");

    studyEndIndex = 0;

    studyEndText.textContent =
        studyEndDialogues[0];

    studyEndDialogue.classList.remove("hidden");

});


studyEndNext.addEventListener("click", function () {

    studyEndIndex++;

    if (studyEndIndex < studyEndDialogues.length) {

        studyEndText.textContent =
            studyEndDialogues[studyEndIndex];

    } else {

        // 서재 종료
        studyEndDialogue.classList.add("hidden");
        studyScene.classList.add("hidden");

        // 풍차 입장
        windmillScene.classList.remove("hidden");

        startWindmillIntro();

    }

});

// ==============================
// CHAPTER 3 - 풍차
// ==============================

let windmillInfoChecked = false;
let windmillDoorChecked = false;
let windmillBirdChecked = false;
let windmillCartChecked = false;

let crackUnlocked = false;

function checkWindmillCrackUnlock() {

    if (
        windmillInfoChecked &&
        windmillDoorChecked &&
        windmillBirdChecked &&
        windmillCartChecked &&
        !crackUnlocked
    ) {

        crackUnlocked = true;

        // 풍차 날개를 천천히 돌게 한다
        const windmillBlades =
            document.getElementById("windmillBlades");

        windmillBlades.classList.add("slowBlades");

    }

}

const finishWindmillButton =
    document.getElementById("finishWindmillButton");

const windmillEndDialogue =
    document.getElementById("windmillEndDialogue");

const windmillEndText =
    document.getElementById("windmillEndText");

const windmillEndNext =
    document.getElementById("windmillEndNext");

const notebookWindmillInfo =
    document.getElementById("notebookWindmillInfo");

const notebookCrackEvidence =
    document.getElementById("notebookCrackEvidence");

const windmillDialogues = [

        '이 곳은 돈키호테의 정신 이상이 극도로 발현되었던 곳이며 또한 돈키호테가 사망한 장소이기도 합니다.',

        '돈키호테는 "풍차"를 보고 "거인"이라고 칭하며 무작정 달려들었다가 크게 다치고 말았죠.' ,
        
        '정말 미치지 않고서야 그런 짓을 누가 할 수 있을까요?',

        '그 사건으로 풍차 3호기는 작은 균열이 생겼다고 합니다.' ,
        
        '아무래도 오랫동안 사용하지 않은 풍차이다 보니 낡아서 그랬을지도 모르겠군요.',

        '이 곳에서 잠시 조사를 진행하신 후, 이동할 수 있도록 하겠습니다.'

];


let windmillDialogueIndex = 0;


function startWindmillIntro() {

    windmillDialogueIndex = 0;

    windmillText.textContent =
        windmillDialogues[0];

    windmillDialogue.classList.remove("hidden");

}


windmillNext.addEventListener("click", function () {

    windmillDialogueIndex++;

    if (
        windmillDialogueIndex <
        windmillDialogues.length
    ) {

        windmillText.textContent =
            windmillDialogues[windmillDialogueIndex];

    } else {

        // 입장 대화 종료 → 자유 조사
        windmillDialogue.classList.add("hidden");

    }

});

const windmillInfoButton =
    document.getElementById("windmillInfoButton");

const windmillInfoModal =
    document.getElementById("windmillInfoModal");

const closeWindmillInfo =
    document.getElementById("closeWindmillInfo");


windmillInfoButton.addEventListener("click", function () {

    windmillInfoModal.classList.remove("hidden");

    windmillInfoChecked = true;

    // 수첩에 기록
    notebookWindmillInfo.classList.remove("hidden");

    checkWindmillCrackUnlock();

});

notebookWindmillInfo.addEventListener("click", function () {

    notebookModal.classList.add("hidden");

    windmillInfoModal.classList.remove("hidden");

});


closeWindmillInfo.addEventListener("click", function () {

    windmillInfoModal.classList.add("hidden");

});

const windmillDoorButton =
    document.getElementById("windmillDoorButton");

const windmillDoorDialogue =
    document.getElementById("windmillDoorDialogue");

const windmillDoorSpeaker =
    document.getElementById("windmillDoorSpeaker");

const windmillDoorText =
    document.getElementById("windmillDoorText");

const windmillDoorNext =
    document.getElementById("windmillDoorNext");

const closeWindmillDoor =
    document.getElementById("closeWindmillDoor");


const windmillDoorDialogues = [

    {
        speaker: "조사",
        text: "풍차의 문은 굳게 닫혀 있다."
    },

    {
        speaker: "산초의 종자",
        text: "풍차 3호기의 주인이 사라진 이후, 이 문은 단 한 번도 열린 적이 없다고 합니다."
    },

    {
        speaker: "조사",
        text: "오랫동안 사용하지 않은 흔적이 남아 있다."
    },

    {
        speaker: "산초의 종자",
        text: "그런데도 풍차의 날개는 계속 돌아가고 있군요."
    }

];


let windmillDoorIndex = 0;


windmillDoorButton.addEventListener("click", function () {

    windmillDoorIndex = 0;

    windmillDoorSpeaker.textContent =
        windmillDoorDialogues[0].speaker;

    windmillDoorText.textContent =
        windmillDoorDialogues[0].text;

    windmillDoorDialogue.classList.remove("hidden");

});


windmillDoorNext.addEventListener("click", function () {

    windmillDoorIndex++;

    if (windmillDoorIndex < windmillDoorDialogues.length) {

        const dialogue =
            windmillDoorDialogues[windmillDoorIndex];

        windmillDoorSpeaker.textContent =
            dialogue.speaker;

        windmillDoorText.textContent =
            dialogue.text;

    } else {

        windmillDoorDialogue.classList.add("hidden");

        windmillDoorChecked = true;

        checkWindmillCrackUnlock();

    }

});


closeWindmillDoor.addEventListener("click", function () {

    windmillDoorDialogue.classList.add("hidden");

});

// ==============================
// 풍차 - 새들의 흔적
// ==============================

const windmillBirdButton =
    document.getElementById("windmillBirdButton");

const windmillBirdModal =
    document.getElementById("windmillBirdModal");

const closeWindmillBird =
    document.getElementById("closeWindmillBird");

const windmillBirdSpeaker =
    document.getElementById("windmillBirdSpeaker");

const windmillBirdText =
    document.getElementById("windmillBirdText");

const windmillBirdNext =
    document.getElementById("windmillBirdNext");


const windmillBirdDialogues = [

    {
        speaker: "조사",
        text: "풍차 아래에 새들의 흔적이 남아 있다."
    },

    {
        speaker: "산초의 종자",
        text: "새들이 풍차 날개에 부딪히는 일은 종종 있다고 합니다."
    },

    {
        speaker: "후안의 증언",
        text: '"아무래도 동물들은 본능에 의해 움직일 때가 더 많이 있죠."'
    },

    {
        speaker: "조사",
        text: "여러 마리가 같은 장소에 모여들었던 것 같다. 무엇 때문에 이곳까지 접근했던 걸까?"
    }

];


let windmillBirdIndex = 0;


windmillBirdButton.addEventListener("click", function () {

    windmillBirdIndex = 0;

    windmillBirdSpeaker.textContent =
        windmillBirdDialogues[0].speaker;

    windmillBirdText.textContent =
        windmillBirdDialogues[0].text;

    windmillBirdModal.classList.remove("hidden");

});


windmillBirdNext.addEventListener("click", function () {

    windmillBirdIndex++;

    if (windmillBirdIndex < windmillBirdDialogues.length) {

        const dialogue =
            windmillBirdDialogues[windmillBirdIndex];

        windmillBirdSpeaker.textContent =
            dialogue.speaker;

        windmillBirdText.textContent =
            dialogue.text;

    } else {

        windmillBirdModal.classList.add("hidden");

        windmillBirdChecked = true;

        checkWindmillCrackUnlock();
    }

});

//수레
closeWindmillBird.addEventListener("click", function () {

    windmillBirdModal.classList.add("hidden");

});

const windmillCartButton =
    document.getElementById("windmillCartButton");

const windmillCartModal =
    document.getElementById("windmillCartModal");

const closeWindmillCart =
    document.getElementById("closeWindmillCart");

const windmillCartSpeaker =
    document.getElementById("windmillCartSpeaker");

const windmillCartText =
    document.getElementById("windmillCartText");

const windmillCartNext =
    document.getElementById("windmillCartNext");


const windmillCartDialogues = [

    {
        speaker: "조사",
        text: "무언가를 운반할 때 사용하는 낡은 수레다."
    },

    {
        speaker: "조사",
        text: "내부는 생각보다 공간이 넉넉하다."
    },

    {
        speaker: "조사",
        text: "사람이 몸을 숨긴다면 밖에서는 쉽게 알아차리지 못할 것 같다."
    }

];


let windmillCartIndex = 0;


windmillCartButton.addEventListener("click", function () {

    windmillCartIndex = 0;

    windmillCartSpeaker.textContent =
        windmillCartDialogues[0].speaker;

    windmillCartText.textContent =
        windmillCartDialogues[0].text;

    windmillCartModal.classList.remove("hidden");

});


windmillCartNext.addEventListener("click", function () {

    windmillCartIndex++;

    if (windmillCartIndex < windmillCartDialogues.length) {

        const dialogue =
            windmillCartDialogues[windmillCartIndex];

        windmillCartSpeaker.textContent =
            dialogue.speaker;

        windmillCartText.textContent =
            dialogue.text;

    } else {

        windmillCartModal.classList.add("hidden");

        windmillCartChecked = true;

        checkWindmillCrackUnlock();

    }

});


closeWindmillCart.addEventListener("click", function () {

    windmillCartModal.classList.add("hidden");

});

// ==============================
// 풍차 - 균열 조사
// ==============================

const windmillCrackButton =
    document.getElementById("windmillCrackButton");

const windmillCrackModal =
    document.getElementById("windmillCrackModal");

const windmillCrackSpeaker =
    document.getElementById("windmillCrackSpeaker");

const windmillCrackText =
    document.getElementById("windmillCrackText");

const windmillCrackNext =
    document.getElementById("windmillCrackNext");

const closeWindmillCrack =
    document.getElementById("closeWindmillCrack");

const crackEvidenceModal =
    document.getElementById("crackEvidenceModal");

const closeCrackEvidence =
    document.getElementById("closeCrackEvidence");


let windmillCrackChecked = false;


// 균열 클릭
windmillCrackButton.addEventListener("click", function () {

    // 아직 다른 4곳을 조사하지 않은 경우
    if (!crackUnlocked) {

        windmillCrackSpeaker.textContent = "조사";

        windmillCrackText.textContent =
            "균열 안쪽에 무언가 있는 것 같지만, 날개가 계속 움직이고 있어 자세히 살펴보기 어렵다.";

        windmillCrackModal.classList.remove("hidden");

        return;
    }


    // 조사 가능 상태
    windmillCrackSpeaker.textContent =
        "산초의 종자";

    windmillCrackText.textContent =
        "바람이 조금 잦아들었습니다. 날개의 움직임도 느려졌군요. 지금이라면 균열 안쪽을 확인할 수 있겠습니다.";

    windmillCrackModal.classList.remove("hidden");

});


// 균열 대화의 계속 버튼
windmillCrackNext.addEventListener("click", function () {

    // 아직 해금 전이라면 힌트만 보고 종료
    if (!crackUnlocked) {

        windmillCrackModal.classList.add("hidden");

        return;
    }


    // 해금 후라면 발견물 표시
    windmillCrackModal.classList.add("hidden");

    crackEvidenceModal.classList.remove("hidden");

    windmillCrackChecked = true;


    // ★ 수첩에 균열 단서 추가
    notebookCrackEvidence.classList.remove("hidden");


    // 풍차 조사 완료 버튼이 있다면 표시
    if (typeof finishWindmillButton !== "undefined") {
        finishWindmillButton.classList.remove("hidden");
    }

});


// 균열 대화 닫기
closeWindmillCrack.addEventListener("click", function () {

    windmillCrackModal.classList.add("hidden");

});


// 발견물 닫기
closeCrackEvidence.addEventListener("click", function () {

    crackEvidenceModal.classList.add("hidden");

});


// 수첩에서 균열 발견물 다시 보기
notebookCrackEvidence.addEventListener("click", function () {

    notebookModal.classList.add("hidden");

    crackEvidenceModal.classList.remove("hidden");

});

let windmillEndIndex = 0;

const windmillEndDialogues = [

    "충분히 조사를 마치셨나요?",

    "사용하지 않는 풍차가 계속 돌아가고 있다는 것도 이상하지만...",

    "균열 안에서 발견된 것들도 마음에 걸리는군요.",

    "일단 모두 수첩에 기록해두도록 하죠.",

    "그럼 다음 장소로 이동하겠습니다."

];


finishWindmillButton.addEventListener("click", function () {

    finishWindmillButton.classList.add("hidden");

    windmillEndIndex = 0;

    windmillEndText.textContent =
        windmillEndDialogues[0];

    windmillEndDialogue.classList.remove("hidden");

});


windmillEndNext.addEventListener("click", function () {

    windmillEndIndex++;

    if (windmillEndIndex < windmillEndDialogues.length) {

        windmillEndText.textContent =
            windmillEndDialogues[windmillEndIndex];

    } else {

        windmillEndDialogue.classList.add("hidden");

         // 풍차 종료
        windmillScene.classList.add("hidden");

        // 목장 시작
        pastureScene.classList.remove("hidden");

        startPastureIntro();

    }

});

// ==============================
// CHAPTER 4 - 목장
// ==============================

const notebookPastureNote =
    document.getElementById("notebookPastureNote");

const notebookPastureEvidence =
    document.getElementById("notebookPastureEvidence");

const pastureScene =
    document.getElementById("pastureScene");

const pastureDialogue =
    document.getElementById("pastureDialogue");

const pastureSpeaker =
    document.getElementById("pastureSpeaker");

const pastureText =
    document.getElementById("pastureText");

const pastureNext =
    document.getElementById("pastureNext");


const pastureNoteButton =
    document.getElementById("pastureNoteButton");

const pastureFenceButton =
    document.getElementById("pastureFenceButton");

const pastureSheepButton =
    document.getElementById("pastureSheepButton");

const pastureSceneButton =
    document.getElementById("pastureSceneButton");

    const pastureIntroDialogues = [

    {
        speaker: "산초의 종자",
        text: '이곳은 돈키호테가 양떼가 일으킨 먼지 구름을 전쟁으로 착각하고 달려들었던 양떼 목장입니다.'
    },

    {
        speaker: "산초의 종자",
        text: "그 일이 있었던 직후, 목장 주인 후안은 이곳에 철조망을 설치했다고 하죠."
    },

    {
        speaker: "산초의 종자",
        text: "그런데... 무언가 이상하군요."
    },

    {
        speaker: "산초의 종자",
        text: "양들은 겁이 많아서 사람이 다가가면 멀리 도망치는 게 보통입니다."
    },

    {
        speaker: "산초의 종자",
        text: "그런데 이곳의 양들은 도망가기는커녕 오히려 우리 쪽으로 다가오고 있군요."
    },

    {
        speaker: "산초의 종자",
        text: '최근 후안은 "양들이 사료를 먹지 않아 걱정했는데, 이상하게도 오히려 살이 찌고 있다"고 말했다고 합니다.'
    },

    {
        speaker: "산초의 종자",
        text: '그리고는 "어쩌면 하나님의 은혜일지도 모른다"며 최근 더욱 신실해진 모습을 보이고 있다고 하더군요.'
    },

    {
        speaker: "산초의 종자",
        text: "우선 목장 주변을 조사해보도록 하죠."
    }

];

let pastureIntroIndex = 0;

const finishPastureButton =
    document.getElementById("finishPastureButton");

const pastureEndDialogue =
    document.getElementById("pastureEndDialogue");

const pastureEndText =
    document.getElementById("pastureEndText");

const pastureEndNext =
    document.getElementById("pastureEndNext");


function checkPastureInvestigation() {

    if (
        pastureNoteChecked &&
        pastureSheepChecked &&
        pastureFenceChecked &&
        pastureEvidenceChecked
    ) {

        finishPastureButton.classList.remove("hidden");

    }

}


function startPastureIntro() {

    pastureIntroIndex = 0;

    pastureSpeaker.textContent =
        pastureIntroDialogues[0].speaker;

    pastureText.textContent =
        pastureIntroDialogues[0].text;

    pastureDialogue.classList.remove("hidden");

}


pastureNext.addEventListener("click", function () {

    pastureIntroIndex++;

    if (pastureIntroIndex < pastureIntroDialogues.length) {

        const dialogue =
            pastureIntroDialogues[pastureIntroIndex];

        pastureSpeaker.textContent =
            dialogue.speaker;

        pastureText.textContent =
            dialogue.text;

    } else {

        // 대화 종료
        pastureDialogue.classList.add("hidden");

        // 조사 시작
        pastureNoteButton.classList.remove("hidden");
        pastureFenceButton.classList.remove("hidden");
        pastureSheepButton.classList.remove("hidden");
        pastureSceneButton.classList.remove("hidden");

    }

});// ==============================
// 양떼 목장 - 목장 주인의 쪽지
// ==============================

const pastureNoteModal =
    document.getElementById("pastureNoteModal");

const closePastureNote =
    document.getElementById("closePastureNote");

let pastureNoteChecked = false;


pastureNoteButton.addEventListener("click", function () {

    pastureNoteModal.classList.remove("hidden");

    pastureNoteChecked = true;

    // 수첩에 기록
    notebookPastureNote.classList.remove("hidden");

    checkPastureInvestigation();

});

notebookPastureNote.addEventListener("click", function () {

    notebookModal.classList.add("hidden");

    pastureNoteModal.classList.remove("hidden");

});


closePastureNote.addEventListener("click", function () {

    pastureNoteModal.classList.add("hidden");

});// ==============================
// 양떼 목장 - 양떼 조사
// ==============================

const pastureSheepModal =
    document.getElementById("pastureSheepModal");

const closePastureSheep =
    document.getElementById("closePastureSheep");

const pastureSheepSpeaker =
    document.getElementById("pastureSheepSpeaker");

const pastureSheepText =
    document.getElementById("pastureSheepText");

const pastureSheepNext =
    document.getElementById("pastureSheepNext");


const pastureSheepDialogues = [

    {
        speaker: "조사",
        text: "울타리 가까이 다가가자 몇 마리의 양이 이쪽을 바라본다."
    },

    {
        speaker: "조사",
        text: "도망갈 것이라 생각했지만, 오히려 천천히 이쪽으로 다가오기 시작한다."
    },

    {
        speaker: "산초의 종자",
        text: "이상하군요. 후안의 말로는 이 양들은 원래 겁이 아주 많다고 했는데요."
    },

    {
        speaker: "조사",
        text: "양들은 일정한 거리를 두고 멈춰 서서 이쪽을 계속 바라보고 있다."
    },

    {
        speaker: "산초의 종자",
        text: "우리를 경계한다기보다는... 무언가를 기다리는 것처럼 보이는군요."
    }

];


let pastureSheepIndex = 0;
let pastureSheepChecked = false;


pastureSheepButton.addEventListener("click", function () {

    pastureSheepIndex = 0;

    pastureSheepSpeaker.textContent =
        pastureSheepDialogues[0].speaker;

    pastureSheepText.textContent =
        pastureSheepDialogues[0].text;

    pastureSheepModal.classList.remove("hidden");

});


pastureSheepNext.addEventListener("click", function () {

    pastureSheepIndex++;

    if (pastureSheepIndex < pastureSheepDialogues.length) {

        const dialogue =
            pastureSheepDialogues[pastureSheepIndex];

        pastureSheepSpeaker.textContent =
            dialogue.speaker;

        pastureSheepText.textContent =
            dialogue.text;

    } else {

        pastureSheepModal.classList.add("hidden");

        pastureSheepChecked = true;

        checkPastureInvestigation();

    }

});


closePastureSheep.addEventListener("click", function () {

    pastureSheepModal.classList.add("hidden");

});// ==============================
// 양떼 목장 - 울타리 조사
// ==============================

const pastureFenceModal =
    document.getElementById("pastureFenceModal");

const closePastureFence =
    document.getElementById("closePastureFence");

const pastureFenceSpeaker =
    document.getElementById("pastureFenceSpeaker");

const pastureFenceText =
    document.getElementById("pastureFenceText");

const pastureFenceNext =
    document.getElementById("pastureFenceNext");


const pastureFenceDialogues = [

    {
        speaker: "조사",
        text: "목장 주변을 따라 철조망이 길게 설치되어 있다."
    },

    {
        speaker: "산초의 종자",
        text: "돈키호테가 양떼를 향해 달려든 사건 이후 후안이 설치한 것이라고 합니다."
    },

    {
        speaker: "조사",
        text: "철조망 자체에서 특별한 흔적은 발견되지 않는다."
    },

    {
        speaker: "산초의 종자",
        text: "적어도 밖에서 아무렇게나 목장 안으로 들어오기는 어려워 보이는군요."
    }

];


let pastureFenceIndex = 0;
let pastureFenceChecked = false;


pastureFenceButton.addEventListener("click", function () {

    pastureFenceIndex = 0;

    pastureFenceSpeaker.textContent =
        pastureFenceDialogues[0].speaker;

    pastureFenceText.textContent =
        pastureFenceDialogues[0].text;

    pastureFenceModal.classList.remove("hidden");

});


pastureFenceNext.addEventListener("click", function () {

    pastureFenceIndex++;

    if (pastureFenceIndex < pastureFenceDialogues.length) {

        const dialogue =
            pastureFenceDialogues[pastureFenceIndex];

        pastureFenceSpeaker.textContent = dialogue.speaker;
        pastureFenceText.textContent = dialogue.text;

    } else {

        pastureFenceModal.classList.add("hidden");

        pastureFenceChecked = true;

        checkPastureInvestigation();

    }

});


closePastureFence.addEventListener("click", function () {

    pastureFenceModal.classList.add("hidden");

});// ==============================
// 양떼 목장 - 현장 흔적
// ==============================

const pastureEvidenceModal =
    document.getElementById("pastureEvidenceModal");

const closePastureEvidence =
    document.getElementById("closePastureEvidence");

const pastureEvidenceSpeaker =
    document.getElementById("pastureEvidenceSpeaker");

const pastureEvidenceText =
    document.getElementById("pastureEvidenceText");

const pastureEvidenceNext =
    document.getElementById("pastureEvidenceNext");


const pastureDiscoveryModal =
    document.getElementById("pastureDiscoveryModal");

const closePastureDiscovery =
    document.getElementById("closePastureDiscovery");


const pastureEvidenceDialogues = [

    {
        speaker: "조사",
        text: "울타리 안쪽에서 이상한 흔적이 발견된다."
    },

    {
        speaker: "조사",
        text: "근처에는 오래되어 녹이 슨 단검 한 자루가 떨어져 있다."
    },

    {
        speaker: "조사",
        text: "그리고 흙바닥에는 누군가 급하게 남긴 듯한 글씨가 있다."
    },

    {
        speaker: "발견",
        text: '"내 눈이 미친 것이 아니었다"'
    },

    {
        speaker: "산초의 종자",
        text: "이 문장... 돈키호테가 남긴 걸까요?"
    },

    {
        speaker: "조사",
        text: "주변을 조금 더 살펴보자 또 다른 흔적이 발견된다."
    },

    {
        speaker: "조사",
        text: "희끄무레한 가루가 뭉친 흔적이다."
    },

    {
        speaker: "산초의 종자",
        text: "잠깐만요. 이 가루... 어디선가 본 것 같지 않습니까?"
    },

    {
        speaker: "조사",
        text: "풍차 3호기의 균열에서 발견했던 가루와 외형과 질감이 매우 비슷하다."
    },

    {
        speaker: "조사",
        text: "그리고 그 곁에서 금속으로 정교하게 수리된 어금니 한 점이 발견된다."
    },

    {
        speaker: "산초의 종자",
        text: "이 정도의 처치는 아무나 할 수 있는 일이 아니었을 겁니다."
    }

];


let pastureEvidenceIndex = 0;
let pastureEvidenceChecked = false;


pastureSceneButton.addEventListener("click", function () {

    pastureEvidenceIndex = 0;

    pastureEvidenceSpeaker.textContent =
        pastureEvidenceDialogues[0].speaker;

    pastureEvidenceText.textContent =
        pastureEvidenceDialogues[0].text;

    pastureEvidenceModal.classList.remove("hidden");

});


pastureEvidenceNext.addEventListener("click", function () {

    pastureEvidenceIndex++;

    if (pastureEvidenceIndex < pastureEvidenceDialogues.length) {

        const dialogue =
            pastureEvidenceDialogues[pastureEvidenceIndex];

        pastureEvidenceSpeaker.textContent =
            dialogue.speaker;

        pastureEvidenceText.textContent =
            dialogue.text;

    } else {

        pastureEvidenceModal.classList.add("hidden");

        pastureDiscoveryModal.classList.remove("hidden");

        pastureEvidenceChecked = true;

        // 수첩에 기록
         notebookPastureEvidence.classList.remove("hidden");

         checkPastureInvestigation();

    }

});

notebookPastureEvidence.addEventListener("click", function () {

    notebookModal.classList.add("hidden");

    pastureDiscoveryModal.classList.remove("hidden");

});

closePastureEvidence.addEventListener("click", function () {

    pastureEvidenceModal.classList.add("hidden");

});


closePastureDiscovery.addEventListener("click", function () {

    pastureDiscoveryModal.classList.add("hidden");

});

const pastureEndDialogues = [

    "충분히 조사를 마치셨나요?",

    "사료를 거의 먹지 않는다는데도 양들은 오히려 살이 찌고 있었습니다.",

    "게다가 사람을 피하지 않고, 오히려 무언가를 기다리듯 다가왔죠.",

    "풍차에서 발견했던 것과 비슷한 가루도 이곳에서 발견됐습니다.",

    "그리고 금속으로 정교하게 수리된 어금니까지...",

    "서로 관계없어 보였던 흔적들이 조금씩 이어지고 있는 것 같군요.",

    "수첩에 기록한 내용을 잘 기억해두십시오.",

    "그럼 다음 장소로 이동하겠습니다."

];


let pastureEndIndex = 0;


finishPastureButton.addEventListener("click", function () {

    finishPastureButton.classList.add("hidden");

    pastureEndIndex = 0;

    pastureEndText.textContent =
        pastureEndDialogues[0];

    pastureEndDialogue.classList.remove("hidden");

});


pastureEndNext.addEventListener("click", function () {

    pastureEndIndex++;

    if (pastureEndIndex < pastureEndDialogues.length) {

        pastureEndText.textContent =
            pastureEndDialogues[pastureEndIndex];

    } else {

        pastureEndDialogue.classList.add("hidden");

         // 양떼 목장 종료
        pastureScene.classList.add("hidden");

        // 이발소 시작
        barberScene.classList.remove("hidden");

        startBarberIntro();

    }

});

// ==============================
// CHAPTER 5 - 이발소
// ==============================

let barberMode = "intro";

const barberScene =
    document.getElementById("barberScene");

const barberDialogue =
    document.getElementById("barberDialogue");

const barberSpeaker =
    document.getElementById("barberSpeaker");

const barberText =
    document.getElementById("barberText");

const barberNext =
    document.getElementById("barberNext");

const barberBasinButton =
    document.getElementById("barberBasinButton");

const barberDrawerButton =
    document.getElementById("barberDrawerButton");

    const barberIntroDialogues = [

    {
        speaker: "산초의 종자",
        text: "이곳이 마지막 장소입니다."
    },

    {
        speaker: "산초의 종자",
        text: '이곳에서는 돈키호테가 일명 "마법 투구"인 놋대야를 이발사 니콜라스로부터 가져갔던 일이 있었다고 합니다.'
    },

    {
        speaker: "산초의 종자",
        text: "주인은 웃어넘겼다고는 하나, 썩 기분이 좋았을 것 같지는 않더군요."
    },

    {
        speaker: "산초의 종자",
        text: "아무래도 저것들이 돈키호테가 말했던 마법의 투구인가 보군요."
    },

    {
        speaker: "산초의 종자",
        text: "이곳에서 마지막 조사를 진행해보도록 하죠."
    }

];

let barberIntroIndex = 0;


function startBarberIntro() {

    barberIntroIndex = 0;
    barberMode = "intro";

    barberSpeaker.textContent =
        barberIntroDialogues[0].speaker;

    barberText.textContent =
        barberIntroDialogues[0].text;

    barberDialogue.classList.remove("hidden");

     // 처음에는 서랍만 조사 가능
    barberBasinButton.classList.add("hidden");
    barberDrawerButton.classList.remove("hidden");
}

barberNext.addEventListener("click", function () {

    // ==========================
    // 이발소 입장 대화
    // ==========================

    if (barberMode === "intro") {

        barberIntroIndex++;

        if (barberIntroIndex < barberIntroDialogues.length) {

            const dialogue =
                barberIntroDialogues[barberIntroIndex];

            barberSpeaker.textContent =
                dialogue.speaker;

            barberText.textContent =
                dialogue.text;

        } else {

            barberDialogue.classList.add("hidden");

            barberBasinButton.classList.remove("hidden");
            barberDrawerButton.classList.remove("hidden");
        }

        return;
    }


    // ==========================
    // 0612 확인 연출
    // ==========================

    if (barberMode === "reveal") {

        barberRevealIndex++;

        if (barberRevealIndex < barberRevealDialogues.length) {

            const dialogue =
                barberRevealDialogues[barberRevealIndex];

            barberSpeaker.textContent =
                dialogue.speaker;

            barberText.textContent =
                dialogue.text;

        } else {

            startBarberDanger();
            setTimeout(function () {

                startHideSequence();

            }, 4200);

        }
    }

});

function startHideSequence() {

    barberScene.classList.add("hidden");

    hideScene.classList.remove("hidden");

    hideText.textContent =
        "불이 꺼졌습니다.";

    setTimeout(function () {

        hideText.textContent =
            "누군가 이쪽으로 다가오고 있어요.";

    }, 1200);


    setTimeout(function () {

        hideText.textContent =
            "지금까지 조사했던 장소 중 몸을 숨길 수 있었던 곳을 떠올려보세요.";

        hideChoices.classList.remove("hidden");

    }, 2500);
}

// ==============================
// 이발소 - 놋대야 퍼즐
// ==============================

const basinPuzzleModal =
    document.getElementById("basinPuzzleModal");

const closeBasinPuzzle =
    document.getElementById("closeBasinPuzzle");

const blueLens =
    document.getElementById("blueLens");

const yellowLens =
    document.getElementById("yellowLens");

const redLens =
    document.getElementById("redLens");

const bluePattern =
    document.getElementById("bluePattern");

const yellowPattern =
    document.getElementById("yellowPattern");

const combinedNumber =
    document.getElementById("combinedNumber");

const redMessage =
    document.getElementById("redMessage");


let blueLensChecked = false;
let yellowLensChecked = false;
let basinNumberFound = false;

barberBasinButton.addEventListener("click", function () {

    basinPuzzleModal.classList.remove("hidden");

});

// ==============================
// 놋대야 - 색 순서 퍼즐
// 정답 : 파랑 → 노랑 → 빨강
// ==============================

let basinSequence = [];


// 화면 초기화
function resetBasinPuzzle() {

    basinSequence = [];

    bluePattern.classList.add("hidden");
    yellowPattern.classList.add("hidden");
    combinedNumber.classList.add("hidden");
    redMessage.classList.add("hidden");
}


// ==============================
// 파랑 렌즈
// ==============================

blueLens.addEventListener("click", function () {

    // 첫 번째는 반드시 파랑
    if (basinSequence.length !== 0) {

        resetBasinPuzzle();
        return;
    }

    basinSequence.push("blue");

    bluePattern.classList.remove("hidden");

    yellowPattern.classList.add("hidden");
    combinedNumber.classList.add("hidden");
    redMessage.classList.add("hidden");
});


// ==============================
// 노랑 렌즈
// ==============================

yellowLens.addEventListener("click", function () {

    // 파랑 다음에만 성공
    if (
        basinSequence.length !== 1 ||
        basinSequence[0] !== "blue"
    ) {

        resetBasinPuzzle();
        return;
    }

    basinSequence.push("yellow");

    bluePattern.classList.remove("hidden");
    yellowPattern.classList.remove("hidden");

    // 파랑 + 노랑을 겹치면 숫자 완성
    combinedNumber.classList.remove("hidden");
});


// ==============================
// 빨강 렌즈
// ==============================

redLens.addEventListener("click", function () {

    // 파랑 → 노랑 순서가 맞는지 확인
    if (
        basinSequence.length !== 2 ||
        basinSequence[0] !== "blue" ||
        basinSequence[1] !== "yellow"
    ) {
        resetBasinPuzzle();
        return;
    }

    basinSequence.push("red");

    // 기존 문양과 숫자 숨기기
    bluePattern.classList.add("hidden");
    yellowPattern.classList.add("hidden");
    combinedNumber.classList.add("hidden");

    // 색 선택 버튼 숨기기
    const basinChoices =
        document.querySelector(".basinChoices");

    if (basinChoices) {
        basinChoices.classList.add("hidden");
    }

    // 가운데 빨간 "숨 어"
    redMessage.classList.remove("hidden");

    // 아래 종자의 말
    basinDialogueText.textContent =
        "……잠깐. 저 글씨, 방금 전까지 있었습니까?";


    // ==============================
    // 2초 뒤 다음 장면으로 진행
    // ==============================

    setTimeout(function () {

        // 놋대야 퍼즐 닫기
        basinPuzzleModal.classList.add("hidden");

        // 숨어 글씨도 초기화
        redMessage.classList.add("hidden");

        // 이발소 추리 대화 시작
        startBarberReveal();

    }, 2000);

});

// ==============================
// 이발소 - 서랍 조사
// ==============================

const lastNoteModal =
    document.getElementById("lastNoteModal");

const closeLastNote =
    document.getElementById("closeLastNote");

const notebookLastNote =
    document.getElementById("notebookLastNote");

let lastNoteFound = false;


barberDrawerButton.addEventListener("click", function () {

    lastNoteModal.classList.remove("hidden");

    if (!lastNoteFound) {

        lastNoteFound = true;

        // 수첩에 기록
        notebookLastNote.classList.remove("hidden");
    }

});

closeLastNote.addEventListener("click", function () {

    lastNoteModal.classList.add("hidden");

    // 편지를 확인한 뒤 놋대야 조사 가능
    barberBasinButton.classList.remove("hidden");
});

notebookLastNote.addEventListener("click", function () {

    notebookModal.classList.add("hidden");

    lastNoteModal.classList.remove("hidden");

});

// ==============================
// 이발소 - 범인 단서 확인 연출
// ==============================

const barberRevealDialogues = [

    {
        speaker: "산초의 종자",
        text: "잠깐... 방금 숫자 보셨습니까?"
    },

    {
        speaker: "산초의 종자",
        text: "0612."
    },

    {
        speaker: "산초의 종자",
        text: "용의자들의 기록 중에 이 숫자와 일치하는 정보가 있었던 것 같은데..."
    },

    {
        speaker: "산초의 종자",
        text: "니콜라스의 생일이... 6월 12일입니다."
    },

    {
        speaker: "산초의 종자",
        text: "그렇다면 지금까지 발견했던 단서들도..."
    },

    {
        speaker: "산초의 종자",
        text: "잠깐."
    },

    {
        speaker: "산초의 종자",
        text: "방금 벽에 뭐라고 적혀 있었죠?"
    },

    {
        speaker: "산초의 종자",
        text: "……숨어?"
    }

];

let barberRevealIndex = 0;


function startBarberReveal() {

    barberMode = "reveal";
    barberRevealIndex = 0;

    barberSpeaker.textContent =
        barberRevealDialogues[0].speaker;

    barberText.textContent =
        barberRevealDialogues[0].text;

    barberDialogue.classList.remove("hidden");

    barberBasinButton.classList.add("hidden");
    barberDrawerButton.classList.add("hidden");
}

// ==============================
// 이발소 - 위험 발생
// ==============================

function startBarberDanger() {

    barberDialogue.classList.add("hidden");

    barberScene.classList.add("barberBlackout");

    setTimeout(function () {

        barberSpeaker.textContent =
            "산초의 종자";

        barberText.textContent =
            "오... 이런. 아무래도 좋지 않은 느낌이 들어요.";

        barberDialogue.classList.remove("hidden");

    }, 800);


    setTimeout(function () {

        barberText.textContent =
            "몸을 숨기는 게 좋을 것 같아요.";

    }, 1800);


    setTimeout(function () {

        barberText.textContent =
            "빨리 숨으세요! 빨리! 빨리 숨으세요!";

    }, 2800);

}

const killerRoomInvestigation =
    document.getElementById("killerRoomInvestigation");

const displayCaseButton =
    document.getElementById("displayCaseButton");

const oldNotebookButton =
    document.getElementById("oldNotebookButton");

const workTableButton =
    document.getElementById("workTableButton");

const hideScene =
    document.getElementById("hideScene");

const enterKillerRoomButton =
    document.getElementById("enterKillerRoomButton");

const hideChoices =
    document.getElementById("hideChoices");

const hideSpotChoices =
    document.getElementById("hideSpotChoices");

const hideText =
    document.getElementById("hideText");

const hidePlaceButtons =
    document.querySelectorAll(".hidePlace");


hidePlaceButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const place = button.dataset.place;

        // 장소 선택지는 잠시 숨김
        hideChoices.classList.add("hidden");

        showHideSpots(place);
    });

});

function showHideSpots(place) {

    hideSpotChoices.innerHTML = "";
    hideSpotChoices.classList.remove("hidden");


    // ==========================
    // 시체 보관소
    // ==========================

    if (place === "morgue") {

        hideText.textContent =
            "시체 보관소의 어디에 숨겠습니까?";

        createHideSpot("보관함 옆", false);
        createHideSpot("책상 아래", false);
        createHideSpot("문 뒤", false);
    }


    // ==========================
    // 여관
    // ==========================

    else if (place === "inn") {

        hideText.textContent =
            "여관의 어디에 숨겠습니까?";

        createHideSpot("벽난로 근처", false);

        // 앞에서 조사했던 정답
        createHideSpot("식탁 아래", true);

        createHideSpot("청소도구 뒤", false);
    }


    // ==========================
    // 서재
    // ==========================

    else if (place === "study") {

        hideText.textContent =
            "서재의 어디에 숨겠습니까?";

        createHideSpot("책장 옆", false);
        createHideSpot("책상 아래", false);
        createHideSpot("화로 근처", false);
    }


    // ==========================
    // 풍차
    // ==========================

    else if (place === "windmill") {

        hideText.textContent =
            "풍차의 어디에 숨겠습니까?";

        createHideSpot("풍차 문 앞", false);
        createHideSpot("균열 근처", false);

        // 앞에서 조사했던 정답
        createHideSpot("수레 안", true);
    }


    // ==========================
    // 양떼 목장
    // ==========================

    else if (place === "pasture") {

        hideText.textContent =
            "양떼 목장의 어디에 숨겠습니까?";

        createHideSpot("울타리 옆", false);
        createHideSpot("사료 창고 앞", false);
        createHideSpot("목장 구석", false);
    }


    // ==========================
    // 이발소
    // ==========================

    else if (place === "barber") {

        hideText.textContent =
            "이발소의 어디에 숨겠습니까?";

        createHideSpot("서랍장 옆", false);
        createHideSpot("놋대야 뒤", false);
        createHideSpot("출입문 옆", false);
    }
}

function createHideSpot(name, isCorrect) {

    const button =
        document.createElement("button");

    button.textContent = name;

    button.addEventListener("click", function () {

        if (isCorrect) {

            hideSuccess(name);

        } else {

            hideFail();
        }

    });

    hideSpotChoices.appendChild(button);
}

function hideSuccess(place) {

    hideSpotChoices.classList.add("hidden");
    hideChoices.classList.add("hidden");

    hideText.textContent =
        place + "에 몸을 숨겼습니다.";

    setTimeout(function () {

        hideText.textContent =
            "……누군가 가까이 다가오는 소리가 들립니다.";

    }, 1200);

    setTimeout(function () {

        hideText.textContent =
            "앗 주변이 다시 조용해졌습니다.";

    }, 2800);

    setTimeout(function () {

        hideText.textContent =
            "바닥에서 작은 열쇠 하나를 발견했습니다.";

    }, 4200);

    setTimeout(function () {

        hideText.innerHTML =
            '🔑 <strong>「살인자의 방 열쇠」를 획득했습니다.</strong>';

        enterKillerRoomButton.classList.remove("hidden");

    }, 5400);
}

const killerRoomScene =
    document.getElementById("killerRoomScene");

const killerRoomText =
    document.getElementById("killerRoomText");

const killerRoomNext =
    document.getElementById("killerRoomNext");

function hideFail() {

    // 선택지 전부 숨기기
    hideChoices.classList.add("hidden");
    hideSpotChoices.classList.add("hidden");

    // 열쇠 버튼도 절대 나오지 않게
    enterKillerRoomButton.classList.add("hidden");

    hideText.textContent =
        "……숨을 곳을 잘못 선택했습니다.";

    setTimeout(function () {

        hideText.textContent =
            "어딘가에서 문이 닫히는 소리가 들립니다.";

    }, 1200);

    setTimeout(function () {

        hideText.innerHTML =
            `
            <div class="hideFailMessage">
                미처 숨지 못한 자는,<br>
                <strong>괴물이 기다리는 공간에 갇히게 된다.</strong>
            </div>
            `;

    }, 2500);

    setTimeout(function () {

        hideText.innerHTML +=
            `
            <button id="retryHideButton">
                다시 시도한다
            </button>
            `;

        document
            .getElementById("retryHideButton")
            .addEventListener("click", retryHide);

    }, 4000);
}

function retryHide() {

    hideText.textContent =
        "지금까지 조사했던 장소를 떠올려보세요. 어디에 숨겠습니까?";

    // 장소 선택 다시 표시
    hideChoices.classList.remove("hidden");

    // 세부 선택은 초기화
    hideSpotChoices.classList.add("hidden");
    hideSpotChoices.innerHTML = "";

    // 열쇠 버튼 숨김
    enterKillerRoomButton.classList.add("hidden");
}

enterKillerRoomButton.addEventListener("click", function () {

    hideScene.classList.add("hidden");
    killerRoomScene.classList.remove("hidden");

    killerRoomDialogueIndex = 0;

    killerRoomText.textContent =
        killerRoomDialogues[0];
});


const killerRoomDialogues = [
    "저 괴물은 대체 뭐죠..? 몇몇 분들은 당하신 것 같군요..",

    "저 존재가 이 사건의 범인인 걸까요..?",

    "괴물이 떨어뜨린 열쇠가 있습니다.",

    "이 열쇠로 마지막 장소로 이동하겠습니다.",

    "……",

    "풍차 3호기 내부입니다.",

    "이런 일을 저지르고 있었다니.. 정말 충격적입니다.",

    "돈키호테가 밝히려고 했던 진실은 이것이었을까요..?",

    "우선 이곳을 조사해보도록 하죠."
];

let killerRoomDialogueIndex = 0;

killerRoomNext.addEventListener("click", function () {

    killerRoomDialogueIndex++;

    if (
        killerRoomDialogueIndex <
        killerRoomDialogues.length
    ) {

        killerRoomText.textContent =
            killerRoomDialogues[killerRoomDialogueIndex];

    } else {

        // 대화 종료
        killerRoomDialogue.classList.add("hidden");

        killerRoomInvestigation.classList.remove("hidden");

    }

});

const displayCaseModal =
    document.getElementById("displayCaseModal");

const closeDisplayCase =
    document.getElementById("closeDisplayCase");

let displayCaseChecked = false;

displayCaseButton.addEventListener("click", function () {

    displayCaseModal.classList.remove("hidden");

    displayCaseChecked = true;

    checkKillerRoomInvestigation();

});

closeDisplayCase.addEventListener("click", function () {

    displayCaseModal.classList.add("hidden");

});

const oldNotebookModal =
    document.getElementById("oldNotebookModal");

const closeOldNotebook =
    document.getElementById("closeOldNotebook");

let oldNotebookChecked = false;

oldNotebookButton.addEventListener("click", function () {

    oldNotebookModal.classList.remove("hidden");

    oldNotebookChecked = true;

    checkKillerRoomInvestigation();

});

closeOldNotebook.addEventListener("click", function () {

    oldNotebookModal.classList.add("hidden");

});

const accuseModal =
    document.getElementById("accuseModal");

const accuseResult =
    document.getElementById("accuseResult");

const retryAccuseButton =
    document.getElementById("retryAccuseButton");

const suspectChoices =
    document.querySelectorAll(".suspectChoice");

const accuseButton =
    document.getElementById("accuseButton");

const workTableModal =
    document.getElementById("workTableModal");

const closeWorkTable =
    document.getElementById("closeWorkTable");

let workTableChecked = false;

workTableButton.addEventListener("click", function () {

    workTableModal.classList.remove("hidden");

    workTableChecked = true;

    checkKillerRoomInvestigation();

});

accuseButton.addEventListener("click", function () {

    accuseModal.classList.remove("hidden");

    accuseResult.classList.add("hidden");
    retryAccuseButton.classList.add("hidden");

});

suspectChoices.forEach(function (button) {

    button.addEventListener("click", function () {

        const suspect =
            button.dataset.suspect;

        if (suspect === "nicolas") {

            showCorrectAccusation();

        } else {

            showWrongAccusation();

        }

    });

});

function showWrongAccusation() {

    document.querySelector(".suspectChoices")
        .classList.add("hidden");

    accuseResult.innerHTML = `
        <strong>증거가 충분하지 않습니다.</strong><br><br>
        지금까지 수집한 기록을 다시 확인해보십시오.<br>
        모든 단서는 한 사람을 가리키고 있습니다.
    `;

    accuseResult.classList.remove("hidden");
    retryAccuseButton.classList.remove("hidden");
}

closeWorkTable.addEventListener("click", function () {

    workTableModal.classList.add("hidden");

});

retryAccuseButton.addEventListener("click", function () {

    accuseResult.classList.add("hidden");
    retryAccuseButton.classList.add("hidden");

    document.querySelector(".suspectChoices")
        .classList.remove("hidden");

});

const truthButton =
    document.getElementById("truthButton");

const endingScene =
    document.getElementById("endingScene");

const endingText =
    document.getElementById("endingText");

const endingNext =
    document.getElementById("endingNext");

const endingDialogue =
    document.getElementById("endingDialogue");

let endingIndex = 0;

function showCorrectAccusation() {

    document.querySelector(".suspectChoices")
        .classList.add("hidden");

    accuseResult.innerHTML = `
        당신은 이제야 그를 알아보았습니다.<br><br>

        마을 사람들은 십 년 동안<br>
        단 한 번도 그를 알아보지 못했습니다.<br><br>

        단 한 사람만이 알아보았고,<br>
        그래서 그는 죽었습니다.
    `;

    accuseResult.classList.remove("hidden");

    truthButton.classList.remove("hidden");
}

const endingDialogues = [

    "……니콜라스.",

    "지금까지 발견했던 모든 증거가 그를 가리키고 있었군요.",

    "이런 일을 벌이고 있었다니... 정말 충격적입니다.",

    "돈키호테가 밝히려고 했던 진실은 이것이었을까요..?",

    "괴물에게 붙잡혔던 사람들도 무사히 이곳을 빠져나올 수 있었습니다.",

    "모든 증거를 수집했으니, 이제 이 사건도 끝이겠군요.",

    "여러분들 덕분에 돈키호테가 남겼던 증거를 모두 수집할 수 있었습니다.",

    "평소 돈키호테를 미친 사람으로 여기던 이곳 사람들은 절대로 이 진실에 도달할 수 없었을 겁니다..",

    "정말 감사합니다.",

    "그럼 이만 나갈 수 있도록 하겠습니다."

];

truthButton.addEventListener("click", function () {

    accuseModal.classList.add("hidden");
    killerRoomScene.classList.add("hidden");

    endingScene.classList.remove("hidden");

    endingIndex = 0;
    endingText.textContent = endingDialogues[0];

});

endingNext.addEventListener("click", function () {

    endingIndex++;

    if (endingIndex < endingDialogues.length) {

        endingText.textContent =
            endingDialogues[endingIndex];

    } else {

        showFinalEnding();

    }

});

function showFinalEnding() {

    endingDialogue.innerHTML = `
        <div class="finalEndingText">

            사람들은 그를 미쳤다고 말했다.<br><br>

            하지만 그는,<br>
            아무도 보려 하지 않았던 것을 보고 있었다.

            <div class="finalEndingTitle">
                THE END
            </div>

        </div>
    `;

}

function checkKillerRoomInvestigation() {

    if (
        displayCaseChecked &&
        oldNotebookChecked &&
        workTableChecked
    ) {
        accuseButton.classList.remove("hidden");
    }

}