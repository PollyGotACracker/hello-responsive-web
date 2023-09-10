# Tools

## DevTools

- 스타일에서
  - :hov 를 클릭해서 요소 상태 css 체크
  - :cls 를 클릭해서 모든 클래스 확인 및 새 클래스를 추가해 테스트
- HTML 소스에서 검색:  
  Windows: Ctrl + F / Mac: Command + F
- 모든 소스에서 검색:  
  Windows: Ctrl + Shift + F / Mac: Command + Option + F
- 모바일 도구 버튼 클릭
  - 케밥 메뉴를 클릭해 옵션 추가
  - DPR: 기기 픽셀비율
  - Mobile - Desktop / no touch, touch: 요소 상태 체크
  - 기기 회전
  - 네트워크 오프라인 모드: Progressive Web App 일 때 테스트

## Design Tools

- figma / xd 가 실무에서 자주 쓰인다.
- 포토샵:
  - Preference => Guides, Grid & Slices 선택  
    Subdivision, Gridline 을 조정해 DPR 을 설정한다.
  - save for web 이 웹에 최적화된 파일크기로 저장된다.
- 모바일 작업은 기준 device 크기가 있어야 한다.
  기준 크기 외 나머지는 디자이너가 아닌 개발자가 임의로 박스를 맞춘다.
- 750 등 보통 모바일 viewport보다 클 경우, retina 기준이므로 실제 viewport 크기는 / 2 다.
- vector 형태의 이미지일 경우:
  - 화면을 캡쳐해서 저장해서는 안된다. layer를 확인하여 파일을 저장한다.
- 이미지가 bitmap 일 경우:
  - 사이즈를 200% 또는 400% 하여 깨지지 않도록 해야 한다. 이때, 사이즈를 compress 하는 사이트나 프로그램을 사용한다.
  - PC 버전에서도 고해상도에 대응해야 한다. 따라서 2배 사이즈로 작업한다.  
    그렇지 않을 경우 고해상도 화면에서 이미지가 뿌옇게 나오게 된다.
