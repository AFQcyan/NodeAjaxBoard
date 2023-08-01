const express = require('express');
const http = require('http');
const path = require('path');
const pool = require('./DB/DB');
const bodyParser = require('body-parser');
const { log } = require('console');

const app = express()
const server = http.createServer(app)


app.set('port', 32676);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', async (req, res) => {
    let data = await pool.query("SELECT * FROM post ORDER BY idx DESC")
    let jsonData = JSON.stringify(data[0])
    res.render('board', { jsonData: jsonData, });
});
app.post('/insert/board', async (req, res) => {
    const { detail, id, title } = req.body;
    const sql = "INSERT INTO post (`id`, `title`, `datetime`, `detail`) VALUES (?,?,now(),?)"
    await pool.query(sql, [id, title, detail]); //게시물 추가
    // let now = new Date()
    // let dayTimeString = new Date(now.getTime()).toISOString().replace('T', ' ').slice(0, -5);
    let data = await pool.query("SELECT * FROM post ORDER BY idx DESC") //모든 게시물 긁어오기
    res.json({ list: data[0] })
})

server.listen(app.get('port'), () => {
    console.log(`express 엔진이 ${app.get('port')} 번 포트에서 실행중입니다.`);
})