let express = require('express');
let app = express();
let fs = require('fs');
let bodyParser = require('body-parser'); // post 请求解析
app.listen(3001);
app.use(bodyParser.urlencoded({extended: true}))
app.get('/user', function (req, res) {
    fs.createReadStream('./user.json').pipe(res);
});
app.get('/user/:id', function (req, res) {
    var users = require('./user.json');
    var id = req.params.id
    console.log(users)
    console.log(id)
    var user = users.filter(function (item) {
        return item.id == id
    })[0]
    console.log(user)
    res.send(user)
});
app.post('/user', function (req, res) {
    let user = req.body;
    let users = require('./user.json');
    user.id = users[users.length - 1].id + 1;
    users.push(user)
    fs.writeFile('./user.json', JSON.stringify(users), (err) => {
        res.send(user)
    })
})
app.put('/user/:id', function (req, res) {
    let newUser = req.body;
    let users = require('./user.json');
    users = users.map(function (item) {
        if (item.id == req.params.id) {
            return newUser
        } else {
            return item
        }
    })
    fs.writeFile('./user.json', JSON.stringify(users), (err) => {
        res.send(newUser)
    })
});

app.patch('/user/:id', function (req, res) {
    let newUser = req.body;
    let users = require('./user.json');
    users = users.map(function (item) {
        if (item.id == req.params.id) {
            for (let attr in newUser) {
                if (newUser.hasOwnProperty(attr)) {
                    item[attr] = newUser[attr]
                }
            }
            newUser = item;
            return newUser
        } else {
            return item
        }
    });
    fs.writeFile('./user.json', JSON.stringify(users), (err) => {
        res.send(newUser)
    })
});
app.delete('/user/:id',function(req,res){
    let users = require('./user.json');
    users = users.filter(function (item) {
        return item.id!=req.params.id;
    });
    fs.writeFile('./user.json', JSON.stringify(users), (err) => {
        res.send({})
    })

})