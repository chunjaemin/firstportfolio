<template>
  <div class="introduce-container">
    <div class="introduce-body-container">
      <div class="menu-container">
        <p class="menu-title">Jamin's Portfolio</p>
        <div class="menu-line"></div>
        <p class="menu-text1 menu-font-size" @click=scrollTo1>6월 5일</p>
        <p class="menu-text2 menu-font-size" @click=scrollTo2>6월 초 ~ 7월 중순</p>
        <p class="menu-text3 menu-font-size" @click=scrollTo3>7월 말 ~ 8월 말</p>
        <p class="menu-text4 menu-font-size" @click=scrollTo4>8월 말 ~ 10월 말</p>
        <div class="menu-stamp1"></div>
        <div class="menu-stamp2"></div>
        <div class="menu-stamp3"></div>
        <div class="menu-stamp4"></div>
      </div>
      <audio class="sound-box" :src="sound" controls loop></audio>
      <TextAnimation></TextAnimation>
    </div>
  </div>
  <div class="main-container-0">
    <div class="main-body-container-0">
      <div class="hand-container">
        <handSvg></handSvg>
      </div>
      <div class="butterfly-container">
        <butterfly-svg></butterfly-svg>
      </div>
    </div>
  </div>

  <!--첫번째 컨테이너 시작-->
  <div class="main-container-1">
    <div class="main-body-container-1">
      <div class="timeline-empty-300px"></div>
      <div class="timeline1"></div>
      <div class="sticky-container-1 sticky-container">
        <div class="time-stamp1 stamp"></div>
        <div class="stamp-shadow shadow"></div>
        <p class="timeline-title-1 text-white timeline-title">공군 전역</p>
        <p class="timeline-text1 timeline-text text-white">23년 6월 5일</p>
        <div class="cap-container">
          <capSvg></capSvg>
        </div>
        <div class="airplane-container">
          <airplaneSvg></airplaneSvg>
        </div>
      </div>

      <div class="main-body-text-container">
        <div class="cap-virtual-container1"></div>
        <div class="cap-virtual-container2"></div>
        <div class="timeline-empty-100px"></div>
        <div class="timeline-empty-100px"></div>
        <div class="timeline-empty-500px"></div>
        <p class="text-white timeline-text-size">
          저는 6월 5일에 전역 했습니다.
        </p>
        <div class="timeline-empty-500px"></div>
        <p class="text-white timeline-text-size">
          전역 직전에 <span class="color-white">국방부 공공데이터 활용 경진 대회</span>에 <br>같이 참여해보지 않겠냐는
          제안을 받아서 <span class="color-white">참여하게 되었습니다.</span>
        </p>
        <div class="timeline-empty-500px"></div>
        <p class="text-white timeline-text-size">
          이때 당시 html, css, javascript 개념도 모르던 <br>때였는데 어쩌다보니 웹 개발을
          담당하게 되어 <br>이 대회를 계기로 <span class="color-white">웹 개발에 입문하게 되었습니다.</span>
        </p>
      </div>
    </div>
  </div>
  <!--첫번째 컨테이너 끝-->

  <!--두번째 컨테이너 시작-->
  <div class="main-container-2">
    <div class="main-body-container-2">
      <div class="cap-virtual-container3"></div>
      <div class="timeline-empty-300px"></div>
      <div class="timeline2"></div>
      <div class="sticky-container-1 sticky-container">
        <div class="time-stamp2 stamp"></div>
        <div class="stamp-shadow2 shadow"></div>
        <p class="timeline-title-2 timeline-title title-green">국방부 대회 참가</p>
        <p class="timeline-text1 timeline-text title-green">6월 초-7월 중순</p>
        <div class="card-container-2 card" @click="openOfficer">
          <img :src="image.officerImage" class="card-image-2" alt="웹사이트이미지">
          <p class="card-title-2">The Officer</p>
          <p class="card-text-2 color-gray">국방부 공공데이터 활용경진 대회 참가작품입니다. 장교 가이드라인을 담은 웹사이트입니다.</p>
        </div>
        <div class="app-card-container" @click="openApp">
          <img :src="image.officerlogoImage" class="app-card-image">
          <p class="app-card-title">The Officer Android APP</p>
          <p class="app-card-text">구글 PlayStore에 올려져 있는 The officer 앱 입니다.</p>
        </div>
        <div class="trophy-container">
          <trophySvg></trophySvg>
        </div>
      </div>

      <div class="main-body-text-container">
        <div class="timeline-empty-100px"></div>
        <div class="timeline-empty-100px"></div>
        <div class="timeline-empty-500px"></div>
        <p class="text-white timeline-text-size">
          개발자, 디자이너, 자료수집담당 총 3명으로 <br> 대회에 참가했습니다.
        </p>
        <div class="timeline-empty-500px"></div>
        <p class="text-white timeline-text-size">
          원래 초기에는 <span class="color-green">웹개발자 1명, 앱개발자 1명(본인)</span> <br> 총 4명이었으나
        </p>
        <div class="timeline-empty-500px"></div>
        <p class="text-white timeline-text-size">
          웹개발자분이 사정상 못하게 되셔서 <br> <span class="color-green">제가 웹개발까지 도맡아 하게 되었습니다.</span>
        </p>
        <div class="timeline-empty-500px"></div>
        <p class="text-white timeline-text-size">
          한달동안 html css javascript의 동작에 대한 <br>전반적인 이해와 함께 <span></span>
          <span class="color-green">디자이너와의 협업을 해보는 <br>특별한 경험</span>을 가지게 되었습니다.
        </p>
        <div class="timeline-empty-500px"></div>
        <p class="text-white timeline-text-size">
          디자이너님과 협업하다보니 템플릿 없이 <br> 각각의 요소를 직접 만들어보게 되었는데
        </p>
        <div class="timeline-empty-500px"></div>
        <p class="text-white timeline-text-size">
          <span class="color-green">백지에서부터 웹사이트를 만들어보는 경험</span>이 <br> 기본을 탄탄하게 다질 수 있게 해준 것 같습니다.
        </p>
        <div class="timeline-empty-500px"></div>
        <p class="text-white timeline-text-size">
          제가만든 웹사이트는 <span class="color-green">왼쪽 카드를 클릭하시면</span> <br> 확인하실 수 있습니다
        </p>
      </div>
    </div>
  </div>
  <!--두번째 컨테이너 끝-->

  <!--세번째 컨테이너 시작-->
  <div class="main-container-3">
    <div class="main-body-container-3">
      <div class="cap-virtual-container4"></div>
      <div class="timeline-empty-300px"></div>
      <div class="timeline3"></div>
      <div class="sticky-container-1 sticky-container">
        <div class="time-stamp3 stamp"></div>
        <div class="stamp-shadow3 shadow"></div>
        <p class="timeline-title-3 timeline-title title-yellow">Database + CS지식</p>
        <p class="timeline-text1 timeline-text title-yellow">7월 말-8월 말</p>
        <div class="card-container-3 card" @click="openNotion">
          <img :src="image.notionImage" class="card-image-3" alt="웹사이트이미지">
          <p class="card-title-2">가지김밥의 Notion</p>
          <p class="card-text-2 color-gray">제가 공부한 것을 기록해두는 노션입니다. 제가 공부한 내용들을 확인하실 수 있습니다.</p>
        </div>
        <div class="cloud-container">
          <cloudSvg></cloudSvg>
        </div>
      </div>

      <div class="main-body-text-container">
        <div class="timeline-empty-100px"></div>
        <div class="timeline-empty-100px"></div>
        <div class="timeline-empty-500px"></div>
        <p class="text-white timeline-text-size">
          사용자와 상호작용 할 수 있는 웹사이트를 <br>만들기 위해
          <span class="color-yellow">데이터베이스 공부를 시작했습니다.</span>
        </p>
        <div class="timeline-empty-500px"></div>
        <p class="text-white timeline-text-size">
          학습한 내용은 다음과 같습니다.
        </p>
        <div class="timeline-empty-500px"></div>
        <p class="text-white timeline-text-size">
          <span class="color-yellow">로컬 mysql-database</span>및 <span class="color-yellow">클라우드 aws-database</span>를 <br> 이용한 데이터베이스 생성 및 조작
        </p>
        <div class="timeline-empty-500px"></div>
        <p class="text-white timeline-text-size">
          <span class="color-yellow">apache+php+mysql</span>을 이용한 연동 및 <br> <span class="color-yellow">mysql+node.js</span>를 이용한 연동
        </p>
        <div class="timeline-empty-500px"></div>
        <p class="text-white timeline-text-size">
          당장에 모르는 것도 많았고, 데이터베이스 외에도 <br> 앞으로 알아가야할 것들이 많다고 생각되어
        </p>
        <div class="timeline-empty-500px"></div>
        <p class="text-white timeline-text-size">
          데이터베이스를 연동 할 수 있을 정도로만 <br> 얕게 공부하고 <span class="color-yellow">웹에 대한 공부로 넘어갔습니다.</span>
        </p>
        <div class="timeline-empty-500px"></div>
        <p class="text-white timeline-text-size">
          웹에 대한 공부로는 브라우저,웹,DNS등 <br> <span class="color-yellow">인터넷망에 대한 전체적인 구조</span>를 공부하였습니다.
        </p>
        <div class="timeline-empty-500px"></div>
        <p class="text-white timeline-text-size">
          왼쪽 카드에 제가 <span class="color-yellow">공부한 내용들을 정리해두는</span> <br> 노션링크를 올려두었습니다.
        </p>
      </div>
    </div>
  </div>
  <!--세번째 컨테이너 끝-->

  <!--네번째 컨테이너 시작-->
  <div class="main-container-4">
    <div class="main-body-container-4">
      <div class="timeline-empty-300px"></div>
      <div class="timeline4"></div>
      <div class="sticky-container-4 sticky-container">
        <div class="time-stamp4 stamp"></div>
        <div class="stamp-shadow4 shadow"></div>
        <p class="timeline-title-4 timeline-title title-red">VUE+Dashboard제작</p>
        <p class="timeline-text4 timeline-text title-red">8월 말-10월 말</p>
        <div class="dashboard-card left-dashboard" @click="openDashBoard">
          <img :src="image.dashboard[1]" alt="" class="dashboard-card-image">
          <p class="dashboard-card-title">Jamins-DashBoard</p>
          <p class="dashboard-card-text color-gray">vue3를 이용해 만든 DashBoard 입니다. 리그오브레전드 간편전적 검색, 여러 3D차모델 확인 등 제가 공부한 것들을 실습해보는 용도의 Dashboard입니다.</p>
        </div>
        <div class="dashboard-image-box left-dashboard"><img :src="image.dashboard[2]" alt="" class="dashboard-image"></div>
        <div class="dashboard-image-box left-dashboard"><img :src="image.dashboard[3]" alt="" class="dashboard-image"></div>
        <div class="dashboard-image-card left-dashboard"><img :src="image.dashboard[4]" alt="" class="dashboard-image"></div>
        <div class="dashboard-image-card left-dashboard"><img :src="image.dashboard[5]" alt="" class="dashboard-image"></div>
        <div class="dashboard-image-box left-dashboard"><img :src="image.dashboard[6]" alt="" class="dashboard-image"></div>
        <div class="dashboard-image-box left-dashboard"><img :src="image.dashboard[7]" alt="" class="dashboard-image"></div>
        <div class="dashboard-image-box left-dashboard"><img :src="image.dashboard[8]" alt="" class="dashboard-image"></div>
        <div class="dashboard-image-box left-dashboard"><img :src="image.dashboard[9]" alt="" class="dashboard-image"></div>
        <div class="dashboard-image-box left-dashboard"><img :src="image.dashboard[10]" alt="" class="dashboard-image"></div>
        <div class="dashboard-image-box left-dashboard"><img :src="image.dashboard[11]" alt="" class="dashboard-image"></div>
        <div class="dashboard-card left-dashboard" @click="openDashBoard">
          <img :src="image.dashboard[1]" alt="" class="dashboard-card-image">
          <p class="dashboard-card-title">Jamins-DashBoard</p>
          <p class="dashboard-card-text color-gray">vue3를 이용해 만든 DashBoard 입니다. 리그오브레전드 간편전적 검색, 여러 3D차모델 확인 등 제가 공부한 것들을 실습해보는 용도의 Dashboard입니다.</p>
        </div>

        <div class="dashboard-real-text-container">
          <div class="dashboard-real-text">8월 말, 알고리즘 공부와 cs지식을 준비하려던 와중에 <br> 우연히 <span class="color-red">vue프레임워크에 대해 알게되었습니다.</span></div>
          <div class="dashboard-real-text">모던 프레임워크에 대해 얕게라도 알아두면 좋겠다 싶어서 <br>  9월초에 vue프레임워크 공부를 시작하게 되었습니다. </div>
          <div class="dashboard-real-text">2주간의 vue프레임워크 공부후에 vue로 만든 웹사이트는 <br> 어떤 것이 있나 알아보다가 dashboard를 알게 되었습니다</div>
          <div class="dashboard-real-text"><span class="color-red">dashboard는 vue의 SPA 특성을 잘 살릴 수 있는</span> 것 같아 <br> 저도 한번 만들어보게 되었습니다.</div>
          <div class="dashboard-real-text">원래는 일반적인 dashboard 인터페이스와  비슷한 느낌으로 <br> 꾸며보려고 했으나, 당장에 riot api이용해보기 <br> 3d모델 불러와보기 등 해보고 싶은게 많아서 </div>
          <div class="dashboard-real-text">dashboard의 각 항목을 제가 공부한 내용들을 구현하여 <br> 넣어놓는 식으로 구성해보았습니다.</div>
          <div class="dashboard-real-text">다음은 제가 만든 dashboard에 대한 설명입니다.</div>
          <div class="dashboard-real-text">dashboard는 <span class="color-red">vue3</span>와 <span class="color-red">router</span>를 통해 SPA구조로 만들었으며 <br> bundler로 <span class="color-red">vite</span>를, 전역변수 관리를 <span class="color-red">vuex</span>를 통해 해주었습니다.</div>
          <div class="dashboard-real-text">dashboard는 자체 <span class="color-red">다크모드와 화이트모드를 지원합니다.</span> <br> 대쉬보드 상단의 달 혹은 태양 모양의 아이콘을 눌러서 <br> 모드를 변경하실 수 있습니다. </div>
          <div class="dashboard-real-text"><span class="color-red">반응형 웹</span>으로 구현하여 모바일 버전에서도 <br> 이용 할 수 있도록 하였습니다.</div>
          <div class="dashboard-real-text">모바일 버전의 경우 왼쪽의 사이드바를 감추도록 하였으며 우측상단의 <br> 토글 버튼을 통해 사이드바를 조작할 수 있도록 하였습니다. </div>
          <div class="dashboard-real-text">버튼의 경우 이미지 파일이 아닌 span태그로 구성하여 버튼을 <br> 클릭 할 시 버튼이 x표시가 되도록 애니메이션을 구현하였습니다.</div>
          <div class="dashboard-real-text">dashboard는 총 5개의 메뉴를 가지고 있습니다. <br> 각 항목에 대해 설명해드리겠습니다.</div>
          <div class="dashboard-real-text">LolApi 메뉴는 유저이름을 검색하는 것을 통해 <br> 유저의 정보를 알 수 있습니다. </div>
          <div class="dashboard-real-text">유저의 정보를 <span class="color-red">axios라이브러리</span>와 <span class="color-red">riot api</span>를 이용해 가져왔으며, <br> 유저의 최근 1게임의 피해량그래프를  <span class="color-red">chart.js</span>와 연계하여 <br> 막대그래프로 구현 해보았습니다. </div>
          <div class="dashboard-real-text">3DModel 메뉴는 3D 모델을 드래그를 통해 360도 돌려 볼 수 <br> 있으며, <span class="color-red">차의 종류 및 색상을 변경</span> 할 수 있도록 하였습니다. </div>
          <div class="dashboard-real-text"><span class="color-red">threejs라이브러리</span>를 이용해  차의 3D모델을 불러왔으며, <br> <span class="color-red">swiper.js라이브러리</span>를 이용해 우측 swiper뷰에 coverflow <br> 애니메이션을 주었습니다. 각 슬라이드는 클릭했을 때 <br> 모델을 변경 할 수 있도록 구현하였습니다. </div>
          <div class="dashboard-real-text">3D 모델을 불러 올 때 시간이 오래걸려 <span class="color-red">로딩바</span>를 구현해주었습니다. 로딩바의 경우 <span class="color-red">vuex</span>를 통해 3d모델의 진행률을 전역변수로 <br> 가져와 html에 바인딩 해주는 식으로 구현하였습니다.</div>
          <div class="dashboard-real-text">chart.js 메뉴는 다양한 종류의 차트를 보여주는 메뉴입니다. </div>
          <div class="dashboard-real-text">dashboard를 처음 만들기 시작했을 때 chart.js에 대해 이해해보고자 만들어 보았던 메뉴입니다. 여러 종류의 차트를 넣어놓았으며 각차트의 <span class="color-red">hover속성, 그래프 색상 등 다양한 옵션</span>을 이용해보며 <br> 만들어 보았습니다.</div>
          <div class="dashboard-real-text">drag and grid 항목은 <span class="color-red">grid로 구성된 박스들을 <br> 드래그</span>를 통해 위치를 움직일 수 있습니다.</div>
          <div class="dashboard-real-text">flex와 grid에 대해 제데로 내용정리하고 얼마 안된 시점에서 <br> drag and drop에 관심을 가지게 되었는데 grid와 drag에 대해 <br> 공부한 것을 연계하면 좋겠다 싶어서 만들어 보았습니다. </div>
          <div class="dashboard-real-text">Drawing 메뉴는 스크롤을 통해 svg이미지가 그려지는 듯한 <br> 애니메이션을 보여주는 메뉴입니다. </div>
          <div class="dashboard-real-text">svg의 <span class="color-red">strokedash와 strokeoffset 속성</span>을 이용하여 <br> sroll과 조합하여 만들었습니다.</div>
          <div class="dashboard-real-text">왼쪽의 카드를 눌러보시면 제 dashboard <br> 웹사이트를 구경하실 수 있습니다.</div>
        </div>
      </div>
      
      <div class="timeline-left-box">
        <div class="timeline-empty-100px"></div>
        <div class="timeline-empty-500px"></div>
        <div class="timeline-left-image-box left-image-box1"></div>
        <div class="timeline-empty-200px"></div>
        <div class="timeline-left-image-box left-image-box2"></div>
        <div class="timeline-empty-200px"></div>
        <div class="timeline-left-image-box left-image-box3"></div>
        <div class="timeline-empty-200px"></div>
        <div class="timeline-left-image-box left-image-box4"></div>
        <div class="timeline-empty-200px"></div>
        <div class="timeline-left-image-box left-image-box5"></div>
        <div class="timeline-empty-200px"></div>
        <div class="timeline-left-image-box left-image-box6"></div>
        <div class="timeline-empty-200px"></div>
        <div class="timeline-left-image-box left-image-box7"></div>
        <div class="timeline-empty-200px"></div>
        <div class="timeline-left-image-box left-image-box8"></div>
        <div class="timeline-empty-200px"></div>
        <div class="timeline-left-image-box left-image-box9"></div>
        <div class="timeline-empty-200px"></div>
        <div class="timeline-left-image-box left-image-box10"></div>
        <div class="timeline-empty-200px"></div>
        <div class="timeline-left-image-box left-image-box11"></div>
        <div class="timeline-empty-200px"></div>
        <div class="timeline-left-image-box left-image-box12"></div>
        <div class="timeline-empty-200px"></div>
      </div>

      <div class="timeline-right-box">
        <div class="timeline-empty-100px"></div>
        <div class="timeline-empty-500px"></div>
        <div class="dashboard-text text-white pa text-size-20px">8월 말, 알고리즘 공부와 cs지식을 준비하려던 와중에 <br> 우연히 vue프레임워크에 대해 알게되었습니다. </div>
        <div class="timeline-empty-200px"></div>
        <div class="dashboard-text text-white pa text-size-20px">모던 프레임워크에 대해 얕게라도 알아두면 좋겠다 싶어서 <br>  9월초에 vue프레임워크 공부를 시작하게 되었습니다. </div>
        <div class="timeline-empty-200px"></div>
        <div class="dashboard-text text-white pa text-size-20px">2주간의 vue프레임워크 공부후에 vue로 만든 웹사이트는 <br> 어떤 것이 있나 알아보다가 dashboard를 알게 되었습니다</div>
        <div class="timeline-empty-200px"></div>
        <div class="dashboard-text text-white pa text-size-20px">dashboard는 vue의 spa 특성을 잘 살릴 수 있는 것 같아  <br> 저도 한번 만들어보게 되었습니다.</div>
        <div class="timeline-empty-200px"></div>
        <div class="dashboard-text text-white pa text-size-20px">원래는 일반적인 dashboard 인터페이스와  비슷한 느낌으로 <br> 꾸며보려고 했으나, 당장에 riot api이용해보기 <br> 3d모델 불러와보기 등 해보고 싶은게 많아서 </div>
        <div class="timeline-empty-200px"></div>
        <div class="dashboard-text text-white pa text-size-20px">dashboard의 각 항목을 제가 공부한 내용들을 구현하여 <br> 넣어놓는 식으로 구성해보았습니다.</div>
        <div class="timeline-empty-200px"></div>
        <div class="dashboard-text text-white pa text-size-20px">다음은 제가 만든 dashboard에 대한 설명입니다.</div>
        <div class="timeline-empty-200px"></div>
        <div class="dashboard-text text-white pa text-size-20px">dashboard는 vue3와 router를 통해 spa구조로 만들었으며 <br> bundler로 vite를, 전역변수 관리를 vuex를 통해 해주었습니다.</div>
        <div class="timeline-empty-200px"></div>
        <div class="dashboard-text text-white pa text-size-20px">dashboard는 자체 다크모드와 화이트모드를 지원합니다. <br> 대쉬보드 상단의 달 혹은 태양 모양의 아이콘을 눌러서 <br> 모드를 변경하실 수 있습니다. </div>
        <div class="timeline-empty-200px"></div>
        <div class="dashboard-text text-white pa text-size-20px">반응형 웹으로 구현하여 모바일 버전에서도 <br> 이용 할 수 있도록 하였습니다.</div>
        <div class="timeline-empty-200px"></div>
        <div class="dashboard-text text-white pa text-size-20px">모바일 버전의 경우 왼쪽의 사이드바를 없애며 우측상단의 <br> 토글 버튼을 통해 사이드바를 조작할 수 있도록 하였습니다. </div>
        <div class="timeline-empty-200px"></div>
        <div class="dashboard-text text-white pa text-size-20px">버튼의 경우 이미지 파일이 아닌 span태그로 구성하여 버튼을 <br> 클릭 할 시 버튼이 x표시가 되도록 애니메이션을 구현하였습니다.</div>
        <div class="timeline-empty-200px"></div>
        <div class="dashboard-text text-white pa text-size-20px">dashboard는 총 5개의 메뉴를 가지고 있습니다. <br> 각 항목에 대해 설명해드리겠습니다.</div>
        <div class="timeline-empty-200px"></div>
        <div class="dashboard-text text-white pa text-size-20px">LolApi 메뉴는 유저이름을 검색하는 것을 통해 <br> 유저의 정보를 알 수 있습니다. </div>
        <div class="timeline-empty-200px"></div>
        <div class="dashboard-text text-white pa text-size-20px">유저의 정보를 axios라이브러리와 riot api를 이용해 가져왔으며, <br> 유저의 최근 1게임의 피해량그래프를  chart.js와 연계하여 <br> 막대그래프로 구현 해보았습니다. </div>
        <div class="timeline-empty-200px"></div>
        <div class="dashboard-text text-white pa text-size-20px">3DModel 메뉴는 3D 모델을 드래그를 통해 360도 돌려 볼 수 <br> 있으며, 차의 종류 및 색상을 변경 할 수 있도록 하였습니다. </div>
        <div class="timeline-empty-200px"></div>
        <div class="dashboard-text text-white pa text-size-20px">threejs라이브러리를 이용해  차의 3D모델을 불러왔으며, <br> swiper.js라이브러리를 이용해 우측 swiper뷰에 coverflow <br> 애니메이션을 주었습니다. 각 슬라이드는 클릭했을 때 <br> 모델을 변경 할 수 있도록 구현하였습니다. </div>
        <div class="timeline-empty-200px"></div>
        <div class="dashboard-text text-white pa text-size-20px">3D 모델을 불러 올 때 시간이 오래걸려 로딩바를 구현해주었습니다. 로딩바의 경우 vuex를 통해 3d모델의 진행률을 전역변수로 <br> 가져와 html에 바인딩 해주는 식으로 구현하였습니다.</div>
        <div class="timeline-empty-200px"></div>
        <div class="dashboard-text text-white pa text-size-20px">chart.js 메뉴는 다양한 종류의 차트를 보여주는 메뉴입니다. </div>
        <div class="timeline-empty-200px"></div>
        <div class="dashboard-text text-white pa text-size-20px">dashboard를 처음 만들기 시작했을 때 chart.js에 대해 이해해보고자 만들어 보았던 메뉴입니다. 여러 종류의 차트를 넣어놓았으며 각차트의 hover속성, 그래프 색상 등 다양한 옵션을 이용해보며 <br> 만들어 보았습니다.</div>
        <div class="timeline-empty-200px"></div>
        <div class="dashboard-text text-white pa text-size-20px">drag and grid 항목은 grid로 구성된 박스들을 <br> 드래그를 통해 위치를 움직일 수 있습니다.</div>
        <div class="timeline-empty-200px"></div>
        <div class="dashboard-text text-white pa text-size-20px">flex와 grid에 대해 제데로 내용정리하고 얼마 안된 시점에서 <br> drag and drop에 관심을 가지게 되었는데 grid와 drag에 대해 <br> 공부한 것을 연계하면 좋겠다 싶어서 만들어 보았습니다. </div>
        <div class="timeline-empty-200px"></div>
        <div class="dashboard-text text-white pa text-size-20px">Drawing 메뉴는 스크롤을 통해 svg이미지가 그려지는 듯한 <br> 애니메이션을 보여주는 메뉴입니다. </div>
        <div class="timeline-empty-200px"></div>
        <div class="dashboard-text text-white pa text-size-20px">svg의 strokedash와 strokeoffset 속성을 이용하여 <br> sroll과 조합하여 만들었습니다.</div>
        <div class="timeline-empty-200px"></div>
        <div class="dashboard-text text-white pa text-size-20px">왼쪽의 카드를 눌러보시면 제 dashboard <br> 웹사이트를 구경하실 수 있습니다.</div>
      </div>
    </div>
  </div>
  <!--네번째 컨테이너 끝-->

  <!--다섯번째 컨테이너 시작-->
  <div class="main-container-5">
    <div class="main-body-container-5">
      <div class="timeline-empty-500px"></div>
      <p class="text-white final-text">여기까지가 제가 지난 5개월 동안 프론트엔드 개발자가 되고자 노력해온 과정입니다.</p>
      <div class="timeline-empty-500px"></div>
      <p class="text-white final-text">감사합니다</p>
      <div class="timeline-empty-500px"></div>
      <div class="doublehand-container">
        <doublehandSvg></doublehandSvg>
      </div>
      <div class="timeline-empty-300px"></div>
      <div class="timeline-empty-500px"></div>
      <div class="timeline-empty-500px"></div>
      <p class="text-white final-text">제에 대해 더 알고 싶으시다면 아래 카드들을 통해 확인가능합니다.</p>
      <div class="card-flex-container">
        <div class="flex-card1" @click="openNotion">
          <img :src="image.notionImage" class="flex-card-image">
          <P class="flex-card-title">가지김밥의 Notion</P>
          <P class="flex-card-text">제가 공부한 것을 기록해두는 노션입니다. 제가 공부한 내용들을 확인하실 수 있습니다</P>
        </div>
        <div class="flex-card1" @click="openGithub">
          <img :src="image.githubImage" class="flex-card-image">
          <P class="flex-card-title">chunjaemin의 github</P>
          <P class="flex-card-text">Dashboard와 The-Officer 등 제가 만든 작품들의 코드들을 확인해 보실 수 있습니다.</P>
        </div>
        <div class="flex-card2" @click="openOfficer">
          <img :src="image.officerImage" class="flex-card-image">
          <P class="flex-card-title">The-Officer</P>
          <P class="flex-card-text">국방부 공공데이터 활용경진 대회 참가작품입니다. 장교 가이드라인을 담은 웹사이트입니다.</P>
        </div>
        <div class="flex-card2" @click="openDashBoard">
          <img :src="image.dashboard[1]" class="flex-card-image">
          <P class="flex-card-title">Jamins-DashBoard</P>
          <P class="flex-card-text">vue3를 이용해 만든 DashBoard 입니다. 리그오브레전드 간편전적 검색, 여러 3D차모델 확인 등 제가 공부한 것들을 실습해보는 용도의 Dashboard입니다.</P>
        </div>
      </div>
      <div class="timeline-empty-25px"></div>
      <div class="timeline-empty-25px"></div>
      <div class="footer-container">
        <p class="text-black footer-font1">copyright by 천재민</p>
        <p class="text-black footer-font2">contact with 010-3054-0067</p>
      </div>
    </div>
  </div>
