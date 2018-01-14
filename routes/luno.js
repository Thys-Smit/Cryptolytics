var express = require('express')
var router = express.Router()
var rest = require('restler')
var arr = []
var lastResult = 0;

// router.get('/API/getUpdate',function(req, res){
//     rest.get('https://api.mybitx.com/api/1/ticker?pair=XBTZAR').on('complete', function(result) {
//         if (result instanceof Error) {
//             console.log('Error:', result.message);
//             //this.retry(2000); // try again after 5 sec
//         } else {

//             arr.push(result)
//             var html = tableify(arr)
//             return res.status(200).send(html)
            
//         }
//     });
// })


router.get('/API/getCurrentBTCValue',function(req, res){
    rest.get('https://api.mybitx.com/api/1/ticker?pair=XBTZAR').on('success', function(result) {
        if (result instanceof Error) {
            console.log('Error:', result.message);
            //this.retry(2000); // try again after 5 sec
        } else {
            if(lastResult !== result.last_trade){
                lastResult = result.last_trade
                return res.status(200).send(result.last_trade)
            }else{
                return res.status(304).send(lastResult)
            }
            
            //return res.status(200).send('BTC : ' + result.last_trade)
            
            
        }
    });
})



module.exports = router


