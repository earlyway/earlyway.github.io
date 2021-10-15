function copyToClipboard(val) {
    const t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = val;
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);
}
function copy() { //land output page에 적용된 js페이지 function
    copyToClipboard('https://earlyway.github.io/symritest_land');
    console.log('Copied!');
    alert("url 주소 복사가 완료되었습니다. 테스트 결과를 공유해보세요 🙂")
}



