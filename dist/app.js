/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.ts":
/*!****************!*\
  !*** ./app.ts ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa */ "koa");
/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var koa_bodyparser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa-bodyparser */ "koa-bodyparser");
/* harmony import */ var koa_bodyparser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa_bodyparser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var koa_cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! koa-cors */ "koa-cors");
/* harmony import */ var koa_cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(koa_cors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! koa-router */ "koa-router");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/middleware */ "./src/middleware/index.ts");
/* harmony import */ var _service_socket_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @service/socket/index */ "./src/service/socket/index.ts");
/* harmony import */ var _router_customApi_usersInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @router/customApi/usersInfo */ "./src/router/customApi/usersInfo.ts");
/* harmony import */ var _router_customApi_history__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @router/customApi/history */ "./src/router/customApi/history.ts");
/* harmony import */ var _router_customApi_usersAccount__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @router/customApi/usersAccount */ "./src/router/customApi/usersAccount.ts");
/* harmony import */ var _router_customApi_cars__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @router/customApi/cars */ "./src/router/customApi/cars.ts");
/* harmony import */ var _router_dingdongApi_users__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @router/dingdongApi/users */ "./src/router/dingdongApi/users.ts");
/* harmony import */ var _router_dingdongApi_orderInformation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @router/dingdongApi/orderInformation */ "./src/router/dingdongApi/orderInformation.ts");
/* harmony import */ var _router_dingdongApi_carsInfo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @router/dingdongApi/carsInfo */ "./src/router/dingdongApi/carsInfo.ts");
/* harmony import */ var _router_dingdongApi_commandControl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @router/dingdongApi/commandControl */ "./src/router/dingdongApi/commandControl.ts");














const allRouter = new koa_router__WEBPACK_IMPORTED_MODULE_3___default.a();
const app = new koa__WEBPACK_IMPORTED_MODULE_0___default.a();
app.use(koa_cors__WEBPACK_IMPORTED_MODULE_2___default()());
app.use(koa_bodyparser__WEBPACK_IMPORTED_MODULE_1___default()());
app.use(_src_middleware__WEBPACK_IMPORTED_MODULE_4__["tokenVerify"]);
allRouter.use('/users', _router_customApi_usersAccount__WEBPACK_IMPORTED_MODULE_8__["default"].routes());
allRouter.use('/userInfo', _router_customApi_usersInfo__WEBPACK_IMPORTED_MODULE_6__["default"].routes());
allRouter.use('/history', _router_customApi_history__WEBPACK_IMPORTED_MODULE_7__["default"].routes());
allRouter.use('/cars', _router_customApi_cars__WEBPACK_IMPORTED_MODULE_9__["default"].routes());
allRouter.use('/dd/user', _router_dingdongApi_users__WEBPACK_IMPORTED_MODULE_10__["default"].routes());
allRouter.use('/dd/orderInfo', _router_dingdongApi_orderInformation__WEBPACK_IMPORTED_MODULE_11__["default"].routes());
allRouter.use('/dd/carsInfo', _router_dingdongApi_carsInfo__WEBPACK_IMPORTED_MODULE_12__["default"].routes());
allRouter.use('/dd/CmdCtrl', _router_dingdongApi_commandControl__WEBPACK_IMPORTED_MODULE_13__["default"].routes());
app.use(allRouter.routes()).use(allRouter.allowedMethods());
app.use(_src_middleware__WEBPACK_IMPORTED_MODULE_4__["log"]);
var EventEmitter = __webpack_require__(/*! events */ "events").EventEmitter;
var ee = new EventEmitter();
ee.setMaxListeners(15);
app.listen(3000);


/***/ }),

/***/ "./config/index.ts":
/*!*************************!*\
  !*** ./config/index.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const config = {
    baseUrl: "http://mobile.xingfudingdong.com/api/",
    qiniu: {
        AK: "azSrR1H1o5IMgtfdO7zA270C5Q3J9bHoe0-ftiYC",
        SK: "fK0SYdSZ2QydWZQGMBPiD-WECUdk2Da0XChXo7Ms",
        bucket: "dingding",
        sourceUrl: "http://ss.purevivi.chat/"
    },
    redis: {
        host: "119.29.139.200",
        port: 6379
    },
    bd: {
        dbUrl: "mongodb://purezjr:asd123LPAO~+@119.29.139.200:22222/dingdong",
        dbName: "dingdong"
    },
    loginArgs: {
        source: "android",
        version: 999
    },
    TOKEN_SECERT: "fight!fight!fight!"
};
/* harmony default export */ __webpack_exports__["default"] = (config);


/***/ }),

/***/ "./src/constant/index.ts":
/*!*******************************!*\
  !*** ./src/constant/index.ts ***!
  \*******************************/
/*! exports provided: RedisKey, CollectionName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedisKey", function() { return RedisKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionName", function() { return CollectionName; });
const RedisKey = {};
const CollectionName = {
    userInfo: 'userInfo',
    users: 'users',
    ddTokenPhoneMap: 'ddTokenPhoneMap',
    journey: 'journey',
    account: 'account',
    aroundCar: 'aroundCar',
    cost: 'cost',
    driveCarNums: 'driveCarNums'
};


/***/ }),

/***/ "./src/dao/userDao.ts":
/*!****************************!*\
  !*** ./src/dao/userDao.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userDao; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mongodb_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mongodb/db */ "./src/mongodb/db.ts");
/* harmony import */ var _constant_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @constant/index */ "./src/constant/index.ts");



class userDao {
    constructor() {
        this.add = (data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield _mongodb_db__WEBPACK_IMPORTED_MODULE_1__["default"].add(_constant_index__WEBPACK_IMPORTED_MODULE_2__["CollectionName"].users, data);
            return res;
        });
        this.delete = (data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield _mongodb_db__WEBPACK_IMPORTED_MODULE_1__["default"].delete(_constant_index__WEBPACK_IMPORTED_MODULE_2__["CollectionName"].users, data);
            return res;
        });
        this.find = (data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield _mongodb_db__WEBPACK_IMPORTED_MODULE_1__["default"].find(_constant_index__WEBPACK_IMPORTED_MODULE_2__["CollectionName"].users, data);
            return res;
        });
    }
}


/***/ }),

/***/ "./src/middleware/index.ts":
/*!*********************************!*\
  !*** ./src/middleware/index.ts ***!
  \*********************************/
/*! exports provided: tokenVerify, log */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenVerify", function() { return tokenVerify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var log4js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! log4js */ "log4js");
/* harmony import */ var log4js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(log4js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_commons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils/commons */ "./src/utils/commons.ts");



const noVerifyUrl = [
    '/users/login',
    '/users/qrcode/login',
    '/users/appletLogin',
    '/users/fast-login',
    '/cars/around',
    '/users/login-from-gongZongHao'
];
const isDdApi = (pathname) => pathname.indexOf('/dd') >= 0;
const tokenVerify = (ctx, next) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    let data = ctx.request.body;
    if (ctx.request.method === 'GET') {
        data = ctx.request.query;
    }
    const noToken = !data.token;
    if (noToken && !noVerifyUrl.includes(ctx.request.URL.pathname) && !isDdApi(ctx.request.URL.pathname)) {
        ctx.body = { err: '没权限，请登录', status: 2 };
        ctx.status = 401;
    }
    else if (noVerifyUrl.includes(ctx.request.URL.pathname) || isDdApi(ctx.request.URL.pathname)) {
        yield next();
    }
    else {
        if (Object(_utils_commons__WEBPACK_IMPORTED_MODULE_2__["checkToken"])(data.token)) {
            yield next();
        }
        else {
            ctx.body = { err: '没权限，请登录', status: 2 };
            ctx.status = 401;
        }
    }
});
const log = (ctx, next) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const { request, response } = ctx;
    log4js__WEBPACK_IMPORTED_MODULE_1___default.a.configure({
        appenders: {
            info: { type: 'file', filename: `logger/service.log` }
        },
        categories: { default: { appenders: ['info'], level: 'debug' } }
    });
    Object(_utils_commons__WEBPACK_IMPORTED_MODULE_2__["printLog"])(JSON.stringify({
        request: {
            url: request.url,
            method: request.method
        },
        response: {
            status: response.status,
            message: response.message
        }
    }), 'info');
    next();
});


/***/ }),

/***/ "./src/mongodb/db.ts":
/*!***************************!*\
  !*** ./src/mongodb/db.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @config/index */ "./config/index.ts");


const MongoClient = mongodb__WEBPACK_IMPORTED_MODULE_0___default.a.MongoClient;
class Db {
    constructor() {
        this.dbClient = null;
    }
    static getInstance() {
        if (!Db['instance']) {
            Db['instance'] = new Db();
        }
        return Db['instance'];
    }
    connect() {
        return new Promise((resolve, reject) => {
            if (!this.dbClient) {
                MongoClient.connect(_config_index__WEBPACK_IMPORTED_MODULE_1__["default"].bd.dbUrl, (err, client) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        const db = client.db(_config_index__WEBPACK_IMPORTED_MODULE_1__["default"].bd.dbName);
                        console.log('数据库连接成功！！！');
                        this.dbClient = db;
                        resolve(this.dbClient);
                    }
                });
            }
            else {
                resolve(this.dbClient);
            }
        });
    }
    add(collectionName, json) {
        return new Promise((resolve, reject) => {
            this.connect().then((db) => {
                db.collection(collectionName).insertOne(json, (err, { result }) => {
                    if (result.ok === 1) {
                        resolve({ status: 'success' });
                    }
                    else {
                        reject(err);
                    }
                });
            });
        });
    }
    delete(collectionName, json) {
        return new Promise((resolve, reject) => {
            this.connect().then((db) => {
                db.collection(collectionName).deleteOne(json, (err, { result }) => {
                    if (result.ok === 1) {
                        resolve({ status: 'success' });
                    }
                    else {
                        reject(err);
                    }
                });
            });
        });
    }
    find(collectionName, json = {}) {
        return new Promise((resolve, reject) => {
            this.connect().then((db) => {
                const res = db.collection(collectionName).find(json);
                res.toArray((err, docs) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    else {
                        resolve(docs);
                    }
                });
            });
        });
    }
    updateOne(collectionName, json, newJson) {
        return new Promise((resolve, reject) => {
            this.connect().then((db) => {
                db.collection(collectionName)
                    .updateOne(json, { $set: newJson })
                    .then(({ result }) => {
                    if (result.ok === 1) {
                        resolve({ status: 'success' });
                    }
                    else {
                        reject(result);
                    }
                });
            });
        });
    }
    insert(collectionName, json) {
        return new Promise((resolve, reject) => {
            this.connect().then((db) => {
                db.collection(collectionName)
                    .insertOne(json)
                    .then(({ result }) => {
                    if (result.ok === 1) {
                        resolve({ status: 'success' });
                    }
                    else {
                        reject(result);
                    }
                });
            });
        });
    }
    insertMany(collectionName, json) {
        return new Promise((resolve, reject) => {
            this.connect().then((db) => {
                db.collection(collectionName)
                    .insertMany(json)
                    .then(({ result }) => {
                    if (result.ok === 1) {
                        resolve({ status: 'success' });
                    }
                    else {
                        reject(result);
                    }
                });
            });
        });
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Db.getInstance());


/***/ }),

/***/ "./src/redis/db.ts":
/*!*************************!*\
  !*** ./src/redis/db.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redis */ "redis");
/* harmony import */ var redis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redis__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @config/index */ "./config/index.ts");


class Redis {
    constructor() {
        this.RedisClient = null;
    }
    static getInstance() {
        if (!Redis['instance']) {
            Redis['instance'] = new Redis();
        }
        return Redis['instance'];
    }
    connect() {
        return new Promise((resolve, reject) => {
            try {
                if (!this.RedisClient) {
                    this.RedisClient = redis__WEBPACK_IMPORTED_MODULE_0___default.a.createClient(_config_index__WEBPACK_IMPORTED_MODULE_1__["default"].redis.port, _config_index__WEBPACK_IMPORTED_MODULE_1__["default"].redis.host);
                    resolve(this.RedisClient);
                }
                else {
                    resolve(this.RedisClient);
                }
                console.log('redis连接成功！！！');
            }
            catch (_a) {
                console.log('redis连接失败！！！');
                reject(new Error('err'));
            }
        });
    }
    set(key, value, timeout) {
        return new Promise((resolve, reject) => {
            this.connect().then((client) => {
                try {
                    if (timeout) {
                        client.set(key, value, 'EX', timeout);
                    }
                    else {
                        client.set(key, value);
                    }
                    resolve('success');
                }
                catch (_a) {
                    resolve('err');
                }
            });
        });
    }
    get(key) {
        return new Promise((resolve, reject) => {
            this.connect().then((client) => {
                try {
                    client.get(key, (err, value) => {
                        if (err) {
                            reject(err);
                        }
                        else {
                            resolve(value);
                        }
                    });
                }
                catch (_a) {
                    resolve('err');
                }
            });
        });
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Redis.getInstance());


/***/ }),

/***/ "./src/router/customApi/cars.ts":
/*!**************************************!*\
  !*** ./src/router/customApi/cars.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa-router */ "koa-router");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_commons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils/commons */ "./src/utils/commons.ts");
/* harmony import */ var _service_api_carsInfoApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @service/api/carsInfoApi */ "./src/service/api/carsInfoApi.ts");
/* harmony import */ var _utils_synchronization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @utils/synchronization */ "./src/utils/synchronization.ts");
/* harmony import */ var _service_api_usersApi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @service/api/usersApi */ "./src/service/api/usersApi.ts");
/* harmony import */ var _mongodb_db__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mongodb/db */ "./src/mongodb/db.ts");
/* harmony import */ var _constant_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @constant/index */ "./src/constant/index.ts");








const CarRouter = new koa_router__WEBPACK_IMPORTED_MODULE_1___default.a();
CarRouter.post('/around', (ctx, next) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const data = ctx.request.body;
    if (!data.lat || !data.lon || !data.radius) {
        ctx.body = { message: '参数有误' };
        ctx.status = 400;
    }
    else {
        if (!!data.token) {
            const ddToken = yield Object(_utils_commons__WEBPACK_IMPORTED_MODULE_2__["getDdTokenByToken"])(data.token);
            const phone = yield Object(_utils_commons__WEBPACK_IMPORTED_MODULE_2__["getPhoneByToken"])(data.token);
            const res = yield Object(_service_api_carsInfoApi__WEBPACK_IMPORTED_MODULE_3__["getAround"])(Object.assign(Object.assign({}, data), { token: ddToken }));
            if (phone === '13828497237' && res.status === 2) {
                const res1 = yield Object(_service_api_usersApi__WEBPACK_IMPORTED_MODULE_5__["loginFromGongZongHao"])({
                    openId: 'ovX1dxOp_q8j99agvfJesfKuKqNA'
                });
                yield _mongodb_db__WEBPACK_IMPORTED_MODULE_6__["default"].updateOne(_constant_index__WEBPACK_IMPORTED_MODULE_7__["CollectionName"].ddTokenPhoneMap, { phone }, { token: res1.data.token });
            }
            if (res.status === 2) {
                const phone = yield Object(_utils_commons__WEBPACK_IMPORTED_MODULE_2__["getPhoneByToken"])(data.token);
                yield Object(_utils_synchronization__WEBPACK_IMPORTED_MODULE_4__["refreshDdToken"])(phone);
                const ddToken = yield Object(_utils_commons__WEBPACK_IMPORTED_MODULE_2__["getDdTokenByToken"])(data.token);
                const res = yield Object(_service_api_carsInfoApi__WEBPACK_IMPORTED_MODULE_3__["getAround"])(Object.assign(Object.assign({}, data), { token: ddToken }));
                ctx.body = Object.assign({}, res);
            }
            else {
                ctx.body = Object.assign({}, res);
            }
        }
        else {
            const res = yield Object(_service_api_carsInfoApi__WEBPACK_IMPORTED_MODULE_3__["getAround"])(Object.assign(Object.assign({}, data), { token: 123456 }));
            ctx.body = Object.assign({}, res);
        }
    }
    yield next();
}));
CarRouter.post('/getHistoryReturnPosition', (ctx, next) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const data = ctx.request.body;
    const ddToken = yield Object(_utils_commons__WEBPACK_IMPORTED_MODULE_2__["getDdTokenByToken"])(data.token);
    const res = yield Object(_service_api_carsInfoApi__WEBPACK_IMPORTED_MODULE_3__["getHistoryReturnPosition"])({ token: ddToken });
    ctx.body = Object.assign({}, res);
    yield next();
}));
CarRouter.post('/getLimit', (ctx, next) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const data = ctx.request.body;
    if (!data.type || !data.stationId || !data.oppositeStationId) {
        ctx.body = { message: '参数有误' };
        ctx.status = 400;
    }
    const ddToken = yield Object(_utils_commons__WEBPACK_IMPORTED_MODULE_2__["getDdTokenByToken"])(data.token);
    const res = yield Object(_service_api_carsInfoApi__WEBPACK_IMPORTED_MODULE_3__["getLimit"])(Object.assign(Object.assign({}, data), { token: ddToken }));
    ctx.body = Object.assign({}, res);
    yield next();
}));
CarRouter.post('/getStationCar', (ctx, next) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const data = ctx.request.body;
    if (!data.stationId || !data.seat) {
        ctx.body = { message: '参数有误' };
        ctx.status = 400;
    }
    const ddToken = yield Object(_utils_commons__WEBPACK_IMPORTED_MODULE_2__["getDdTokenByToken"])(data.token);
    const res = yield Object(_service_api_carsInfoApi__WEBPACK_IMPORTED_MODULE_3__["getStationCar"])(Object.assign(Object.assign({}, data), { token: ddToken }));
    ctx.body = Object.assign({}, res);
    yield next();
}));
/* harmony default export */ __webpack_exports__["default"] = (CarRouter);


/***/ }),

/***/ "./src/router/customApi/history.ts":
/*!*****************************************!*\
  !*** ./src/router/customApi/history.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-router */ "koa-router");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_0__);

const HistoryRouter = new koa_router__WEBPACK_IMPORTED_MODULE_0___default.a();
/* harmony default export */ __webpack_exports__["default"] = (HistoryRouter);


/***/ }),

/***/ "./src/router/customApi/usersAccount.ts":
/*!**********************************************!*\
  !*** ./src/router/customApi/usersAccount.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa-router */ "koa-router");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! md5 */ "md5");
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _dao_userDao__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @dao/userDao */ "./src/dao/userDao.ts");
/* harmony import */ var _redis_db__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @redis/db */ "./src/redis/db.ts");
/* harmony import */ var _mongodb_db__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mongodb/db */ "./src/mongodb/db.ts");
/* harmony import */ var _utils_commons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @utils/commons */ "./src/utils/commons.ts");
/* harmony import */ var _utils_synchronization__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @utils/synchronization */ "./src/utils/synchronization.ts");
/* harmony import */ var _constant_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @constant/index */ "./src/constant/index.ts");
/* harmony import */ var _service_api_usersApi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @service/api/usersApi */ "./src/service/api/usersApi.ts");
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @config/index */ "./config/index.ts");













