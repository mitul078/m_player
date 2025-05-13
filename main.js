let text = document.querySelector('.song-detail p')
let musicPlaylist = document.querySelector('.playlist')

const playlist = [
    { id: 1, musicImage: 'https://i.ytimg.com/vi/sFMRqxCexDk/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGBMgHyh_MA8=&rs=AOn4CLASvUOwkGlovr8nJCxc4ATXayHxxA', musicName: 'Choo Lo', musicSinger: 'The Local Train', albumName: 'Aalas Ka Pedh', musicDuration: '3:54', musicSrc: './m1.mp3', bgColor: 'linear-gradient(90deg, #1CB5E0 0%, #000851 100%)' },
    { id: 2, musicImage: 'https://cdn.shortpixel.ai/spai/q_glossy+ret_img+to_auto/www.slantmagazine.com/wp-content/uploads/2024/08/music_diewithasmile.jpg', musicName: 'Die With Smile', musicSinger: 'Bruno Mars , Lady Gaga', albumName: 'Die With Smile', musicDuration: '4:12', musicSrc: './m2.mp3', bgColor: 'linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)' },
    { id: 3, musicImage: 'https://i.ytimg.com/vi/4BrziEPQrOQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBvZKyFNe1vZXC4n1YTNPoWMoo2-g', musicName: 'Dil To Jaan Tu', musicSinger: 'Gurnazar, Chet Singh', albumName: 'Dil To Jaan Tu', musicDuration: '3:57', musicSrc: './m3.mp3', bgColor: 'linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)' },
    { id: 4, musicImage: 'https://c.saavncdn.com/133/Faasle-Hindi-2021-20210801214117-500x500.jpg', musicName: 'Faasle', musicSinger: 'Aditya Rikhari', albumName: 'Faasle', musicDuration: '3:42', musicSrc: './m4.mp3', bgColor: 'linear-gradient(90deg, #3F2B96 0%, #A8C0FF 100%)' },
    { id: 5, musicImage: 'https://i1.sndcdn.com/artworks-GArwu8k4nmxqcByq-kGjdLg-t500x500.jpg', musicName: 'Kabhi Kabhi Aditi', musicSinger: 'Rashi Ali', albumName: 'Janne Tu.. Ya Janne Na', musicDuration: '3:39', musicSrc: './m5.mp3', bgColor: 'linear-gradient(90deg, #FDBB2D 0%, #22C1C3 100%)' },
    { id: 6, musicImage: 'https://images.genius.com/f6997af0e4a50956d92a5ca3514a9161.1000x1000x1.jpg', musicName: 'Ishq Hai', musicSinger: 'Anurag Saikia , Raj Shekhar ', albumName: 'Mis-matched S3', musicDuration: '5:13', musicSrc: './m6.mp3', bgColor: 'linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)' },
    { id: 7, musicImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ipztPLNU132WFdOMe7FAUQ0JFqJVivQM-A&s', musicName: 'Heartbreak Kid', musicSinger: 'Talha Anjum, Umair', albumName: 'My Terrible Mind', musicDuration: '4:04', musicSrc: './m7.mp3', bgColor: 'linear-gradient(90deg, #d53369 0%, #daae51 100%)' },
    { id: 8, musicImage: 'https://i.ytimg.com/vi/alkj73ka5m4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBNP8C_kHquHEtgE-ChXihT3TCu1g', musicName: 'Departure Lane', musicSinger: 'Talha Anjum , Umair', albumName: 'My Terrible Mind', musicDuration: '2:47', musicSrc: './m8.mp3', bgColor: 'linear-gradient(90deg, #fcff9e 0%, #c67700 100%)' },
    { id: 9, musicImage: 'https://images.genius.com/4ad6d73dbd7d0ca4abecdaab6eee0e20.1000x1000x1.png', musicName: 'Paro', musicSinger: 'Aditya Rikhari', albumName: 'Paro', musicDuration: '2:33', musicSrc: './m9.mp3', bgColor: 'linear-gradient(90deg, #9ebd13 0%, #008552 100%)' },
    { id: 10, musicImage: 'https://i.scdn.co/image/ab67616d0000b27385c5968be0d0d9c545241124', musicName: 'Pal Pal', musicSinger: 'Afusic', albumName: 'Pal Pal', musicDuration: '2:27', musicSrc: './m10.mp3', bgColor: 'linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%)' }
];


let music = ''
playlist.forEach((song, index) => {
    music += ` <div class="box">
                            <div class="left-side">
                                <div id='${index + 1}' class="num"><h3>${song.id}</h3></div>
                                <div class="song-image"><img src="${song.musicImage}" alt=""></div>
                                <div class="song-detail">
                                    <h4>${song.musicName}</h4>
                                    <p>${song.musicSinger}</p>
                                </div>
                            </div>
                            <div class="center">
                                <p>${song.albumName}</p>
                            </div>
                            <div class="right-side">
                                <p>${song.musicDuration}</p>
                            </div>
                        </div>`
})
musicPlaylist.innerHTML = music

console.log(playlist)

let boxes = document.querySelectorAll('.box')
let left = document.querySelector('.left')
let right = document.querySelector('.right')

boxes.forEach((box) => {
    box.addEventListener('click', function () {
        left.style.width = '65%';
        right.style.display = 'inline-block';
    })
})


let nums = document.querySelectorAll('.num')
let isActive = null;

boxes.forEach((box) => {
    const num = box.querySelector('.num')

    box.addEventListener('mouseenter', () => {
        if (isActive !== num) {
            num.innerHTML = '<i class="play ri-play-fill"></i>'
        }
    })
    box.addEventListener('mouseleave', () => {
        if (isActive !== num) {
            const id = num.getAttribute('id')
            num.innerHTML = `<h3>${id}</h3>`
        }
    })
    num.addEventListener('click', (e) => {
        if (isActive && isActive !== num) {
            const pid = isActive.getAttribute('id');
            isActive.innerHTML = `<h3>${pid}</h3>`;
        }
        const shouldPause = num.innerHTML.includes('ri-play-fill');
        num.innerHTML = shouldPause
            ? '<i class="pause ri-pause-mini-line"></i>'
            : '<i class="play ri-play-fill"></i>';
        isActive = num;
    });
})


boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        boxes.forEach((b) => {
            b.classList.remove('active')
            box.classList.add('active')
        })
        let info = ` <h3>True</h3>
                        <img src="${playlist[index].musicImage}"
                            alt="">
                        <h2>${playlist[index].musicName}</h2>
                        <h4>${playlist[index].musicSinger}</h4>
                        <div class="singer-info">
                            <h3>About the Artist</h3>
                            <div class="dp"></div>
                            <h4>${playlist[index].musicSinger}</h4>
                            <div class="listeners">
                                <p>Total listeners</p>
                                <button>Follow</button>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur officiis eum obcaecati
                                culpa fugiat esse voluptatibus provident sapiente reprehenderit ipsa? Incidunt corporis
                                corrupti non explicabo et minima maxime in commodi!</p>
                        </div>
                        <div class="next-song-display">
                            <h3>Next In Queue</h3>
                            ${index < playlist.length - 1 ?
                `<div class="next">
                                <img src="${playlist[index + 1].musicImage}" alt="">
                                <div class="data">
                                    <p>${playlist[index + 1].musicName}</p>
                                    <p>By ${playlist[index + 1].musicSinger}</p>
                                </div>
                            </div>`
                :
                `<p>There is no song in queue</p>`
            }
                        </div>`
        right.innerHTML = info;

    })
})
let bar = document.querySelector('.player')
function renderBarData(index) {
    const currentBox = boxes[index];
    const currentNum = currentBox.querySelector('.num');
    const isPlaying = currentNum.innerHTML.includes('ri-pause-mini-line');

    let info = ` <div class="first">
                        <img src="${playlist[index].musicImage} "alt="">
                        <div class="data">
                            <h4>${playlist[index].musicName}</h4>
                            <p>${playlist[index].musicSinger}</p>
                        </div>
                    
                </div>
                <div class="second">
                    <div class="upper">
                        <i class="back ri-skip-back-fill"></i>
                        <i class="barPlay ${isPlaying ? 'ri-pause-mini-line' : 'ri-play-fill'}"></i>
                        <i class="next ri-skip-forward-fill"></i>
                    </div>
                    <div class="lower">
                        <div class="progress">
                            <div class="progress-bar">
                            </div>
                            <div class="circle"></div>
                        </div>
                        <div class="time">
                            <h5 class="song-current-time">0:00</h5>
                            <h5>${playlist[index].musicDuration}</h5>
                        </div>
                    </div>
                </div>
                <div class="third">
                    <i class="ri-headphone-fill"></i>
                    <i class="ri-menu-5-line"></i>
                    <i class="ri-volume-up-fill"></i>
                    <i class="full ri-fullscreen-exit-fill"></i>
                </div>`
    bar.innerHTML = info
}
renderBarData(0)
boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        renderBarData(index);
    });
});
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('barPlay')) {
        const activeBox = document.querySelector('.box.active');
        if (!activeBox) return;
        const numElement = activeBox.querySelector('.num');
        const isPlaying = numElement.innerHTML.includes('ri-pause-mini-line');
        if (isPlaying) {
            numElement.innerHTML = '<i class="play ri-play-fill"></i>';
            e.target.classList.replace('ri-pause-mini-line', 'ri-play-fill');
        } else {
            numElement.innerHTML = '<i class="pause ri-pause-mini-line"></i>';
            e.target.classList.replace('ri-play-fill', 'ri-pause-mini-line');
        }
    }
});
let time = document.querySelector('.song-current-time');
let currentAudio = null;
let isPlaying = false;
let currentPlayingIndex = null;

