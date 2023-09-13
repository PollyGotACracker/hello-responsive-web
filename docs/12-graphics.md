# Graphics

## 비트맵과 벡터

- 용도, 목적에 따라 어떤 형식을 선택할지 결정한다.  
  jpg: 사진, png: 이미지 투명도, svg: 사이즈별로 사용할 경우
- 파일 용량이 작을수록 좋다.

### Vector Graphics:

- 좌표를 계산하여 그래픽을 만듦
- 확대해도 깨지지 않음
- 용량 작음
- 복잡한 이미지 표현 어려움
- ai, <b>svg</b>, eps, pdf

### Bitmapped(Raster) Graphics:

- 픽셀을 모아 그래픽을 만듦
- 확대하면 깨짐
- 용량 큼
- 복잡한 이미지 표현 가능
- <b>jpg</b>, <b>png</b>, <b>gif</b>, bmp, <b>webp</b>

## 해상도와 밀도

- 실제 기기의 디스플레이 픽셀과 css에서 인식하는 픽셀이 다르다.
  > Retina Display: 고밀도 디스플레이
  > Super Retina XDR 디스플레이
  > 2796 \* 1290 픽셀 해상도 (460ppi)

### PPI: Pixel Per Inch

### DPR: Device Pixel Ratio

- (디바이스 픽셀 / css 픽셀)
- css 미디어쿼리에서 DPR 을 구분하는 값
- 한 개의 css pixel 안에 몇 개의 (device) screen pixel 이 들어가는가?  
  2 DPR: 2 \* 2 = 4개  
  3 DPR: 3 \* 3 = 9개

### 디바이스 스펙 체크

- [yesviz](https://yesviz.com/viewport/)
- [screensiz](https://screensiz.es/)
- [blisk.io](https://blisk.io/devices)
- [mydevice](https://www.mydevice.io/)

## 사이즈의 종류와 특징

### 사이즈의 종류

- viewport 기준 단위는 기기, os 마다 영향을 많이 받기 때문에 주의해서 사용한다.
- vh, vw 는 모바일을 landscape 로 사용할 때 문제가 생길 수 있다.
- 반응형에서 px 를 사용하지 않는 것은 아니다.

| 단위 | 고정 | 기준           | 환산                         |
| ---- | ---- | -------------- | ---------------------------- |
| px   | O    | 화면           | 1px = 화면의 최소 픽셀       |
| %    | X    | 부모요소       | 1% = 부모 요소 크기의 1%     |
| em   | X    | 부모 폰트 크기 | 1em = 부모 요소의 폰트 크기  |
| rem  | X    | root(html)     | 1rem = html 태그의 폰트 크기 |
| vw   | X    | viewport       | 1vw = viewport 너비의 1%     |
| vh   | X    | viewport       | 1vh = viewport 높이의 1%     |
| vmin | X    | viewport       | vw 와 vh 중 작은 값          |
| vmax | X    | viewport       | vw 와 vh 중 큰 값            |
