# Layout

## block, inline, inline-block

| `display: block`                                                | `display: inline`                                          |
| --------------------------------------------------------------- | ---------------------------------------------------------- |
| 새 줄 생성, 공간 생성                                           | 콘텐츠 안에 생성, 공간 없음(좌우 배치는 가능)              |
| padding, margin, height 가능                                    | padding, margin, height 불가능                             |
| `<address>` `<article>` `<aside>` `<blockquote>` `<canvas>`     | `<a>` `<abbr>` `<bdo>` `<br>` `<button>` `<cite>` `<code>` |
| `<dd>` `<div>` `<dt>` `<fieldset>` `<figcaption>`               | `<dfn>` `<em>` `<i>` `<img>` `<input>` `<label>` `<map>`   |
| `<figure>` `<footer>` `<form>` `<h1>`-`<h6>` `<header>`         | `<object>` `<output>` `<q>` `<select>` `<span>` `<strong>` |
| `<hr>` `<li>` `<main>` `<nav>` `<ol>` `<p>` `<pre>` `<section>` | `<sub>` `<sup>` `<textarea>` `<time>` `<video>`            |
| `<table>` `<thead>` `<tbody>` `<tfoot>` `<tr>` `<ul>`           |                                                            |

- `display: inline-block`
- 콘텐츠 안에 생성되면서 공간도 생성
- padding, margin, height 가능

### Box Model: `box-sizing`

- Parent container 의 width 가 200px 일 때:

```css
.child_container {
  box-sizing: content-box;
  width: 100%;
  border: solid #5b6dcd 10px;
  padding: 5px;
}
```

- Child container 의 width 크기?:  
   `content-box`: border 및 padding 까지 포함되어 Parent container 보다 커지게 된다.  
   200px + 20px + 10px = 230px

```css
.child_container {
  box-sizing: border-box;
  width: 100%;
  border: solid #5b6dcd 10px;
  padding: 5px;
}
```

- Child container 의 width 크기?:  
  `border-box`: border 및 padding 이 고려되어 width 축소, Parent container 에 맞춰진다.  
  200px - 20px - 10px = 170px

## 요소 배치

- float
- position
- flex
- grid

### float 속성

- 요소의 흐름에서 벗어나 부모 요소로부터 떠 있다.
  따라서 부모요소 스타일링 시 레이아웃이 깨지는 문제가 발생할 수 있다.
- float: right 할 경우 요소들의 순서가 변경된다.
- float 해제 방법 5가지:

1. 그룹 마지막 요소에 `.clear` 클래스를 추가한 후 `clear: both;` 적용
2. 부모 요소에 `.clear` 클래스를 추가한 후,  
   `.clear:after`에 `content: ""; display: block; clear: both;` 적용
3. 부모 요소에 `overflow: auto;` 적용
4. 부모 요소에 `width: 100%; float: left;` (해제된 것처럼 보이게 하는 방법)
5. 부모 요소에 `display: flow-root;`
   > `clear: both;` 는 오른쪽 왼쪽 기준을 전부 취소하며, 정렬된 요소들의 마지막에 적용해야 한다.
   > `display: flow-root;` 는 새로운 BFC(Block Format Context) 를 생성하여 내부의 모든 요소가 따르도록 한다.

### position 속성

- 관련 속성: top, left, bottom, right, z-index

| 값       | 문서 흐름 | 관련 속성 | 스크롤 | 기준                                                            |
| -------- | --------- | --------- | ------ | --------------------------------------------------------------- |
| static   | O         | X         | O      | 없음                                                            |
| relative | O         | O         | O      | 자신                                                            |
| absolute | X         | O         | O      | `relative`, `absolute`, `fixed` 값을 가진 가장 가까운 상위 요소 |
| fixed    | X         | O         | X      | body(모바일에서는 `width: 100%` 필요)                           |
| sticky   | △         | O         | △      | 자신                                                            |

- sticky:
  - relative 와 fixed 의 특성이 모두 나타난다:  
    일반적인 문서 흐름을 지키지만,  
    스크롤 시 가장 가까운 상위 요소가 화면에 나타나면 해당 요소는 지정된 위치에 고정되며,  
    상위 요소가 화면에서 벗어나면 요소도 고정 위치에서 벗어나 화면에서 사라진다.  
    => 각 구간별로 고정되어야 할 요소에 적용한다.
  - 부모 요소에 overflow 속성이 있으면 작동하지 않는다.
  - 부모 요소에 height 값이 정해져야 한다.

### flex 와 grid

- float 및 position 과 다르게 부모요소에서 제어한다.  
  `display: flex`, `display: grid`

#### flex

- justify: 메인축 설정. `justify-content`
- align: 교차축 설정. `align-items`, `align-content`, `align-self`
- `flex-direction` 의 `row`, `column` 값에 따라 메인축과 교차축이 바뀐다.

#### grid

- 바둑판 구조
- grid container 와 grid item 에 각각 적용되는 속성을 알아둔다.
- 만들어진 레이아웃의 grid line(1 ~), grid area, grid cell, grid gap 을 확인하여 값을 조정한다.
- IE 를 고려할 경우 사용하지 않는다.

## CSS Function

- `var()`: 변수. `--<변수명>` 으로 지정했던 변수를 넣어 그 값을 사용
- `calc()`: 계산. flexible 한 요소에서 고정된 값이 필요할 때 사용
- `min()`: 지정값들 중 가장 작은 값. 절대값과 상대값 크기 비교에 유용. `max-width` 속성을 대체 가능
- `max()`: 지정값들 중 가장 큰 값
- `clamp()`: 정의된 최소 경계와 최대 경계 사이의 값 범위 내에서 중간 값 고정. 최소값, 선호값 및 허용되는 최대값의 세 가지 매개 변수 필요
- `env()`: 모바일 기기 notch 처리

## Reset css

- 코드를 작성하면서 필요한 부분의 reset css 만 구성해서 사용하는 것이 좋다.
- 유명한 reset.css 를 가져다 쓸 경우, 반드시 왜 리셋했는지를 알고 사용해야 한다.

```css
html {
  /* 기본값인 고정단위 10px 대신 %를 사용하여 */
  /* rem 사용 시 사용자 지정 화면비율에 맞춰 글자를 확대/축소 */
  font-size: 62.5%;
}
body {
  margin: 0;
  font-family: sans-serif;
}
button {
  /* 브라우저의 고유 스타일 제거 */
  appearance: none;
  border: 0;
  padding: 0;
  background-color: transparent;
  border-radius: 0;
}
h1 {
  margin: 0;
}
a,
a:hover {
  text-decoration: none;
}
ol,
ul {
  list-style: none;
}
```

### 유용한 사이트들

- [developer.mozilla.org/ko/docs/Web](https://developer.mozilla.org/ko/docs/Web)
- [css-tricks.com](https://css-tricks.com/)
- [codepen.io](https://codepen.io/)
- [w3schools.com](https://www.w3schools.com/)
- [codecademy.com](https://www.codecademy.com/catalog/language/html-css)
- [khanacademy.org](https://ko.khanacademy.org/computing/computer-programming)
