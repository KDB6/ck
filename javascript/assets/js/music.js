const allMusic = [
    {
        name : "01. Blue Boi",
        artist : "Lakey Inspired",
        img : "music__bg01",
        audio : "music__audio01"
    },
    {
        name : "02. September Rain",
        artist : "Yme Fresh",
        img : "music__bg02",
        audio : "music__audio02"
    },
    {
        name : "03. Blue Boi",
        artist : "Lakey Inspired",
        img : "music__bg03",
        audio : "music__audio03"
    },
    {
        name : "04. September Rain",
        artist : "Yme Fresh",
        img : "music__bg04",
        audio : "music__audio04"
    },
    {
        name : "05. Blue Boi",
        artist : "Lakey Inspired",
        img : "music__bg05",
        audio : "music__audio05"
    },
    {
        name : "06. September Rain",
        artist : "Yme Fresh",
        img : "music__bg06",
        audio : "music__audio06"
    },
    {
        name : "07. Blue Boi",
        artist : "Lakey Inspired",
        img : "music__bg07",
        audio : "music__audio07"
    },
    {
        name : "08. September Rain",
        artist : "Yme Fresh",
        img : "music__bg08",
        audio : "music__audio08"
    },
    {
        name : "09. Blue Boi",
        artist : "Lakey Inspired",
        img : "music__bg09",
        audio : "music__audio09"
    },
    {
        name : "10. September Rain",
        artist : "Yme Fresh",
        img : "music__bg10",
        audio : "music__audio10"
    }
]

const musicWrap = document.querySelector(".muisc__wrap");
const musicView = musicWrap.querySelector(".music__view .img img");
const musicName = musicWrap.querySelector(".music__view .title h3");
const musicArtist = musicWrap.querySelector(".music__view .title p")
const musicAudio = musicWrap.querySelector("#main__audio");
const musicPlay = musicWrap.querySelector("#control__play");
const musicPrev = musicWrap.querySelector("#control__prev");
const musicNext = musicWrap.querySelector("#control__next");
const musicProgress = musicWrap.querySelector(".progress");
const musicProgressBar = musicWrap.querySelector(".progress .bar");
const musicProgressCurrent = musicWrap.querySelector(".progress .timer .current");
const musicProgressDuration = musicWrap.querySelector(".progress .timer .duration");
const musicRepeat = musicWrap.querySelector("#control__repeat");
const musicListBtn = musicWrap.querySelector("#control__list");
const musicList = musicWrap.querySelector(".music__list");
const musicListUl = musicList.querySelector(".music__list ul");

let musicIndex = 1;

// 음악 재생
function loadMusic(num) {
    musicName.innerText = allMusic[num-1].name;
    musicArtist.innerText = allMusic[num-1].artist;
    musicView.src = `../assets/img/music/${allMusic[num-1].img}.png`;
    musicView.alt = allMusic[num-1].name;
    musicAudio.src = `../assets/music/${allMusic[num-1].audio}.mp3`;
}

// 재생 버튼
function playMusic() {
    musicWrap.classList.add("paused")
    musicPlay.setAttribute("title","정지");
    musicPlay.setAttribute("class","stop");
    musicAudio.play();
}

// 정지 버튼
function pauseMusic() {
    musicWrap.classList.remove("paused")
    musicPlay.setAttribute("title","재생");
    musicPlay.setAttribute("class","play");
    musicAudio.pause();
}

// 이전 곡 듣기 버튼
function prevMusic() {
    musicIndex == 1 ? musicIndex = allMusic.length : musicIndex--;
    loadMusic(musicIndex);
    playMusic();
}

// 다음 곡 듣기 버튼
function nextMusic() {
    musicIndex == allMusic.length ? musicIndex = 1 : musicIndex++;
    loadMusic(musicIndex);
    playMusic();

}