boxes.forEach((box, index) => {
    const play = box.querySelector('.num');

    play.addEventListener('click', (e) => {
        e.stopPropagation();

        if (currentPlayingIndex === index) {
            togglePlayPause();
            return;
        }

        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        currentAudio = new Audio(playlist[index].musicSrc);
        currentPlayingIndex = index;
        isPlaying = true;


        const timeElement = document.querySelector('.song-current-time');
        const progressBar = document.querySelector('.progress-bar');
        const cirLeft = document.querySelector('.circle');

        currentAudio.addEventListener('timeupdate', () => {
            const minutes = Math.floor(currentAudio.currentTime / 60);
            const seconds = Math.floor(currentAudio.currentTime % 60);
            if (timeElement) {
                timeElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            }

            if (progressBar) {
                const progress = (currentAudio.currentTime / currentAudio.duration) * 100;
                progressBar.style.width = `${progress}%`;
                cirLeft.style.left = `${progress}%`
            }
        });
        currentAudio.addEventListener('ended', () => {
            play.innerHTML = `<h3>${index + 1}</h3>`;
            isPlaying = false;
            if (progressBar) progressBar.style.width = '0%';
            if (timeElement) timeElement.textContent = '00:00';
        });

        currentAudio.play();
        updatePlayerBar(index, true);
    });
});

