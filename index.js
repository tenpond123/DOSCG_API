const express = require('express')
const app = express()
const port = 3500
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(cors())
app.get('/',(req,res)=>{
    res.send("DOSCG API ......")
})
app.post('/findxyz',(req,res)=>{
    let reqbody = req.body.value
    if(reqbody == undefined || reqbody.length == 0){
        return res.send("invalid formated")
    }
    let value = ["X","Y","Z"]
    let result = []
    value.map(val => {
        for(var i = 0;i<reqbody.length;i++){
            if(reqbody[i] == val.toLowerCase() || reqbody[i] == val){
                result.push(reqbody[i])
            }
        }
    })
    let numX = result.filter(val => val == "x" || val == "X")
    let numY = result.filter(val => val == "y" || val == "Y")
    let numZ = result.filter(val => val == "z" || val == "Z")
    let resObj = [
        {
            "char":"X",
            "num":numX.length
        },
        {
            "char":"Y",
            "num":numY.length
        },
        {
            "char":"Z",
            "num":numZ.length
        },
        {
            "char":"ALL",
            "num":result.length
        }
    ]
    res.send(resObj)
})

app.post("/findbc",(req,res)=>{
    let a = req.body.value;
    if(a == undefined || a == ""){
        return res.send("please input value")
    }
    let b = 23 - a;
    let c = -21 - a
    let result = {
        "b":b.toString(),
        "c":c.toString()
    }
    res.send(result)
    
})

app.listen(port,()=>{
    console.log("start with port => ",port)
})