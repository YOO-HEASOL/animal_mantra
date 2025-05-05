      document.addEventListener("DOMContentLoaded", () => {
        const backgrounds = [
          "images/bg_01.png",
          "images/bg_02.png",
          "images/bg_03.png",
          "images/bg_04.png",
            "images/bg_05.png",
            "images/bg_06.png",
            "images/bg_07.png",
          // 추가 이미지 경로 계속
        ];
      
        // 랜덤 배경 선택
        const chosen = backgrounds[Math.floor(Math.random() * backgrounds.length)];
      
        // 배경 이미지 변경
        document.body.style.backgroundImage = `url(${chosen})`;
      });

      const messages = [
        [["옴 바아라<br>바다라 훔 바탁"], "풍요롭고 안락한 생활을<br>성취하는 진언이에요."],
        [["옴 기리나라 모나라<br>훔 바탁"], "온갖 불안에서 마음의 평온을<br>얻는 진언이에요."],
        [["옴 기리기리 바아라<br>훔 바탁"], "뱃속의 온갖 질병을<br>낫게 하는 진언이에요."],
        [["옴 제세제야 도미니<br>도제 삿다야 훔 바탁"], "모든 도깨비와 귀신을<br>항복시키는 진언이에요."],
        [["옴 이베이베 이파야<br>마하 사리예 사바하"], "천신 악마 외도들을<br>항복시키는 진언이에요."],
        [["옴 바아라 아니바라<br>닙다야 사바하"], "모든 원수와 적을 꺽어서<br>항복시키는 진언이에요."],
        [["옴 바아라나야<br>훔 바탁"], "온갖 걱정과 두려움을<br>없애는 진언이에요."],
        [["옴 도비가야<br>도비바라<br>바리니 사바하"], "어두운 눈을 밝게 하여<br>광명을 보는 진언이에요."],
        [["옴 소싯지<br>아리 사바하"], "심한 열병을 앓을 때<br>나을 수 있는 진언이에요."],
        [["옴 아자미례<br>사바하"], "승진하거나 높은 관직을<br>얻는 진언이에요."],
        [["옴 가마라<br>사바하"], "좋은 친구와 동료를<br>만나게 하는 진언이에요."]
      ];


      const container = document.getElementById('message');
  
     function showLinesOneByOne(lines, delay = 1800) {
      const textLines = lines[0]; // 본문 메시지들
      const chatLine = lines[1];  // 말풍선 메시지
    
      container.innerHTML = '';
    
      textLines.forEach((line, i) => {
        setTimeout(() => {
          container.innerHTML = ''; // 한 줄씩만 보이게
          const div = document.createElement('div');
          div.innerHTML = line;
          div.style.opacity = 0;
          div.style.transition = 'opacity 1s ease-in';
          div.style.display = 'block';
          container.appendChild(div);
          requestAnimationFrame(() => {
            div.style.opacity = 1;
          });
        }, i * delay);
      });
    
      // 마지막 줄이 출력된 후 말풍선 변경
      setTimeout(() => {
        const chat = document.querySelector('.chat-text');
        if (chat) {
          chat.innerHTML = chatLine;
        }
      }, textLines.length * delay);
    }


      // 실행
      const randomLines = messages[Math.floor(Math.random() * messages.length)];
      showLinesOneByOne(randomLines, 2400); // 감성적 템포로 약 2.4초 간격

      if (performance.navigation.type === 1) {
        // 이게 true면 사용자가 새로고침한 것
        // 여기에 "새로고침 막기" 로직을 넣을 수 있음
        alert("새로고침은 사용할 수 없습니다.");
        history.pushState(null, '', location.href); // 강제 유지
      }

      // 꽃잎 이펙트
     const petalImages = [
        'images/img_petal1.png',
        'images/img_petal2.png',
        'images/img_petal3.png',
        'images/img_petal4.png'
      ];
      
      function createPetals(count, originX, originY) {
        for (let i = 0; i < count; i++) {
          const petal = document.createElement('div');
          petal.className = 'petal';
      
          // 랜덤 이미지 적용
          const img = petalImages[Math.floor(Math.random() * petalImages.length)];
          petal.style.backgroundImage = `url('${img}')`;
      
          // 위치 설정
          petal.style.left = `${originX}px`;
          petal.style.top = `${originY}px`;
      
          // 퍼지는 방향 설정
          const offsetX = (Math.random() - 0.5) * 300 + 'px';
          const offsetY = (Math.random() - 0.5) * 300 + 'px';
          petal.style.setProperty('--x', offsetX);
          petal.style.setProperty('--y', offsetY);
      
          document.body.appendChild(petal);
      
          // 자동 제거
          setTimeout(() => petal.remove(), 3000);
        }
      }

      // 모바일에서 터치시 실행
      animal.addEventListener('touchstart', (e) => {
  createPetals(30, e.touches[0].clientX, e.touches[0].clientY);
});
