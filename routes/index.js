const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.post('/',function(req,res){
  var data;
  try{
    if(req.body.x ===""|| req.body.y === "") throw 300;
    const n1 = parseFloat(req.body.x);
    const n2 = parseFloat(req.body.y);
    if(isNaN(n1)||isNaN(n2)) throw 100; 
    if(typeof req.body.op === 'undefined') throw 400;
    switch(req.body.op){
      case "+":
        data = {...req.body, k: n1+n2};
        break;
      case "-":
        data = {...req.body, k: n1-n2};
        break;
      case "*":
        data = {...req.body, k: n1*n2};
        break;
      case "/":
        data = {...req.body, k: n1/n2};
        break;
    }
  }
  catch(err){
    console.log(err)
    if(err == 300)
      data = {...req.body, noti: "Ô dữ liệu không được bỏ trống"}
    else if(err == 100)
      data = {...req.body, noti: "Dữ liệu nhập vào không hợp lệ"}
    else if(err == 400)
      data = {...req.body, noti: "Chưa chọn phép tính"}
  }
  res.render('index',data);
})
module.exports = router;