</template>

<script>
import TextAnimation from './components/TextAnimation.vue'
import animation from './animation.js'
import scrollDashboard from './scrollDashboard.js'
import sound from './assets/audio/lively.mp3'
import image from './image.js'
import handSvg from './components/handSvg.vue'
import butterflySvg from './components/butterflySvg.vue'
import capSvg from './components/capSvg.vue'
import airplaneSvg from './components/airplaneSvg.vue'
import doublehandSvg from './components/doublehandSvg.vue'
import trophySvg from './components/trophySvg.vue'
import cloudSvg from './components/cloudSvg.vue'
export default {
  mounted() {
    animation.start();
    scrollDashboard.startScrollDashboard();
  },
  methods: {
    openOfficer(){
      const homePageUrl = 'https://officer-korean.netlify.app/';
      window.open(homePageUrl, '_blank');
    },
    openApp(){
      const homePageUrl = 'https://play.google.com/store/apps/details?id=com.chunq1238w.officer_korean&hl=ko&gl=KR';
      window.open(homePageUrl, '_blank');
    },
    openGithub(){
      const homePageUrl = 'https://github.com/chunjaemin';
      window.open(homePageUrl, '_blank');
    },
    openNotion(){
      const homePageUrl = 'https://sweltering-aftermath-e4b.notion.site/7223a029b4094183a3cbd906818fb1c1';
      window.open(homePageUrl, '_blank');
    },
    openDashBoard(){
      const homePageUrl = 'https://jaminsdashboard.netlify.app/';
      window.open(homePageUrl, '_blank');
    },
    scrollTo1(){
      window.scrollTo({ left: 0, top: 8467, behavior: "smooth" });
    },
    scrollTo2(){
      window.scrollTo({ left: 0, top: 10768, behavior: "smooth" });
    },
    scrollTo3(){
      window.scrollTo({ left: 0, top: 15787, behavior: "smooth" });
    },
    scrollTo4(){
      window.scrollTo({ left: 0, top: 21109, behavior: "smooth" });
    },
  },
  components: {
    TextAnimation,
    handSvg,
    butterflySvg,
    capSvg,
    airplaneSvg,
    doublehandSvg,
    trophySvg,
    cloudSvg,
  },
  data() {
    return {
      sound: sound,
      image: image,
    }
  }
}
</script>

<style>
@import './css/App.css';
@import './css/Timeline.css';
@import './css/Menu.css';
</style>