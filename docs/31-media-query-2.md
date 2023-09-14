# Media Query 2

## 미디어쿼리 기본

1. HTML link 태그로 사용

```html
<link rel="stylesheet" type="text/css" media="(조건)" href="style.css" />
```

- 실무에서 자주 사용되는 방식은 아님

2. CSS `@media` 키워드로 사용

```css
@media all and (조건) and (조건) {
}
```

- `all`: 미디어 설정, 생략 시 기본값 all, screen | print 를 주로 사용
- `only`: 특정 미디어에만 적용하는 경우, screen | print 를 지정하는 경우
- `and`: 미디어 쿼리의 조건은 모두 and 키워드로 해결
- 조건:
  - 소괄호() 안에 조건 입력
  - `min`: 최소값이 일치할 때, 입력한 사이즈 이상부터 적용
  - `max`: 최대값이 일치할 때, 입력한 사이즈 이하부터 적용
    - `@media only screen and (min-width: 320px) {}`
      - 스크린 형태에만 적용
      - 0 ~ 319px 적용 안함
      - 320px 부터 적용, 확장 개념
    - `@media only screen and (max-width: 320px) {}`
      - 스크린 형태에만 적용
      - 0 ~ 320px 까지 적용, 축소 개념
      - 321px 부터 적용 안함
    - `max-width: 320px` 와 `min-width: 320px` 를 함께 작성하면 cascading 으로 인해 이후 작성된 스타일이 최종 적용된다.

## 미디어쿼리 분기

- 모바일 퍼스트(`min`)

```css
/* 모바일(~ 767px) */

@media (min-width: 768px) {
  /* 태블릿(768px ~ 1023px) */
}
@media (min-width: 1024px) {
  /* 랩탑, 데스크탑(1024px ~) */
}
```

- 데스크탑 퍼스트(`max`)

  ```css
  /* 랩탑, 데스크탑(1024px ~) */

  @media (max-width: 1023px) {
    /* 태블릿(640px ~ 1023px) */
  }
  @media (max-width: 639px) {
    /* 모바일(~ 639px) */
  }
  ```

  - 모바일 기기에서 landscape 일 경우 태블릿 화면으로 변경되는 경우가 많다.  
    만약 landscape 일 때도 모바일 화면이어야 한다면 기준값을 변경하는 것이 가장 편한 방법이다.

## 미디어쿼리 활용

```css
/* 고해상도 디스플레이가 아닌 경우 */
@media screen and (-webkit-max-device-pixel-ratio: 1) {
}

/* 기기가 세로모드인 경우 */
@media screen and (orientation: portrait) {
}

/* 기기가 가로모드인 경우 */
@media screen and (orientation: landscape) {
}

/* 입력 방법이 hover를 지원하지 않는 경우. 오직 터치스크린 */
/* hover event 를 사용하지 않아야 할 때 */
@media (any-hover: none) {
}
```

|             | 아이패드 기본               | 아이패드 + 매직키보드       | 갤탭                       | 랩탑, 데스크탑             |
| ----------- | --------------------------- | --------------------------- | -------------------------- | -------------------------- |
| Pointer     | none X, coarse: O, fine: X  | none X, coarse: O, fine: X  | none X, coarse: O, fine: X | none X, coarse: X, fine: O |
| Hover       | none O, hover: X            | none O, hover: X            | none X, hover: O           | none X, hover: O           |
| Any-Pointer | none: X, coarse: O, fine: X | none: X, coarse: O, fine: O | none: X, coarse: O, fine:O | none: X, coarse: X, fine:O |
| Any-Hover   | none: O, hover: X           | none: X, hover: O           | none: X, hover: O          | none: X, hover: O          |

- [codepen.io/marshall-ku/pen/jOGOdWa](https://codepen.io/marshall-ku/pen/jOGOdWa)
- [www.w3.org/TR/mediaqueries-4/#mf-interaction](https://www.w3.org/TR/mediaqueries-4/#mf-interaction)

## 태블릿 구간 설정

```css
@media (min-width: 768px) {
}
```

- 일반적으로 768px 부터 적용(아이패드 세로 사이즈 기준)
- 0 ~ 767px 까지는 모바일, 768px 부터 태블릿

```css
/* 아이패드 가로 세로 */
@media (min-width: 768px) and (max-width: 1024px) {
}
/* 아이패드 가로 */
@media (min-width: 768px) and (max-width: 1023px) {
}
```

- 테블릿 가로 사이즈(768px ~) 와 스마트폰 가로 사이즈 중복 구간 발생
- 정확히 태블릿에만 적용하기 위해서는 다른 조건을 추가해야 함
