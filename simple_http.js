
// Node.js는 http 인터페이스를 위해 내장객체인 http를 제공

// 1. http 객체를 이용해 서버 만들기
const http = require('http')
const PORT = 12020// IP + PORT 설정해야 비로서 URI
const server = http.createServer((request, response) => { // createServer을 통해 서버생성
    response.statusCode = 200 // statusCode가 있는 이 줄은 안 쓰고 삭제 가능
    // statusCode는 http의 상태 코드인데 따로 설정하지 않으면 항상 200이다.
    // statusCode 100번 : 정보 / 200번 : 성공 / 300번대 : 리다이렉션 / 400,500번대: 오류
    response.setHeader('Content-Type','text/plain; charset=utf-8') // 응답값은 텍스트임을 나타내는 헤더정보 설정
    // setHeader를 여러 줄 사용한 경우 마지막에 설정한 헤더 값을 보내게 된다.
    response.end('안녕하세요 Node.js 공부 합니다.')
    // res.end로 사용자의 요청에 대한 응답으로 문자열을 보냅니다. 매개변수로는 버퍼, 문자열 가능
})

server.listen(PORT, () => { // listen 메서드를 통해 http 서버를 시작할 수 있습니다.
    console.log(`Server running at http://127.0.0.1:${PORT}/`)
})