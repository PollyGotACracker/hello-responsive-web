# Tips

- `display: none` 을 요소마다 일일이 주지 말고 `.hide` 클래스를 별도로 사용한다(모듈화).
- CSS코드가 4000줄 이상 매우 길어지지 않는다면 CSS파일을 굳이 나눌 필요 없다.
- `@import` 와 link 태그는 성능 차이가 크지 않다.  
  `@import` 는 CSS파일, link 태그는 HTML파일에서 사용되므로 상황에 따라 선택한다.
- input 의 크기 조절은 `calc()` 를 활용하면 좋다.
- 요소가 아티클으로서의 가치가 있을 경우에만 `<article>` 태그를 사용하고, 그렇지 않다면 `<div>` 를 사용한다.
- 버튼 영역은 사용자가 편하게 누를 수 있도록 디자인 영역보다 더 커야 한다.
- flexible한 백그라운드는 `<img>` 태그로 다루기에 복잡하기 때문에 `<div>` 태그 및 `background` 속성을 사용하는 것이 낫다.  
  `<img>` 태그를 사용해야 한다면 `object-fit` 속성을 사용한다.

## Flexbox & Grid

- flex item 에 `order` 속성을 사용하여 해당 요소의 순서를 변경할 수 있다.
- 레이아웃이 바둑판 구성일 때는 flex 보다 grid 를 적용하는 것이 좋다.
- `gap` 속성은 고정된 cell 크기에서 벗어나지 않는다면 전체 container 크기는 늘어나지 않는다.

## 토글 메뉴

### transition 이 끝난 후 요소의 상태 제거

```js
if ($menu.classList.contains("open")) {
  // 메뉴창을 닫을 때
  const menuBtnTransitionend = () => {
    $menuBtn.removeEventListener("transitionend", menuBtnTransitionend);
    // 해당 요소의 애니메이션 관련 상태 및 이전 상태 제거
    $menuBtn.classList.remove("close_ani", "close");
  };
  $menuBtn.classList.add("close_ani");
  $menuBtn.addEventListener("transitionend", menuBtnTransitionend);
  $menu.classList.remove("opened");
} else {
  // 위 코드와 유사하게 작성
}
```

- JS 에서 애니메이션이 있는 요소의 transition 이 끝나는 시점을 감지하도록 한다.

### 메뉴창 상태 초기화

```js
window.addEventListener("resize", () => {
  if (window.matchMedia("(min-width:1024px)").matches) {
    // 모든 요소의 active 상태 제거
    $menuBtn.classList.remove("close");
    $menu.classList.remove("opened");
    $dimmed.classList.remove("active");
  }
});
```

- 브라우저 화면 크기를 반복적으로 축소 및 확대했을 때 메뉴바가 active 상태로 남아있으면 UX에 좋지 않다.
- window 객체의 `resize` event 를 사용해 브라우저 화면 크기가 일정 너비 이상이 되면  
  메뉴바에 관련된 모든 요소의 active 상태를 classList 에서 remove 한다.

## 화면 설계

- 레이아웃 시안을 보고 각 요소별 그룹핑을 해야 한다.
- header, main, footer  
  => header, (key-visual, story, card, reading...), footer
- 새로운 속성 적용 시, [caniuse.com](https://caniuse.com/) 에서 MDN 페이지를 체크한다.
- header 영역은 `position: fixed;`, `top: 0;` 을 적용하여 스크롤 시 항상 상단에 있도록 한다.
