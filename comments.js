//Create web server 
const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
//Create a comment
app.post('/comments', (req, res) => {
    res.send('Creating a comment')
})
//Read a comment
app.get('/comments/:id', (req, res) => {
    res.send('Reading a comment')
})
//Update a comment
app.put('/comments/:id', (req, res) => {
    res.send('Updating a comment')
})
//Delete a comment
app.delete('/comments/:id', (req, res) => {
    res.send('Deleting a comment')
})
// Path: posts.js
//Create a post
app.post('/posts', (req, res) => {
    res.send('Creating a post')
})
//Read a post
app.get('/posts/:id', (req, res) => {
    res.send('Reading a post')
})
//Update a post
app.put('/posts/:id', (req, res) => {
    res.send('Updating a post')
})
//Delete a post
app.delete('/posts/:id', (req, res) => {
    res.send('Deleting a post')
})
// Path: users.js
//Create a user
app.post('/users', (req, res) => {
    res.send('Creating a user')
})
//Read a user
app.get('/users/:id', (req, res) => {
    res.send('Reading a user')
})
//Update a user
app.put('/users/:id', (req, res) => {
    res.send('Updating a user')
})
//Delete a user
app.delete('/users/:id', (req, res) => {
    res.send('Deleting a user')
})
// Path: index.js
const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.use('/comments', require('./comments'))
app.use('/posts', require('./posts'))
app.use('/users', require('./users'))
// Path: package.json
{
    "name": "expressjs




