//이미지 변경 함수
const img_url = [
    'images/images_01.jpg',
    'images/images_02.jpeg',
    'images/images_03.jpeg',
    'images/images_04.jpeg',
    'images/images_05.jpeg',
    'images/images_06.jpeg',
];

$(function(){
    function changeBg() {
      let imgNum = Math.floor(Math.random() * 6)
      console.log(imgNum);
  
      // 이미지 변경
      $('body').css({
        background: `url('images/filter_box.png'),
        url(${img_url[imgNum]})`
      })
    }
  
    // setInterval(함수, 시간ms)
    setInterval(changeBg, 5000);
  
  });
  
  // 응용과제: 이미지를 총 6장으로 추가 랜덤 수정 