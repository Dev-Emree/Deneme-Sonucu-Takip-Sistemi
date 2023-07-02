module.exports = {
    DBoptions: {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    maxAge: 259200,
    cookieOptions: {
        maxAge: 259200,
        httpOnly: true,
        signed: true,
        sameSite: true,
        secure:true,
        path: '/',
        secret: process.env.COOKIE_SECRET
    }
}