const UsersAccountRouter = new koa_router__WEBPACK_IMPORTED_MODULE_1___default.a();
const UserDao = new _dao_userDao__WEBPACK_IMPORTED_MODULE_5__["default"]();
UsersAccountRouter.post('/', (ctx, next) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const data = ctx.request.body;
    if (!data.name || !data.password || !data.phone) {
        ctx.body = { message: '参数有误' };
        ctx.status = 400;
    }
    else {
        const isExisted = !!(yield UserDao.find({ phone: data.phone })).length;
        if (isExisted) {
            ctx.body = { status: 0, message: '该手机号码已经存在，请直接登录' };
        }
        else {
            const res = yield UserDao.add(Object.assign(Object.assign({}, data), { password: md5__WEBPACK_IMPORTED_MODULE_2___default()(data.password) }));
            ctx.body = { status: 1, data: res };
        }
    }
    yield next();
}));
UsersAccountRouter.post('/delete', (ctx, next) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    UserDao.delete({
        name: '123',
        password: '123'
    });
    ctx.body = 'ok';
    yield next();
}));
UsersAccountRouter.get('/find', (ctx, next) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const data = ctx.request.body;
    if (!data.phone) {
        ctx.body = { err: '参数有误' };
        ctx.status = 400;
    }
    else {
        const res = yield UserDao.find(Object.assign({}, data));
        ctx.body = res;
    }
    yield next();
}));
UsersAccountRouter.post('/login', (ctx, next) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const data = ctx.request.body;
    if (!data.phone || !data.password) {
        ctx.body = { status: 0, message: '参数有误' };
        ctx.status = 400;
    }
    else {
        const record = yield UserDao.find(Object.assign(Object.assign({}, data), { password: md5__WEBPACK_IMPORTED_MODULE_2___default()(data.password) }));
        if (!!record.length) {
            const token = Object(_utils_commons__WEBPACK_IMPORTED_MODULE_8__["createToken"])({
                phone: data.phone,
                password: md5__WEBPACK_IMPORTED_MODULE_2___default()(data.password)
            });
            const dd = yield _mongodb_db__WEBPACK_IMPORTED_MODULE_7__["default"].find(_constant_index__WEBPACK_IMPORTED_MODULE_10__["CollectionName"].ddTokenPhoneMap, { phone: data.phone });
            Object(_utils_synchronization__WEBPACK_IMPORTED_MODULE_9__["default"])(dd[0].token, data.phone);
            ctx.body = { status: 1, data: { token } };
        }
        else {
            ctx.body = { status: 0, message: '账号或密码错误' };
        }
    }
    yield next();
}));
UsersAccountRouter.post('/qrcode/login', (ctx, next) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const data = ctx.request.body;
    const io = global['io'];
    if (!data.uuid || !data.phone) {
        ctx.body = { status: 0, message: '参数有误' };
        ctx.status = 400;
    }
    else {
        const socketId = yield _redis_db__WEBPACK_IMPORTED_MODULE_6__["default"].get(data.uuid);
        if (Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isNull"])(socketId)) {
            ctx.body = {
                status: 0,
                data: {
                    message: '二维码已经过期，请重新获取'
                }
            };
        }
        else {
            const record = yield _mongodb_db__WEBPACK_IMPORTED_MODULE_7__["default"].find(_constant_index__WEBPACK_IMPORTED_MODULE_10__["CollectionName"].users, {
                phone: data.phone
            });
            if (!!record) {
                const token = Object(_utils_commons__WEBPACK_IMPORTED_MODULE_8__["createToken"])({
                    phone: data.phone,
                    password: record[0].password
                });
                io.sockets.to(socketId).emit('qrcode-userMsg', { token });
            }
            else {
                io.sockets.to(socketId).emit('qrcode-userMsg', { phone: data.phone });
            }
            ctx.body = {
                status: 1,
                data: {
                    message: '扫码成功'
                }
            };
        }
    }
}));
UsersAccountRouter.post('/ddToken/:type', (ctx, next) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const type = ctx.params.type;
    const data = ctx.request.body;
    if (type === 'add') {
        yield _mongodb_db__WEBPACK_IMPORTED_MODULE_7__["default"].insert(_constant_index__WEBPACK_IMPORTED_MODULE_10__["CollectionName"].ddTokenPhoneMap, Object.assign({}, data));
    }
    else {
        const res = yield _mongodb_db__WEBPACK_IMPORTED_MODULE_7__["default"].find(_constant_index__WEBPACK_IMPORTED_MODULE_10__["CollectionName"].ddTokenPhoneMap, { phone: data.phone });
        if (!res) {
            yield _mongodb_db__WEBPACK_IMPORTED_MODULE_7__["default"].insert(_constant_index__WEBPACK_IMPORTED_MODULE_10__["CollectionName"].ddTokenPhoneMap, Object.assign({}, data));
        }
        else {
            yield _mongodb_db__WEBPACK_IMPORTED_MODULE_7__["default"].updateOne(_constant_index__WEBPACK_IMPORTED_MODULE_10__["CollectionName"].ddTokenPhoneMap, { phone: data.phone }, { token: data.token });
        }
    }
    ctx.body = 'success';
    yield next();
}));
UsersAccountRouter.get('/ddToken', (ctx, next) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const data = ctx.request.query;
    const phone = yield Object(_utils_commons__WEBPACK_IMPORTED_MODULE_8__["getPhoneByToken"])(data.token);
    const res = yield _mongodb_db__WEBPACK_IMPORTED_MODULE_7__["default"].find(_constant_index__WEBPACK_IMPORTED_MODULE_10__["CollectionName"].ddTokenPhoneMap, { phone });
    ctx.body = {
        status: 1,
        data: { token: res[0].token }
    };
}));
UsersAccountRouter.post('/appletLogin', (ctx, next) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const data = ctx.request.body;
    const deviceid = uuid__WEBPACK_IMPORTED_MODULE_4___default()();
    const params = Object.assign(Object.assign(Object.assign({}, data), _config_index__WEBPACK_IMPORTED_MODULE_12__["default"].loginArgs), { deviceid });
    const res = yield Object(_service_api_usersApi__WEBPACK_IMPORTED_MODULE_11__["loginOnApp"])(params);
    let token;
    try {
        if (res.status === 1) {
            const record = yield _mongodb_db__WEBPACK_IMPORTED_MODULE_7__["default"].find(_constant_index__WEBPACK_IMPORTED_MODULE_10__["CollectionName"].ddTokenPhoneMap, { phone: data.phone });
            if (!record.length) {
                yield _mongodb_db__WEBPACK_IMPORTED_MODULE_7__["default"].insert(_constant_index__WEBPACK_IMPORTED_MODULE_10__["CollectionName"].ddTokenPhoneMap, { phone: data.phone, token: res.data.token });
            }
            else {
                yield _mongodb_db__WEBPACK_IMPORTED_MODULE_7__["default"].updateOne(_constant_index__WEBPACK_IMPORTED_MODULE_10__["CollectionName"].ddTokenPhoneMap, { phone: data.phone }, { token: res.data.token, deviceid });
            }
            const userRecord = yield _mongodb_db__WEBPACK_IMPORTED_MODULE_7__["default"].find(_constant_index__WEBPACK_IMPORTED_MODULE_10__["CollectionName"].users, { phone: data.phone });
            if (!userRecord.length) {
                yield _mongodb_db__WEBPACK_IMPORTED_MODULE_7__["default"].insert(_constant_index__WEBPACK_IMPORTED_MODULE_10__["CollectionName"].users, {
                    name: 'user',
                    password: md5__WEBPACK_IMPORTED_MODULE_2___default()(data.phone),
                    phone: data.phone
                });
            }
            token = Object(_utils_commons__WEBPACK_IMPORTED_MODULE_8__["createToken"])({
                phone: data.phone,
                password: md5__WEBPACK_IMPORTED_MODULE_2___default()(data.phone)
            });
            yield Object(_utils_synchronization__WEBPACK_IMPORTED_MODULE_9__["default"])(res.data.token, data.phone);
        }
        ctx.body = {
            data: { token },
            status: 1
        };
    }
    catch (_a) {
        ctx.body = {
            data: Object.assign({}, res),
            status: 2
        };
    }
}));
UsersAccountRouter.post('/fast-login', (ctx, next) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const data = ctx.request.body;
    if (!data.phone) {
        ctx.body = { message: '参数有误' };
        ctx.status = 400;
    }
    else {
        const record = yield _mongodb_db__WEBPACK_IMPORTED_MODULE_7__["default"].find(_constant_index__WEBPACK_IMPORTED_MODULE_10__["CollectionName"].users, { phone: data.phone });
        if (!!record.length) {
            const token = Object(_utils_commons__WEBPACK_IMPORTED_MODULE_8__["createToken"])({
                phone: record[0].phone,
                password: record[0].password
            });
            ctx.body = {
                data: { token },
                status: 1
            };
        }
        else {
            ctx.body = {
                data: { token: '' },
                status: 0
            };
        }
    }
}));
UsersAccountRouter.post('/login-from-gongZongHao', (ctx, next) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const data = ctx.request.body;
    const res = yield Object(_service_api_usersApi__WEBPACK_IMPORTED_MODULE_11__["loginFromGongZongHao"])(data);
    if (res.status === 1) {
        ctx.body = {
            data: { token: res.data.token },
            status: 0
        };
    }
    else {
        ctx.body = {
            data: { token: '' },
            status: 0
        };
    }
}));
/* harmony default export */ __webpack_exports__["default"] = (UsersAccountRouter);


/***/ }),

/***/ "./src/router/customApi/usersInfo.ts":
/*!*******************************************!*\
  !*** ./src/router/customApi/usersInfo.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa-router */ "koa-router");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mongodb_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mongodb/db */ "./src/mongodb/db.ts");
/* harmony import */ var _constant_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @constant/index */ "./src/constant/index.ts");
/* harmony import */ var _utils_commons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @utils/commons */ "./src/utils/commons.ts");
/* harmony import */ var _service_api_usersApi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @service/api/usersApi */ "./src/service/api/usersApi.ts");






const UsersInfoRouter = new koa_router__WEBPACK_IMPORTED_MODULE_1___default.a();
UsersInfoRouter.get('/', (ctx, next) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const data = ctx.request.query;
    const phone = yield Object(_utils_commons__WEBPACK_IMPORTED_MODULE_4__["getPhoneByToken"])(data.token);
    const ddToken = yield Object(_utils_commons__WEBPACK_IMPORTED_MODULE_4__["getDdTokenByToken"])(data.token);
    const res = yield _mongodb_db__WEBPACK_IMPORTED_MODULE_2__["default"].find(_constant_index__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].userInfo, { phone });
    let info;
    try {
        if (!res.length) {
            info = yield Object(_service_api_usersApi__WEBPACK_IMPORTED_MODULE_5__["getCustomerInfo"])({ token: ddToken });
            yield _mongodb_db__WEBPACK_IMPORTED_MODULE_2__["default"].insert(_constant_index__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].userInfo, Object.assign({}, info.data));
        }
        ctx.body = { status: 1, data: res[0] || info.data };
    }
    catch (err) {
        ctx.body = { status: 0, err };
    }
    yield next();
}));
UsersInfoRouter.get('/summaryCarNum', (ctx, next) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const data = ctx.request.query;
    let obj = {};
    function summaryCarNum(item) {
        if (!!obj[item.carNum]) {
            obj[item.carNum].push(item);
        }
        else {
            obj[item.carNum] = [item];
        }
    }
    const phone = yield Object(_utils_commons__WEBPACK_IMPORTED_MODULE_4__["getPhoneByToken"])(data.token);
    let record;
    record = yield _mongodb_db__WEBPACK_IMPORTED_MODULE_2__["default"].find(_constant_index__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].driveCarNums, { phone });
    if (!record.length) {
        const list = yield _mongodb_db__WEBPACK_IMPORTED_MODULE_2__["default"].find(_constant_index__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].journey, { phone });
        list[0].data.forEach(v => {
            summaryCarNum(v);
        });
        _mongodb_db__WEBPACK_IMPORTED_MODULE_2__["default"].insert(_constant_index__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].driveCarNums, { data: obj, phone });
    }
    else {
        obj = record;
    }
    try {
        ctx.body = { status: 1, data: record[0].data };
    }
    catch (err) {
        ctx.body = { status: 0, err };
    }
    try {
        ctx.body = { status: 1, data: obj[0].data };
    }
    catch (err) {
        ctx.body = { status: 0, err };
    }
    yield next();
}));
UsersInfoRouter.get('/cost', (ctx, next) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const data = ctx.request.query;
    const phone = yield Object(_utils_commons__WEBPACK_IMPORTED_MODULE_4__["getPhoneByToken"])(data.token);
    const record = yield _mongodb_db__WEBPACK_IMPORTED_MODULE_2__["default"].find(_constant_index__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].cost, { phone });
    function summaryMonth(res) {
        const data = [];
        res.forEach(v => {
            const date = v.takeTime.substr(0, 7);
            const currentMonthIdx = data.findIndex(v => Object.keys(v).includes(date));
            if (currentMonthIdx > -1) {
                data[currentMonthIdx][date] += v.totalPayments;
            }
            else {
                const obj = {};
                obj[date] = 0;
                data.push(obj);
            }
        });
        return data;
    }
    if (!record.length) {
        const ddToken = yield Object(_utils_commons__WEBPACK_IMPORTED_MODULE_4__["getDdTokenByToken"])(data.token);
        const res = yield Object(_service_api_usersApi__WEBPACK_IMPORTED_MODULE_5__["getHistoryOrderCost"])({
            token: ddToken,
            lang: 'cn'
        });
        if (res.status === 1) {
            yield _mongodb_db__WEBPACK_IMPORTED_MODULE_2__["default"].insert(_constant_index__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].cost, { phone, data: res.data });
            ctx.body = { status: 1, data: summaryMonth(res.data) };
        }
        else {
            ctx.body = { status: 2, message: '没权限' };
        }
    }
    else {
        ctx.body = { status: 1, data: summaryMonth(record[0].data) };
    }
    yield next();
}));
UsersInfoRouter.get('/getAccount', (ctx, next) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const data = ctx.request.query;
    const phone = yield Object(_utils_commons__WEBPACK_IMPORTED_MODULE_4__["getPhoneByToken"])(data.token);
    try {
        const record = yield _mongodb_db__WEBPACK_IMPORTED_MODULE_2__["default"].find(_constant_index__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].account, { phone });
        ctx.body = { status: 1, data: record[0].data };
    }
    catch (_a) {
        ctx.body = { status: 0, message: '获取失败' };
    }
}));
UsersInfoRouter.post('/edit-avatar', (ctx, next) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const data = ctx.request.body;
    if (!data.urlPath) {
        ctx.body = { message: '参数有误' };
        ctx.status = 400;
    }
    const phone = yield Object(_utils_commons__WEBPACK_IMPORTED_MODULE_4__["getPhoneByToken"])(data.token);
    try {
        yield _mongodb_db__WEBPACK_IMPORTED_MODULE_2__["default"].updateOne(_constant_index__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].userInfo, { phone }, { img: data.urlPath });
        ctx.body = { status: 1, message: '修改成功' };
    }
    catch (_b) {
        ctx.body = { status: 0, message: '修改失败' };
    }
}));
UsersInfoRouter.post('/edit-nickname', (ctx, next) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const data = ctx.request.body;
    if (!data.nickname) {
        ctx.body = { message: '参数有误' };
        ctx.status = 400;
    }
    const phone = yield Object(_utils_commons__WEBPACK_IMPORTED_MODULE_4__["getPhoneByToken"])(data.token);
    try {
        yield _mongodb_db__WEBPACK_IMPORTED_MODULE_2__["default"].updateOne(_constant_index__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].userInfo, { phone }, { niceName: data.nickname });
        ctx.body = { status: 1, message: '修改成功' };
    }
    catch (_c) {
        ctx.body = { status: 0, message: '修改失败' };
    }
}));
UsersInfoRouter.get('/journey', (ctx, next) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const data = ctx.request.query;
    try {
        const phone = yield Object(_utils_commons__WEBPACK_IMPORTED_MODULE_4__["getPhoneByToken"])(data.token);
        let res = yield _mongodb_db__WEBPACK_IMPORTED_MODULE_2__["default"].find(_constant_index__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].journey, { phone });
        if (!res.length) {
            const ddToken = yield Object(_utils_commons__WEBPACK_IMPORTED_MODULE_4__["getDdTokenByToken"])(data.token);
            const list = yield Object(_service_api_usersApi__WEBPACK_IMPORTED_MODULE_5__["getHistoryOrder"])({
                pageNo: 1,
                pageSize: 100000,
                token: ddToken
            });
            _mongodb_db__WEBPACK_IMPORTED_MODULE_2__["default"].insertMany(_constant_index__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].journey, list.data);
            ctx.body = { status: 1, data: list.data[0].data };
        }
        else {
            ctx.body = { status: 1, data: res[0].data };
        }
    }
    catch (_d) {
        ctx.body = { status: 0, message: '获取失败' };
    }
    yield next();
}));
/* harmony default export */ __webpack_exports__["default"] = (UsersInfoRouter);


/***/ }),

/***/ "./src/router/dingdongApi/carsInfo.ts":
/*!********************************************!*\
  !*** ./src/router/dingdongApi/carsInfo.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa-router */ "koa-router");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _service_api_carsInfoApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @service/api/carsInfoApi */ "./src/service/api/carsInfoApi.ts");



const CarInfoRouter = new koa_router__WEBPACK_IMPORTED_MODULE_1___default.a();
CarInfoRouter.post('/getAround', (ctx, next) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const data = ctx.request.body;
    const params = Object.assign(Object.assign({}, data), { lang: 'cn' });
    const res = yield Object(_service_api_carsInfoApi__WEBPACK_IMPORTED_MODULE_2__["getAround"])(params);
    ctx.body = Object.assign({}, res);
}));
CarInfoRouter.post('/getStationCar', (ctx, next) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const data = ctx.request.body;
    const params = Object.assign(Object.assign({}, data), { lang: 'cn' });
    const res = yield Object(_service_api_carsInfoApi__WEBPACK_IMPORTED_MODULE_2__["getStationCar"])(params);
    ctx.body = Object.assign({}, res);
}));
CarInfoRouter.post('/getHistoryReturnPosition', (ctx, next) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const data = ctx.request.body;
    const params = Object.assign(Object.assign({}, data), { lang: 'cn' });
    const res = yield Object(_service_api_carsInfoApi__WEBPACK_IMPORTED_MODULE_2__["getHistoryReturnPosition"])(params);
    ctx.body = Object.assign({}, res);
}));
CarInfoRouter.post('/getLimit', (ctx, next) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const data = ctx.request.body;
    const params = Object.assign(Object.assign({}, data), { lang: 'cn' });
    const res = yield Object(_service_api_carsInfoApi__WEBPACK_IMPORTED_MODULE_2__["getLimit"])(params);
    ctx.body = Object.assign({}, res);
}));
/* harmony default export */ __webpack_exports__["default"] = (CarInfoRouter);


/***/ }),

/***/ "./src/router/dingdongApi/commandControl.ts":
/*!**************************************************!*\
  !*** ./src/router/dingdongApi/commandControl.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa-router */ "koa-router");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _service_api_controlCar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @service/api/controlCar */ "./src/service/api/controlCar.ts");



const CommandControlRouter = new koa_router__WEBPACK_IMPORTED_MODULE_1___default.a();
CommandControlRouter.post('/controlCar', (ctx, next) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const data = ctx.request.body;
    const params = Object.assign(Object.assign({}, data), { lang: 'cn' });
    const res = yield Object(_service_api_controlCar__WEBPACK_IMPORTED_MODULE_2__["sendControlCode"])(params);
    ctx.body = Object.assign({}, res);
}));
CommandControlRouter.post('/returnCar', (ctx, next) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const data = ctx.request.body;
    const params = Object.assign(Object.assign({}, data), { lang: 'cn' });
    const res = yield Object(_service_api_controlCar__WEBPACK_IMPORTED_MODULE_2__["returnCar"])(params);
    ctx.body = Object.assign({}, res);
}));
CommandControlRouter.post('/changeReturnStation', (ctx, next) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const data = ctx.request.body;
    const params = Object.assign(Object.assign({}, data), { lang: 'cn' });
    const res = yield Object(_service_api_controlCar__WEBPACK_IMPORTED_MODULE_2__["changeReturnStation"])(params);
    ctx.body = Object.assign({}, res);
}));
/* harmony default export */ __webpack_exports__["default"] = (CommandControlRouter);


/***/ }),

/***/ "./src/router/dingdongApi/orderInformation.ts":
/*!****************************************************!*\
  !*** ./src/router/dingdongApi/orderInformation.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa-router */ "koa-router");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _service_api_afterBookCar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @service/api/afterBookCar */ "./src/service/api/afterBookCar.ts");



const OrderInfoRouter = new koa_router__WEBPACK_IMPORTED_MODULE_1___default.a();
OrderInfoRouter.post('/getCarInfo', (ctx, next) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const data = ctx.request.body;
    const params = Object.assign(Object.assign({}, data), { lang: 'cn' });
    const res = yield Object(_service_api_afterBookCar__WEBPACK_IMPORTED_MODULE_2__["getInfo"])(params);
    ctx.body = Object.assign({}, res);
}));
/* harmony default export */ __webpack_exports__["default"] = (OrderInfoRouter);


/***/ }),

/***/ "./src/router/dingdongApi/users.ts":
/*!*****************************************!*\
  !*** ./src/router/dingdongApi/users.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! koa-router */ "koa-router");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid/v1 */ "uuid/v1");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_commons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @utils/commons */ "./src/utils/commons.ts");
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @config/index */ "./config/index.ts");
/* harmony import */ var _mongodb_db__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mongodb/db */ "./src/mongodb/db.ts");
/* harmony import */ var _constant_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @constant/index */ "./src/constant/index.ts");
/* harmony import */ var _service_api_usersApi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @service/api/usersApi */ "./src/service/api/usersApi.ts");










