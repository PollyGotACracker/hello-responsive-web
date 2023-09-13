# Media Query

## 반응형 웹사이트

- Responsive Web Design;RWD
- 하나의 웹사이트가 접속하는 기기의 화면 크기에 맞춰 자동으로 레이아웃 및 콘텐츠를 구성
- 스마트폰의 대중화로 인해 중요성 대두
- 랩탑, PC, 워치, TV, 자동차, 냉장고 등 인터넷에 접속되는 기기가 다양해지면서 더 다양한 스크린에 대응해야 할 필요성

### 반응형 웹사이트의 범위

#### 화면 크기

```css
@media screen and (min-width: 576px) {
}
@media screen and (min-width: 768px) {
}
@media screen and (min-width: 992px) {
}
@media screen and (min-width: 1200px) {
}
```

#### 화면 방향

```css
@media only screen and (orientation: portrait) {
}
@media only screen and (orientation: landscape) {
}
```

#### 픽셀 밀도

```css
@media only screen and (device-pixel-ratio: 2) {
}
@media only screen and (resolution: 144dpi) {
}
```

#### 화면 비율

- 텔레비전, 자동차나 마트의 디스플레이 고려

```css
@media only screen and (aspect-ratio: 2/3) {
}
@media only screen and (aspect-ratio: 9/16) {
}
@media only screen and (aspect-ratio: 9/19.5) {
}
```

#### 마우스 포인터

```css
@media only screen and (pointer: coarse) and (any-pointer: fine) {
}
@media only screen and (pointer: fine) and (any-pointer: coarse) {
}
@media only screen and (hover: none) and (any-hover: hover) {
}
```

#### 프린트 장치

```css
@media only screen {
  background: rgb(230, 230, 230);
}
@media only print {
  background: white;
  @page {
    margin: 20em;
  }
}
```

#### 컬러 & 컬러모드

- 웹접근성 대응

```css
@media all and (color) {
}
@media all and (monochrome) {
}
@media only screen and (prefers-color-scheme: dark) {
}
@media only screen and (prefers-color-scheme: light) {
}
```

#### 주변 광도

```css
@media only screen and (light-level: normal) {
}
@media only screen and (light-level: dim) {
}
@media only screen and (light-level: washed) {
}
```

#### 고대비 모드

- 웹접근성 대응

```css
@media all and (prefers-contrast: more) {
}
@media all and (prefers-contrast: less) {
}
```

#### 애니메이션 & 투명도

- 구형 기기 성능 대응

```css
@media only screen (prefers-reduced-motion: reduce) {
}
@media only screen (prefers-reduced-transparency: reduce) {
}
```

### 유용한 사이트

- [mediaqueriestest](https://mediaqueriestest.com/)
- [browserleaks](https://browserleaks.com/css)
- [giona.net/tools/css3-mediaquery-generator](https://giona.net/tools/css3-mediaquery-generator/)