function togglePlayPause() {
    if (!currentAudio) return;
    if (isPlaying) {
        currentAudio.pause();
        isPlaying = false;
    } else {
        currentAudio.play();
        isPlaying = true;
        const play = boxes[currentPlayingIndex].querySelector('.num');
        play.innerHTML = '<i class="pause ri-pause-mini-line"></i>';
    }
    updatePlayerBar(currentPlayingIndex, isPlaying);
}
function updatePlayerBar(index, playing) {
    const barPlay = document.querySelector('.barPlay');
    if (barPlay) {
        barPlay.className = playing ? 'barPlay ri-pause-mini-line' : 'barPlay ri-play-fill';
    }
}
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('barPlay')) {
        mobileView.style.setProperty("display", "none", "important")
        if (currentPlayingIndex === null) {
            boxes[0].querySelector('.num').click();
        } else {
            togglePlayPause();
        }
    }
});

let number = document.querySelector('.n-of-song')
number.innerHTML = `${playlist.length} songs`
number.style.opacity = '.7'
number.style.fontSize = '.9rem'



let totalTime = document.querySelector('.total-duration')
function calculateTotalDuration() {
    let totalMinutes = 0;
    let totalSeconds = 0;
    playlist.forEach(song => {
        const [minutes, seconds] = song.musicDuration.split(':');
        totalMinutes += parseInt(minutes);
        totalSeconds += parseInt(seconds);
    });
    totalMinutes += Math.floor(totalSeconds / 60);
    totalSeconds = totalSeconds % 60;

    const formattedDuration = `${totalMinutes} min ${totalSeconds} sec`;
    totalTime.innerHTML = formattedDuration;
}
calculateTotalDuration();


