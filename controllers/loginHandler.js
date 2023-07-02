let checkLoggedIn = function (req, res, next) {
    if(!req.isAuthenticated()){
        return res.redirect("/giris");
    }
    next();
}

let checkLoggedOut = function (req, res, next) {
    if(req.isAuthenticated()){
        return res.redirect("/panel/yeni-kayit");
    }
    next();
};

let LogOut = function (req, res) {
    req.session.destroy(function (err) {
        if (err !== null) {
            return res.redirect('/500');
        }
        return res.clearCookie('LOGIN_INFO').redirect("/giris");
    });
}

module.exports = {
    checkLoggedIn: checkLoggedIn,
    checkLoggedOut: checkLoggedOut,
    LogOut: LogOut
}