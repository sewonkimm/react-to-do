# react-to-do

react to do list 예제

## 1. 프로젝트 준비

### 프로젝트 생성

`$yarn create react-app react-to-do`

### 라이브러리 설치

`$yarn add node-sass classnames react-icons`

- node-sass: react에서 scss 사용
- classnames: 조건부 스타일링을 편하게 하기 위함
- react-icons: react에서 다양하고 예쁜 아이콘을 사용할 수 있게 하는 라이브러리

### Prettier 설정

프로젝트 최상위 폴더에 `.prettierrc`파일 작성

```
{
  "singleQuote": true,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 80
}
```

## 2. UI 구성

### 컴포넌트

1. TodoTemplate: Todo list App을 화면 가운데에 보여줌
2. TodoInsert: 새 항목을 입력하고 추가할 수 있는 컴포넌트
3. TodoListItem: 각 할 일 항목에 대한 정보를 보여주는 컴포넌트
4. TodoList: todos 배열을 props로 받아온 후, 이를 map 함수로 여러개의 TodoListItem 컴포넌트로 변환

컴포넌트들은 src/components에 저장

## 3. 기능 구현

1. onInsert: 할 일 추가
2. onRemove: 할 일 삭제
3. onToggle: 체크박스 체크
