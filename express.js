const express = require('express')
const app = express()
const port = 3000

console.log(global)

app.get('*', (req, res) => {
  res.sendFile(__dirname + "/" + req.path)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

//path C:\Users\morga\OneDrive\Desktop\JSStuff\Pac-Man2