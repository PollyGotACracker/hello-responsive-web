# Key Concepts

## Viewport

- meta tag:  
  `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- VSCode 에서 Emmet(`!` or `html:5`) 를 통해 자동 생성되는 HTML 기본 코드
- `viewport`: 모바일 브라우저가 웹페이지를 어떻게 렌더링 해야 하는지 설정
- `width`: 렌더링 영역의 크기를 설정, 일반적으로 `device-width` 로 값 설정
- `initial-scale`: 웹페이지가 처음 로딩될 때 줌 레벨 제어  
  => 간혹 브라우저가 무시하는 경우가 있으나, 모두 들어가야만 하는 속성들이다.

## 웹 표준(Web Standards)

- 월드와이드웹(World Wide Web)과 관련된 기술의 표준 문법을 지키는 웹개발 기법
- 즉, HTML(Hyper Text Markup Language), CSS(Cascading Style Sheet), JavaScript 표준 문법을 지켜서 코드를 작성하는 것
- 웹접근성과 함께 사용되는 경우가 많지만 서로 다른 개념이다.  
  그러나 웹표준만 잘 지켜도 웹접근성을 90% 정도는 지킬 수 있다.
- 자주 실수하는 부분: 정상적으로 동작하지만, 용도에 맞지 않는 HTML 태그로 작성  
  `<li>`, `<p>`,`<a>` 나 `<button>` 태그 대신 `<div>` 태그만 사용하는 등

## Mobile first

- Graceful Degradation(Desktop -> Mobile)  
  Progressive Enhancement(Mobile -> Desktop)
- 모바일웹이 시작될 당시, 모바일 기기임에도 미디어쿼리 미지원 기기가 많았다.  
  그래서 모바일 먼저 미디어쿼리 없이 작업을 시작했다.
- 데스크탑부터 작업을 하게 되면 오버라이딩이 많이 발생한다.
  모바일 기기는 오버라이딩이 발생할 때 배터리 누수 및 발열 증상이 나타나므로 최대한 단순하게 만들어야 한다.
- 복잡한 구조를 줄이기보다, 단순한 구조를 늘리는 것이 쉽다.
