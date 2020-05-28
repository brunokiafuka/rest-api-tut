const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();


app.use(bodyParser.json())
app.use(cors());

app.get('/users', (req, res) => {
    const { name } = req.body
    res.status(201).json({ message: 'Good class', name })
})

// get data for specific user
app.get('/users/:id', (req, res) => {
    const { id } = req.params
    // perform DB queries

    res.status(201).json({ data: id })
})

// posting data
app.post('/users', (req, res) => {
    const { name, password } = req.body

    // perform DB actions

    res.status(201).json({ data: { name, password } })
})


app.listen(3333, () => console.log('Server running @ port 3333'))