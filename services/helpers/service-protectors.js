// function for ensuring the token is recidved as with the header of authorization and the token prefixed with the bearer

isTokenEnsured = function (req, res, next) {
    const bearerHeader = req.headers['authorization'];

    if (typeof bearerHeader !== "undefined") {
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }
    else {
        res.status(403);
        res.send({ error: "unauthorized" });
    }
}

module.exports.isTokenEnsured = isTokenEnsured;