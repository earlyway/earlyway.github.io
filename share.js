const url = 'https://earlyway.github.io/';

function setShare(){
    var resultImg = document.querySelector('#resultImg');
    var resultAlt = resultImg.firstElementChild.alt;
    
}


function sendLink() {
    Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
            title: '나의 타고난 자연의 모습은?',
            description: '생년월일로 알아보는 나의 타고난 성향 테스트',
            imageUrl: 'https://i.imgur.com/bG1XkHu.jpg',
            link: {
                mobileWebUrl: 'https://earlyway.github.io/',
            },
        },
        buttons: [
            {
                title: '테스트 시작',
                link: {
                    mobileWebUrl: 'https://earlyway.github.io/',
                },
            },
        ]
    });
}