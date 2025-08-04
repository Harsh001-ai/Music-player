let songIndex = 0;
let audioElement =  new Audio('files/1.mp3');
let masterPlay = document.getElementById(`masterPlay`);
let myProgressBar = document.getElementById(`myProgressBar`);
let gif = document.getElementById(`gif`);
let masterSongName = document.getElementById(`masterSongName`);
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
    {songName: "Ranjha", filePath:"files/1.mp3", coverPath: "files/files/Ranjhna.jfif"},
    {songName: "Lutt Putt Gaya", filePath:"files/2.mp3", coverPath: "files/Lut put gaya.jfif"},
    {songName: "Thodi Si Daaru", filePath:"files/3.mp3", coverPath: "files/Thodi-Si-Daaru-Punjabi-2025-20250717063530-500x500.jpg"},
    {songName: "Preet Re", filePath:"files/4.mp3", coverPath: "files/Preet-Re-From-Dhadak-2-Hindi-2025-20250724161536-500x500.jpg"},
    {songName: "Duniya Alag", filePath:"files/5.mp3", coverPath: "files/Duniya-Alag-From-Dhadak-2-Hindi-2025-20250729113915-500x500.jpg"},
    {songName: "Bas Ek Dhadak", filePath:"files/6.mp3", coverPath: "files/size_m_1752731352.jpg"},
    {songName: "Barbaad Song", filePath:"files/7.mp3", coverPath: "files/Barbaad-Hindi-2024-20240119101507-500x500.jpg"},
    {songName: "Dhun", filePath:"files/8.mp3", coverPath: "files/Dhun-From-Saiyaara-Hindi-2025-20250630103138-500x500.jpg"},
    {songName: "No Fluke", filePath:"files/9.mp3", coverPath: "files/no_fluke.png"},
    {songName: "Saiyaara", filePath:"files/10.mp3", coverPath: "files/saiyaara.jfif"},
    {songName: "Phir Bhi Tumko Chaahunga", filePath:"files/11.mp3", coverPath: "files/Half-Girlfriend-Hindi-2017-20180622-500x500.jpg"},
    {songName: "Humnava Mere", filePath:"files/12.mp3", coverPath: "files/Humnava-Mere-Hindi-2018-20180522-500x500.jpg"},

]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// audioElement.play();

//Handel play/pause click
masterPlay.addEventListener(`click`,()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove(`fa-circle-play`);
        masterPlay.classList.add(`fa-circle-pause`);
        gif.style.opacity = 1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove(`fa-circle-pause`);
        masterPlay.classList.add(`fa-circle-play`);
        gif.style.opacity = 0;
    }
})

// listen to envents

audioElement.addEventListener(`timeupdate`, ()=>{
    // update seekbar
    Progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = Progress;
})

myProgressBar.addEventListener(`change`, ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllplays = ()=>{
    Array.from(document.getElementsByClassName(`songItemPlay`)).forEach((element)=>{
        element.classList.remove(`fa-circle-pause`);
        element.classList.add(`fa-circle-play`);
    })
}

Array.from(document.getElementsByClassName(`songItemPlay`)).forEach((element)=>{
    element.addEventListener(`click`,(e)=>{
        makeAllplays();
        songIndex =parseInt (e.target.id);
        e.target.classList.remove(`fa-circle-play`);
        e.target.classList.add(`fa-circle-pause`);
        masterSongName.innerText = songs [songIndex].songName;
        audioElement.src = songs[songIndex].filePath;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove(`fa-circle-play`);
        masterPlay.classList.add(`fa-circle-pause`);
    })
})

document.getElementById(`next`).addEventListener(`click`, ()=>{
    if(songIndex>=12){
        songIndex = 0;
    }else{
        songIndex +=1;
    }
     audioElement.src = songs[songIndex].filePath;
     masterSongName.innerText = songs [songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove(`fa-circle-play`);
        masterPlay.classList.add(`fa-circle-pause`);
})
document.getElementById(`previous`).addEventListener(`click`, ()=>{
    if(songIndex<=0){
        songIndex = 0;
    }else{
        songIndex -=1;
    }
     audioElement.src = songs[songIndex].filePath;
     masterSongName.innerText = songs [songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove(`fa-circle-play`);
        masterPlay.classList.add(`fa-circle-pause`);
})