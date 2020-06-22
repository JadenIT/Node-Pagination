function cors(req, res, next) {
    const origin = req.get('origin')
    res.set('Access-Control-Allow-Origin', origin)
    next()
}

module.exports = cors