const UserInfoRouter = new koa_router__WEBPACK_IMPORTED_MODULE_2___default.a();
UserInfoRouter.post('/login', (ctx, next) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const data = ctx.request.body;
    const params = Object.assign(Object.assign({}, data), { lang: 'cn' });
    const res = yield Object(_service_api_usersApi__WEBPACK_IMPORTED_MODULE_8__["loginOnApp"])(params);
    let dbStatus;
    if (res.status === 1) {
        const record = yield _mongodb_db__WEBPACK_IMPORTED_MODULE_6__["default"].find(_constant_index__WEBPACK_IMPORTED_MODULE_7__["CollectionName"].ddTokenPhoneMap, { phone: data.phone });
        if (!record.length) {
            dbStatus = yield _mongodb_db__WEBPACK_IMPORTED_MODULE_6__["default"].insert(_constant_index__WEBPACK_IMPORTED_MODULE_7__["CollectionName"].ddTokenPhoneMap, Object.assign({}, data));
        }
        else {
            dbStatus = yield _mongodb_db__WEBPACK_IMPORTED_MODULE_6__["default"].updateOne(_constant_index__WEBPACK_IMPORTED_MODULE_7__["CollectionName"].ddTokenPhoneMap, { phone: data.phone }, { token: data.token });
        }
    }
    if (dbStatus && dbStatus['status'] === 'success') {
        ctx.body = {
            data: Object.assign({}, res),
            status: 1
        };
    }
    else {
        ctx.body = {
            data: Object.assign({}, res),
            status: 2
        };
    }
}));
UserInfoRouter.post('/getVerify', (ctx, next) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const data = ctx.request.body;
    const params = Object.assign(Object.assign({}, data), { lang: 'cn' });
    const res = yield Object(_service_api_usersApi__WEBPACK_IMPORTED_MODULE_8__["getVerify"])(params);
    ctx.body = Object.assign({}, res);
}));
UserInfoRouter.post('/getImageVerifyCode', (ctx, next) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const data = {
        verifyId: uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()(),
        path: './',
        name: 'verify.png'
    };
    yield Object(_service_api_usersApi__WEBPACK_IMPORTED_MODULE_8__["getImageVerifyCode"])(data);
    yield Object(_utils_commons__WEBPACK_IMPORTED_MODULE_4__["delay"])(200);
    const res = yield Object(_utils_commons__WEBPACK_IMPORTED_MODULE_4__["qiniuUpload"])({
        filePath: './verify.png',
        filename: 'verify.png',
        prefix: `${uuid_v1__WEBPACK_IMPORTED_MODULE_3___default()()}/${new Date().getTime()}/xy`
    });
    if (res.type === 'err') {
        ctx.body = {
            status: 2
        };
    }
    else {
        ctx.body = {
            status: 1,
            data: {
                url: _config_index__WEBPACK_IMPORTED_MODULE_5__["default"].qiniu.sourceUrl + res.key,
                verifyId: data.verifyId
            }
        };
    }
}));
UserInfoRouter.post('/getCustomerInfo', (ctx, next) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const data = ctx.request.body;
    const params = Object.assign(Object.assign({}, data), { lang: 'cn' });
    const res = yield Object(_service_api_usersApi__WEBPACK_IMPORTED_MODULE_8__["getCustomerInfo"])(params);
    try {
        const json = yield _mongodb_db__WEBPACK_IMPORTED_MODULE_6__["default"].find(_constant_index__WEBPACK_IMPORTED_MODULE_7__["CollectionName"].userInfo, { id: res.data.id });
        if (!json.length) {
            _mongodb_db__WEBPACK_IMPORTED_MODULE_6__["default"].insert(_constant_index__WEBPACK_IMPORTED_MODULE_7__["CollectionName"].userInfo, res.data);
        }
    }
    catch (_a) { }
    ctx.body = Object.assign({}, res);
}));
UserInfoRouter.post('/getAccount', (ctx, next) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const data = ctx.request.body;
    const params = Object.assign(Object.assign({}, data), { lang: 'cn' });
    const res = yield Object(_service_api_usersApi__WEBPACK_IMPORTED_MODULE_8__["getAccount"])(params);
    ctx.body = Object.assign({}, res);
}));
UserInfoRouter.post('/getHistoryOrder', (ctx, next) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const data = ctx.request.body;
    const params = Object.assign(Object.assign({}, data), { lang: 'cn' });
    const res = yield Object(_service_api_usersApi__WEBPACK_IMPORTED_MODULE_8__["getHistoryOrder"])(params);
    ctx.body = Object.assign({}, res);
}));
UserInfoRouter.get('/getHistoryOrderCost', (ctx, next) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const data = ctx.request.body;
    const params = Object.assign(Object.assign({}, data), { lang: 'cn' });
    const res = yield Object(_service_api_usersApi__WEBPACK_IMPORTED_MODULE_8__["getHistoryOrderCost"])(params);
    const parseData = [];
    res.data.forEach(v => {
        const key = moment__WEBPACK_IMPORTED_MODULE_1___default()(v.takeTime).format('YY-MM');
        if (!parseData.length || parseData[parseData.length - 1]['date'] !== key) {
            parseData.push({
                date: key,
                cost: v.actualPayments,
                reallyCost: v.actualPayments * 0.6
            });
        }
        else {
            const item = parseData[parseData.length - 1];
            item.cost = v.actualPayments + item.cost;
            item.reallyCost = v.actualPayments * 0.6 + item.reallyCost;
        }
    });
    ctx.body = Object.assign(Object.assign({}, res), { data: parseData });
}));
/* harmony default export */ __webpack_exports__["default"] = (UserInfoRouter);


/***/ }),

/***/ "./src/service/api/afterBookCar.ts":
/*!*****************************************!*\
  !*** ./src/service/api/afterBookCar.ts ***!
  \*****************************************/
/*! exports provided: getInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInfo", function() { return getInfo; });
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils/http */ "./src/utils/http.ts");

const getInfo = data => {
    return Object(_utils_http__WEBPACK_IMPORTED_MODULE_0__["post"])('order/getInfo.json', data);
};


/***/ }),

/***/ "./src/service/api/carsInfoApi.ts":
/*!****************************************!*\
  !*** ./src/service/api/carsInfoApi.ts ***!
  \****************************************/
/*! exports provided: getAround, getStationCar, getHistoryReturnPosition, getLimit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAround", function() { return getAround; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStationCar", function() { return getStationCar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHistoryReturnPosition", function() { return getHistoryReturnPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLimit", function() { return getLimit; });
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils/http */ "./src/utils/http.ts");

const getAround = data => {
    return Object(_utils_http__WEBPACK_IMPORTED_MODULE_0__["post"])('station/getAround.json', data);
};
const getStationCar = data => {
    return Object(_utils_http__WEBPACK_IMPORTED_MODULE_0__["post"])('v1/vehicle/queryStationVehicles.json', data);
};
const getHistoryReturnPosition = data => {
    return Object(_utils_http__WEBPACK_IMPORTED_MODULE_0__["post"])('order/getHistoryPark.json', data);
};
const getLimit = data => {
    return Object(_utils_http__WEBPACK_IMPORTED_MODULE_0__["post"])('station/v2/getLimit.json', data);
};


/***/ }),

/***/ "./src/service/api/controlCar.ts":
/*!***************************************!*\
  !*** ./src/service/api/controlCar.ts ***!
  \***************************************/
/*! exports provided: sendControlCode, returnCar, changeReturnStation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendControlCode", function() { return sendControlCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "returnCar", function() { return returnCar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeReturnStation", function() { return changeReturnStation; });
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils/http */ "./src/utils/http.ts");

const sendControlCode = data => {
    return Object(_utils_http__WEBPACK_IMPORTED_MODULE_0__["post"])('vehicle/v2/sendControlCode.json', data);
};
const returnCar = data => {
    return Object(_utils_http__WEBPACK_IMPORTED_MODULE_0__["post"])('order/checkReturnCar.do', data);
};
const changeReturnStation = data => {
    return Object(_utils_http__WEBPACK_IMPORTED_MODULE_0__["post"])('order/v1/changeReturnStation.json', data);
};


/***/ }),

/***/ "./src/service/api/usersApi.ts":
/*!*************************************!*\
  !*** ./src/service/api/usersApi.ts ***!
  \*************************************/
/*! exports provided: loginOnApp, getVerify, getImageVerifyCode, getCustomerInfo, getAccount, getHistoryOrder, getHistoryOrderCost, loginFromGongZongHao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginOnApp", function() { return loginOnApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVerify", function() { return getVerify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageVerifyCode", function() { return getImageVerifyCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCustomerInfo", function() { return getCustomerInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAccount", function() { return getAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHistoryOrder", function() { return getHistoryOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHistoryOrderCost", function() { return getHistoryOrderCost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginFromGongZongHao", function() { return loginFromGongZongHao; });
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils/http */ "./src/utils/http.ts");

const loginOnApp = data => {
    return Object(_utils_http__WEBPACK_IMPORTED_MODULE_0__["post"])('cust/login.json', data);
};
const getVerify = data => {
    return Object(_utils_http__WEBPACK_IMPORTED_MODULE_0__["post"])('verify/validateAndSendMsg.json', data);
};
const getImageVerifyCode = data => {
    return Object(_utils_http__WEBPACK_IMPORTED_MODULE_0__["download"])('verify/imageVerifyCode.json', data);
};
const getCustomerInfo = data => {
    return Object(_utils_http__WEBPACK_IMPORTED_MODULE_0__["post"])('center/customerInfo.json', data);
};
const getAccount = data => {
    return Object(_utils_http__WEBPACK_IMPORTED_MODULE_0__["post"])('cust/getAccount.json', data);
};
const getHistoryOrder = data => {
    return Object(_utils_http__WEBPACK_IMPORTED_MODULE_0__["post"])('order/queryOrders.json', data);
};
const getHistoryOrderCost = data => {
    return Object(_utils_http__WEBPACK_IMPORTED_MODULE_0__["post"])('invoice/validInvoiceOrder.json', data);
};
const loginFromGongZongHao = data => {
    return Object(_utils_http__WEBPACK_IMPORTED_MODULE_0__["post"])('cust/wxLogin.json', data);
};


/***/ }),

/***/ "./src/service/socket/handleReceiveMsg.ts":
/*!************************************************!*\
  !*** ./src/service/socket/handleReceiveMsg.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var qr_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qr-image */ "qr-image");
/* harmony import */ var qr_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qr_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redis_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @redis/db */ "./src/redis/db.ts");



function handleReceiveMsg(client) {
    client.on('get-qrcode', (data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const status = yield _redis_db__WEBPACK_IMPORTED_MODULE_2__["default"].set(data.uuid, client.id, 60);
        const svg_string = qr_image__WEBPACK_IMPORTED_MODULE_1___default.a.imageSync(data.uuid, { type: 'svg' });
        if (status === 'success') {
            client.emit('qrcode', {
                svg_string
            });
        }
        else {
            client.emit('qrcode', {
                message: '二维码生成失败'
            });
        }
    }));
    client.on('disconnect', () => {
        console.log(client.id + 'is disconnected !!!');
    });
}
/* harmony default export */ __webpack_exports__["default"] = (handleReceiveMsg);


/***/ }),

/***/ "./src/service/socket/index.ts":
/*!*************************************!*\
  !*** ./src/service/socket/index.ts ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io */ "socket.io");
/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _handleReceiveMsg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handleReceiveMsg */ "./src/service/socket/handleReceiveMsg.ts");


const io = socket_io__WEBPACK_IMPORTED_MODULE_0___default()();
io.on('connection', (client) => {
    console.log('connected !!!');
    Object(_handleReceiveMsg__WEBPACK_IMPORTED_MODULE_1__["default"])(client);
});
io.listen(2333);
global['io'] = io;


/***/ }),

/***/ "./src/utils/commons.ts":
/*!******************************!*\
  !*** ./src/utils/commons.ts ***!
  \******************************/
/*! exports provided: delay, qiniuConfig, qiniuUpload, createToken, printLog, getPhoneByToken, getDdTokenByToken, checkToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return delay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "qiniuConfig", function() { return qiniuConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "qiniuUpload", function() { return qiniuUpload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createToken", function() { return createToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printLog", function() { return printLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPhoneByToken", function() { return getPhoneByToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDdTokenByToken", function() { return getDdTokenByToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkToken", function() { return checkToken; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var qiniu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qiniu */ "qiniu");
/* harmony import */ var qiniu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qiniu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jwt_simple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-simple */ "jwt-simple");
/* harmony import */ var jwt_simple__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_simple__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var log4js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! log4js */ "log4js");
/* harmony import */ var log4js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(log4js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @config/index */ "./config/index.ts");
/* harmony import */ var _mongodb_db__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mongodb/db */ "./src/mongodb/db.ts");
/* harmony import */ var _constant_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @constant/index */ "./src/constant/index.ts");







const { AK, SK, bucket } = _config_index__WEBPACK_IMPORTED_MODULE_4__["default"].qiniu;
function delay(delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(true);
        }, delay || 100);
    });
}
function qiniuConfig() {
    const config = new qiniu__WEBPACK_IMPORTED_MODULE_1___default.a.conf.Config();
    config.zone = qiniu__WEBPACK_IMPORTED_MODULE_1___default.a.zone.Zone_z2;
    return config;
}
function qiniuUpload(args) {
    return new Promise((resolve, reject) => {
        const mac = new qiniu__WEBPACK_IMPORTED_MODULE_1___default.a.auth.digest.Mac(AK, SK);
        const options = {
            scope: `${bucket}`
        };
        const putPolicy = new qiniu__WEBPACK_IMPORTED_MODULE_1___default.a.rs.PutPolicy(options);
        const uploadToken = putPolicy.uploadToken(mac);
        const localFile = args.filePath;
        const config = qiniuConfig();
        const formUploader = new qiniu__WEBPACK_IMPORTED_MODULE_1___default.a.form_up.FormUploader(config);
        const putExtra = new qiniu__WEBPACK_IMPORTED_MODULE_1___default.a.form_up.PutExtra();
        formUploader.putFile(uploadToken, null, localFile, putExtra, (respErr, respBody, respInfo) => {
            if (respErr) {
                throw respErr;
            }
            if (respInfo.statusCode == 200) {
                resolve({
                    key: respBody.key,
                    type: 'success'
                });
            }
            else {
                reject({ type: 'err', msg: respBody });
            }
        });
    });
}
function createToken(data) {
    const token = jwt_simple__WEBPACK_IMPORTED_MODULE_2___default.a.encode({
        iss: Object.assign(Object.assign({}, data), { password: data.password })
    }, _config_index__WEBPACK_IMPORTED_MODULE_4__["default"].TOKEN_SECERT);
    return token;
}
function printLog(msg, level) {
    const log = log4js__WEBPACK_IMPORTED_MODULE_3___default.a.getLogger();
    log[level](msg);
}
function getPhoneByToken(token) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const decoded = jwt_simple__WEBPACK_IMPORTED_MODULE_2___default.a.decode(token, _config_index__WEBPACK_IMPORTED_MODULE_4__["default"].TOKEN_SECERT);
        return decoded.iss.phone;
    });
}
function getDdTokenByToken(token) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const decoded = jwt_simple__WEBPACK_IMPORTED_MODULE_2___default.a.decode(token, _config_index__WEBPACK_IMPORTED_MODULE_4__["default"].TOKEN_SECERT);
        const res = yield _mongodb_db__WEBPACK_IMPORTED_MODULE_5__["default"].find(_constant_index__WEBPACK_IMPORTED_MODULE_6__["CollectionName"].ddTokenPhoneMap, { phone: decoded.iss.phone });
        return res[0].token;
    });
}
function checkToken(token) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const decoded = jwt_simple__WEBPACK_IMPORTED_MODULE_2___default.a.decode(token, _config_index__WEBPACK_IMPORTED_MODULE_4__["default"].TOKEN_SECERT);
        const { phone, password } = decoded.iss;
        const record = yield _mongodb_db__WEBPACK_IMPORTED_MODULE_5__["default"].find(_constant_index__WEBPACK_IMPORTED_MODULE_6__["CollectionName"].users, { phone, password });
        return !!record.length;
    });
}


/***/ }),

/***/ "./src/utils/http.ts":
/*!***************************!*\
  !*** ./src/utils/http.ts ***!
  \***************************/
/*! exports provided: get, post, download */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "post", function() { return post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "download", function() { return download; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! qs */ "qs");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @config/index */ "./config/index.ts");






const get = (url, data) => {
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${_config_index__WEBPACK_IMPORTED_MODULE_5__["default"].baseUrl}${url}?${qs__WEBPACK_IMPORTED_MODULE_2___default.a.stringify(data)}`).then((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
        return response.data;
    }));
};
const post = (url, data) => {
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${_config_index__WEBPACK_IMPORTED_MODULE_5__["default"].baseUrl}${url}`, data).then((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
        return response.data;
    }));
};
const download = (url, data) => {
    const { path, name } = data;
    if (!path || !name) {
        return;
    }
    const file = fs__WEBPACK_IMPORTED_MODULE_4___default.a.createWriteStream(path + name);
    http__WEBPACK_IMPORTED_MODULE_3___default.a.get(`${_config_index__WEBPACK_IMPORTED_MODULE_5__["default"].baseUrl}${url}?${qs__WEBPACK_IMPORTED_MODULE_2___default.a.stringify(data)}`, response => {
        response.pipe(file);
    });
};


/***/ }),

/***/ "./src/utils/synchronization.ts":
/*!**************************************!*\
  !*** ./src/utils/synchronization.ts ***!
  \**************************************/
/*! exports provided: refreshDdToken, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refreshDdToken", function() { return refreshDdToken; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _service_api_usersApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @service/api/usersApi */ "./src/service/api/usersApi.ts");
/* harmony import */ var _service_api_carsInfoApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @service/api/carsInfoApi */ "./src/service/api/carsInfoApi.ts");
/* harmony import */ var _constant_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @constant/index */ "./src/constant/index.ts");
/* harmony import */ var _mongodb_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mongodb/db */ "./src/mongodb/db.ts");
/* harmony import */ var _utils_commons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @utils/commons */ "./src/utils/commons.ts");
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @config/index */ "./config/index.ts");







function getUserInfo(args, phone) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const res = yield Object(_service_api_usersApi__WEBPACK_IMPORTED_MODULE_1__["getCustomerInfo"])(args);
        if (res.status === 1) {
            const recode = yield _mongodb_db__WEBPACK_IMPORTED_MODULE_4__["default"].find(_constant_index__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].userInfo, { phone });
            if (!recode.length) {
                const dbres = yield _mongodb_db__WEBPACK_IMPORTED_MODULE_4__["default"].insert(_constant_index__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].userInfo, res.data);
                if (dbres.status === 'success') {
                }
            }
            else {
                Object(_utils_commons__WEBPACK_IMPORTED_MODULE_5__["printLog"])('无须同步用户信息', 'info');
            }
            return {
                status: 'ok'
            };
        }
        else {
            Object(_utils_commons__WEBPACK_IMPORTED_MODULE_5__["printLog"])('ddtoken过期', 'error');
            return {
                status: 'err'
            };
        }
    });
}
function journey(args, phone) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const res = yield Object(_service_api_usersApi__WEBPACK_IMPORTED_MODULE_1__["getHistoryOrder"])(args);
        if (res.status === 1) {
            const recode = yield _mongodb_db__WEBPACK_IMPORTED_MODULE_4__["default"].find(_constant_index__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].journey, { phone });
            if (!recode.length) {
                const dbres = yield _mongodb_db__WEBPACK_IMPORTED_MODULE_4__["default"].insert(_constant_index__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].journey, { phone, data: res.data });
                if (dbres.status === 'success') {
                    Object(_utils_commons__WEBPACK_IMPORTED_MODULE_5__["printLog"])('行程信息同步成功', 'info');
                }
            }
            else {
                Object(_utils_commons__WEBPACK_IMPORTED_MODULE_5__["printLog"])('无须同步行程信息', 'info');
            }
        }
        else {
            Object(_utils_commons__WEBPACK_IMPORTED_MODULE_5__["printLog"])('ddtoken过期', 'error');
        }
    });
}
function Account(args, phone) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const res = yield Object(_service_api_usersApi__WEBPACK_IMPORTED_MODULE_1__["getAccount"])(args);
        if (res.status === 1) {
            const recode = yield _mongodb_db__WEBPACK_IMPORTED_MODULE_4__["default"].find(_constant_index__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].account, { phone });
            if (!recode.length) {
                const dbres = yield _mongodb_db__WEBPACK_IMPORTED_MODULE_4__["default"].insert(_constant_index__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].account, { phone, data: res.data });
                if (dbres.status === 'success') {
                    Object(_utils_commons__WEBPACK_IMPORTED_MODULE_5__["printLog"])('余额信息同步成功', 'info');
                }
            }
            else {
                Object(_utils_commons__WEBPACK_IMPORTED_MODULE_5__["printLog"])('无须同步余额信息', 'info');
            }
        }
        else {
            Object(_utils_commons__WEBPACK_IMPORTED_MODULE_5__["printLog"])('ddtoken过期', 'error');
        }
    });
}
function AroundCar(args) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const res = yield Object(_service_api_carsInfoApi__WEBPACK_IMPORTED_MODULE_2__["getAround"])(args);
        if (res.status === 1) {
            const recode = yield _mongodb_db__WEBPACK_IMPORTED_MODULE_4__["default"].find(_constant_index__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].aroundCar);
            if (!recode.length) {
                const dbres = yield _mongodb_db__WEBPACK_IMPORTED_MODULE_4__["default"].insertMany(_constant_index__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].aroundCar, res.data);
                if (dbres.status === 'success') {
                    Object(_utils_commons__WEBPACK_IMPORTED_MODULE_5__["printLog"])('车辆信息同步成功', 'info');
                }
            }
            else {
                Object(_utils_commons__WEBPACK_IMPORTED_MODULE_5__["printLog"])('无须同步车辆信息', 'info');
            }
        }
        else {
            Object(_utils_commons__WEBPACK_IMPORTED_MODULE_5__["printLog"])('ddtoken过期', 'error');
        }
    });
}
function Cost(args, phone) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const res = yield Object(_service_api_usersApi__WEBPACK_IMPORTED_MODULE_1__["getHistoryOrderCost"])(args);
        if (res.status === 1) {
            const recode = yield _mongodb_db__WEBPACK_IMPORTED_MODULE_4__["default"].find(_constant_index__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].cost, { phone });
            if (!recode.length) {
                const dbres = yield _mongodb_db__WEBPACK_IMPORTED_MODULE_4__["default"].insert(_constant_index__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].cost, { phone, data: res.data });
                if (dbres.status === 'success') {
                    Object(_utils_commons__WEBPACK_IMPORTED_MODULE_5__["printLog"])('花费信息同步成功', 'info');
                }
            }
            else {
                Object(_utils_commons__WEBPACK_IMPORTED_MODULE_5__["printLog"])('无须同步花费信息', 'info');
            }
        }
        else {
            Object(_utils_commons__WEBPACK_IMPORTED_MODULE_5__["printLog"])('ddtoken过期', 'error');
        }
    });
}
function synchronization(ddToken, phone) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const checkToken = yield getUserInfo({
            token: ddToken,
            lang: 'cn'
        }, phone);
        if (checkToken.status === 'err') {
            const newDd = yield refreshDdToken(phone);
            yield synchronization(newDd.token, phone);
        }
        else {
            journey({ pageNo: 1, pageSize: 10000, token: ddToken }, phone);
            Account({
                token: ddToken,
                lang: 'cn'
            }, phone);
            AroundCar({
                token: ddToken,
                lang: 'cn',
                lat: 22.981987999999998,
                lon: 113.3681641,
                radius: 10000000
            });
            Cost({
                token: ddToken,
                lang: 'cn'
            }, phone);
        }
    });
}
function refreshDdToken(phone) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const userRecord = yield _mongodb_db__WEBPACK_IMPORTED_MODULE_4__["default"].find(_constant_index__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].ddTokenPhoneMap, { phone });
        const data = Object.assign(Object.assign({ phone }, _config_index__WEBPACK_IMPORTED_MODULE_6__["default"].loginArgs), { deviceid: userRecord[0].deviceid });
        const res = yield Object(_service_api_usersApi__WEBPACK_IMPORTED_MODULE_1__["loginOnApp"])(data);
        if (res.status === 1) {
            yield _mongodb_db__WEBPACK_IMPORTED_MODULE_4__["default"].updateOne(_constant_index__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].ddTokenPhoneMap, { phone: data.phone }, { token: res.data.token });
            return {
                token: res.data.token
            };
        }
        else {
            Object(_utils_commons__WEBPACK_IMPORTED_MODULE_5__["printLog"])('登录叮叮失败', 'error');
            return {
                err: '登录叮叮失败'
            };
        }
    });
}
/* harmony default export */ __webpack_exports__["default"] = (synchronization);


