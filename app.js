var express = require('express');
var app = express();

var mysql = require('mysql');
var dbConfig = require('./db/DBConfig');
var userSQL = require('./db/Usersql');
// 使用DBConfig.js的配置信息创建一个MySQL连接池
var pool = mysql.createPool( dbConfig.mysql );
// 响应一个JSON数据
var responseJSON = function (res, ret,con) {
  if(typeof ret === 'undefined') {
    res.json({     code:'-200',     msg: '操作失败'
    });
  } else {
    res.json(ret);
  }
  con.release();
};

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
app.get('/room/getData', function (req, res) {
  pool.getConnection(function(err, connection) {
// 获取前台页面传过来的参数
    var param = req.query || req.params;
    //console.log(req.query);
/*    console.log(req.params);
    console.log(req.search);*/
    connection.query(userSQL.count, [], function(err, count) {
      //console.log(count);
      if(count) {
        //console.log(req);
        var count = count[0].count;
        connection.query(userSQL.queryAll, [Number(param.currentPage) * Number(param.pageSize),Number(param.pageSize)], function(err, result) {
          console.log(result);
          if(result) {
            var datas = {
              data: result,
              count: count
            }
            console.log(datas);
            responseJSON(res, datas,connection);
          } else {
            responseJSON(res, result,connection);
          }

        });

      } else {
        responseJSON(res, count,connection);
      }

    });


  });

});

var server = app.listen(4200, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
