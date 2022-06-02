const express = require('express')
const app = express() // express라는 모듈을 실행한 값을 app에 담습니다. express를 이용한 앱들은 보통 app 이라는 이름의 변수를 사용합니다.
const PORT = 3000
// ---- 1번 로직
// app.use를 통하여 모든 HTTP 요청에 대해 미들웨어를 설정합니다.
// HTTP 요청을 처리하는 매개변수자로서 req, 응탑 res 가 기본으로 설정되고,
//미들웨어로 로직을 넘기거나 매개변수를 넘기는 next라는 함수가 존재

app.use((req, res, next)=>{ 
    console.log('1 Time:', Date.now())
    next()
})

// next()함수는 다음 미들웨어로 넘겨주는 역할을 한다. 
//next()함수가 앖으면 다음 미들웨어의 2번 로직은 실행되지 않을 것 이다.

// --- 2번 로직
app.use((req, res, next)=>{
    console.log('2 Time:', Date.now())
    next()
})

app.listen(PORT, ()=>{ // experess 또한 listen을 통하여 서버를 실행 할 수 있다.
    console.log(`서버가 생성되었습니다.${PORT}`)
})

