module.exports.handleBook = (req, res) =>{
    console.log(req.params)
    res.send(req.params)
}

module.exports.intro = (req, res)=>{
    res.send(`우리는 Express로 만든 서버 입니다.`)
}