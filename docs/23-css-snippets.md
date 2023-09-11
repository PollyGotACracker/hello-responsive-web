# CSS Snippets

## 일반적인 class 및 id 작성법

- 클래스명: snake_case (alt 선택 시 단어가 한번에 선택된다)
- 아이디명: camelCase
- 클래스명 규칙을 정해서 사용  
  .btn*, .list*, .form*, .box*, .inner*, .gnb*, .lnb\*, .snb\_, .on, .off
- 그러나, 팀으로 작업할 때는 지정된 code snippet 을 지켜 작성한다.

## CSS 방법론

- OOCSS, BEM, SMACSS 등

### OOCSS

- Object Oriented CSS
- 모듈 방식으로 작성
- 객체 지향적 설계:

1. 구조(Structure)와 외형(Skin)을 분리
   Structure: 요소의 크기 및 배치 방식(width, height, margin, padding, overflow...)  
   Skin: 요소의 시각적 속성(colors, fonts, shadows, gradients...)  
   스타일마다 class 로 모듈화 한 후, 요소에 적절한 스타일의 class 를 부여
2. Container 와 Contents 를 분리  
   id 선택자 및 자식 선택자를 피하고, 고유 요소에 고유 class 를 부여

- 재사용성, 유지보수성, 확장성에 유리

### BEM

- .block\_\_element--modifier
- Block, Element, Modifier 로 구성(\_\_, -- 로 구분)  
  블록(Block): 구성 요소의 가장 상위 요소
  요소(Element): Block 안에서 특정 기능을 담당하는 내부요소
  변경자(Modifier): Block 또는 Element 의 모양, 상태 정의
- 여러 단어를 연결하는 경우 하이픈(-) 사용
