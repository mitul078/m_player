let text = document.querySelector('.song-detail p')
let musicPlaylist = document.querySelector('.playlist')

const playlist = [
    {
        id: 1,
        musicImage: 'https://i.ytimg.com/vi/sFMRqxCexDk/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGBMgHyh_MA8=&rs=AOn4CLASvUOwkGlovr8nJCxc4ATXayHxxA',
        musicName: 'Choo Lo',
        musicSinger: 'The Local Train',
        albumName: 'Aalas Ka Pedh',
        musicDuration: '3:54',
        musicSrc: './m1.mp3',
        bgColor: 'linear-gradient(180deg, #1CB5E0 0%, #000851 100%)',
        lyricsColor: '#1CB5E0',
        lyrics: `Khada hoon aaj bhi wahin
Ke dil phir beqaraar hai
Khada hoon aaj bhi wahin
Ke tera intezaar hai
Chhoo lo jo mujhe tum kabhi
Kho na jaaun main raat-din
Nazron mein tum ho base
Keh do jo tum ek baar
"Mere ho, bas tum mere"
Nazron mein tum ho base
Khada hoon aaj bhi wahin
Lagi teri hi aas hai
Kaisi hai ye bebasi?
Ye kaisi dil ki pyaas hai?
Chhoo lo jo mujhe tum kabhi
Kho na jaaun main raat-din
Nazron mein tum ho base
Keh do jo tum ek baar
"Mere ho, bas tum mere"
Nazron mein tum ho base
Reh jaaunga yoon hi, bas yoon hi, bas yoon hi
Reh jaaunga yoon hi, bas yoon hi, bas yoon hi
Reh jaaunga yoon hi, bas yoon hi, bas yoon hi
Reh jaaunga yoon hi, bas yoon hi, bas yoon hi
Chhoo lo jo mujhe tum kabhi
Kho na jaaun main raat-din
Nazron mein tum ho base
Keh do jo tum ek baar
"Mere ho, bas tum mere"
Nazron mein tum ho base
Haan, main ruka hoon
Tu ja chuka hai
Haan, main ruka hoon
Tu ja chuka hai`

    },
    {
        id: 2,
        musicImage: 'https://cdn.shortpixel.ai/spai/q_glossy+ret_img+to_auto/www.slantmagazine.com/wp-content/uploads/2024/08/music_diewithasmile.jpg',
        musicName: 'Die With Smile',
        musicSinger: 'Bruno Mars , Lady Gaga',
        albumName: 'Die With Smile',
        musicDuration: '4:12',
        musicSrc: './m2.mp3',
        bgColor: 'linear-gradient(180deg, #00C9FF 0%, #92FE9D 100%)',
        lyricsColor: '#00C9FF',
        lyrics: `Ooh
I, I just woke up from a dream
Where you and I had to say goodbye
And I don't know what it all means
But since I survived, I realized
Wherever you go, that's where I'll follow
Nobody's promised tomorrow
So I'ma love you every night like it's the last night
Like it's the last night
If the world was ending, I'd wanna be next to you
If the party was over and our time on Earth was through
I'd wanna hold you just for a while and die with a smile
If the world was ending, I'd wanna be next to you
Ooh
Ooh, lost, lost in the words that we scream
I don't even wanna do this anymore
'Cause you already know what you mean to me
And our love's the only war worth fighting for
Wherever you go, that's where I'll follow
Nobody's promised tomorrow
So I'ma love you every night like it's the last night
Like it's the last night
If the world was ending, I'd wanna be next to you
If the party was over and our time on Earth was through
I'd wanna hold you just for a while and die with a smile
If the world was ending, I'd wanna be next to you
Right next to you
Next to you
Right next to you
Oh-oh, oh
If the world was ending, I'd wanna be next to you
If the party was over and our time on Earth was through
I'd wanna hold you just for a while and die with a smile
If the world was ending, I'd wanna be next to you
If the world was ending, I'd wanna be next to you
Ooh
I'd wanna be next to you`
    },
    {
        id: 3,
        musicImage: 'https://i.ytimg.com/vi/4BrziEPQrOQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBvZKyFNe1vZXC4n1YTNPoWMoo2-g',
        musicName: 'Dil To Jaan Tu',
        musicSinger: 'Gurnazar, Chet Singh',
        albumName: 'Dil To Jaan Tu',
        musicDuration: '3:57',
        musicSrc: './m3.mp3',
        bgColor: 'linear-gradient(180deg, #FC466B 0%, #3F5EFB 100%)',
        lyricsColor: '#FC466B',
        lyrics: `Tenu ki dassa mere layi kya tu
Mere layi dhadkan, mere layi saah tu
Tenu ki dassa mere layi kya tu
Mere layi dhadkan, mere layi saah tu

Haye dil tu, jaan tu, dard di dwaa tu
Jad tak main jeena, mere jeen di wajah tu
Dil tu, jaan tu, dard di dwaa tu
Jad tak main jeena, mere jeen di wajah tu

Tu taan mereyan sohneya yaara
Tukda mere dil da ae
Tere warga yaar ve sajna
Kise kise nu milda ae

Hai pahadan di thandi hawa tu
Main haan raahi, yaara mera raah tu

Haye dil tu, jaan tu, dard di dwaa tu
Jad tak main jeena, mere jeen di wajah tu
Dil tu, jaan tu, dard di dwaa tu
Jad tak main jeena, mere jeen di wajah tu

Chal rahi hoon ab, tham jaane ko dil karta hai
7 janmo ki kasam khane ko dil karta hai
Dil karta hai tujhe kar loon main qareeb itna
Ke teri saanson mein ab ghul jaane ko dil karta hai

Dil de vich dede thodi jahi thaan tu
Apne naa naal jod le mera naa tu

Haye dil tu, jaan tu, dard di dwaa tu
Jad tak main jeena, mere jeen di wajah tu
Dil tu, jaan tu, dard di dwaa tu
Jad tak main jeena, mere jeen di wajah tu`
    },
    {
        id: 4,
        musicImage: 'https://c.saavncdn.com/133/Faasle-Hindi-2021-20210801214117-500x500.jpg',
        musicName: 'Faasle',
        musicSinger: 'Aditya Rikhari',
        albumName: 'Faasle',
        musicDuration: '3:42',
        musicSrc: './m4.mp3',
        bgColor: 'linear-gradient(180deg, #3F2B96 0%, #A8C0FF 100%)',
        lyricsColor: '#3F2B96',
        lyrics: `Huye faasle, jhoote silsile
Toote huye dil jaayein kahaan?
Mujhe jo khushi mili na kabhi
Jaaye tere sang, jaaye tu jahaan
Meri ye dua hai ki tera jeewan yoon hi
Chalta rahe, saari khwaahishein hon poori
Teri duniya mein na ho ye kami
Na ho ye kami
Yaad hai mujhe teri har ada
Muskuraahatein teri
Tera mujh se chup ke se yoon
Kahna ki tu hai meri
Jaane ye kya ho gaya, ho gaye juda
Tere waaste sabhi raaste
Chhod ke main aai yahaan
Tu to na mila, yoon hi chal diya
Le ke mera dil jaane tu kahaan
Jaaoonga kahaan, main to hoon yahaan
Tere dil ki aahaton mein hoon
Sapnon mein tu, sochon mein tu
Har lamhe mein tu
Dhadke ye dil tere hi liye
Hoga kisi ka na ab ye
Ja raha hoon main
Ja rahi hoon main
Ja raha hoon main
Ja rahi hoon main`
    },
    {
        id: 5,
        musicImage: 'https://i1.sndcdn.com/artworks-GArwu8k4nmxqcByq-kGjdLg-t500x500.jpg',
        musicName: 'Kabhi Kabhi Aditi',
        musicSinger: 'Rashi Ali',
        albumName: 'Janne Tu.. Ya Janne Na',
        musicDuration: '3:39',
        musicSrc: './m5.mp3',
        bgColor: 'linear-gradient(180deg, #FDBB2D 0%, #22C1C3 100%)',
        lyricsColor: '#FDBB2D',
        lyrics: `Kabhi-kabhi aditi zindagi mein yuhi koi apna lagta hai
Kabhi-kabhi aditi wo bichad jaye to ek sapna lagta hai
Aise mein koi kaise apne aasun ko behene se roke
Aur kaise koi soch de Everything's gonna be ok
Kabhi-kabhi to lage zindagi mein rahi na khushi aur na maza
Kabhi-kabhi to lage har din muskhil aur har pal ek saza
Aise mein koi kaise muskuraye, kaise hansde kush hoke
Aur kaise koi soch de Everything's gonna be ok
Soch zara jaan-e-jaan tujhko hum kitna chahte hai
Roote hai hum bhi agar teri aakhon mein aasun aate hain
Gaana to aata nahi hai magar phir bhi hum gaate hain
Hey, aditi maana kabhi-kabhi sare jahan mein andhera hota hai
Lekin raat ke baad hi to savera hota hai
Kabhi-kabhi aditi zindagi mein yuhi koi apna lagta hai
Kabhi-kabhi aditi wo bichad jaye to ek sapna lagta hai
Hey aditi hasde hasde hasde hasde hasde tu zara
Nahi to bas thoda thoda thoda thoda thoda thoda muskura
Tu kush hai to lage ki jahan mein chhaai hai kushi
Suraj nikle badlon se aur baate zindagi
Sun to zara madhosh hawa tujhse kehne lagi
Ki aditi wo jo bichadte hain ek na ek din phir mil jate hain
Ye aditi jaane tu ya jaane na phool phir khil jate hain
Kabhi-kabhi aditi zindagi mein yuhi koi apna lagta hai
Kabhi-kabhi aditi wo bichad jaye to ek sapna lagta hai
Hey aditi hasde hasde hasde hasde hasde tu zara
Nahi to bas thoda thoda thoda thoda thoda thoda muskura
Hey aditi hasde hasde hasde hasde hasde tu zara
Nahi to bas thoda thoda thoda thoda thoda thoda muskura`
    },
    {
        id: 6,
        musicImage: 'https://images.genius.com/f6997af0e4a50956d92a5ca3514a9161.1000x1000x1.jpg',
        musicName: 'Ishq Hai',
        musicSinger: 'Anurag Saikia , Raj Shekhar ',
        albumName: 'Mis-matched S3',
        musicDuration: '5:13',
        musicSrc: './m6.mp3',
        bgColor: 'linear-gradient(180deg, #e3ffe7 0%, #d9e7ff 100%)',
        lyricsColor: '#e3ffe7',
        lyrics: `Dekho toh kya hi baat hai (kya hi baat hai)
Kambakht is jahaan mein (is jahaan mein)
Yeh ishq hai jisne isey (jisne isey)
Rehne ke qaabil kar diya (kar diya)
Rehne ke qaabil kar diya
Roshni hi roshni hai
Chaar-soo, jo chaar-soo
Ishq hai yeh, ishq hai
Ishq hai yeh, ishq hai
Jo chhupa hai har nazar mein
Har taraf jo roo-ba-roo
Ishq hai yeh, ishq hai
Ishq hai yeh, ishq hai
Ishq hai yeh, ishq hai
Ishq hai yeh, ishq hai
Tum se mile toh kuchh gunguni si
Hone lagi hain sardiyaan (ishq-ishq, ishq-ishq)
Tum se mile toh dekho shehar mein
Khilne lagi hain waadiyaan (ishq-ishq, ishq-ishq)
Saaya mera hai tu aur main tera
Tu dikhe ya na dikhe tu
Teri khushboo koo-ba-koo
Ishq hai yeh, ishq hai
Ishq hai yeh, ishq hai
Ishq hai yeh, ishq hai
Ishq hai yeh, ishq hai
Haan, koyi kehta, ishq humein aabaad karta hai
Koyi kehta, ishq humein barbaad karta hai
Zehan ki tang deewaaron se uthkar
Main kehta hoon, ishq humein aazaad karta hai
Moh pe yeh karam bhi keeje
Moh pe yeh karam bhi keeje
Laage naahi tum bin jiyaara
Aisi bekhudi hi deeje
Moh pe yeh karam bhi keeje
Moh pe yeh karam bhi keeje
Laage naahi tum bin jiyaara
Aisi bekhudi (aisi bekhudi) hi deeje
Haan, saara mera ho tu aur main tera
Yeh hi meri vehshatein hain
Yeh hi meri justujoo
Ishq hai yeh, ishq hai
Ishq hai yeh, ishq hai
Ishq hai yeh, ishq hai
Ishq hai yeh, ishq hai
Barsi hai mujhpe meher aasmaani
(Barsi hai mujhpe meher aasmaani)
Mohabbat ka dekho asar aasmaani
(Mohabbat ka dekho asar aasmaani)
Pairon ke neeche zameen ud rahi hai
(Pairon ke neeche zameen ud rahi hai)
Hai ishq mein har safar aasmaani
Tum se mile toh baithe-bithaayein
Chhoone lage hain aasmaan (ishq-ishq, ishq-ishq)
Tum se mile toh chhota sa qissa
Ban'ne ko hai ik daastaan (ishq-ishq, ishq-ishq)
Haan, saaya mera hai tu aur main tera
Tu dikhe ya, tu dikhe ya
Tu dikhe ya na dikhe tu
Teri khushboo koo-ba-koo
Ishq hai yeh, ishq hai (ishq hai)
Ishq hai yeh, ishq hai
Ishq hai yeh, ishq hai
Ishq hai yeh, ishq hai (ishq hai)
Ishq hai yeh, ishq hai
Ishq hai yeh, ishq hai
Ishq hai yeh, ishq hai (ishq hai)
Ishq hai yeh, ishq hai`
    },
    {
        id: 7,
        musicImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ipztPLNU132WFdOMe7FAUQ0JFqJVivQM-A&s',
        musicName: 'Heartbreak Kid',
        musicSinger: 'Talha Anjum, Umair',
        albumName: 'My Terrible Mind',
        musicDuration: '4:04',
        musicSrc: './m7.mp3',
        bgColor: 'linear-gradient(180deg, #d53369 0%, #daae51 100%)',
        lyricsColor: '#d53369',
        lyrics: `Ye dil bechaara tassali bhi chaahe kabhi
Ab ke wo aaye to itni bedardi se jaaye nahin
Ye dil awaara nikal hi jaata hai kahin
Thehraao nahin, I'm gone again, I'm gone again
Baad-e-saba to wo hi hai, bas hai ek kami
Ke ab teri zulfon ko chhu ke wo mujhse guzarti nahin
Baad-e-saba to wo hi hai, bas hai ek kami
Ke ab teri zulfon ko chhu ke wo mujhse guzarti nahin
Teri saadgi ke sadqe
Teri aajizi pe marte
Tere saaye se ho gaye hum
Tere saath hi to chalte
Saare gair mere liye khush
Mere apne mujhse jalte
Lage saal ab ek pal se
Mere shows lage jalse
Rahe wazan mere kal pe
Bade gunaah mere sar the
Par zindagi bas ek rawaani ka naam
Mere gaane sab jawaani ke naam
Nasha hai ab tere hijar mein, jaanam
Sharaab to ab jaise paani ka naam
Tanhaai, tareeki aur tark-e-ta'alluq
Phir wo hi maut aur phir wo hi taabut
Dil ek sholay ki tarah dehakta bhi hai
Dil parinda fajar pe chehekta bhi hai
Behekta bhi hai, ye mehekta bhi hai
Sharaab mein ghole ittar sa hi hai
Tu beparwaah hai, befikar sa bhi hai
Main likhta hu shaayari jiske liye
Wo padhta bhi hai aur mukarta bhi hai
Ye dil bechaara tassali bhi chaahe kabhi
Ab ke wo aaye to itni bedardi se jaaye nahin
Ye dil awaara nikal hi jaata hai kahin
Thehraao nahin, I'm gone again, I'm gone again
Baad-e-saba to wo hi hai, bas hai ek kami
Ke ab teri zulfon ko chhu ke wo mujhse guzarti nahin
Baad-e-saba to wo hi hai, bas hai ek kami
Ke ab teri zulfon ko chhu ke wo mujhse guzarti nahin
Mere ghar mein ab ek kamra khaali bhi hai
Wahaan se ab hosh hata di gayi hai
Ek saf-e-maatam bichha li gayi hai
Us kamre mein ab bas kitaabein hi baaqi hain
Aqal wahaan se utha li gayi hai
Nuskha-e-Ishq to sabko chaahiye
Nuskha-e-dard bata dijiye
Jo likhein hain khat wo jala dijiye
Mujhe humdardiyan samajh aati nahin hain
Jo tujhpe beeti, tu sab pe ayaan kar
Jo mujhpe beeti wo koi baat hi nahin hai
Judaai mein bhi kuchh wafa ke takaaze
Ke aib pe parde uthaate nahin hain
Ek yaar jiske ghar pe maa hi nahin
Ek main jo ghar pe raat tha hi nahin
Jo mayassar ho, kyun uski chaah hi nahin?
Dil ko tassali to de
Dil ko tassali nahin
Ye dhadkanein ladkhadaati hain
Be-tarteebiyan hein badi
Tu jab bhi mili badi sard si
Dawa hai paas har dard ki
I got rocks aur thodi si Hennessy
Jab tu sochon mein rehti hai rent free
Ye dil bechaara tassali bhi chaahe kabhi
Ab ke wo aaye to itni bedardi se jaaye nahin
Ye dil awaara nikal hi jaata hai kahin
Thehraao nahin, I'm gone again, I'm gone again
Baad-e-saba to wo hi hai, bas hai ek kami
Ke ab teri zulfon ko chhu ke wo mujhse guzarti nahin
Baad-e-saba to wo hi hai, bas hai ek kami
Ke ab teri zulfon ko chhu ke wo mujhse guzarti nahin`
    },
    {
        id: 8,
        musicImage: 'https://i.ytimg.com/vi/alkj73ka5m4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBNP8C_kHquHEtgE-ChXihT3TCu1g',
        musicName: 'Departure Lane',
        musicSinger: 'Talha Anjum , Umair',
        albumName: 'My Terrible Mind',
        musicDuration: '2:47',
        musicSrc: './m8.mp3',
        bgColor: 'linear-gradient(180deg, #fcff9e 0%, #c67700 100%)',
        lyricsColor: '#fcff9e',
        lyrics: `Khushfehmiyan hain, khud se bani hain
Kuch kami hai toh (kuch kami hai toh)
Main bhi yahaan hoon, woh bhi yahin hai
Kya woh nahi hai jo? (woh nahi hai jo)
Kya woh teri-meri be-takallufi?
Ya woh duniya mein sabse sar-kashi
Tu pariyon si kaisi nazneen
Ki dil ne zehan ki na suni
Khuda ne yeh hawayehin tere sang kardi
Tu woh jo be-rang ko bhi rang karti
Tu woh jo mujhe haasil hi nahi
Main karoon tujhe kaise yeh bayaan?
Meri jaan, meri jaan, tu na jaa
Abhi karz hai tujhpe woh waada
Meri jaan, mujhe kya hi pata tha
Rang badle yeh kaise aasmaan
Meri jaan, meri jaan, yoon na jaa
Badlo na tum apna iraada
Meri jaan, mujhe kya hi pata tha
Rang badle yeh kaise aasmaan
Meri saari umar mein tu hi hai kami, baaki sab hai mayassar
Tera na aana mujhe maar dega, tanhaiyon mein dil mera rukta hai aksar
Bikhra hai dil ka yeh daftar, koyi nhi ghar par, jaaunga kidhar tak?
Aadatein nahi chhoot'ti, roz wahin, jahaan se shuru kiya sifar se sifar tak
Duniya mile kaam se bas (mm-mm)
Duniya mere kaam ki nahi (mm-mm)
Main suraj sе mukhatib hoke shaam se baitha hoon
Ye humara pеhla jaam to nahi (jaam to nahi)
Sabar ka imtehaan na le, tu mere sabar ka inaam to nahi
Tu mujhse kuchh chhupa bhi le
Tu mujhe kuchh bata hi nahi
Ab teri marzi, mujhpe kuch tu kar ayaan hi nahi (no, no)
Meri jaan, meri jaan, yoon na jaa
Abhi karz hai tujhpe woh waada
Meri jaan, mujhe kya hi pata tha
Rang badle yeh kaise aasmaan
Meri jaan, meri jaan, yoon na jaa
Badlo na tum apna iraada
Meri jaan, mujhe kya hi pata tha
Rang badle yeh kaise aasmaan`
    },
    {
        id: 9,
        musicImage: 'https://images.genius.com/4ad6d73dbd7d0ca4abecdaab6eee0e20.1000x1000x1.png',
        musicName: 'Paro',
        musicSinger: 'Aditya Rikhari',
        albumName: 'Paro',
        musicDuration: '2:33',
        musicSrc: './m9.mp3',
        bgColor: 'linear-gradient(180deg, #9ebd13 0%, #008552 100%)',
        lyricsColor: '#9ebd13',
        lyrics: `Hm
Ke ab kuchh hosh nahin hai
Tu mujhko pila degi kya?
Main peekar jo bhi kahunga
Tu subah bhula degi kya?
Tu baahon mein rakh le do pal
Phir chaahe duur hata de
Main gaud mein rakh loon agar sar
Tu mujhko sula degi kya?
Jaati nahin teri yaadein
Kasam se, ke dil ka bharam hai tu
Baaki nahin ab koi sharam
Jaana, ek dharam hai tu
Jo kehti thi, "Mat piyo na
Meri jaan, zehar hai ye"
Use dekhta hoon koi gair chhuye
Ab aur zehar kya piyoon?

Ta-ra-ra, ra-ra, ra-ra, ra
Ta-ra-ra, ra-ra, ra-ra, ra-ta-ra-ra
Ta-ra-ra, ra-ra, ra-ra, ra
Ta-ra, ra-ra, ra-ra, ra-ra, ra-ra`
    },
    {
        id: 10,
        musicImage: 'https://i.scdn.co/image/ab67616d0000b27385c5968be0d0d9c545241124',
        musicName: 'Pal Pal',
        musicSinger: 'Afusic',
        albumName: 'Pal Pal',
        musicDuration: '2:27',
        musicSrc: './m10.mp3',
        bgColor: 'linear-gradient(180deg, #00d2ff 0%, #3a47d5 100%)',
        lyricsColor: '#00d2ff',
        lyrics: `Pal-pal jeena muhaal mera tere bina
Yeh saare nashe bekaar teri aankhon ke siva
Ghar nahi jaata, main bahar, rehta tera intezaar
Mere khwabon mein aa na karke 16 singhaar
Main ab kyun hosh mein aata nahi?
Sukoon yeh dil kyun paata nahi?
Kyun todun khud se jo the waade?
Ke ab yeh ishq nibhana nahi
Main modun tumse jo yeh chehra
Dobara nazar milana nahi
Yeh duniya jaane mera dard
Tujhe yeh nazar kyun aata nahi?
Sohneya, yoon tera sharmana meri jaan na le-le
Kaan ke peechhe zulf chupana, meri jaan, kya kehne!
Zaalima, tauba tera nakhra! Iske waar kya kehne!
Thaam ke baithe dil ko ghayal, kahin haar na baithein
Teri nazrein mujhse kya kehti hain, inmein wafa behti hai
Thodi-thodi si raazi, thodi si khafa rehti hain
Log hain zaalim bade, inmein jafa dekhi hai
Yeh duniya teri nahi, maine tujh mein haya dekhi hai
Jeena muhaal mera tere bina
Yeh saare nashe bekaar teri aankhon ke siva
Ghar nahi jaata, main bahar, rehta tera intezaar
Mere khwabon mein aa na karke 16 singhaar`
    }
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
number.innerHTML = `Total ${playlist.length} songs`
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

    const formattedDuration = `Total-Time: ${totalMinutes}:${totalSeconds}`;
    totalTime.innerHTML = formattedDuration;
}
calculateTotalDuration();


let mobileView = document.querySelector('.mobile-view')
let down = document.querySelector('.down')
let lyrics = document.querySelector('.lyrics')

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
                    <pre style="white-space: pre-wrap;">${playlist[index].lyrics.trim()}</pre>
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
        let lyrics = document.querySelector('.lyrics')

        console.log(playlist[index].bgColor)
        mobileView.style.background = playlist[index].bgColor;
        lyrics.style.background = playlist[index].lyricsColor;

    })
})
