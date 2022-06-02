const express = require('express')
const app = express() 
const loogger = require('morgan') //logger에 morgan 모듈 함수를 담는다.
const PORT = 3100

// --- 1번 로직
app.use(loogger('tiny')) // 함수에 매개변수를 설정합니다. 여기서는 간단하게 tiny 버전으로 설정했습니다.
//이렇게 하면 :HTTP메서든 :url :상태코드 :응답컨텐츠길이 - :응답헤더시작시간(ms) 라는 형태로 로그가 나옴
app.use((req, res, next)=>{ 
    console.log('1 Time:', Date.now())
    next()
})

// --- 2번 로직
app.use((req, res, next)=>{
    console.log('2 Time:', Date.now())
    next()
})

app.listen(PORT, ()=>{ 
    console.log(`서버가 생성되었습니다.${PORT}`)
})

