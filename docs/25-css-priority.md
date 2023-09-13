# CSS Priority

- 각 css 속성별로 우선순위가 고려되어 적용된다.

1. CSS 우선순위:
   1. `!important`
   2. inline style attribute(HTML inline style)
   3. id
   4. class, attribute(`[name=email]` 등), pseudo class(`:hover`, `:first-child` 등)
   5. tag element, pseudo element(`::before` 등)
2. 우선순위가 같을 경우, class 개수(`.class-a.class-b`)가 많은 스타일이 적용된다.
3. class 개수가 같다면, 나중에 나오는 스타일이 적용된다(cascading).

- `!important` 는 우선순위가 높아 나중에 작성된 스타일이 적용되지 않을 수 있으므로 최대한 지양한다.
- id 선택자 또한 우선순위가 높기 때문에 id 를 사용해서 스타일링하지 않는다(단, `display: none` 등은 예외).
- 특히 전체 선택자 `*` 는 필요없는 곳에 영향을 주므로 사용하지 말아야 한다.
