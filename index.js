const express = require('express')
const cors = require('./cors')

const data = require('./data')
const Pagination = require('./Pagination')

const app = express()

app.use('/', cors)

app.get('/items', function (req, res) {
    const { page, limit } = req.query
    const PaginationInstance = new Pagination({ data, page, limit })
    res.send({
        data: PaginationInstance.data,
        pages: PaginationInstance.pages
    })
})

app.listen(4000)