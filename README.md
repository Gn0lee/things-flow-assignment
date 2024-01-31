# React Template

## common

2개 이상의 feature에서 사용되는 요소들을 포함하는 directory

## features

페이지에서 사용되는 1개의 기능 단위의 directory (ex.signup, signin...)

## 개별 폴더

1. assets  
   image 파일, svg 파일 등 정적 리소스들을 포함합니다.
2. components  
   컴포넌트들을 포함합니다.
3. context  
   상태관리 관련 파일들을 포함합니다.
   common의 context에서는 Redux의 store파일을 포함하며 각 feature의 context에서는 해당 feature의 slice를 포함합니다.
4. data  
   상수, json등 정보를 포함합니다.
5. layout  
   별도의 기능없이 페이지 또는 feature의 화면 레이아웃을 설정하는 파일들을 포함합니다.
6. hooks  
   custom hooks를 포함합니다.
7. api  
   api 관련 파일을 포함합니다.
8. utils  
   util 함수들을 포함합니다.(ex. calc, regex..)
9. types  
   type지정 파일들을 포함합니다.
10. pages  
    routes에서 사용되는 page파일들을 포함합니다.
11. routes  
    router에 사용되는 파일들을 포함합니다.
12. styles  
    style 관련 파일들을 포함합니다.(ex.palette, theme, globalstyle...)
13. thunk
    redux-thunk 파일들을 포함.

## 파일 및 변수,함수 명명법

1. api

- backend uri path기준으로 camel case로 작성. 확장자 앞에 .api 추가. 별도 폴더를 생성하지 않고 파일단위로 관리
  ex) v1/user/timezone -> userTimezone.api.ts
- 파일 내에서 {method}{파일명}(camel case) 함수 선언하여 사용
  ex) `export const getUserTimezone = async () => {}`

2. context

- {feature}Slice.ts 로 camel case
  ex) authSlice.ts

3. data

- camel case로 사용. 별도 폴더 생성하지 않고 파일 단위로 관리
  ex) constants.ts

4. layout

- pascal case로 사용. 별도 폴더 생성하지 않고 파일 단위로 관리

5. utils

- camel case로 사용. 별도 폴더 생성하지 않고 파일 단위로 관리
  ex) calcFunction.ts

6. features

- 가능하면 소문자 한단어로 사용. 불가능시 camel case로 사용.
