const express = require('express')
const app = express()
const nunjucks = require('nunjucks')
const bodyParser = require('body-parser')
const morgan = require('morgan')


app.set('view engine', 'html')

app.engine( 'html' , nunjucks.render )

var env = nunjucks.configure('views', {noCache: true})

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.use(morgan('dev'))
app.static(path.join(__dirname, './public'))




app.use(function(err,req,res,next){
  console.error(err.stack);
  res.status(500).send(err.message)
})





app.listen(3000, function(){
  console.log('listening on port 3000')
})
