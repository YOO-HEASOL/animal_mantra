document.addEventListener("DOMContentLoaded", () => {
  // 🌄 랜덤 배경 이미지 설정
  const backgrounds = [
    "images/bg_01.png",
    "images/bg_02.png",
    "images/bg_03.png",
    "images/bg_04.png",
    "images/bg_05.png",
    "images/bg_06.png",
    "images/bg_07.png",
    "images/bg_08.png",
    "images/bg_09.png",
    "images/bg_10.png",
    "images/bg_11.png",
    "images/bg_12.png"
  ];
  const chosenBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  document.body.style.backgroundImage = `url(${chosenBackground})`;

  // 💬 진언 메시지 데이터
  const messages = [
    [["옴 바아라<br>바다라 훔 바탁"], "풍요롭고 안락한 생활을<br>성취하는 진언이에요."],
    [["옴 기리나라 모나라<br>훔 바탁"], "온갖 불안에서 마음의<br>평온을 얻는 진언이에요."],
    [["옴 기리기리 바아라<br>훔 바탁"], "뱃속의 온갖 질병을<br>낫게 하는 진언이에요."],
    [["옴 제세제야 도미니<br>도제 삿다야 훔 바탁"], "모든 도깨비와 귀신을<br>항복시키는 진언이에요."],
    [["옴 이베이베 이파야<br>마하 사리예 사바하"], "천신 악마 외도들을<br>항복시키는 진언이에요."],
    [["옴 바아라 아니바라<br>닙다야 사바하"], "모든 원수와 적을 꺾어서<br>항복시키는 진언이에요."],
    [["옴 바아라나야<br>훔 바탁"], "온갖 걱정과 두려움을<br>없애는 진언이에요."],
    [["옴 도비가야<br>도비바라<br>바리니 사바하"], "어두운 눈을 밝게 하여<br>광명을 보는 진언이에요."],
    [["옴 소싯지<br>아리 사바하"], "심한 열병을 앓을 때<br>나을 수 있는 진언이에요."],
    [["옴 아자미례<br>사바하"], "승진하거나 높은 관직을<br>얻는 진언이에요."],
    [["옴 가마라<br>사바하"], "좋은 친구와 동료를<br>만나게 하는 진언이에요."],
    [["옴 아례<br>삼만염 사바하"], "가족과 친척이<br>화목해지는 진언이에요."],
    [["옴 미라야 미라야<br>사바하"], "관재를 당하지<br>않게 하는 진언이에요."],
    [["옴 바나맘<br>미라야 사바하"], "훌륭한 윗사람이<br>되게 하는 진언이에요."],
    [["옴 바아라<br>미라야 사바하"], "마음을 내어 공덕을<br>쌓게 하는 진언이에요."],
    [["옴 미보라 나락사<br>바아라 만다라 훔 바탁"], "큰 지혜를 얻게<br>하는 진언이에요."],
    [["옴 사라사라<br>바아라 가라 훔 바탁"], "부처님을 직접 친히<br>뵙는다는 진언이에요."],
    [["옴 바아라<br>바사가리<br>아니맘나 훔"], "깊은 땅속의 보물을<br>얻게 하는 진언이에요."],
    [["옴 바아라<br>가리라타 맘타"], "모든 신선들의 도를<br>성취하게 하는 진언이에요."],
    [["옴 바아라<br>서가로타 맘타"], "다음 세상에 천신의<br>지위를 얻는 진언이에요."],
    [["옴 상아례 마히<br>삼만염 사바하"], "하늘의 선신들이<br>보호해주는 진언이에요."],
    [["옴 바아라녜<br>담아예 사바하"], "감동적이고 뛰어난<br>말솜씨를 얻는 진언이에요."],
    [["옴 바나만<br>아링하리"], "살아 있는 것에 존경심을<br>갖게 하는 진언이에요."],
    [["옴 아하라<br>살바미냐 다라<br>바니제 사바하"], "널리 배우고 닦아<br>총명하게 하는 진언이에요."],
    [["옴 서나미자<br>사바하"], "깨달음까지 포기하지 않게<br>해주는 진언이에요."],
    [["옴 아마라<br>검제이니 사바하"], "풍요로운 수확물을<br>얻게 하는 진언이에요."],
    [["옴 도나 바아라"], "일체의 귀신들을<br>무릎 꿇게 하는 진언이에요."],
  ];

  // 🌟 텍스트 단계별 표시 함수
  function showLinesOneByOne(lines, delay = 1800) {
    const container = document.getElementById('message');
    const [textLines, chatLine] = lines;

    container.innerHTML = '';

    textLines.forEach((line, i) => {
      setTimeout(() => {
        container.innerHTML = '';
        const div = document.createElement('div');
        div.innerHTML = line;
        div.style.opacity = 0;
        div.style.transition = 'opacity 1s ease-in';
        container.appendChild(div);
        requestAnimationFrame(() => {
          div.style.opacity = 1;
        });
      }, i * delay);
    });

    // 마지막 줄이 출력된 후 말풍선 텍스트 변경
    setTimeout(() => {
      const chat = document.querySelector('.chat-text');
      if (chat) chat.innerHTML = chatLine;
    }, textLines.length * delay);
  }

  // 🎲 랜덤 메시지 표시
  const randomLines = messages[Math.floor(Math.random() * messages.length)];
  showLinesOneByOne(randomLines, 2400);

  // 🔒 새로고침 감지 (최신 API 사용)
  const navEntry = performance.getEntriesByType("navigation")[0];
  if (navEntry?.type === "reload") {
    alert("새로고침은 사용할 수 없습니다.");
    history.pushState(null, '', location.href); // URL 유지
  }
});
