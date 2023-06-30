### 실행 순서

1. `yarn install`
2. `yarn dev`

### Storybook

- `yarn storybook`

편리하게 다양한 애니메이션을 확인할 수 있도록 Storybook 환경 구성 및 배포하였습니다.
배포 사이트 : https://649be1236ac2348d5a7c288f-eqnapucqrd.chromatic.com/

### 개발 환경

Vite + React + Typescript + Styled-components

### 구현 내용

- 이벤트를 통한 페이지 이동
  - Stack 컴포넌트 내부에서 history 를 Push, Pop 하도록 구현하였고, 가장 상단에 위치한 history 를 기반으로 targetScreen 을 보여주도록 구현하였습니다.
  - 이전 페이지를 보존하기 위해 history 를 State 로 관리하였고, 새로고침에도 유지되도록 localStorage 에도 동시에 history 를 관리할 수 있는 useStorageState Hook 을 구현하였습니다.
    - defaultValue 를 받으면 state 의 Type 을 추론할 수 있도록 오버로딩하여 구현하였습니다.
- 페이지 이동 시 애니메이션 효과
  - targetScreen 이 unmount 되는 시점에 애니메이션 효과를 주도록 구현하는 것이 어려워 framer-motion 라이브러리를 활용하여 구현하였습니다.

### 추가내용

- Context 를 사용하여 `push` 메서드를 불러와 사용한 로직에서, `useImperativeHandle` 을 통해 `push` 를 불러와 사용하도록 변경하였습니다.
  - 기존의 `push` 메서드는 `string` type 의 값을 받아 history 만을 관리하였는데, component 를 받아 미리 등록하지 않은 Component 를 Stack 에 등록할 수 있도록 변경하였습니다.
