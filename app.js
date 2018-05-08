const express = require('express')
const jwt =     require('jsonwebtoken')


const port = 7000 //listening port variable

// initializing the express app
const app = express()

// app.use(logger, (req, res, next)=>{
//     console.log('logging')
//     next()
// })

app.get('/api', (req, res)=>{
    // res.json({
    //     message: 'welcome to node application'
    // })
    res.json([
        {
            message: "Welcome to Node js Authentication",
            next_msg: "Using JWT web token for authenticaion and protecing public routes"
        }
    ])
})

// protected route  /'api/posts'
/**
 * verify token middlware
 */
app.post('/api/posts', verifyToken, (req, res)=>{
    jwt.verify(req.token, 'secret', (err, auth)=>{
        if(err){
            res.send(403)
        }else{
            res.json({
                message: 'post created',
                auth
            })
        }
    })
    res.json({
        message: "Posts created successsfully"
    })
})


app.post('/api/login', (req, res)=>{
 /**
  * Mock users
  * user Authentication 
  */
    const user = {
        id: 1,
        username: 'jeff',
        password:     'pass1234'
    }
    
    jwt.sign({user:user}, 'secret', (err, token)=>{
        res.json({
            token: token
        });
    });
});

// verify token with authorizaion header
function verifyToken(req, res, next){
    const bearerHeader = req.headers['authorization']
    if(typeof bearerHeader !== 'undefined'){
            const bearer = bearerHeader.split(' ');
            const bearerToken = bearer[1]
            req.token = bearerToken
            next();
    }else{
        res.sendStatus(403)
    }
}

app.listen(port, ()=>{
    console.log('app is listening on port: ' + port)
})
