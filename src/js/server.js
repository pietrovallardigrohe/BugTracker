const express = require('express')
const path = require('path')

const app = express()
const port = 5500

const projectPath = __dirname.replace('\\src\\js', '')

app.use(express.static(projectPath + '\\src\\'))
app.use(express.static(projectPath + '\\resources\\'))

app.get('/', (req, res) => {

    res.sendFile(path.join(projectPath, '/src/html/login.html'))

})

app.listen(port, () => {

    console.log(`Listening at http://localhost:${port}`)
    console.log(projectPath + '\\src\\css\\style.css')

})