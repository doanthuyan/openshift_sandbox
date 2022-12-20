const express = require('express')
const hbs = require('hbs')
const routes = require('./routes/routes')
const path = require('path')
const app = express()
const PORT = 3000

app.set('view engine', hbs)
app.use('/', routes)
app.use(express.static(path.join(__dirname, '/public')))

app.listen(PORT, () => {
  console.log(`app is running on PORT ${PORT}`);
  console.log(myFunction(getRndInteger(1,100),getRndInteger(101,200)));
  console.log(`app running on whale`);
})
module.exports = app
// Function to compute the product of p1 and p2
function myFunction(p1, p2) {
  return p1 * p2;
}
function getRndInteger(min, max) {
  debugger;
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}