/***/ }),

/***/ 0:
/*!**********************!*\
  !*** multi ./app.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/pure/Desktop/project/koaForDD/app.ts */"./app.ts");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "jwt-simple":
/*!*****************************!*\
  !*** external "jwt-simple" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jwt-simple");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),

/***/ "koa-bodyparser":
/*!*********************************!*\
  !*** external "koa-bodyparser" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ }),

/***/ "koa-cors":
/*!***************************!*\
  !*** external "koa-cors" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-cors");

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "log4js":
/*!*************************!*\
  !*** external "log4js" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("log4js");

/***/ }),

/***/ "md5":
/*!**********************!*\
  !*** external "md5" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("md5");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ }),

/***/ "qiniu":
/*!************************!*\
  !*** external "qiniu" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("qiniu");

/***/ }),

/***/ "qr-image":
/*!***************************!*\
  !*** external "qr-image" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("qr-image");

/***/ }),

/***/ "qs":
/*!*********************!*\
  !*** external "qs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("qs");

/***/ }),

/***/ "redis":
/*!************************!*\
  !*** external "redis" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redis");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),

/***/ "uuid/v1":
/*!**************************!*\
  !*** external "uuid/v1" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid/v1");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwLnRzIiwid2VicGFjazovLy8uL2NvbmZpZy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rhby91c2VyRGFvLnRzIiwid2VicGFjazovLy8uL3NyYy9taWRkbGV3YXJlL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tb25nb2RiL2RiLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWRpcy9kYi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVyL2N1c3RvbUFwaS9jYXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXIvY3VzdG9tQXBpL2hpc3RvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlci9jdXN0b21BcGkvdXNlcnNBY2NvdW50LnRzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXIvY3VzdG9tQXBpL3VzZXJzSW5mby50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVyL2Rpbmdkb25nQXBpL2NhcnNJbmZvLnRzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXIvZGluZ2RvbmdBcGkvY29tbWFuZENvbnRyb2wudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlci9kaW5nZG9uZ0FwaS9vcmRlckluZm9ybWF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXIvZGluZ2RvbmdBcGkvdXNlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2UvYXBpL2FmdGVyQm9va0Nhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZS9hcGkvY2Fyc0luZm9BcGkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2UvYXBpL2NvbnRyb2xDYXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2UvYXBpL3VzZXJzQXBpLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlL3NvY2tldC9oYW5kbGVSZWNlaXZlTXNnLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlL3NvY2tldC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY29tbW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaHR0cC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvc3luY2hyb25pemF0aW9uLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXZlbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiand0LXNpbXBsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImtvYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImtvYS1ib2R5cGFyc2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwia29hLWNvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2Etcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9nNGpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibWQ1XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9uZ29kYlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInFpbml1XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicXItaW1hZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJxc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZGlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic29ja2V0LmlvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidHNsaWJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1dWlkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXVpZC92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Q0EsWUFBWSwrREFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNlLDhFQUFlLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pLL0Isa0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsK0I7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsZ0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsZ0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsK0I7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsb0MiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBLb2EgZnJvbSAna29hJztcbmltcG9ydCBrb2FCb2R5UGFyc2UgZnJvbSAna29hLWJvZHlwYXJzZXInO1xuaW1wb3J0IGNvcnMgZnJvbSAna29hLWNvcnMnO1xuaW1wb3J0IHJvdXRlciBmcm9tICdrb2Etcm91dGVyJztcbmltcG9ydCB7IHRva2VuVmVyaWZ5LCBsb2cgfSBmcm9tICcuL3NyYy9taWRkbGV3YXJlJztcbmltcG9ydCAnQHNlcnZpY2Uvc29ja2V0L2luZGV4JztcbmltcG9ydCBVc2VySW5mb1JvdXRlciBmcm9tICdAcm91dGVyL2N1c3RvbUFwaS91c2Vyc0luZm8nO1xuaW1wb3J0IEhpc3RvcnlvUm91dGVyIGZyb20gJ0Byb3V0ZXIvY3VzdG9tQXBpL2hpc3RvcnknO1xuaW1wb3J0IFVzZXJzIGZyb20gJ0Byb3V0ZXIvY3VzdG9tQXBpL3VzZXJzQWNjb3VudCc7XG5pbXBvcnQgQ2FyUm91dGVyIGZyb20gJ0Byb3V0ZXIvY3VzdG9tQXBpL2NhcnMnO1xuaW1wb3J0IERpbmdkb2luZ1VzZXJSb3V0ZXIgZnJvbSAnQHJvdXRlci9kaW5nZG9uZ0FwaS91c2Vycyc7XG5pbXBvcnQgRGluZ2RvaW5nT3JkZXJJbmZvcm1hdGlvblJvdXRlciBmcm9tICdAcm91dGVyL2Rpbmdkb25nQXBpL29yZGVySW5mb3JtYXRpb24nO1xuaW1wb3J0IERpbmdkb2luZ0NhcnNJbmZvUm91dGVyIGZyb20gJ0Byb3V0ZXIvZGluZ2RvbmdBcGkvY2Fyc0luZm8nO1xuaW1wb3J0IERpbmdkb2luZ0NvbW1hbmRDb250cm9sUm91dGVyIGZyb20gJ0Byb3V0ZXIvZGluZ2RvbmdBcGkvY29tbWFuZENvbnRyb2wnO1xuY29uc3QgYWxsUm91dGVyID0gbmV3IHJvdXRlcigpO1xuY29uc3QgYXBwID0gbmV3IEtvYSgpO1xuYXBwLnVzZShjb3JzKCkpO1xuYXBwLnVzZShrb2FCb2R5UGFyc2UoKSk7XG5hcHAudXNlKHRva2VuVmVyaWZ5KTtcbmFsbFJvdXRlci51c2UoJy91c2VycycsIFVzZXJzLnJvdXRlcygpKTtcbmFsbFJvdXRlci51c2UoJy91c2VySW5mbycsIFVzZXJJbmZvUm91dGVyLnJvdXRlcygpKTtcbmFsbFJvdXRlci51c2UoJy9oaXN0b3J5JywgSGlzdG9yeW9Sb3V0ZXIucm91dGVzKCkpO1xuYWxsUm91dGVyLnVzZSgnL2NhcnMnLCBDYXJSb3V0ZXIucm91dGVzKCkpO1xuYWxsUm91dGVyLnVzZSgnL2RkL3VzZXInLCBEaW5nZG9pbmdVc2VyUm91dGVyLnJvdXRlcygpKTtcbmFsbFJvdXRlci51c2UoJy9kZC9vcmRlckluZm8nLCBEaW5nZG9pbmdPcmRlckluZm9ybWF0aW9uUm91dGVyLnJvdXRlcygpKTtcbmFsbFJvdXRlci51c2UoJy9kZC9jYXJzSW5mbycsIERpbmdkb2luZ0NhcnNJbmZvUm91dGVyLnJvdXRlcygpKTtcbmFsbFJvdXRlci51c2UoJy9kZC9DbWRDdHJsJywgRGluZ2RvaW5nQ29tbWFuZENvbnRyb2xSb3V0ZXIucm91dGVzKCkpO1xuYXBwLnVzZShhbGxSb3V0ZXIucm91dGVzKCkpLnVzZShhbGxSb3V0ZXIuYWxsb3dlZE1ldGhvZHMoKSk7XG5hcHAudXNlKGxvZyk7XG52YXIgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRzJykuRXZlbnRFbWl0dGVyO1xudmFyIGVlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuZWUuc2V0TWF4TGlzdGVuZXJzKDE1KTtcbmFwcC5saXN0ZW4oMzAwMCk7XG4iLCJjb25zdCBjb25maWcgPSB7XG4gICAgYmFzZVVybDogXCJodHRwOi8vbW9iaWxlLnhpbmdmdWRpbmdkb25nLmNvbS9hcGkvXCIsXG4gICAgcWluaXU6IHtcbiAgICAgICAgQUs6IFwiYXpTclIxSDFvNUlNZ3RmZE83ekEyNzBDNVEzSjliSG9lMC1mdGlZQ1wiLFxuICAgICAgICBTSzogXCJmSzBTWWRTWjJReWRXWlFHTUJQaUQtV0VDVWRrMkRhMFhDaFhvN01zXCIsXG4gICAgICAgIGJ1Y2tldDogXCJkaW5nZGluZ1wiLFxuICAgICAgICBzb3VyY2VVcmw6IFwiaHR0cDovL3NzLnB1cmV2aXZpLmNoYXQvXCJcbiAgICB9LFxuICAgIHJlZGlzOiB7XG4gICAgICAgIGhvc3Q6IFwiMTE5LjI5LjEzOS4yMDBcIixcbiAgICAgICAgcG9ydDogNjM3OVxuICAgIH0sXG4gICAgYmQ6IHtcbiAgICAgICAgZGJVcmw6IFwibW9uZ29kYjovL3B1cmV6anI6YXNkMTIzTFBBT34rQDExOS4yOS4xMzkuMjAwOjIyMjIyL2Rpbmdkb25nXCIsXG4gICAgICAgIGRiTmFtZTogXCJkaW5nZG9uZ1wiXG4gICAgfSxcbiAgICBsb2dpbkFyZ3M6IHtcbiAgICAgICAgc291cmNlOiBcImFuZHJvaWRcIixcbiAgICAgICAgdmVyc2lvbjogOTk5XG4gICAgfSxcbiAgICBUT0tFTl9TRUNFUlQ6IFwiZmlnaHQhZmlnaHQhZmlnaHQhXCJcbn07XG5leHBvcnQgZGVmYXVsdCBjb25maWc7XG4iLCJleHBvcnQgY29uc3QgUmVkaXNLZXkgPSB7fTtcbmV4cG9ydCBjb25zdCBDb2xsZWN0aW9uTmFtZSA9IHtcbiAgICB1c2VySW5mbzogJ3VzZXJJbmZvJyxcbiAgICB1c2VyczogJ3VzZXJzJyxcbiAgICBkZFRva2VuUGhvbmVNYXA6ICdkZFRva2VuUGhvbmVNYXAnLFxuICAgIGpvdXJuZXk6ICdqb3VybmV5JyxcbiAgICBhY2NvdW50OiAnYWNjb3VudCcsXG4gICAgYXJvdW5kQ2FyOiAnYXJvdW5kQ2FyJyxcbiAgICBjb3N0OiAnY29zdCcsXG4gICAgZHJpdmVDYXJOdW1zOiAnZHJpdmVDYXJOdW1zJ1xufTtcbiIsImltcG9ydCB7IF9fYXdhaXRlciB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IERCIGZyb20gJ0Btb25nb2RiL2RiJztcbmltcG9ydCB7IENvbGxlY3Rpb25OYW1lIH0gZnJvbSAnQGNvbnN0YW50L2luZGV4JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHVzZXJEYW8ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmFkZCA9IChkYXRhKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCByZXMgPSB5aWVsZCBEQi5hZGQoQ29sbGVjdGlvbk5hbWUudXNlcnMsIGRhdGEpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZGVsZXRlID0gKGRhdGEpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IHlpZWxkIERCLmRlbGV0ZShDb2xsZWN0aW9uTmFtZS51c2VycywgZGF0YSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5maW5kID0gKGRhdGEpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IHlpZWxkIERCLmZpbmQoQ29sbGVjdGlvbk5hbWUudXNlcnMsIGRhdGEpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgX19hd2FpdGVyIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgbG9nNGpzIGZyb20gJ2xvZzRqcyc7XG5pbXBvcnQgeyBwcmludExvZywgY2hlY2tUb2tlbiB9IGZyb20gJ0B1dGlscy9jb21tb25zJztcbmNvbnN0IG5vVmVyaWZ5VXJsID0gW1xuICAgICcvdXNlcnMvbG9naW4nLFxuICAgICcvdXNlcnMvcXJjb2RlL2xvZ2luJyxcbiAgICAnL3VzZXJzL2FwcGxldExvZ2luJyxcbiAgICAnL3VzZXJzL2Zhc3QtbG9naW4nLFxuICAgICcvY2Fycy9hcm91bmQnLFxuICAgICcvdXNlcnMvbG9naW4tZnJvbS1nb25nWm9uZ0hhbydcbl07XG5jb25zdCBpc0RkQXBpID0gKHBhdGhuYW1lKSA9PiBwYXRobmFtZS5pbmRleE9mKCcvZGQnKSA+PSAwO1xuZXhwb3J0IGNvbnN0IHRva2VuVmVyaWZ5ID0gKGN0eCwgbmV4dCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgbGV0IGRhdGEgPSBjdHgucmVxdWVzdC5ib2R5O1xuICAgIGlmIChjdHgucmVxdWVzdC5tZXRob2QgPT09ICdHRVQnKSB7XG4gICAgICAgIGRhdGEgPSBjdHgucmVxdWVzdC5xdWVyeTtcbiAgICB9XG4gICAgY29uc3Qgbm9Ub2tlbiA9ICFkYXRhLnRva2VuO1xuICAgIGlmIChub1Rva2VuICYmICFub1ZlcmlmeVVybC5pbmNsdWRlcyhjdHgucmVxdWVzdC5VUkwucGF0aG5hbWUpICYmICFpc0RkQXBpKGN0eC5yZXF1ZXN0LlVSTC5wYXRobmFtZSkpIHtcbiAgICAgICAgY3R4LmJvZHkgPSB7IGVycjogJ+ayoeadg+mZkO+8jOivt+eZu+W9lScsIHN0YXR1czogMiB9O1xuICAgICAgICBjdHguc3RhdHVzID0gNDAxO1xuICAgIH1cbiAgICBlbHNlIGlmIChub1ZlcmlmeVVybC5pbmNsdWRlcyhjdHgucmVxdWVzdC5VUkwucGF0aG5hbWUpIHx8IGlzRGRBcGkoY3R4LnJlcXVlc3QuVVJMLnBhdGhuYW1lKSkge1xuICAgICAgICB5aWVsZCBuZXh0KCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoY2hlY2tUb2tlbihkYXRhLnRva2VuKSkge1xuICAgICAgICAgICAgeWllbGQgbmV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY3R4LmJvZHkgPSB7IGVycjogJ+ayoeadg+mZkO+8jOivt+eZu+W9lScsIHN0YXR1czogMiB9O1xuICAgICAgICAgICAgY3R4LnN0YXR1cyA9IDQwMTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuZXhwb3J0IGNvbnN0IGxvZyA9IChjdHgsIG5leHQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IHsgcmVxdWVzdCwgcmVzcG9uc2UgfSA9IGN0eDtcbiAgICBsb2c0anMuY29uZmlndXJlKHtcbiAgICAgICAgYXBwZW5kZXJzOiB7XG4gICAgICAgICAgICBpbmZvOiB7IHR5cGU6ICdmaWxlJywgZmlsZW5hbWU6IGBsb2dnZXIvc2VydmljZS5sb2dgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY2F0ZWdvcmllczogeyBkZWZhdWx0OiB7IGFwcGVuZGVyczogWydpbmZvJ10sIGxldmVsOiAnZGVidWcnIH0gfVxuICAgIH0pO1xuICAgIHByaW50TG9nKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgcmVxdWVzdDoge1xuICAgICAgICAgICAgdXJsOiByZXF1ZXN0LnVybCxcbiAgICAgICAgICAgIG1ldGhvZDogcmVxdWVzdC5tZXRob2RcbiAgICAgICAgfSxcbiAgICAgICAgcmVzcG9uc2U6IHtcbiAgICAgICAgICAgIHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICAgICAgbWVzc2FnZTogcmVzcG9uc2UubWVzc2FnZVxuICAgICAgICB9XG4gICAgfSksICdpbmZvJyk7XG4gICAgbmV4dCgpO1xufSk7XG4iLCJpbXBvcnQgbW9uZ29kYiBmcm9tICdtb25nb2RiJztcbmltcG9ydCBjb25maWcgZnJvbSAnQGNvbmZpZy9pbmRleCc7XG5jb25zdCBNb25nb0NsaWVudCA9IG1vbmdvZGIuTW9uZ29DbGllbnQ7XG5jbGFzcyBEYiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZGJDbGllbnQgPSBudWxsO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgIGlmICghRGJbJ2luc3RhbmNlJ10pIHtcbiAgICAgICAgICAgIERiWydpbnN0YW5jZSddID0gbmV3IERiKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIERiWydpbnN0YW5jZSddO1xuICAgIH1cbiAgICBjb25uZWN0KCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmRiQ2xpZW50KSB7XG4gICAgICAgICAgICAgICAgTW9uZ29DbGllbnQuY29ubmVjdChjb25maWcuYmQuZGJVcmwsIChlcnIsIGNsaWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKGNvbmZpZy5iZC5kYk5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aVsOaNruW6k+i/nuaOpeaIkOWKn++8ge+8ge+8gScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYkNsaWVudCA9IGRiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLmRiQ2xpZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLmRiQ2xpZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFkZChjb2xsZWN0aW9uTmFtZSwganNvbikge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0KCkudGhlbigoZGIpID0+IHtcbiAgICAgICAgICAgICAgICBkYi5jb2xsZWN0aW9uKGNvbGxlY3Rpb25OYW1lKS5pbnNlcnRPbmUoanNvbiwgKGVyciwgeyByZXN1bHQgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0Lm9rID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHsgc3RhdHVzOiAnc3VjY2VzcycgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkZWxldGUoY29sbGVjdGlvbk5hbWUsIGpzb24pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdCgpLnRoZW4oKGRiKSA9PiB7XG4gICAgICAgICAgICAgICAgZGIuY29sbGVjdGlvbihjb2xsZWN0aW9uTmFtZSkuZGVsZXRlT25lKGpzb24sIChlcnIsIHsgcmVzdWx0IH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5vayA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7IHN0YXR1czogJ3N1Y2Nlc3MnIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZmluZChjb2xsZWN0aW9uTmFtZSwganNvbiA9IHt9KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3QoKS50aGVuKChkYikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGRiLmNvbGxlY3Rpb24oY29sbGVjdGlvbk5hbWUpLmZpbmQoanNvbik7XG4gICAgICAgICAgICAgICAgcmVzLnRvQXJyYXkoKGVyciwgZG9jcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZG9jcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgdXBkYXRlT25lKGNvbGxlY3Rpb25OYW1lLCBqc29uLCBuZXdKc29uKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3QoKS50aGVuKChkYikgPT4ge1xuICAgICAgICAgICAgICAgIGRiLmNvbGxlY3Rpb24oY29sbGVjdGlvbk5hbWUpXG4gICAgICAgICAgICAgICAgICAgIC51cGRhdGVPbmUoanNvbiwgeyAkc2V0OiBuZXdKc29uIH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCh7IHJlc3VsdCB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQub2sgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoeyBzdGF0dXM6ICdzdWNjZXNzJyB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGluc2VydChjb2xsZWN0aW9uTmFtZSwganNvbikge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0KCkudGhlbigoZGIpID0+IHtcbiAgICAgICAgICAgICAgICBkYi5jb2xsZWN0aW9uKGNvbGxlY3Rpb25OYW1lKVxuICAgICAgICAgICAgICAgICAgICAuaW5zZXJ0T25lKGpzb24pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCh7IHJlc3VsdCB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQub2sgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoeyBzdGF0dXM6ICdzdWNjZXNzJyB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGluc2VydE1hbnkoY29sbGVjdGlvbk5hbWUsIGpzb24pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdCgpLnRoZW4oKGRiKSA9PiB7XG4gICAgICAgICAgICAgICAgZGIuY29sbGVjdGlvbihjb2xsZWN0aW9uTmFtZSlcbiAgICAgICAgICAgICAgICAgICAgLmluc2VydE1hbnkoanNvbilcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHsgcmVzdWx0IH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5vayA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7IHN0YXR1czogJ3N1Y2Nlc3MnIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBEYi5nZXRJbnN0YW5jZSgpO1xuIiwiaW1wb3J0IHJlZGlzIGZyb20gJ3JlZGlzJztcbmltcG9ydCBjb25maWcgZnJvbSAnQGNvbmZpZy9pbmRleCc7XG5jbGFzcyBSZWRpcyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuUmVkaXNDbGllbnQgPSBudWxsO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgIGlmICghUmVkaXNbJ2luc3RhbmNlJ10pIHtcbiAgICAgICAgICAgIFJlZGlzWydpbnN0YW5jZSddID0gbmV3IFJlZGlzKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFJlZGlzWydpbnN0YW5jZSddO1xuICAgIH1cbiAgICBjb25uZWN0KCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuUmVkaXNDbGllbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5SZWRpc0NsaWVudCA9IHJlZGlzLmNyZWF0ZUNsaWVudChjb25maWcucmVkaXMucG9ydCwgY29uZmlnLnJlZGlzLmhvc3QpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuUmVkaXNDbGllbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLlJlZGlzQ2xpZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZGlz6L+e5o6l5oiQ5Yqf77yB77yB77yBJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoX2EpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVkaXPov57mjqXlpLHotKXvvIHvvIHvvIEnKTtcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdlcnInKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzZXQoa2V5LCB2YWx1ZSwgdGltZW91dCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0KCkudGhlbigoY2xpZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudC5zZXQoa2V5LCB2YWx1ZSwgJ0VYJywgdGltZW91dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGllbnQuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoJ3N1Y2Nlc3MnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoJ2VycicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0KGtleSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0KCkudGhlbigoY2xpZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50LmdldChrZXksIChlcnIsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChfYSkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCdlcnInKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgUmVkaXMuZ2V0SW5zdGFuY2UoKTtcbiIsImltcG9ydCB7IF9fYXdhaXRlciB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IFJvdXRlciBmcm9tICdrb2Etcm91dGVyJztcbmltcG9ydCB7IGdldERkVG9rZW5CeVRva2VuLCBnZXRQaG9uZUJ5VG9rZW4gfSBmcm9tICdAdXRpbHMvY29tbW9ucyc7XG5pbXBvcnQgeyBnZXRBcm91bmQsIGdldEhpc3RvcnlSZXR1cm5Qb3NpdGlvbiwgZ2V0TGltaXQsIGdldFN0YXRpb25DYXIgfSBmcm9tICdAc2VydmljZS9hcGkvY2Fyc0luZm9BcGknO1xuaW1wb3J0IHsgcmVmcmVzaERkVG9rZW4gfSBmcm9tICdAdXRpbHMvc3luY2hyb25pemF0aW9uJztcbmltcG9ydCB7IGxvZ2luRnJvbUdvbmdab25nSGFvIH0gZnJvbSAnQHNlcnZpY2UvYXBpL3VzZXJzQXBpJztcbmltcG9ydCBEQiBmcm9tICdAbW9uZ29kYi9kYic7XG5pbXBvcnQgeyBDb2xsZWN0aW9uTmFtZSB9IGZyb20gJ0Bjb25zdGFudC9pbmRleCc7XG5jb25zdCBDYXJSb3V0ZXIgPSBuZXcgUm91dGVyKCk7XG5DYXJSb3V0ZXIucG9zdCgnL2Fyb3VuZCcsIChjdHgsIG5leHQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IGRhdGEgPSBjdHgucmVxdWVzdC5ib2R5O1xuICAgIGlmICghZGF0YS5sYXQgfHwgIWRhdGEubG9uIHx8ICFkYXRhLnJhZGl1cykge1xuICAgICAgICBjdHguYm9keSA9IHsgbWVzc2FnZTogJ+WPguaVsOacieivrycgfTtcbiAgICAgICAgY3R4LnN0YXR1cyA9IDQwMDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmICghIWRhdGEudG9rZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IGRkVG9rZW4gPSB5aWVsZCBnZXREZFRva2VuQnlUb2tlbihkYXRhLnRva2VuKTtcbiAgICAgICAgICAgIGNvbnN0IHBob25lID0geWllbGQgZ2V0UGhvbmVCeVRva2VuKGRhdGEudG9rZW4pO1xuICAgICAgICAgICAgY29uc3QgcmVzID0geWllbGQgZ2V0QXJvdW5kKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGF0YSksIHsgdG9rZW46IGRkVG9rZW4gfSkpO1xuICAgICAgICAgICAgaWYgKHBob25lID09PSAnMTM4Mjg0OTcyMzcnICYmIHJlcy5zdGF0dXMgPT09IDIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXMxID0geWllbGQgbG9naW5Gcm9tR29uZ1pvbmdIYW8oe1xuICAgICAgICAgICAgICAgICAgICBvcGVuSWQ6ICdvdlgxZHhPcF9xOGo5OWFndmZKZXNmS3VLcU5BJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHlpZWxkIERCLnVwZGF0ZU9uZShDb2xsZWN0aW9uTmFtZS5kZFRva2VuUGhvbmVNYXAsIHsgcGhvbmUgfSwgeyB0b2tlbjogcmVzMS5kYXRhLnRva2VuIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwaG9uZSA9IHlpZWxkIGdldFBob25lQnlUb2tlbihkYXRhLnRva2VuKTtcbiAgICAgICAgICAgICAgICB5aWVsZCByZWZyZXNoRGRUb2tlbihwaG9uZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGRUb2tlbiA9IHlpZWxkIGdldERkVG9rZW5CeVRva2VuKGRhdGEudG9rZW4pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IHlpZWxkIGdldEFyb3VuZChPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGRhdGEpLCB7IHRva2VuOiBkZFRva2VuIH0pKTtcbiAgICAgICAgICAgICAgICBjdHguYm9keSA9IE9iamVjdC5hc3NpZ24oe30sIHJlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdHguYm9keSA9IE9iamVjdC5hc3NpZ24oe30sIHJlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCByZXMgPSB5aWVsZCBnZXRBcm91bmQoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkYXRhKSwgeyB0b2tlbjogMTIzNDU2IH0pKTtcbiAgICAgICAgICAgIGN0eC5ib2R5ID0gT2JqZWN0LmFzc2lnbih7fSwgcmVzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB5aWVsZCBuZXh0KCk7XG59KSk7XG5DYXJSb3V0ZXIucG9zdCgnL2dldEhpc3RvcnlSZXR1cm5Qb3NpdGlvbicsIChjdHgsIG5leHQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IGRhdGEgPSBjdHgucmVxdWVzdC5ib2R5O1xuICAgIGNvbnN0IGRkVG9rZW4gPSB5aWVsZCBnZXREZFRva2VuQnlUb2tlbihkYXRhLnRva2VuKTtcbiAgICBjb25zdCByZXMgPSB5aWVsZCBnZXRIaXN0b3J5UmV0dXJuUG9zaXRpb24oeyB0b2tlbjogZGRUb2tlbiB9KTtcbiAgICBjdHguYm9keSA9IE9iamVjdC5hc3NpZ24oe30sIHJlcyk7XG4gICAgeWllbGQgbmV4dCgpO1xufSkpO1xuQ2FyUm91dGVyLnBvc3QoJy9nZXRMaW1pdCcsIChjdHgsIG5leHQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IGRhdGEgPSBjdHgucmVxdWVzdC5ib2R5O1xuICAgIGlmICghZGF0YS50eXBlIHx8ICFkYXRhLnN0YXRpb25JZCB8fCAhZGF0YS5vcHBvc2l0ZVN0YXRpb25JZCkge1xuICAgICAgICBjdHguYm9keSA9IHsgbWVzc2FnZTogJ+WPguaVsOacieivrycgfTtcbiAgICAgICAgY3R4LnN0YXR1cyA9IDQwMDtcbiAgICB9XG4gICAgY29uc3QgZGRUb2tlbiA9IHlpZWxkIGdldERkVG9rZW5CeVRva2VuKGRhdGEudG9rZW4pO1xuICAgIGNvbnN0IHJlcyA9IHlpZWxkIGdldExpbWl0KE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGF0YSksIHsgdG9rZW46IGRkVG9rZW4gfSkpO1xuICAgIGN0eC5ib2R5ID0gT2JqZWN0LmFzc2lnbih7fSwgcmVzKTtcbiAgICB5aWVsZCBuZXh0KCk7XG59KSk7XG5DYXJSb3V0ZXIucG9zdCgnL2dldFN0YXRpb25DYXInLCAoY3R4LCBuZXh0KSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCBkYXRhID0gY3R4LnJlcXVlc3QuYm9keTtcbiAgICBpZiAoIWRhdGEuc3RhdGlvbklkIHx8ICFkYXRhLnNlYXQpIHtcbiAgICAgICAgY3R4LmJvZHkgPSB7IG1lc3NhZ2U6ICflj4LmlbDmnInor68nIH07XG4gICAgICAgIGN0eC5zdGF0dXMgPSA0MDA7XG4gICAgfVxuICAgIGNvbnN0IGRkVG9rZW4gPSB5aWVsZCBnZXREZFRva2VuQnlUb2tlbihkYXRhLnRva2VuKTtcbiAgICBjb25zdCByZXMgPSB5aWVsZCBnZXRTdGF0aW9uQ2FyKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGF0YSksIHsgdG9rZW46IGRkVG9rZW4gfSkpO1xuICAgIGN0eC5ib2R5ID0gT2JqZWN0LmFzc2lnbih7fSwgcmVzKTtcbiAgICB5aWVsZCBuZXh0KCk7XG59KSk7XG5leHBvcnQgZGVmYXVsdCBDYXJSb3V0ZXI7XG4iLCJpbXBvcnQgUm91dGVyIGZyb20gJ2tvYS1yb3V0ZXInO1xuY29uc3QgSGlzdG9yeVJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcbmV4cG9ydCBkZWZhdWx0IEhpc3RvcnlSb3V0ZXI7XG4iLCJpbXBvcnQgeyBfX2F3YWl0ZXIgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSAna29hLXJvdXRlcic7XG5pbXBvcnQgbWQ1IGZyb20gJ21kNSc7XG5pbXBvcnQgeyBpc051bGwgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHV1aWRWMSBmcm9tICd1dWlkJztcbmltcG9ydCB1c2VyRGFvIGZyb20gJ0BkYW8vdXNlckRhbyc7XG5pbXBvcnQgUmVkaXMgZnJvbSAnQHJlZGlzL2RiJztcbmltcG9ydCBEQiBmcm9tICdAbW9uZ29kYi9kYic7XG5pbXBvcnQgeyBjcmVhdGVUb2tlbiwgZ2V0UGhvbmVCeVRva2VuIH0gZnJvbSAnQHV0aWxzL2NvbW1vbnMnO1xuaW1wb3J0IHN5bmNocm9uaXphdGlvbiBmcm9tICdAdXRpbHMvc3luY2hyb25pemF0aW9uJztcbmltcG9ydCB7IENvbGxlY3Rpb25OYW1lIH0gZnJvbSAnQGNvbnN0YW50L2luZGV4JztcbmltcG9ydCB7IGxvZ2luT25BcHAsIGxvZ2luRnJvbUdvbmdab25nSGFvIH0gZnJvbSAnQHNlcnZpY2UvYXBpL3VzZXJzQXBpJztcbmltcG9ydCBjb25maWcgZnJvbSAnQGNvbmZpZy9pbmRleCc7XG5jb25zdCBVc2Vyc0FjY291bnRSb3V0ZXIgPSBuZXcgUm91dGVyKCk7XG5jb25zdCBVc2VyRGFvID0gbmV3IHVzZXJEYW8oKTtcblVzZXJzQWNjb3VudFJvdXRlci5wb3N0KCcvJywgKGN0eCwgbmV4dCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgZGF0YSA9IGN0eC5yZXF1ZXN0LmJvZHk7XG4gICAgaWYgKCFkYXRhLm5hbWUgfHwgIWRhdGEucGFzc3dvcmQgfHwgIWRhdGEucGhvbmUpIHtcbiAgICAgICAgY3R4LmJvZHkgPSB7IG1lc3NhZ2U6ICflj4LmlbDmnInor68nIH07XG4gICAgICAgIGN0eC5zdGF0dXMgPSA0MDA7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBpc0V4aXN0ZWQgPSAhISh5aWVsZCBVc2VyRGFvLmZpbmQoeyBwaG9uZTogZGF0YS5waG9uZSB9KSkubGVuZ3RoO1xuICAgICAgICBpZiAoaXNFeGlzdGVkKSB7XG4gICAgICAgICAgICBjdHguYm9keSA9IHsgc3RhdHVzOiAwLCBtZXNzYWdlOiAn6K+l5omL5py65Y+356CB5bey57uP5a2Y5Zyo77yM6K+355u05o6l55m75b2VJyB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcmVzID0geWllbGQgVXNlckRhby5hZGQoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkYXRhKSwgeyBwYXNzd29yZDogbWQ1KGRhdGEucGFzc3dvcmQpIH0pKTtcbiAgICAgICAgICAgIGN0eC5ib2R5ID0geyBzdGF0dXM6IDEsIGRhdGE6IHJlcyB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIHlpZWxkIG5leHQoKTtcbn0pKTtcblVzZXJzQWNjb3VudFJvdXRlci5wb3N0KCcvZGVsZXRlJywgKGN0eCwgbmV4dCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgVXNlckRhby5kZWxldGUoe1xuICAgICAgICBuYW1lOiAnMTIzJyxcbiAgICAgICAgcGFzc3dvcmQ6ICcxMjMnXG4gICAgfSk7XG4gICAgY3R4LmJvZHkgPSAnb2snO1xuICAgIHlpZWxkIG5leHQoKTtcbn0pKTtcblVzZXJzQWNjb3VudFJvdXRlci5nZXQoJy9maW5kJywgKGN0eCwgbmV4dCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgZGF0YSA9IGN0eC5yZXF1ZXN0LmJvZHk7XG4gICAgaWYgKCFkYXRhLnBob25lKSB7XG4gICAgICAgIGN0eC5ib2R5ID0geyBlcnI6ICflj4LmlbDmnInor68nIH07XG4gICAgICAgIGN0eC5zdGF0dXMgPSA0MDA7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCByZXMgPSB5aWVsZCBVc2VyRGFvLmZpbmQoT2JqZWN0LmFzc2lnbih7fSwgZGF0YSkpO1xuICAgICAgICBjdHguYm9keSA9IHJlcztcbiAgICB9XG4gICAgeWllbGQgbmV4dCgpO1xufSkpO1xuVXNlcnNBY2NvdW50Um91dGVyLnBvc3QoJy9sb2dpbicsIChjdHgsIG5leHQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IGRhdGEgPSBjdHgucmVxdWVzdC5ib2R5O1xuICAgIGlmICghZGF0YS5waG9uZSB8fCAhZGF0YS5wYXNzd29yZCkge1xuICAgICAgICBjdHguYm9keSA9IHsgc3RhdHVzOiAwLCBtZXNzYWdlOiAn5Y+C5pWw5pyJ6K+vJyB9O1xuICAgICAgICBjdHguc3RhdHVzID0gNDAwO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgcmVjb3JkID0geWllbGQgVXNlckRhby5maW5kKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGF0YSksIHsgcGFzc3dvcmQ6IG1kNShkYXRhLnBhc3N3b3JkKSB9KSk7XG4gICAgICAgIGlmICghIXJlY29yZC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gY3JlYXRlVG9rZW4oe1xuICAgICAgICAgICAgICAgIHBob25lOiBkYXRhLnBob25lLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBtZDUoZGF0YS5wYXNzd29yZClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgZGQgPSB5aWVsZCBEQi5maW5kKENvbGxlY3Rpb25OYW1lLmRkVG9rZW5QaG9uZU1hcCwgeyBwaG9uZTogZGF0YS5waG9uZSB9KTtcbiAgICAgICAgICAgIHN5bmNocm9uaXphdGlvbihkZFswXS50b2tlbiwgZGF0YS5waG9uZSk7XG4gICAgICAgICAgICBjdHguYm9keSA9IHsgc3RhdHVzOiAxLCBkYXRhOiB7IHRva2VuIH0gfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGN0eC5ib2R5ID0geyBzdGF0dXM6IDAsIG1lc3NhZ2U6ICfotKblj7fmiJblr4bnoIHplJnor68nIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgeWllbGQgbmV4dCgpO1xufSkpO1xuVXNlcnNBY2NvdW50Um91dGVyLnBvc3QoJy9xcmNvZGUvbG9naW4nLCAoY3R4LCBuZXh0KSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCBkYXRhID0gY3R4LnJlcXVlc3QuYm9keTtcbiAgICBjb25zdCBpbyA9IGdsb2JhbFsnaW8nXTtcbiAgICBpZiAoIWRhdGEudXVpZCB8fCAhZGF0YS5waG9uZSkge1xuICAgICAgICBjdHguYm9keSA9IHsgc3RhdHVzOiAwLCBtZXNzYWdlOiAn5Y+C5pWw5pyJ6K+vJyB9O1xuICAgICAgICBjdHguc3RhdHVzID0gNDAwO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc3Qgc29ja2V0SWQgPSB5aWVsZCBSZWRpcy5nZXQoZGF0YS51dWlkKTtcbiAgICAgICAgaWYgKGlzTnVsbChzb2NrZXRJZCkpIHtcbiAgICAgICAgICAgIGN0eC5ib2R5ID0ge1xuICAgICAgICAgICAgICAgIHN0YXR1czogMCxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfkuoznu7TnoIHlt7Lnu4/ov4fmnJ/vvIzor7fph43mlrDojrflj5YnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY29yZCA9IHlpZWxkIERCLmZpbmQoQ29sbGVjdGlvbk5hbWUudXNlcnMsIHtcbiAgICAgICAgICAgICAgICBwaG9uZTogZGF0YS5waG9uZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoISFyZWNvcmQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b2tlbiA9IGNyZWF0ZVRva2VuKHtcbiAgICAgICAgICAgICAgICAgICAgcGhvbmU6IGRhdGEucGhvbmUsXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiByZWNvcmRbMF0ucGFzc3dvcmRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpby5zb2NrZXRzLnRvKHNvY2tldElkKS5lbWl0KCdxcmNvZGUtdXNlck1zZycsIHsgdG9rZW4gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpby5zb2NrZXRzLnRvKHNvY2tldElkKS5lbWl0KCdxcmNvZGUtdXNlck1zZycsIHsgcGhvbmU6IGRhdGEucGhvbmUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdHguYm9keSA9IHtcbiAgICAgICAgICAgICAgICBzdGF0dXM6IDEsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn5omr56CB5oiQ5YqfJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG59KSk7XG5Vc2Vyc0FjY291bnRSb3V0ZXIucG9zdCgnL2RkVG9rZW4vOnR5cGUnLCAoY3R4LCBuZXh0KSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCB0eXBlID0gY3R4LnBhcmFtcy50eXBlO1xuICAgIGNvbnN0IGRhdGEgPSBjdHgucmVxdWVzdC5ib2R5O1xuICAgIGlmICh0eXBlID09PSAnYWRkJykge1xuICAgICAgICB5aWVsZCBEQi5pbnNlcnQoQ29sbGVjdGlvbk5hbWUuZGRUb2tlblBob25lTWFwLCBPYmplY3QuYXNzaWduKHt9LCBkYXRhKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCByZXMgPSB5aWVsZCBEQi5maW5kKENvbGxlY3Rpb25OYW1lLmRkVG9rZW5QaG9uZU1hcCwgeyBwaG9uZTogZGF0YS5waG9uZSB9KTtcbiAgICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgICAgIHlpZWxkIERCLmluc2VydChDb2xsZWN0aW9uTmFtZS5kZFRva2VuUGhvbmVNYXAsIE9iamVjdC5hc3NpZ24oe30sIGRhdGEpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHlpZWxkIERCLnVwZGF0ZU9uZShDb2xsZWN0aW9uTmFtZS5kZFRva2VuUGhvbmVNYXAsIHsgcGhvbmU6IGRhdGEucGhvbmUgfSwgeyB0b2tlbjogZGF0YS50b2tlbiB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjdHguYm9keSA9ICdzdWNjZXNzJztcbiAgICB5aWVsZCBuZXh0KCk7XG59KSk7XG5Vc2Vyc0FjY291bnRSb3V0ZXIuZ2V0KCcvZGRUb2tlbicsIChjdHgsIG5leHQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IGRhdGEgPSBjdHgucmVxdWVzdC5xdWVyeTtcbiAgICBjb25zdCBwaG9uZSA9IHlpZWxkIGdldFBob25lQnlUb2tlbihkYXRhLnRva2VuKTtcbiAgICBjb25zdCByZXMgPSB5aWVsZCBEQi5maW5kKENvbGxlY3Rpb25OYW1lLmRkVG9rZW5QaG9uZU1hcCwgeyBwaG9uZSB9KTtcbiAgICBjdHguYm9keSA9IHtcbiAgICAgICAgc3RhdHVzOiAxLFxuICAgICAgICBkYXRhOiB7IHRva2VuOiByZXNbMF0udG9rZW4gfVxuICAgIH07XG59KSk7XG5Vc2Vyc0FjY291bnRSb3V0ZXIucG9zdCgnL2FwcGxldExvZ2luJywgKGN0eCwgbmV4dCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgZGF0YSA9IGN0eC5yZXF1ZXN0LmJvZHk7XG4gICAgY29uc3QgZGV2aWNlaWQgPSB1dWlkVjEoKTtcbiAgICBjb25zdCBwYXJhbXMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGF0YSksIGNvbmZpZy5sb2dpbkFyZ3MpLCB7IGRldmljZWlkIH0pO1xuICAgIGNvbnN0IHJlcyA9IHlpZWxkIGxvZ2luT25BcHAocGFyYW1zKTtcbiAgICBsZXQgdG9rZW47XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY29yZCA9IHlpZWxkIERCLmZpbmQoQ29sbGVjdGlvbk5hbWUuZGRUb2tlblBob25lTWFwLCB7IHBob25lOiBkYXRhLnBob25lIH0pO1xuICAgICAgICAgICAgaWYgKCFyZWNvcmQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgREIuaW5zZXJ0KENvbGxlY3Rpb25OYW1lLmRkVG9rZW5QaG9uZU1hcCwgeyBwaG9uZTogZGF0YS5waG9uZSwgdG9rZW46IHJlcy5kYXRhLnRva2VuIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgeWllbGQgREIudXBkYXRlT25lKENvbGxlY3Rpb25OYW1lLmRkVG9rZW5QaG9uZU1hcCwgeyBwaG9uZTogZGF0YS5waG9uZSB9LCB7IHRva2VuOiByZXMuZGF0YS50b2tlbiwgZGV2aWNlaWQgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB1c2VyUmVjb3JkID0geWllbGQgREIuZmluZChDb2xsZWN0aW9uTmFtZS51c2VycywgeyBwaG9uZTogZGF0YS5waG9uZSB9KTtcbiAgICAgICAgICAgIGlmICghdXNlclJlY29yZC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBEQi5pbnNlcnQoQ29sbGVjdGlvbk5hbWUudXNlcnMsIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3VzZXInLFxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogbWQ1KGRhdGEucGhvbmUpLFxuICAgICAgICAgICAgICAgICAgICBwaG9uZTogZGF0YS5waG9uZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG9rZW4gPSBjcmVhdGVUb2tlbih7XG4gICAgICAgICAgICAgICAgcGhvbmU6IGRhdGEucGhvbmUsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IG1kNShkYXRhLnBob25lKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB5aWVsZCBzeW5jaHJvbml6YXRpb24ocmVzLmRhdGEudG9rZW4sIGRhdGEucGhvbmUpO1xuICAgICAgICB9XG4gICAgICAgIGN0eC5ib2R5ID0ge1xuICAgICAgICAgICAgZGF0YTogeyB0b2tlbiB9LFxuICAgICAgICAgICAgc3RhdHVzOiAxXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNhdGNoIChfYSkge1xuICAgICAgICBjdHguYm9keSA9IHtcbiAgICAgICAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24oe30sIHJlcyksXG4gICAgICAgICAgICBzdGF0dXM6IDJcbiAgICAgICAgfTtcbiAgICB9XG59KSk7XG5Vc2Vyc0FjY291bnRSb3V0ZXIucG9zdCgnL2Zhc3QtbG9naW4nLCAoY3R4LCBuZXh0KSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCBkYXRhID0gY3R4LnJlcXVlc3QuYm9keTtcbiAgICBpZiAoIWRhdGEucGhvbmUpIHtcbiAgICAgICAgY3R4LmJvZHkgPSB7IG1lc3NhZ2U6ICflj4LmlbDmnInor68nIH07XG4gICAgICAgIGN0eC5zdGF0dXMgPSA0MDA7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCByZWNvcmQgPSB5aWVsZCBEQi5maW5kKENvbGxlY3Rpb25OYW1lLnVzZXJzLCB7IHBob25lOiBkYXRhLnBob25lIH0pO1xuICAgICAgICBpZiAoISFyZWNvcmQubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IGNyZWF0ZVRva2VuKHtcbiAgICAgICAgICAgICAgICBwaG9uZTogcmVjb3JkWzBdLnBob25lLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiByZWNvcmRbMF0ucGFzc3dvcmRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY3R4LmJvZHkgPSB7XG4gICAgICAgICAgICAgICAgZGF0YTogeyB0b2tlbiB9LFxuICAgICAgICAgICAgICAgIHN0YXR1czogMVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGN0eC5ib2R5ID0ge1xuICAgICAgICAgICAgICAgIGRhdGE6IHsgdG9rZW46ICcnIH0sXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxufSkpO1xuVXNlcnNBY2NvdW50Um91dGVyLnBvc3QoJy9sb2dpbi1mcm9tLWdvbmdab25nSGFvJywgKGN0eCwgbmV4dCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgZGF0YSA9IGN0eC5yZXF1ZXN0LmJvZHk7XG4gICAgY29uc3QgcmVzID0geWllbGQgbG9naW5Gcm9tR29uZ1pvbmdIYW8oZGF0YSk7XG4gICAgaWYgKHJlcy5zdGF0dXMgPT09IDEpIHtcbiAgICAgICAgY3R4LmJvZHkgPSB7XG4gICAgICAgICAgICBkYXRhOiB7IHRva2VuOiByZXMuZGF0YS50b2tlbiB9LFxuICAgICAgICAgICAgc3RhdHVzOiAwXG4gICAgICAgIH07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjdHguYm9keSA9IHtcbiAgICAgICAgICAgIGRhdGE6IHsgdG9rZW46ICcnIH0sXG4gICAgICAgICAgICBzdGF0dXM6IDBcbiAgICAgICAgfTtcbiAgICB9XG59KSk7XG5leHBvcnQgZGVmYXVsdCBVc2Vyc0FjY291bnRSb3V0ZXI7XG4iLCJpbXBvcnQgeyBfX2F3YWl0ZXIgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSAna29hLXJvdXRlcic7XG5pbXBvcnQgREIgZnJvbSAnQG1vbmdvZGIvZGInO1xuaW1wb3J0IHsgQ29sbGVjdGlvbk5hbWUgfSBmcm9tICdAY29uc3RhbnQvaW5kZXgnO1xuaW1wb3J0IHsgZ2V0UGhvbmVCeVRva2VuLCBnZXREZFRva2VuQnlUb2tlbiB9IGZyb20gJ0B1dGlscy9jb21tb25zJztcbmltcG9ydCB7IGdldEN1c3RvbWVySW5mbywgZ2V0SGlzdG9yeU9yZGVyQ29zdCwgZ2V0SGlzdG9yeU9yZGVyIH0gZnJvbSAnQHNlcnZpY2UvYXBpL3VzZXJzQXBpJztcbmNvbnN0IFVzZXJzSW5mb1JvdXRlciA9IG5ldyBSb3V0ZXIoKTtcblVzZXJzSW5mb1JvdXRlci5nZXQoJy8nLCAoY3R4LCBuZXh0KSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCBkYXRhID0gY3R4LnJlcXVlc3QucXVlcnk7XG4gICAgY29uc3QgcGhvbmUgPSB5aWVsZCBnZXRQaG9uZUJ5VG9rZW4oZGF0YS50b2tlbik7XG4gICAgY29uc3QgZGRUb2tlbiA9IHlpZWxkIGdldERkVG9rZW5CeVRva2VuKGRhdGEudG9rZW4pO1xuICAgIGNvbnN0IHJlcyA9IHlpZWxkIERCLmZpbmQoQ29sbGVjdGlvbk5hbWUudXNlckluZm8sIHsgcGhvbmUgfSk7XG4gICAgbGV0IGluZm87XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKCFyZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpbmZvID0geWllbGQgZ2V0Q3VzdG9tZXJJbmZvKHsgdG9rZW46IGRkVG9rZW4gfSk7XG4gICAgICAgICAgICB5aWVsZCBEQi5pbnNlcnQoQ29sbGVjdGlvbk5hbWUudXNlckluZm8sIE9iamVjdC5hc3NpZ24oe30sIGluZm8uZGF0YSkpO1xuICAgICAgICB9XG4gICAgICAgIGN0eC5ib2R5ID0geyBzdGF0dXM6IDEsIGRhdGE6IHJlc1swXSB8fCBpbmZvLmRhdGEgfTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICBjdHguYm9keSA9IHsgc3RhdHVzOiAwLCBlcnIgfTtcbiAgICB9XG4gICAgeWllbGQgbmV4dCgpO1xufSkpO1xuVXNlcnNJbmZvUm91dGVyLmdldCgnL3N1bW1hcnlDYXJOdW0nLCAoY3R4LCBuZXh0KSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCBkYXRhID0gY3R4LnJlcXVlc3QucXVlcnk7XG4gICAgbGV0IG9iaiA9IHt9O1xuICAgIGZ1bmN0aW9uIHN1bW1hcnlDYXJOdW0oaXRlbSkge1xuICAgICAgICBpZiAoISFvYmpbaXRlbS5jYXJOdW1dKSB7XG4gICAgICAgICAgICBvYmpbaXRlbS5jYXJOdW1dLnB1c2goaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvYmpbaXRlbS5jYXJOdW1dID0gW2l0ZW1dO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBob25lID0geWllbGQgZ2V0UGhvbmVCeVRva2VuKGRhdGEudG9rZW4pO1xuICAgIGxldCByZWNvcmQ7XG4gICAgcmVjb3JkID0geWllbGQgREIuZmluZChDb2xsZWN0aW9uTmFtZS5kcml2ZUNhck51bXMsIHsgcGhvbmUgfSk7XG4gICAgaWYgKCFyZWNvcmQubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGxpc3QgPSB5aWVsZCBEQi5maW5kKENvbGxlY3Rpb25OYW1lLmpvdXJuZXksIHsgcGhvbmUgfSk7XG4gICAgICAgIGxpc3RbMF0uZGF0YS5mb3JFYWNoKHYgPT4ge1xuICAgICAgICAgICAgc3VtbWFyeUNhck51bSh2KTtcbiAgICAgICAgfSk7XG4gICAgICAgIERCLmluc2VydChDb2xsZWN0aW9uTmFtZS5kcml2ZUNhck51bXMsIHsgZGF0YTogb2JqLCBwaG9uZSB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG9iaiA9IHJlY29yZDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgY3R4LmJvZHkgPSB7IHN0YXR1czogMSwgZGF0YTogcmVjb3JkWzBdLmRhdGEgfTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICBjdHguYm9keSA9IHsgc3RhdHVzOiAwLCBlcnIgfTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgY3R4LmJvZHkgPSB7IHN0YXR1czogMSwgZGF0YTogb2JqWzBdLmRhdGEgfTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICBjdHguYm9keSA9IHsgc3RhdHVzOiAwLCBlcnIgfTtcbiAgICB9XG4gICAgeWllbGQgbmV4dCgpO1xufSkpO1xuVXNlcnNJbmZvUm91dGVyLmdldCgnL2Nvc3QnLCAoY3R4LCBuZXh0KSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCBkYXRhID0gY3R4LnJlcXVlc3QucXVlcnk7XG4gICAgY29uc3QgcGhvbmUgPSB5aWVsZCBnZXRQaG9uZUJ5VG9rZW4oZGF0YS50b2tlbik7XG4gICAgY29uc3QgcmVjb3JkID0geWllbGQgREIuZmluZChDb2xsZWN0aW9uTmFtZS5jb3N0LCB7IHBob25lIH0pO1xuICAgIGZ1bmN0aW9uIHN1bW1hcnlNb250aChyZXMpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IFtdO1xuICAgICAgICByZXMuZm9yRWFjaCh2ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSB2LnRha2VUaW1lLnN1YnN0cigwLCA3KTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRNb250aElkeCA9IGRhdGEuZmluZEluZGV4KHYgPT4gT2JqZWN0LmtleXModikuaW5jbHVkZXMoZGF0ZSkpO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRNb250aElkeCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgZGF0YVtjdXJyZW50TW9udGhJZHhdW2RhdGVdICs9IHYudG90YWxQYXltZW50cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgICAgICAgICAgICAgIG9ialtkYXRlXSA9IDA7XG4gICAgICAgICAgICAgICAgZGF0YS5wdXNoKG9iaik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgaWYgKCFyZWNvcmQubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGRkVG9rZW4gPSB5aWVsZCBnZXREZFRva2VuQnlUb2tlbihkYXRhLnRva2VuKTtcbiAgICAgICAgY29uc3QgcmVzID0geWllbGQgZ2V0SGlzdG9yeU9yZGVyQ29zdCh7XG4gICAgICAgICAgICB0b2tlbjogZGRUb2tlbixcbiAgICAgICAgICAgIGxhbmc6ICdjbidcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAxKSB7XG4gICAgICAgICAgICB5aWVsZCBEQi5pbnNlcnQoQ29sbGVjdGlvbk5hbWUuY29zdCwgeyBwaG9uZSwgZGF0YTogcmVzLmRhdGEgfSk7XG4gICAgICAgICAgICBjdHguYm9keSA9IHsgc3RhdHVzOiAxLCBkYXRhOiBzdW1tYXJ5TW9udGgocmVzLmRhdGEpIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjdHguYm9keSA9IHsgc3RhdHVzOiAyLCBtZXNzYWdlOiAn5rKh5p2D6ZmQJyB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjdHguYm9keSA9IHsgc3RhdHVzOiAxLCBkYXRhOiBzdW1tYXJ5TW9udGgocmVjb3JkWzBdLmRhdGEpIH07XG4gICAgfVxuICAgIHlpZWxkIG5leHQoKTtcbn0pKTtcblVzZXJzSW5mb1JvdXRlci5nZXQoJy9nZXRBY2NvdW50JywgKGN0eCwgbmV4dCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgZGF0YSA9IGN0eC5yZXF1ZXN0LnF1ZXJ5O1xuICAgIGNvbnN0IHBob25lID0geWllbGQgZ2V0UGhvbmVCeVRva2VuKGRhdGEudG9rZW4pO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlY29yZCA9IHlpZWxkIERCLmZpbmQoQ29sbGVjdGlvbk5hbWUuYWNjb3VudCwgeyBwaG9uZSB9KTtcbiAgICAgICAgY3R4LmJvZHkgPSB7IHN0YXR1czogMSwgZGF0YTogcmVjb3JkWzBdLmRhdGEgfTtcbiAgICB9XG4gICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgIGN0eC5ib2R5ID0geyBzdGF0dXM6IDAsIG1lc3NhZ2U6ICfojrflj5blpLHotKUnIH07XG4gICAgfVxufSkpO1xuVXNlcnNJbmZvUm91dGVyLnBvc3QoJy9lZGl0LWF2YXRhcicsIChjdHgsIG5leHQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IGRhdGEgPSBjdHgucmVxdWVzdC5ib2R5O1xuICAgIGlmICghZGF0YS51cmxQYXRoKSB7XG4gICAgICAgIGN0eC5ib2R5ID0geyBtZXNzYWdlOiAn5Y+C5pWw5pyJ6K+vJyB9O1xuICAgICAgICBjdHguc3RhdHVzID0gNDAwO1xuICAgIH1cbiAgICBjb25zdCBwaG9uZSA9IHlpZWxkIGdldFBob25lQnlUb2tlbihkYXRhLnRva2VuKTtcbiAgICB0cnkge1xuICAgICAgICB5aWVsZCBEQi51cGRhdGVPbmUoQ29sbGVjdGlvbk5hbWUudXNlckluZm8sIHsgcGhvbmUgfSwgeyBpbWc6IGRhdGEudXJsUGF0aCB9KTtcbiAgICAgICAgY3R4LmJvZHkgPSB7IHN0YXR1czogMSwgbWVzc2FnZTogJ+S/ruaUueaIkOWKnycgfTtcbiAgICB9XG4gICAgY2F0Y2ggKF9iKSB7XG4gICAgICAgIGN0eC5ib2R5ID0geyBzdGF0dXM6IDAsIG1lc3NhZ2U6ICfkv67mlLnlpLHotKUnIH07XG4gICAgfVxufSkpO1xuVXNlcnNJbmZvUm91dGVyLnBvc3QoJy9lZGl0LW5pY2tuYW1lJywgKGN0eCwgbmV4dCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgZGF0YSA9IGN0eC5yZXF1ZXN0LmJvZHk7XG4gICAgaWYgKCFkYXRhLm5pY2tuYW1lKSB7XG4gICAgICAgIGN0eC5ib2R5ID0geyBtZXNzYWdlOiAn5Y+C5pWw5pyJ6K+vJyB9O1xuICAgICAgICBjdHguc3RhdHVzID0gNDAwO1xuICAgIH1cbiAgICBjb25zdCBwaG9uZSA9IHlpZWxkIGdldFBob25lQnlUb2tlbihkYXRhLnRva2VuKTtcbiAgICB0cnkge1xuICAgICAgICB5aWVsZCBEQi51cGRhdGVPbmUoQ29sbGVjdGlvbk5hbWUudXNlckluZm8sIHsgcGhvbmUgfSwgeyBuaWNlTmFtZTogZGF0YS5uaWNrbmFtZSB9KTtcbiAgICAgICAgY3R4LmJvZHkgPSB7IHN0YXR1czogMSwgbWVzc2FnZTogJ+S/ruaUueaIkOWKnycgfTtcbiAgICB9XG4gICAgY2F0Y2ggKF9jKSB7XG4gICAgICAgIGN0eC5ib2R5ID0geyBzdGF0dXM6IDAsIG1lc3NhZ2U6ICfkv67mlLnlpLHotKUnIH07XG4gICAgfVxufSkpO1xuVXNlcnNJbmZvUm91dGVyLmdldCgnL2pvdXJuZXknLCAoY3R4LCBuZXh0KSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCBkYXRhID0gY3R4LnJlcXVlc3QucXVlcnk7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcGhvbmUgPSB5aWVsZCBnZXRQaG9uZUJ5VG9rZW4oZGF0YS50b2tlbik7XG4gICAgICAgIGxldCByZXMgPSB5aWVsZCBEQi5maW5kKENvbGxlY3Rpb25OYW1lLmpvdXJuZXksIHsgcGhvbmUgfSk7XG4gICAgICAgIGlmICghcmVzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgZGRUb2tlbiA9IHlpZWxkIGdldERkVG9rZW5CeVRva2VuKGRhdGEudG9rZW4pO1xuICAgICAgICAgICAgY29uc3QgbGlzdCA9IHlpZWxkIGdldEhpc3RvcnlPcmRlcih7XG4gICAgICAgICAgICAgICAgcGFnZU5vOiAxLFxuICAgICAgICAgICAgICAgIHBhZ2VTaXplOiAxMDAwMDAsXG4gICAgICAgICAgICAgICAgdG9rZW46IGRkVG9rZW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgREIuaW5zZXJ0TWFueShDb2xsZWN0aW9uTmFtZS5qb3VybmV5LCBsaXN0LmRhdGEpO1xuICAgICAgICAgICAgY3R4LmJvZHkgPSB7IHN0YXR1czogMSwgZGF0YTogbGlzdC5kYXRhWzBdLmRhdGEgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGN0eC5ib2R5ID0geyBzdGF0dXM6IDEsIGRhdGE6IHJlc1swXS5kYXRhIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2ggKF9kKSB7XG4gICAgICAgIGN0eC5ib2R5ID0geyBzdGF0dXM6IDAsIG1lc3NhZ2U6ICfojrflj5blpLHotKUnIH07XG4gICAgfVxuICAgIHlpZWxkIG5leHQoKTtcbn0pKTtcbmV4cG9ydCBkZWZhdWx0IFVzZXJzSW5mb1JvdXRlcjtcbiIsImltcG9ydCB7IF9fYXdhaXRlciB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IFJvdXRlciBmcm9tICdrb2Etcm91dGVyJztcbmltcG9ydCB7IGdldEFyb3VuZCwgZ2V0U3RhdGlvbkNhciwgZ2V0SGlzdG9yeVJldHVyblBvc2l0aW9uLCBnZXRMaW1pdCB9IGZyb20gJ0BzZXJ2aWNlL2FwaS9jYXJzSW5mb0FwaSc7XG5jb25zdCBDYXJJbmZvUm91dGVyID0gbmV3IFJvdXRlcigpO1xuQ2FySW5mb1JvdXRlci5wb3N0KCcvZ2V0QXJvdW5kJywgKGN0eCwgbmV4dCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgZGF0YSA9IGN0eC5yZXF1ZXN0LmJvZHk7XG4gICAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkYXRhKSwgeyBsYW5nOiAnY24nIH0pO1xuICAgIGNvbnN0IHJlcyA9IHlpZWxkIGdldEFyb3VuZChwYXJhbXMpO1xuICAgIGN0eC5ib2R5ID0gT2JqZWN0LmFzc2lnbih7fSwgcmVzKTtcbn0pKTtcbkNhckluZm9Sb3V0ZXIucG9zdCgnL2dldFN0YXRpb25DYXInLCAoY3R4LCBuZXh0KSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCBkYXRhID0gY3R4LnJlcXVlc3QuYm9keTtcbiAgICBjb25zdCBwYXJhbXMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGRhdGEpLCB7IGxhbmc6ICdjbicgfSk7XG4gICAgY29uc3QgcmVzID0geWllbGQgZ2V0U3RhdGlvbkNhcihwYXJhbXMpO1xuICAgIGN0eC5ib2R5ID0gT2JqZWN0LmFzc2lnbih7fSwgcmVzKTtcbn0pKTtcbkNhckluZm9Sb3V0ZXIucG9zdCgnL2dldEhpc3RvcnlSZXR1cm5Qb3NpdGlvbicsIChjdHgsIG5leHQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IGRhdGEgPSBjdHgucmVxdWVzdC5ib2R5O1xuICAgIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGF0YSksIHsgbGFuZzogJ2NuJyB9KTtcbiAgICBjb25zdCByZXMgPSB5aWVsZCBnZXRIaXN0b3J5UmV0dXJuUG9zaXRpb24ocGFyYW1zKTtcbiAgICBjdHguYm9keSA9IE9iamVjdC5hc3NpZ24oe30sIHJlcyk7XG59KSk7XG5DYXJJbmZvUm91dGVyLnBvc3QoJy9nZXRMaW1pdCcsIChjdHgsIG5leHQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IGRhdGEgPSBjdHgucmVxdWVzdC5ib2R5O1xuICAgIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGF0YSksIHsgbGFuZzogJ2NuJyB9KTtcbiAgICBjb25zdCByZXMgPSB5aWVsZCBnZXRMaW1pdChwYXJhbXMpO1xuICAgIGN0eC5ib2R5ID0gT2JqZWN0LmFzc2lnbih7fSwgcmVzKTtcbn0pKTtcbmV4cG9ydCBkZWZhdWx0IENhckluZm9Sb3V0ZXI7XG4iLCJpbXBvcnQgeyBfX2F3YWl0ZXIgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSAna29hLXJvdXRlcic7XG5pbXBvcnQgeyBzZW5kQ29udHJvbENvZGUsIHJldHVybkNhciwgY2hhbmdlUmV0dXJuU3RhdGlvbiB9IGZyb20gJ0BzZXJ2aWNlL2FwaS9jb250cm9sQ2FyJztcbmNvbnN0IENvbW1hbmRDb250cm9sUm91dGVyID0gbmV3IFJvdXRlcigpO1xuQ29tbWFuZENvbnRyb2xSb3V0ZXIucG9zdCgnL2NvbnRyb2xDYXInLCAoY3R4LCBuZXh0KSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCBkYXRhID0gY3R4LnJlcXVlc3QuYm9keTtcbiAgICBjb25zdCBwYXJhbXMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGRhdGEpLCB7IGxhbmc6ICdjbicgfSk7XG4gICAgY29uc3QgcmVzID0geWllbGQgc2VuZENvbnRyb2xDb2RlKHBhcmFtcyk7XG4gICAgY3R4LmJvZHkgPSBPYmplY3QuYXNzaWduKHt9LCByZXMpO1xufSkpO1xuQ29tbWFuZENvbnRyb2xSb3V0ZXIucG9zdCgnL3JldHVybkNhcicsIChjdHgsIG5leHQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IGRhdGEgPSBjdHgucmVxdWVzdC5ib2R5O1xuICAgIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGF0YSksIHsgbGFuZzogJ2NuJyB9KTtcbiAgICBjb25zdCByZXMgPSB5aWVsZCByZXR1cm5DYXIocGFyYW1zKTtcbiAgICBjdHguYm9keSA9IE9iamVjdC5hc3NpZ24oe30sIHJlcyk7XG59KSk7XG5Db21tYW5kQ29udHJvbFJvdXRlci5wb3N0KCcvY2hhbmdlUmV0dXJuU3RhdGlvbicsIChjdHgsIG5leHQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IGRhdGEgPSBjdHgucmVxdWVzdC5ib2R5O1xuICAgIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGF0YSksIHsgbGFuZzogJ2NuJyB9KTtcbiAgICBjb25zdCByZXMgPSB5aWVsZCBjaGFuZ2VSZXR1cm5TdGF0aW9uKHBhcmFtcyk7XG4gICAgY3R4LmJvZHkgPSBPYmplY3QuYXNzaWduKHt9LCByZXMpO1xufSkpO1xuZXhwb3J0IGRlZmF1bHQgQ29tbWFuZENvbnRyb2xSb3V0ZXI7XG4iLCJpbXBvcnQgeyBfX2F3YWl0ZXIgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSAna29hLXJvdXRlcic7XG5pbXBvcnQgeyBnZXRJbmZvIH0gZnJvbSAnQHNlcnZpY2UvYXBpL2FmdGVyQm9va0Nhcic7XG5jb25zdCBPcmRlckluZm9Sb3V0ZXIgPSBuZXcgUm91dGVyKCk7XG5PcmRlckluZm9Sb3V0ZXIucG9zdCgnL2dldENhckluZm8nLCAoY3R4LCBuZXh0KSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCBkYXRhID0gY3R4LnJlcXVlc3QuYm9keTtcbiAgICBjb25zdCBwYXJhbXMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGRhdGEpLCB7IGxhbmc6ICdjbicgfSk7XG4gICAgY29uc3QgcmVzID0geWllbGQgZ2V0SW5mbyhwYXJhbXMpO1xuICAgIGN0eC5ib2R5ID0gT2JqZWN0LmFzc2lnbih7fSwgcmVzKTtcbn0pKTtcbmV4cG9ydCBkZWZhdWx0IE9yZGVySW5mb1JvdXRlcjtcbiIsImltcG9ydCB7IF9fYXdhaXRlciB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IFJvdXRlciBmcm9tICdrb2Etcm91dGVyJztcbmltcG9ydCB1dWlkVjEgZnJvbSAndXVpZC92MSc7XG5pbXBvcnQgeyBxaW5pdVVwbG9hZCwgZGVsYXkgfSBmcm9tICdAdXRpbHMvY29tbW9ucyc7XG5pbXBvcnQgY29uZmlnIGZyb20gJ0Bjb25maWcvaW5kZXgnO1xuaW1wb3J0IERCIGZyb20gJ0Btb25nb2RiL2RiJztcbmltcG9ydCB7IENvbGxlY3Rpb25OYW1lIH0gZnJvbSAnQGNvbnN0YW50L2luZGV4JztcbmltcG9ydCB7IGxvZ2luT25BcHAsIGdldEN1c3RvbWVySW5mbywgZ2V0QWNjb3VudCwgZ2V0VmVyaWZ5LCBnZXRIaXN0b3J5T3JkZXIsIGdldEhpc3RvcnlPcmRlckNvc3QsIGdldEltYWdlVmVyaWZ5Q29kZSB9IGZyb20gJ0BzZXJ2aWNlL2FwaS91c2Vyc0FwaSc7XG5pbXBvcnQgRGIgZnJvbSAnQG1vbmdvZGIvZGInO1xuY29uc3QgVXNlckluZm9Sb3V0ZXIgPSBuZXcgUm91dGVyKCk7XG5Vc2VySW5mb1JvdXRlci5wb3N0KCcvbG9naW4nLCAoY3R4LCBuZXh0KSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCBkYXRhID0gY3R4LnJlcXVlc3QuYm9keTtcbiAgICBjb25zdCBwYXJhbXMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGRhdGEpLCB7IGxhbmc6ICdjbicgfSk7XG4gICAgY29uc3QgcmVzID0geWllbGQgbG9naW5PbkFwcChwYXJhbXMpO1xuICAgIGxldCBkYlN0YXR1cztcbiAgICBpZiAocmVzLnN0YXR1cyA9PT0gMSkge1xuICAgICAgICBjb25zdCByZWNvcmQgPSB5aWVsZCBEQi5maW5kKENvbGxlY3Rpb25OYW1lLmRkVG9rZW5QaG9uZU1hcCwgeyBwaG9uZTogZGF0YS5waG9uZSB9KTtcbiAgICAgICAgaWYgKCFyZWNvcmQubGVuZ3RoKSB7XG4gICAgICAgICAgICBkYlN0YXR1cyA9IHlpZWxkIERCLmluc2VydChDb2xsZWN0aW9uTmFtZS5kZFRva2VuUGhvbmVNYXAsIE9iamVjdC5hc3NpZ24oe30sIGRhdGEpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRiU3RhdHVzID0geWllbGQgREIudXBkYXRlT25lKENvbGxlY3Rpb25OYW1lLmRkVG9rZW5QaG9uZU1hcCwgeyBwaG9uZTogZGF0YS5waG9uZSB9LCB7IHRva2VuOiBkYXRhLnRva2VuIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChkYlN0YXR1cyAmJiBkYlN0YXR1c1snc3RhdHVzJ10gPT09ICdzdWNjZXNzJykge1xuICAgICAgICBjdHguYm9keSA9IHtcbiAgICAgICAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24oe30sIHJlcyksXG4gICAgICAgICAgICBzdGF0dXM6IDFcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGN0eC5ib2R5ID0ge1xuICAgICAgICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih7fSwgcmVzKSxcbiAgICAgICAgICAgIHN0YXR1czogMlxuICAgICAgICB9O1xuICAgIH1cbn0pKTtcblVzZXJJbmZvUm91dGVyLnBvc3QoJy9nZXRWZXJpZnknLCAoY3R4LCBuZXh0KSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCBkYXRhID0gY3R4LnJlcXVlc3QuYm9keTtcbiAgICBjb25zdCBwYXJhbXMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGRhdGEpLCB7IGxhbmc6ICdjbicgfSk7XG4gICAgY29uc3QgcmVzID0geWllbGQgZ2V0VmVyaWZ5KHBhcmFtcyk7XG4gICAgY3R4LmJvZHkgPSBPYmplY3QuYXNzaWduKHt9LCByZXMpO1xufSkpO1xuVXNlckluZm9Sb3V0ZXIucG9zdCgnL2dldEltYWdlVmVyaWZ5Q29kZScsIChjdHgsIG5leHQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHZlcmlmeUlkOiB1dWlkVjEoKSxcbiAgICAgICAgcGF0aDogJy4vJyxcbiAgICAgICAgbmFtZTogJ3ZlcmlmeS5wbmcnXG4gICAgfTtcbiAgICB5aWVsZCBnZXRJbWFnZVZlcmlmeUNvZGUoZGF0YSk7XG4gICAgeWllbGQgZGVsYXkoMjAwKTtcbiAgICBjb25zdCByZXMgPSB5aWVsZCBxaW5pdVVwbG9hZCh7XG4gICAgICAgIGZpbGVQYXRoOiAnLi92ZXJpZnkucG5nJyxcbiAgICAgICAgZmlsZW5hbWU6ICd2ZXJpZnkucG5nJyxcbiAgICAgICAgcHJlZml4OiBgJHt1dWlkVjEoKX0vJHtuZXcgRGF0ZSgpLmdldFRpbWUoKX0veHlgXG4gICAgfSk7XG4gICAgaWYgKHJlcy50eXBlID09PSAnZXJyJykge1xuICAgICAgICBjdHguYm9keSA9IHtcbiAgICAgICAgICAgIHN0YXR1czogMlxuICAgICAgICB9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY3R4LmJvZHkgPSB7XG4gICAgICAgICAgICBzdGF0dXM6IDEsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgdXJsOiBjb25maWcucWluaXUuc291cmNlVXJsICsgcmVzLmtleSxcbiAgICAgICAgICAgICAgICB2ZXJpZnlJZDogZGF0YS52ZXJpZnlJZFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbn0pKTtcblVzZXJJbmZvUm91dGVyLnBvc3QoJy9nZXRDdXN0b21lckluZm8nLCAoY3R4LCBuZXh0KSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCBkYXRhID0gY3R4LnJlcXVlc3QuYm9keTtcbiAgICBjb25zdCBwYXJhbXMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGRhdGEpLCB7IGxhbmc6ICdjbicgfSk7XG4gICAgY29uc3QgcmVzID0geWllbGQgZ2V0Q3VzdG9tZXJJbmZvKHBhcmFtcyk7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QganNvbiA9IHlpZWxkIERiLmZpbmQoQ29sbGVjdGlvbk5hbWUudXNlckluZm8sIHsgaWQ6IHJlcy5kYXRhLmlkIH0pO1xuICAgICAgICBpZiAoIWpzb24ubGVuZ3RoKSB7XG4gICAgICAgICAgICBEYi5pbnNlcnQoQ29sbGVjdGlvbk5hbWUudXNlckluZm8sIHJlcy5kYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoX2EpIHsgfVxuICAgIGN0eC5ib2R5ID0gT2JqZWN0LmFzc2lnbih7fSwgcmVzKTtcbn0pKTtcblVzZXJJbmZvUm91dGVyLnBvc3QoJy9nZXRBY2NvdW50JywgKGN0eCwgbmV4dCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgZGF0YSA9IGN0eC5yZXF1ZXN0LmJvZHk7XG4gICAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkYXRhKSwgeyBsYW5nOiAnY24nIH0pO1xuICAgIGNvbnN0IHJlcyA9IHlpZWxkIGdldEFjY291bnQocGFyYW1zKTtcbiAgICBjdHguYm9keSA9IE9iamVjdC5hc3NpZ24oe30sIHJlcyk7XG59KSk7XG5Vc2VySW5mb1JvdXRlci5wb3N0KCcvZ2V0SGlzdG9yeU9yZGVyJywgKGN0eCwgbmV4dCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgZGF0YSA9IGN0eC5yZXF1ZXN0LmJvZHk7XG4gICAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkYXRhKSwgeyBsYW5nOiAnY24nIH0pO1xuICAgIGNvbnN0IHJlcyA9IHlpZWxkIGdldEhpc3RvcnlPcmRlcihwYXJhbXMpO1xuICAgIGN0eC5ib2R5ID0gT2JqZWN0LmFzc2lnbih7fSwgcmVzKTtcbn0pKTtcblVzZXJJbmZvUm91dGVyLmdldCgnL2dldEhpc3RvcnlPcmRlckNvc3QnLCAoY3R4LCBuZXh0KSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCBkYXRhID0gY3R4LnJlcXVlc3QuYm9keTtcbiAgICBjb25zdCBwYXJhbXMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGRhdGEpLCB7IGxhbmc6ICdjbicgfSk7XG4gICAgY29uc3QgcmVzID0geWllbGQgZ2V0SGlzdG9yeU9yZGVyQ29zdChwYXJhbXMpO1xuICAgIGNvbnN0IHBhcnNlRGF0YSA9IFtdO1xuICAgIHJlcy5kYXRhLmZvckVhY2godiA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IG1vbWVudCh2LnRha2VUaW1lKS5mb3JtYXQoJ1lZLU1NJyk7XG4gICAgICAgIGlmICghcGFyc2VEYXRhLmxlbmd0aCB8fCBwYXJzZURhdGFbcGFyc2VEYXRhLmxlbmd0aCAtIDFdWydkYXRlJ10gIT09IGtleSkge1xuICAgICAgICAgICAgcGFyc2VEYXRhLnB1c2goe1xuICAgICAgICAgICAgICAgIGRhdGU6IGtleSxcbiAgICAgICAgICAgICAgICBjb3N0OiB2LmFjdHVhbFBheW1lbnRzLFxuICAgICAgICAgICAgICAgIHJlYWxseUNvc3Q6IHYuYWN0dWFsUGF5bWVudHMgKiAwLjZcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHBhcnNlRGF0YVtwYXJzZURhdGEubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBpdGVtLmNvc3QgPSB2LmFjdHVhbFBheW1lbnRzICsgaXRlbS5jb3N0O1xuICAgICAgICAgICAgaXRlbS5yZWFsbHlDb3N0ID0gdi5hY3R1YWxQYXltZW50cyAqIDAuNiArIGl0ZW0ucmVhbGx5Q29zdDtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGN0eC5ib2R5ID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCByZXMpLCB7IGRhdGE6IHBhcnNlRGF0YSB9KTtcbn0pKTtcbmV4cG9ydCBkZWZhdWx0IFVzZXJJbmZvUm91dGVyO1xuIiwiaW1wb3J0IHsgcG9zdCB9IGZyb20gJ0B1dGlscy9odHRwJztcbmV4cG9ydCBjb25zdCBnZXRJbmZvID0gZGF0YSA9PiB7XG4gICAgcmV0dXJuIHBvc3QoJ29yZGVyL2dldEluZm8uanNvbicsIGRhdGEpO1xufTtcbiIsImltcG9ydCB7IHBvc3QgfSBmcm9tICdAdXRpbHMvaHR0cCc7XG5leHBvcnQgY29uc3QgZ2V0QXJvdW5kID0gZGF0YSA9PiB7XG4gICAgcmV0dXJuIHBvc3QoJ3N0YXRpb24vZ2V0QXJvdW5kLmpzb24nLCBkYXRhKTtcbn07XG5leHBvcnQgY29uc3QgZ2V0U3RhdGlvbkNhciA9IGRhdGEgPT4ge1xuICAgIHJldHVybiBwb3N0KCd2MS92ZWhpY2xlL3F1ZXJ5U3RhdGlvblZlaGljbGVzLmpzb24nLCBkYXRhKTtcbn07XG5leHBvcnQgY29uc3QgZ2V0SGlzdG9yeVJldHVyblBvc2l0aW9uID0gZGF0YSA9PiB7XG4gICAgcmV0dXJuIHBvc3QoJ29yZGVyL2dldEhpc3RvcnlQYXJrLmpzb24nLCBkYXRhKTtcbn07XG5leHBvcnQgY29uc3QgZ2V0TGltaXQgPSBkYXRhID0+IHtcbiAgICByZXR1cm4gcG9zdCgnc3RhdGlvbi92Mi9nZXRMaW1pdC5qc29uJywgZGF0YSk7XG59O1xuIiwiaW1wb3J0IHsgcG9zdCB9IGZyb20gJ0B1dGlscy9odHRwJztcbmV4cG9ydCBjb25zdCBzZW5kQ29udHJvbENvZGUgPSBkYXRhID0+IHtcbiAgICByZXR1cm4gcG9zdCgndmVoaWNsZS92Mi9zZW5kQ29udHJvbENvZGUuanNvbicsIGRhdGEpO1xufTtcbmV4cG9ydCBjb25zdCByZXR1cm5DYXIgPSBkYXRhID0+IHtcbiAgICByZXR1cm4gcG9zdCgnb3JkZXIvY2hlY2tSZXR1cm5DYXIuZG8nLCBkYXRhKTtcbn07XG5leHBvcnQgY29uc3QgY2hhbmdlUmV0dXJuU3RhdGlvbiA9IGRhdGEgPT4ge1xuICAgIHJldHVybiBwb3N0KCdvcmRlci92MS9jaGFuZ2VSZXR1cm5TdGF0aW9uLmpzb24nLCBkYXRhKTtcbn07XG4iLCJpbXBvcnQgeyBwb3N0LCBkb3dubG9hZCB9IGZyb20gJ0B1dGlscy9odHRwJztcbmV4cG9ydCBjb25zdCBsb2dpbk9uQXBwID0gZGF0YSA9PiB7XG4gICAgcmV0dXJuIHBvc3QoJ2N1c3QvbG9naW4uanNvbicsIGRhdGEpO1xufTtcbmV4cG9ydCBjb25zdCBnZXRWZXJpZnkgPSBkYXRhID0+IHtcbiAgICByZXR1cm4gcG9zdCgndmVyaWZ5L3ZhbGlkYXRlQW5kU2VuZE1zZy5qc29uJywgZGF0YSk7XG59O1xuZXhwb3J0IGNvbnN0IGdldEltYWdlVmVyaWZ5Q29kZSA9IGRhdGEgPT4ge1xuICAgIHJldHVybiBkb3dubG9hZCgndmVyaWZ5L2ltYWdlVmVyaWZ5Q29kZS5qc29uJywgZGF0YSk7XG59O1xuZXhwb3J0IGNvbnN0IGdldEN1c3RvbWVySW5mbyA9IGRhdGEgPT4ge1xuICAgIHJldHVybiBwb3N0KCdjZW50ZXIvY3VzdG9tZXJJbmZvLmpzb24nLCBkYXRhKTtcbn07XG5leHBvcnQgY29uc3QgZ2V0QWNjb3VudCA9IGRhdGEgPT4ge1xuICAgIHJldHVybiBwb3N0KCdjdXN0L2dldEFjY291bnQuanNvbicsIGRhdGEpO1xufTtcbmV4cG9ydCBjb25zdCBnZXRIaXN0b3J5T3JkZXIgPSBkYXRhID0+IHtcbiAgICByZXR1cm4gcG9zdCgnb3JkZXIvcXVlcnlPcmRlcnMuanNvbicsIGRhdGEpO1xufTtcbmV4cG9ydCBjb25zdCBnZXRIaXN0b3J5T3JkZXJDb3N0ID0gZGF0YSA9PiB7XG4gICAgcmV0dXJuIHBvc3QoJ2ludm9pY2UvdmFsaWRJbnZvaWNlT3JkZXIuanNvbicsIGRhdGEpO1xufTtcbmV4cG9ydCBjb25zdCBsb2dpbkZyb21Hb25nWm9uZ0hhbyA9IGRhdGEgPT4ge1xuICAgIHJldHVybiBwb3N0KCdjdXN0L3d4TG9naW4uanNvbicsIGRhdGEpO1xufTtcbiIsImltcG9ydCB7IF9fYXdhaXRlciB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHFyIGZyb20gJ3FyLWltYWdlJztcbmltcG9ydCBSZWRpcyBmcm9tICdAcmVkaXMvZGInO1xuZnVuY3Rpb24gaGFuZGxlUmVjZWl2ZU1zZyhjbGllbnQpIHtcbiAgICBjbGllbnQub24oJ2dldC1xcmNvZGUnLCAoZGF0YSkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBzdGF0dXMgPSB5aWVsZCBSZWRpcy5zZXQoZGF0YS51dWlkLCBjbGllbnQuaWQsIDYwKTtcbiAgICAgICAgY29uc3Qgc3ZnX3N0cmluZyA9IHFyLmltYWdlU3luYyhkYXRhLnV1aWQsIHsgdHlwZTogJ3N2ZycgfSk7XG4gICAgICAgIGlmIChzdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgY2xpZW50LmVtaXQoJ3FyY29kZScsIHtcbiAgICAgICAgICAgICAgICBzdmdfc3RyaW5nXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNsaWVudC5lbWl0KCdxcmNvZGUnLCB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ+S6jOe7tOeggeeUn+aIkOWksei0pSdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSkpO1xuICAgIGNsaWVudC5vbignZGlzY29ubmVjdCcsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coY2xpZW50LmlkICsgJ2lzIGRpc2Nvbm5lY3RlZCAhISEnKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZVJlY2VpdmVNc2c7XG4iLCJpbXBvcnQgU2VydmVyIGZyb20gJ3NvY2tldC5pbyc7XG5pbXBvcnQgaGFuZGxlUmVjZWl2ZU1zZyBmcm9tICcuL2hhbmRsZVJlY2VpdmVNc2cnO1xuY29uc3QgaW8gPSBTZXJ2ZXIoKTtcbmlvLm9uKCdjb25uZWN0aW9uJywgKGNsaWVudCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdjb25uZWN0ZWQgISEhJyk7XG4gICAgaGFuZGxlUmVjZWl2ZU1zZyhjbGllbnQpO1xufSk7XG5pby5saXN0ZW4oMjMzMyk7XG5nbG9iYWxbJ2lvJ10gPSBpbztcbiIsImltcG9ydCB7IF9fYXdhaXRlciB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHFpbml1IGZyb20gJ3Fpbml1JztcbmltcG9ydCBqd3QgZnJvbSAnand0LXNpbXBsZSc7XG5pbXBvcnQgbG9nNGpzIGZyb20gJ2xvZzRqcyc7XG5pbXBvcnQgY29uZmlnIGZyb20gJ0Bjb25maWcvaW5kZXgnO1xuaW1wb3J0IERCIGZyb20gJ0Btb25nb2RiL2RiJztcbmltcG9ydCB7IENvbGxlY3Rpb25OYW1lIH0gZnJvbSAnQGNvbnN0YW50L2luZGV4JztcbmNvbnN0IHsgQUssIFNLLCBidWNrZXQgfSA9IGNvbmZpZy5xaW5pdTtcbmV4cG9ydCBmdW5jdGlvbiBkZWxheShkZWxheSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICB9LCBkZWxheSB8fCAxMDApO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHFpbml1Q29uZmlnKCkge1xuICAgIGNvbnN0IGNvbmZpZyA9IG5ldyBxaW5pdS5jb25mLkNvbmZpZygpO1xuICAgIGNvbmZpZy56b25lID0gcWluaXUuem9uZS5ab25lX3oyO1xuICAgIHJldHVybiBjb25maWc7XG59XG5leHBvcnQgZnVuY3Rpb24gcWluaXVVcGxvYWQoYXJncykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IG1hYyA9IG5ldyBxaW5pdS5hdXRoLmRpZ2VzdC5NYWMoQUssIFNLKTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHNjb3BlOiBgJHtidWNrZXR9YFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBwdXRQb2xpY3kgPSBuZXcgcWluaXUucnMuUHV0UG9saWN5KG9wdGlvbnMpO1xuICAgICAgICBjb25zdCB1cGxvYWRUb2tlbiA9IHB1dFBvbGljeS51cGxvYWRUb2tlbihtYWMpO1xuICAgICAgICBjb25zdCBsb2NhbEZpbGUgPSBhcmdzLmZpbGVQYXRoO1xuICAgICAgICBjb25zdCBjb25maWcgPSBxaW5pdUNvbmZpZygpO1xuICAgICAgICBjb25zdCBmb3JtVXBsb2FkZXIgPSBuZXcgcWluaXUuZm9ybV91cC5Gb3JtVXBsb2FkZXIoY29uZmlnKTtcbiAgICAgICAgY29uc3QgcHV0RXh0cmEgPSBuZXcgcWluaXUuZm9ybV91cC5QdXRFeHRyYSgpO1xuICAgICAgICBmb3JtVXBsb2FkZXIucHV0RmlsZSh1cGxvYWRUb2tlbiwgbnVsbCwgbG9jYWxGaWxlLCBwdXRFeHRyYSwgKHJlc3BFcnIsIHJlc3BCb2R5LCByZXNwSW5mbykgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3BFcnIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyByZXNwRXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlc3BJbmZvLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICAgIGtleTogcmVzcEJvZHkua2V5LFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3VjY2VzcydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlamVjdCh7IHR5cGU6ICdlcnInLCBtc2c6IHJlc3BCb2R5IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb2tlbihkYXRhKSB7XG4gICAgY29uc3QgdG9rZW4gPSBqd3QuZW5jb2RlKHtcbiAgICAgICAgaXNzOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGRhdGEpLCB7IHBhc3N3b3JkOiBkYXRhLnBhc3N3b3JkIH0pXG4gICAgfSwgY29uZmlnLlRPS0VOX1NFQ0VSVCk7XG4gICAgcmV0dXJuIHRva2VuO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHByaW50TG9nKG1zZywgbGV2ZWwpIHtcbiAgICBjb25zdCBsb2cgPSBsb2c0anMuZ2V0TG9nZ2VyKCk7XG4gICAgbG9nW2xldmVsXShtc2cpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFBob25lQnlUb2tlbih0b2tlbikge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IGRlY29kZWQgPSBqd3QuZGVjb2RlKHRva2VuLCBjb25maWcuVE9LRU5fU0VDRVJUKTtcbiAgICAgICAgcmV0dXJuIGRlY29kZWQuaXNzLnBob25lO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldERkVG9rZW5CeVRva2VuKHRva2VuKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgZGVjb2RlZCA9IGp3dC5kZWNvZGUodG9rZW4sIGNvbmZpZy5UT0tFTl9TRUNFUlQpO1xuICAgICAgICBjb25zdCByZXMgPSB5aWVsZCBEQi5maW5kKENvbGxlY3Rpb25OYW1lLmRkVG9rZW5QaG9uZU1hcCwgeyBwaG9uZTogZGVjb2RlZC5pc3MucGhvbmUgfSk7XG4gICAgICAgIHJldHVybiByZXNbMF0udG9rZW47XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gY2hlY2tUb2tlbih0b2tlbikge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IGRlY29kZWQgPSBqd3QuZGVjb2RlKHRva2VuLCBjb25maWcuVE9LRU5fU0VDRVJUKTtcbiAgICAgICAgY29uc3QgeyBwaG9uZSwgcGFzc3dvcmQgfSA9IGRlY29kZWQuaXNzO1xuICAgICAgICBjb25zdCByZWNvcmQgPSB5aWVsZCBEQi5maW5kKENvbGxlY3Rpb25OYW1lLnVzZXJzLCB7IHBob25lLCBwYXNzd29yZCB9KTtcbiAgICAgICAgcmV0dXJuICEhcmVjb3JkLmxlbmd0aDtcbiAgICB9KTtcbn1cbiIsImltcG9ydCB7IF9fYXdhaXRlciB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBxcyBmcm9tICdxcyc7XG5pbXBvcnQgaHR0cCBmcm9tICdodHRwJztcbmltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgY29uZmlnIGZyb20gJ0Bjb25maWcvaW5kZXgnO1xuZXhwb3J0IGNvbnN0IGdldCA9ICh1cmwsIGRhdGEpID0+IHtcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAke2NvbmZpZy5iYXNlVXJsfSR7dXJsfT8ke3FzLnN0cmluZ2lmeShkYXRhKX1gKS50aGVuKChyZXNwb25zZSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH0pKTtcbn07XG5leHBvcnQgY29uc3QgcG9zdCA9ICh1cmwsIGRhdGEpID0+IHtcbiAgICByZXR1cm4gYXhpb3MucG9zdChgJHtjb25maWcuYmFzZVVybH0ke3VybH1gLCBkYXRhKS50aGVuKChyZXNwb25zZSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH0pKTtcbn07XG5leHBvcnQgY29uc3QgZG93bmxvYWQgPSAodXJsLCBkYXRhKSA9PiB7XG4gICAgY29uc3QgeyBwYXRoLCBuYW1lIH0gPSBkYXRhO1xuICAgIGlmICghcGF0aCB8fCAhbmFtZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGZpbGUgPSBmcy5jcmVhdGVXcml0ZVN0cmVhbShwYXRoICsgbmFtZSk7XG4gICAgaHR0cC5nZXQoYCR7Y29uZmlnLmJhc2VVcmx9JHt1cmx9PyR7cXMuc3RyaW5naWZ5KGRhdGEpfWAsIHJlc3BvbnNlID0+IHtcbiAgICAgICAgcmVzcG9uc2UucGlwZShmaWxlKTtcbiAgICB9KTtcbn07XG4iLCJpbXBvcnQgeyBfX2F3YWl0ZXIgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IGdldEN1c3RvbWVySW5mbywgZ2V0SGlzdG9yeU9yZGVyLCBsb2dpbk9uQXBwLCBnZXRBY2NvdW50LCBnZXRIaXN0b3J5T3JkZXJDb3N0IH0gZnJvbSAnQHNlcnZpY2UvYXBpL3VzZXJzQXBpJztcbmltcG9ydCB7IGdldEFyb3VuZCB9IGZyb20gJ0BzZXJ2aWNlL2FwaS9jYXJzSW5mb0FwaSc7XG5pbXBvcnQgeyBDb2xsZWN0aW9uTmFtZSB9IGZyb20gJ0Bjb25zdGFudC9pbmRleCc7XG5pbXBvcnQgREIgZnJvbSAnQG1vbmdvZGIvZGInO1xuaW1wb3J0IHsgcHJpbnRMb2cgfSBmcm9tICdAdXRpbHMvY29tbW9ucyc7XG5pbXBvcnQgY29uZmlnIGZyb20gJ0Bjb25maWcvaW5kZXgnO1xuZnVuY3Rpb24gZ2V0VXNlckluZm8oYXJncywgcGhvbmUpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCByZXMgPSB5aWVsZCBnZXRDdXN0b21lckluZm8oYXJncyk7XG4gICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAxKSB7XG4gICAgICAgICAgICBjb25zdCByZWNvZGUgPSB5aWVsZCBEQi5maW5kKENvbGxlY3Rpb25OYW1lLnVzZXJJbmZvLCB7IHBob25lIH0pO1xuICAgICAgICAgICAgaWYgKCFyZWNvZGUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGJyZXMgPSB5aWVsZCBEQi5pbnNlcnQoQ29sbGVjdGlvbk5hbWUudXNlckluZm8sIHJlcy5kYXRhKTtcbiAgICAgICAgICAgICAgICBpZiAoZGJyZXMuc3RhdHVzID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcmludExvZygn5peg6aG75ZCM5q2l55So5oi35L+h5oGvJywgJ2luZm8nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3RhdHVzOiAnb2snXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcHJpbnRMb2coJ2RkdG9rZW7ov4fmnJ8nLCAnZXJyb3InKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3RhdHVzOiAnZXJyJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gam91cm5leShhcmdzLCBwaG9uZSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IHlpZWxkIGdldEhpc3RvcnlPcmRlcihhcmdzKTtcbiAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY29kZSA9IHlpZWxkIERCLmZpbmQoQ29sbGVjdGlvbk5hbWUuam91cm5leSwgeyBwaG9uZSB9KTtcbiAgICAgICAgICAgIGlmICghcmVjb2RlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRicmVzID0geWllbGQgREIuaW5zZXJ0KENvbGxlY3Rpb25OYW1lLmpvdXJuZXksIHsgcGhvbmUsIGRhdGE6IHJlcy5kYXRhIH0pO1xuICAgICAgICAgICAgICAgIGlmIChkYnJlcy5zdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgICAgICBwcmludExvZygn6KGM56iL5L+h5oGv5ZCM5q2l5oiQ5YqfJywgJ2luZm8nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcmludExvZygn5peg6aG75ZCM5q2l6KGM56iL5L+h5oGvJywgJ2luZm8nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHByaW50TG9nKCdkZHRva2Vu6L+H5pyfJywgJ2Vycm9yJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIEFjY291bnQoYXJncywgcGhvbmUpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCByZXMgPSB5aWVsZCBnZXRBY2NvdW50KGFyZ3MpO1xuICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMSkge1xuICAgICAgICAgICAgY29uc3QgcmVjb2RlID0geWllbGQgREIuZmluZChDb2xsZWN0aW9uTmFtZS5hY2NvdW50LCB7IHBob25lIH0pO1xuICAgICAgICAgICAgaWYgKCFyZWNvZGUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGJyZXMgPSB5aWVsZCBEQi5pbnNlcnQoQ29sbGVjdGlvbk5hbWUuYWNjb3VudCwgeyBwaG9uZSwgZGF0YTogcmVzLmRhdGEgfSk7XG4gICAgICAgICAgICAgICAgaWYgKGRicmVzLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgIHByaW50TG9nKCfkvZnpop3kv6Hmga/lkIzmraXmiJDlip8nLCAnaW5mbycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHByaW50TG9nKCfml6DpobvlkIzmraXkvZnpop3kv6Hmga8nLCAnaW5mbycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcHJpbnRMb2coJ2RkdG9rZW7ov4fmnJ8nLCAnZXJyb3InKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gQXJvdW5kQ2FyKGFyZ3MpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCByZXMgPSB5aWVsZCBnZXRBcm91bmQoYXJncyk7XG4gICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAxKSB7XG4gICAgICAgICAgICBjb25zdCByZWNvZGUgPSB5aWVsZCBEQi5maW5kKENvbGxlY3Rpb25OYW1lLmFyb3VuZENhcik7XG4gICAgICAgICAgICBpZiAoIXJlY29kZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYnJlcyA9IHlpZWxkIERCLmluc2VydE1hbnkoQ29sbGVjdGlvbk5hbWUuYXJvdW5kQ2FyLCByZXMuZGF0YSk7XG4gICAgICAgICAgICAgICAgaWYgKGRicmVzLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgIHByaW50TG9nKCfovabovobkv6Hmga/lkIzmraXmiJDlip8nLCAnaW5mbycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHByaW50TG9nKCfml6DpobvlkIzmraXovabovobkv6Hmga8nLCAnaW5mbycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcHJpbnRMb2coJ2RkdG9rZW7ov4fmnJ8nLCAnZXJyb3InKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gQ29zdChhcmdzLCBwaG9uZSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IHlpZWxkIGdldEhpc3RvcnlPcmRlckNvc3QoYXJncyk7XG4gICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAxKSB7XG4gICAgICAgICAgICBjb25zdCByZWNvZGUgPSB5aWVsZCBEQi5maW5kKENvbGxlY3Rpb25OYW1lLmNvc3QsIHsgcGhvbmUgfSk7XG4gICAgICAgICAgICBpZiAoIXJlY29kZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYnJlcyA9IHlpZWxkIERCLmluc2VydChDb2xsZWN0aW9uTmFtZS5jb3N0LCB7IHBob25lLCBkYXRhOiByZXMuZGF0YSB9KTtcbiAgICAgICAgICAgICAgICBpZiAoZGJyZXMuc3RhdHVzID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJpbnRMb2coJ+iKsei0ueS/oeaBr+WQjOatpeaIkOWKnycsICdpbmZvJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJpbnRMb2coJ+aXoOmhu+WQjOatpeiKsei0ueS/oeaBrycsICdpbmZvJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwcmludExvZygnZGR0b2tlbui/h+acnycsICdlcnJvcicpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBzeW5jaHJvbml6YXRpb24oZGRUb2tlbiwgcGhvbmUpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBjaGVja1Rva2VuID0geWllbGQgZ2V0VXNlckluZm8oe1xuICAgICAgICAgICAgdG9rZW46IGRkVG9rZW4sXG4gICAgICAgICAgICBsYW5nOiAnY24nXG4gICAgICAgIH0sIHBob25lKTtcbiAgICAgICAgaWYgKGNoZWNrVG9rZW4uc3RhdHVzID09PSAnZXJyJykge1xuICAgICAgICAgICAgY29uc3QgbmV3RGQgPSB5aWVsZCByZWZyZXNoRGRUb2tlbihwaG9uZSk7XG4gICAgICAgICAgICB5aWVsZCBzeW5jaHJvbml6YXRpb24obmV3RGQudG9rZW4sIHBob25lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGpvdXJuZXkoeyBwYWdlTm86IDEsIHBhZ2VTaXplOiAxMDAwMCwgdG9rZW46IGRkVG9rZW4gfSwgcGhvbmUpO1xuICAgICAgICAgICAgQWNjb3VudCh7XG4gICAgICAgICAgICAgICAgdG9rZW46IGRkVG9rZW4sXG4gICAgICAgICAgICAgICAgbGFuZzogJ2NuJ1xuICAgICAgICAgICAgfSwgcGhvbmUpO1xuICAgICAgICAgICAgQXJvdW5kQ2FyKHtcbiAgICAgICAgICAgICAgICB0b2tlbjogZGRUb2tlbixcbiAgICAgICAgICAgICAgICBsYW5nOiAnY24nLFxuICAgICAgICAgICAgICAgIGxhdDogMjIuOTgxOTg3OTk5OTk5OTk4LFxuICAgICAgICAgICAgICAgIGxvbjogMTEzLjM2ODE2NDEsXG4gICAgICAgICAgICAgICAgcmFkaXVzOiAxMDAwMDAwMFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBDb3N0KHtcbiAgICAgICAgICAgICAgICB0b2tlbjogZGRUb2tlbixcbiAgICAgICAgICAgICAgICBsYW5nOiAnY24nXG4gICAgICAgICAgICB9LCBwaG9uZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZWZyZXNoRGRUb2tlbihwaG9uZSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IHVzZXJSZWNvcmQgPSB5aWVsZCBEQi5maW5kKENvbGxlY3Rpb25OYW1lLmRkVG9rZW5QaG9uZU1hcCwgeyBwaG9uZSB9KTtcbiAgICAgICAgY29uc3QgZGF0YSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7IHBob25lIH0sIGNvbmZpZy5sb2dpbkFyZ3MpLCB7IGRldmljZWlkOiB1c2VyUmVjb3JkWzBdLmRldmljZWlkIH0pO1xuICAgICAgICBjb25zdCByZXMgPSB5aWVsZCBsb2dpbk9uQXBwKGRhdGEpO1xuICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMSkge1xuICAgICAgICAgICAgeWllbGQgREIudXBkYXRlT25lKENvbGxlY3Rpb25OYW1lLmRkVG9rZW5QaG9uZU1hcCwgeyBwaG9uZTogZGF0YS5waG9uZSB9LCB7IHRva2VuOiByZXMuZGF0YS50b2tlbiB9KTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdG9rZW46IHJlcy5kYXRhLnRva2VuXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcHJpbnRMb2coJ+eZu+W9leWPruWPruWksei0pScsICdlcnJvcicpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBlcnI6ICfnmbvlvZXlj67lj67lpLHotKUnXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnQgZGVmYXVsdCBzeW5jaHJvbml6YXRpb247XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJldmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqd3Qtc2ltcGxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImtvYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrb2EtYm9keXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrb2EtY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrb2Etcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2c0anNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWQ1XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb2RiXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInFpbml1XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInFyLWltYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInFzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZGlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNvY2tldC5pb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0c2xpYlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dWlkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV1aWQvdjFcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==