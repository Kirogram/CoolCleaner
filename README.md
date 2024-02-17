![쿨청소꾼](https://coolcleaner.co.kr/fileDownLoad/170820107871644.png)

# 쿨청소꾼 - 청소업체 홍보 및 신청 사이트

청소를 필요로 하는 고객이 방문하여 업체 정보를 확인하고 온라인 신청까지 진행 할 수 있도록 제작된 홈페이지 입니다.
방문 목적이 명확한 만큼 서브페이지를 최소화하고 메인페이지와 팝업을 통해 페이지의 기능 대부분을 확인 할 수있도록 제작되었습니다.

### Live URL : https://coolcleaner.co.kr

<br>

### Tech Stack
**Front-End** : React18 , TypeScripts , JavaScripts , Redux(RTK) , Jest , RTL , SCSS  
**Back-End** : JAVA , Spring Framework , JPA , MyBatis  
**SERVER** : Ubuntu 19  
**DataBase** : Oracle 10e

### Contribution
`기정환 단독개발`

### Screen

![Pages](https://coolcleaner.co.kr/fileDownLoad/1706301602187screen1.png)

### 주요기능
***
디렉토리 구조\
└─src\
├─assets\
│  ├─cleaning\
│  ├─icon\
│  ├─logo\
│  └─main\
├─components\
│  ├─layout\
│  ├─modal\
│  └─popup\
├─pages\
├─reducers\
├─services\
├─styles\
└─test\

### dynamic Header 만들기 

<img src = "https://coolcleaner.co.kr/fileDownLoad/1706377087413headermv.gif" height="400px">

>다이나믹 컴포넌트를 만드는 방법은 어렵지 않고 흔하게 쓰이는 기술이지만 디테일을 살펴보면
> 정교하게 만들어진 컴포넌트와 간단하게 구현된 컴포넌트의 디테일 차이가 큽니다. <br>
>좀더 성능과 확장성을 고려한 헤더 컴포넌트 디자인을 소개해볼까 합니다.

### 일반적이고 평범한 Header 디자인
가장 손쉬운 방법은 scroll event를 호출하는 방식 입니다.  
비슷한 기능을 검색했을 때 가장 많은 예제가 나오는 방식이며 구현난이도가 낮습니다.  
스크롤 위치값이 적당한 위치에 닿으면 이벤트를 발생시키는 방식으로 직관적이지만 치명적인 단점이 있습니다.  
통상적으로 휠 한번에 15~25번정도의 스크롤 이벤트가 발생하는데 이는 불필요한 이벤트의 발생이면서  
클라이언트의 렌더링 성능을 낮출 수 있습니다.  
또한 가변적인 height값에 의존하기에 다양한 이벤트 효과 연출이 어렵습니다.  
<br>
### Intersection Observer를 통한 이벤트 호출
본 프로젝트에서 사용된 구현 방식 입니다.  
```html
HeadCarousel.tsx

    case1
            <InView as="div" onChange={(inView) => {
                dispatch(setHeaderBg());
            }}>
                <div className={"carousel-header-box"}></div>
            </InView>
    case2
            const ref = useRef();
            const {ref: inViewRef, inView} = useInView({
                triggerOnce: true
            });
```


프로젝트에서 intersection-observer는 case1,case2 두가지 방식으로 구현하였습니다.
설명중인 Header의 경우 case1로 구현되었습니다.  
옵저버 구현에서도 성능을 고려한 부분이 header 호출 이벤트의 최소화입니다.
```html
Header.tsx
    
    <div className={sideMenu.headerNonWhite === true ? "header-box" : "header-box main-bg"}>
    ...
    <img src={sideMenu.headerNonWhite === true ? logo2 : logo}/>
    ...
```
```html
reducers/popup.tsx

export const popupSlice = createSlice({
    name: 'popup',
    initialState: {
        value: {
           ...
            headerNonWhite: false,
        }
    },
    reducers: {
       ...
        setHeaderBg: (state) => {
            state.value.headerNonWhite = !state.value.headerNonWhite;
        },
    },
})

```
일반적인 구조와 다른점은 intersection-observer를 통해 reducer를 호출하고 후처리는
header내 css로 컨트롤한다는 점인데 이를 활용하면 element단위로 다른 payload값을 전달하여
다양한 연출을 할 수 있다는점과 최상단 고정의 header에 대한 이벤트처리를 하지 않는 페이지에서는
observer를 활성화 시키지 않아 불필요한 subscribe의 memory leak을 막아줄 수 있다는 점 입니다.
<br>
<br>

### TDD
> RTL과 JEST를 활용하여 몇가지 기능에 대한 테스트를 진행하였습니다.  
>element 체크 및 order 처리 과정에 대한 테스트를 샘플로 작성하였습니다

### LICENSE
***
GNU General Public License(GPL) 2.0  
본 프로젝트에 사용된 이미지는 상업용 이미지로 무단 사용을 금지합니다.
