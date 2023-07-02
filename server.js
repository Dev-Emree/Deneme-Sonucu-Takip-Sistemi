let express = require("express"),
    path = require("path"),
    bodyParser = require("body-parser"),
    session = require("express-session"),
    MongoStore = require('connect-mongo'),
    cookieParser = require('cookie-parser'),
    passport = require('passport'),
    app = express(),
    DB = require("./controllers/DB"),
    mainRouter = require('./routes/main.router');


require("dotenv").config();
app.use(require('cors')());

app.locals.isProduction = process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'Production';

const { DBoptions, maxAge } = require('./config/config.js');

if (!app.locals.isProduction) {
    app.use(require('morgan')('dev'));
    app.use(require('errorhandler')());
}

var STORE = MongoStore.create({
    mongoUrl: process.env.DB_PATH,
    collectionName: process.env.SESSION_COLLECTION,
    ttl: maxAge,
    autoRemove: 'interval',
    autoRemoveInterval: 1440,
    mongoOptions: DBoptions,
    dbName: process.env.SESSION_DB
});

app.use(session({
    name:'session',
    secret: process.env.secret,
    resave: false,
    saveUninitialized: false,
    store: STORE,
    cookie: {
        maxAge: maxAge * 1000,
        httpOnly: true,
        sameSite: true,
    }
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/public',express.static(path.join(__dirname, '/public')));

app.set('view engine', 'ejs');

app.use(passport.initialize());
app.use(passport.session());
require('./controllers/passport/local')(passport);

app.use(cookieParser(process.env.COOKIE_SECRET));

var db = DB();

if (db === undefined) {
    app.use('*', (req, res) => res.redirect('/500'));
}

app.locals.db += { connection: db };

app.use(mainRouter);

app.listen(process.env.PORT);