// 뮤직 진행 바
musicAudio.addEventListener("timeupdate", e => {
    const currentTime = e.target.currentTime;               // 현재 재생되는 시간
    const duration = e.target.duration;                 // 오디오의 총 길이
    let progressWidth = (currentTime/duration) * 100;   // 전체 길이에서 현재 진행되는 시간을 백분위로 나눔

    musicProgressBar.style.width = `${progressWidth}%`;

    // 전체 시간
    musicAudio.addEventListener("loadeddata", () => {
        let audioDuration = musicAudio.duration;
        let totalMin = Math.floor(audioDuration / 60);  // 전체 시간을 분 단위로 나눔
        let totalSec = Math.floor(audioDuration % 60);  // 남은 초를 저장
        if(totalSec < 10) totalSec = `0${totalSec}`;    // 초가 한자리 수 일 때 앞에 0을 붙임
        musicProgressDuration.innerText = `${totalMin}:${totalSec}`;
    })

    // 진행 시간
    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if(currentSec < 10) currentSec = `0${currentSec}`;
    musicProgressCurrent.innerText = `${currentMin}:${currentSec}`;

})

// 진행 버튼 클릭
musicProgress.addEventListener("click", (e) => {
    let progressWidth = musicProgress.clientWidth;      // 진행바 전체 길이
    let clickedOffsetX = e.offsetX;                     // 진행바 기준으로 측정되는 X좌표
    let songDuration = musicAudio.duration;             // 오디오 전체 길이

    musicAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration;   // 백분위로 나눈 숫자에 다시 전체 길이를 곱하여 현재 재생값으로 바꿈
})

// 반복 버튼 클릭
musicRepeat.addEventListener("click", () => {
    let getAttr = musicRepeat.getAttribute("class");

    switch(getAttr) {
        case "repeat" :
            musicRepeat.setAttribute("class", "repeat__one");
            musicRepeat.setAttribute("title", "한 곡 반복");
            break;
        case "repeat__one" :
            musicRepeat.setAttribute("class", "shuffle");
            musicRepeat.setAttribute("title", "랜덤 반복");
            break;
        case "shuffle" :
            musicRepeat.setAttribute("class", "repeat");
            musicRepeat.setAttribute("title", "전체 반복");
            break;
    }
})

// 오디오가 끝나면 재생
musicAudio.addEventListener("ended", () => {
    let getAttr = musicRepeat.getAttribute("class");

    switch(getAttr) {
        case "repeat" :
            nextMusic();
            break;
        case "repeat__one" :
            playMusic();
            break;
        case "shuffle" :
            // let randomIndex = Math.floor(Math.random() * allMusic.length + 1);  // 랜덤 인덱스

            do {
                randomIndex = Math.floor(Math.random() * allMusic.length + 1);
            } while (musicIndex == randomIndex)
            musicIndex = randomIndex;       // 현재 인덱스를 랜덤 인덱스로 변경
            loadMusic(musicIndex);          // 랜덤 인덱스가 반영된 현재 인덱스 값으로 음악을 다시 로드
            playMusic();                    // 로드한 음악을 재생
            break;
    }
})

// 뮤직 리스트 버튼
musicListBtn.addEventListener("click", () => {
    musicList.classList.add("show");
})

// 뮤직 리스트 구현하기
for(let i=0; i<allMusic.length; i++) {
    let li = `
            <li>
                <strong>${allMusic[i].name}</strong>
                <em>${allMusic[i].artist}</em>
                <span>재생 시간</span>
            </li>
    `;

    musicListUl.innerHTML += li;
}

// 플레이 버튼
musicPlay.addEventListener("click", () => {
    const ismusicPaused = musicWrap.classList.contains("paused");    // 음악 재생 중
    ismusicPaused ? pauseMusic() : playMusic();
})

// 이전 곡 듣기 버튼
musicPrev.addEventListener("click", () => {
    prevMusic();
})

// 다음 곡 듣기 버튼
musicNext.addEventListener("click", () => {
    nextMusic();
})