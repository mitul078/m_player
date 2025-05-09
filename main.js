let text = document.querySelector('.song-detail p')
let musicPlaylist = document.querySelector('.playlist')

const playlist = [
    { id: 1, musicImage: 'https://i.ytimg.com/vi/sFMRqxCexDk/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGBMgHyh_MA8=&rs=AOn4CLASvUOwkGlovr8nJCxc4ATXayHxxA', musicName: 'Choo Lo', musicSinger: 'The Local Train', albumName: 'Aalas Ka Pedh', musicDuration: '3:54', musicSrc: './m1.mp3' },
    { id: 2, musicImage: 'https://cdn.shortpixel.ai/spai/q_glossy+ret_img+to_auto/www.slantmagazine.com/wp-content/uploads/2024/08/music_diewithasmile.jpg', musicName: 'Die With Smile', musicSinger: 'Bruno Mars , Lady Gaga', albumName: 'Die With Smile', musicDuration: '4:12', musicSrc: './m2.mp3' },
    { id: 3, musicImage: 'https://i.ytimg.com/vi/4BrziEPQrOQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBvZKyFNe1vZXC4n1YTNPoWMoo2-g', musicName: 'Dil To Jaan Tu', musicSinger: 'Gurnazar, Chet Singh', albumName: 'Dil To Jaan Tu', musicDuration: '3:57', musicSrc: './m3.mp3' },
    { id: 4, musicImage: 'https://c.saavncdn.com/133/Faasle-Hindi-2021-20210801214117-500x500.jpg', musicName: 'Faasle', musicSinger: 'Aditya Rikhari', albumName: 'Faasle', musicDuration: '3.42', musicSrc: './m4.mp3' },
    { id: 5, musicImage: 'https://i1.sndcdn.com/artworks-GArwu8k4nmxqcByq-kGjdLg-t500x500.jpg', musicName: 'Kabhi Kabhi Aditi', musicSinger: 'Rashi Ali', albumName: 'Janne Tu.. Ya Janne Na', musicDuration: '3:39', musicSrc: './m5.mp3' },
    { id: 6, musicImage: 'https://images.genius.com/f6997af0e4a50956d92a5ca3514a9161.1000x1000x1.jpg', musicName: 'Ishq Hai', musicSinger: 'Anurag Saikia , Raj Shekhar ', albumName: 'Mis-matched S3', musicDuration: '5:13', musicSrc: './m6.mp3' },
    { id: 7, musicImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ipztPLNU132WFdOMe7FAUQ0JFqJVivQM-A&s', musicName: 'Heartbreak Kid', musicSinger: 'Talha Anjum, Umair', albumName: 'My Terrible Mind', musicDuration: '4:04', musicSrc: './m7.mp3' },
    { id: 8, musicImage: 'https://i.ytimg.com/vi/alkj73ka5m4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBNP8C_kHquHEtgE-ChXihT3TCu1g', musicName: 'Departure Lane', musicSinger: 'Talha Anjum , Umair', albumName: 'My Terrible Mind', musicDuration: '2:47', musicSrc: './m8.mp3' },
    { id: 9, musicImage: 'https://images.genius.com/4ad6d73dbd7d0ca4abecdaab6eee0e20.1000x1000x1.png', musicName: 'Paro', musicSinger: 'Aditya Rikhari', albumName: 'Paro', musicDuration: '2:33', musicSrc: './m9.mp3' },
    { id: 10, musicImage: 'https://i.scdn.co/image/ab67616d0000b27385c5968be0d0d9c545241124', musicName: 'Pal Pal', musicSinger: 'Afusic', albumName: 'Pal Pal', musicDuration: '2:27', musicSrc: './m10.mp3' }
]

let music = ''
playlist.forEach((song, index) => {
    music += ` <div class="box">
                            <div class="left-side">
                                <div id='${index + 1}' class="num"><h3>${song.id}</h3></div>
                                <div class="song-image"><img src="${song.musicImage}" alt=""></div>
                                <div class="song-detail">
                                    <p>${song.musicName}</p>
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
                                    <p>${playlist[index + 1].musicSinger}</p>
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
boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        let info = ` <div class="first">
                        <img src="${playlist[index].musicImage} "alt="">
                        <div class="data">
                            <h4>${playlist[index].musicName}</h4>
                            <p>${playlist[index].musicSinger}</p>
                        </div>
                    
                </div>
                <div class="second">
                    <div class="upper">
                        <i class="ri-skip-back-fill"></i>
                        <i class="barPlay ri-play-fill"></i>
                        <i class="ri-skip-forward-fill"></i>
                    </div>
                    <div class="lower">
                        <div class="progress">
                            <div class="progress-bar"></div>
                        </div>
                        <div class="time">
                            <h5>0:00</h5>
                            <h5>${playlist[index].musicDuration}</h5>
                        </div>
                    </div>
                </div>
                <div class="third">
                    <i class="ri-headphone-fill"></i>
                    <i class="ri-menu-5-line"></i>
                    <i class="ri-volume-up-fill"></i>
                    <div class="prog">
                        <div class="prog-bar"></div>
                    </div>
                    <i class="ri-fullscreen-exit-fill"></i>
                </div>`
        bar.innerHTML = info
    })
})



document.addEventListener('DOMContentLoaded', () => {
    let barPlay = document.querySelector('.barPlay');
    console.log('Found element:', barPlay); // Should now log the element
    
    boxes.forEach((box) => {
        box.addEventListener('click', () => {
            console.log(barPlay); // Should now work
        });
    });
});
