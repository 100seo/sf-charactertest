function copyToClipboard(shareURL) {
    const t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = shareURL;
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);
}

function copy() {
    copyToClipboard('https://sf-charactertest.netlify.app/');
    console.log('Copied!');
    alert('클립보드에 복사되었습니다.')
}

function newPage()  {
    window.location.href = 'https://sf-charactertest.netlify.app/'
  }