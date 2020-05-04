# react-to-do

엄청나게 많은 데이터를 렌더링 할 때 성능 최적화 하기

## 1. React.memo 사용하기

- class형 컴포넌트: shouldComponentUpdate 라이프 사이클 활용
- function형 컴포넌트: React.memo 활용

## 2. useState 함수형 업데이트 혹은 useReducer 사용

### useSate 함수형 업데이트

```javascript
const [number, setNumber] = useState(0);

// 기존 setNumber
const onIncrease = useCallback(() => setNumber(number + 1), [number]);

// 함수형 업데이트
const onIncrease = useCallback(
  () => setNumber((prevNumber) => prevNumber + 1),
  []
);
```

### useReducer

useState의 setter 함수 대신 dispatch를 통해 조작.  
기존 코드를 많이 고쳐야 하는 단점이 있지만, 상태를 업데이트하는 로직을 Reducer에 모아서 컴포넌트 바깥에 빼 놓을 수 있는 장점이 있음.
