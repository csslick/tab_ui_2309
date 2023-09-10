const btns = document.querySelectorAll('.tab-ui .btn-group a');
const tab_contents = document.querySelectorAll('.tab-ui .tab-content');

// tab UI 초기화
function initTab() {
  btns.forEach(function(btn) {
    btn.classList.remove('active');
  })

  tab_contents.forEach(function(tab_content) {
    tab_content.classList.remove('active');
  })
}

// tab UI 이벤트
btns.forEach(function(btn) {
  btn.addEventListener('click', function(){
    initTab();
    btn.classList.add('active'); // 버튼 스타일

    // tab 버튼의 #링크주소와 콘텐츠 id가 일치하는 영역만 표시
    tab_contents.forEach(function(tab_content){
      console.log(tab_content.id, btn.getAttribute('href'));
      if('#'+tab_content.id === btn.getAttribute('href')) {
        tab_content.classList.add('active');
      }
    })
  })
})