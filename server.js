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
    const { page } = req.query;
    const currentPage = parseInt(page) || 1;
    const pagePerPage = 5;
    const itemsPerPage = 15;
    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    let data = await pool.query("SELECT * FROM post ORDER BY idx DESC");
    const MaxPage = Math.ceil(data[0].length / itemsPerPage);
    const subsetData = data[0].slice(startIdx, endIdx);
    let jsonData = JSON.stringify(subsetData);
    res.render('board', { jsonData: jsonData, currentPage, pagePerPage, MaxPage });
});
app.post('/insert/board', async (req, res) => {
    const { detail, id, title, currPage } = req.body;
    const sql = "INSERT INTO post (`id`, `title`, `datetime`, `detail`) VALUES (?,?,now(),?)"
    await pool.query(sql, [id, title, detail]); //게시물 추가
    const currentPage = parseInt(currPage) || 1;
    const pagePerPage = 5;
    const itemsPerPage = 15;
    let data = await pool.query("SELECT * FROM post ORDER BY idx DESC")
    const MaxPage = Math.ceil(data[0].length / itemsPerPage);
    const subsetData = data[0].slice(0, itemsPerPage);//모든 게시물 긁어오기
    res.json({ list: subsetData, MaxPage: MaxPage, currPage: currentPage, pPerPage: pagePerPage })
})

server.listen(app.get('port'), () => {
    console.log(`express 엔진이 ${app.get('port')} 번 포트에서 실행중입니다.`);
})