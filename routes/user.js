const express = require('express');
const router = express.Router();





// 회원가입
// @route POST http://localhost:5000/users/register
// @desc register user
// @access public

router.post('/register', (req, res) => {

});



// 로그인
// @route POST http://localhost:5000/users/login
// @desc login user
// @access public

router.post('/login', (req, res) => {

});


// 패스워드찾기
// @route POST http://localhost:5000/users/forgot
// @desc forgot password
// @access public

router.post('/forgot', (req, res) => {

});



// 토탈유저(관리자)
// @route GET http://localhost:5000/users/total
// @desc total get user
// @access private

router.get('/total', (req, res) => {

});





module.exports = router;