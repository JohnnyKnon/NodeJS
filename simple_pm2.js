const http = require('http')
const PORT = 14050
const server = http.createServer((req, res) => {
    res.setHeader('Content-type', 'application/json; charset=utf-8')
    // JSON 데이터를 반환하는 서버
    const obj = {
        // 이름이라는 key를 가지고 큰돌이라는 value를 가지는 JSON Object
        "이름" : "큰돌"
    }
    res.end(JSON.stringify(obj))
    // res.end는 문자열이여야 하여, stringify로 문자열로 변환해줌
})
// setTimeout 으로 1초마다 서버 중지
setTimeout(() => {
    // JSON Object는 {key : value} 형태가 되어야 하는데 이상한게 들어와 에러 즉 일부러 서버중지
    JSON.parse("{z")
}, 1000)

server.listen(PORT, () => { // listen 메서드를 통해 http 서버를 시작할 수 있습니다.
    console.log(`Server running at http://127.0.0.1:${PORT}/`)
})