let mobileView = document.querySelector('.mobile-view')
let down = document.querySelector('.down')

bar.addEventListener('click', () => {
    mobileView.style.display = 'inline-block';
})
down.addEventListener('click', () => {
    mobileView.style.display = 'none';
})

let update = document.querySelector('.updateInfo')
boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        let mData = ` <div class="image-section">
                    <img src="${playlist[index].musicImage}" alt="">
                </div>
                <div class="music-info">
                    <img src="${playlist[index].musicImage}" alt="">
                    <div class="music-det">
                        <h3>${playlist[index].musicName}</h3>
                        <h5>${playlist[index].musicSinger}</h5>
                    </div>
                </div>
                <div class="progress">
                        <div class="progress-bar">
                        </div>
                        <div class="circle"></div>
                    </div>
                    <div class="time">
                        <h5 class="song-current-time">0:00</h5>
                        <h5>${playlist[index].musicDuration}</h5>
                    </div>
                     <div class="icons">
                    <i class="ri-skip-back-mini-fill"></i>
                    <i class="ri-play-mini-fill"></i>
                    <i class="ri-skip-forward-mini-fill"></i>
                </div>
                <div class="lyrics">
                    <h4>Lyrics Preview</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, adipisci. Quasi voluptatem doloribus animi eligendi illo temporibus nostrum harum eius expedita rerum qui nulla, aut facilis odit hic! Itaque ducimus veniam rerum reprehenderit odio dolorem, animi porro officiis minima dolor ea ut corrupti voluptate impedit maiores voluptatum in quasi provident neque nulla quaerat esse. Officia eligendi laboriosam iste eaque eveniet aliquid quis minus, deserunt, dolor est ipsam esse quasi ab qui impedit repellat beatae. Beatae quae dolores soluta sunt libero sequi unde facilis numquam nisi. Sit dignissimos incidunt aperiam alias temporibus unde impedit provident cum, atque, laborum aliquam aliquid iste possimus illo. Repudiandae asperiores quisquam eveniet eaque quasi cum cupiditate minus illo harum! Itaque dolorem magni optio nobis impedit vitae autem adipisci quidem ea ipsam, nam aperiam, labore minus officia debitis sint eum. Nulla nam exercitationem rerum. Fuga, perferendis ipsum. Minus, iste quibusdam quia sapiente quas est fuga? Placeat illo ducimus laborum eveniet iure molestias numquam consectetur, non quae adipisci veniam esse, recusandae quisquam reprehenderit ex? Molestiae facere nostrum est, quas suscipit quo commodi! Repudiandae nisi ipsa nulla adipisci architecto accusantium aut dolorum, ab, reiciendis pariatur in quisquam ut necessitatibus amet officia libero accusamus ipsam optio illo ea facilis. Rem.</p>
                </div>
                    <div class="about-artist">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXMEBq8MPbFkkUNDlTiXZQWpPOeNOspU-jKg&s" alt="">
                    <h1>About The Artist</h1>
                    <div class="music-det">
                        <h3>${playlist[index].musicSinger}</h3>
                        <h5>8.8 millions</h5>
                    </div>
                </div>
                `

        update.innerHTML = mData
    })
})
