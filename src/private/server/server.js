const express = require('express')
const path = require('path')
const { nextTick } = require('process')

const app = express()
const port = 5500

const projectPath = __dirname.replace('src\\private\\server', '')

app.use(express.static(projectPath + 'src\\public'))
app.use(express.static(projectPath + 'resources\\'))

app.get('/', (req, res) => {

    res.redirect('/login')
    
})

app.get('/login', (req, res) => {

    res.sendFile(path.join(projectPath, '/src/public/html/login.html'))

})

app.get('/html/bugtracker', (req, res) => {

    res.statusCode = 401
    res.send()

})

app.listen(port, () => {

    console.log(`Listening at http://localhost:${port}`)

})