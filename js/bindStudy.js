const book = {
  myPoint: 100,
  // 이벤트 설정
  setEvent: function() {
    const node = document.getElementsByClassName("point")[0];
    // this는 book을 가르킨다. setEvent를 호출한 오브젝트를 가르킨다.
    // show()(핸들러 함수)와 이벤트를 설정했던 엘리먼트 오브젝트 node를 bindㅇ()에 파라미터로 작성했다.
    node.onclick = this.show.bind(book, node);
  },
  // 이벤트 핸들러 설정
  show: function(node, event) {
    console.log(node.textContent);
    console.log(this.myPoint);
  }
};

book.setEvent();
