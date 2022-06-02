const express = require('express')
const path = require('path')
const logger = require('morgan')

const app = express()
const PORT = 12000
const _path = path.join(__dirname, './dist') //dist 폴더 안에 있는 파일들을 서버에 올림, dist라는 폴더에 있는 모든 정적 파일 접근 가능
// __dirname은 JS가 실행되는 현재 위치를 가리키는 Node.js의 전역 변수

// PATH 모듈
/*
    Node.js의 PATH라는 모듈은 파일, 디렉토리에 관한 path들을 조작할 수 있는 좋은 모듈
    많이 사용되는 메소드는

    join: 받은 매개변수들을 통해 절대 경로를 반환

    resolve: 받은 매개변수들을 연결

*/

console.log(_path)

app.use('/dist', express.static(_path))
app.use(logger('tiny')) //app.use를 통해 모든 요청 중간에 morgan을 통한 로거를 설정합니다.

// 커스텀 미들웨어
app.use((req, res, next)=>{ //app.use, 그 다음에 나오는 함수로 미들웨어를 만들 수 있다.
    console.log('요청이 왔네요~ 지나갑니다.')
    next()
})

app.get('/book/:bookName', (req, res)=>{ //book/:bookName으로 get 요청을 설정해놓습니다. 이렇게 하면 book/잠-베르나르베르베르 이런 식으로 요청가능
    const {bookName} = req.params
    res.send(`안녕하세요 홍철이네 서점입니다. ${bookName}을 주문하셨군요!`)
})

app.listen(PORT, ()=>{ // 서버염
    console.log(`너의 서버는? ${PORT}!`)
})