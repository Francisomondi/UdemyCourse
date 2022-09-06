function Authenticate(req, res, next) {
    console.log("Authenticating.....")
    next()
}

module.exports = Authenticate