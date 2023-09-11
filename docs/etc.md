# Etc

## Web Design 종류

- 고정형 웹: PC 환경에만 대응(static)
- 적응형 웹: 접속 디바이스에 따라 웹 화면 및 URL 변경(adaptive)  
  PC로 접속하면 PC 화면, 모바일로 접속하면 모바일 화면
- 반응형 웹: 여러 디바이스 해상도에 대응

## 브라우저의 종류

### 인앱브라우저(In-app Browser)

- 내장 브라우저(Internal Browser)
- 특정 어플리케이션에 종속되는 브라우저
- 별도의 웹 브라우저 앱으로 리다이렉트 하지 않고, 앱 자체에서 웹 페이지를 여는 브라우저
- 독립형 브라우저 앱과 동일한 기능을 모두 갖추고 있음(WebView 와 차이)
- 장치의 기본 웹 브라우저 기반

### 외부 브라우저(External Browser)

- 다른 특정 어플리케이션에 종속되지 않는 브라우저
- Chrome, Safari, FireFox, Samsung Internet Browser 등 일반적인 독립형(설치형) 브라우저 앱

## 화면 설계

- 레이아웃 시안을 보고 각 요소별 그룹핑을 해야 한다.
- header, main, footer  
  => header, (key-visual, story, card, reading...), footer
- 새로운 속성 적용 시, [caniuse.com](https://caniuse.com/) 에서 MDN 페이지를 체크한다.
- header 영역은 `position: fixed;`, `top: 0;` 을 적용하여 스크롤 시 항상 상단에 있도록 한다.

## 프론트엔드 개발자의 구분

- UI 개발자: 화면 구성, 컬러, 위치, 사용성
- FT 개발자: 모듈화, 저장, 호출, 최적화

## Cross Browser

- Auto Prefixer 는 실무에서 간혹 쓰기도 한다.
- android 에서 웹화면이 잘 보인다면 ios에서 깨질 일은 거의 없을 것이다.

## 접근성

- `role`, `aria` 등
- 회사에서 요구하는 경우는 별로 없음. 한국 웹 접근성 문서를 읽어보면 좋다.

## 레이아웃 설계 참고

- 'free website template' 키워드 + 'figma', 'psd'...
