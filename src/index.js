const obj = require("./data/object");
const reg = require("./data/regular");
const str = require("./data/string");
const fun = require("./function");
const throttle = require("./function/throttle");
const time = require("./time");
const web = require("./web");
const arr = require("./data/array");

const smutils = {
    /* Array */
    unique: arr.unique,
    arrayEqual: arr.arrayEqual,

    /* Object */
    deepClone: obj.deepClone,
    isEmptyObjecta: obj.isEmptyObject,
    stringfyQueryString: obj.stringfyQueryString,

    /* Regular */
    isColor: reg.isColor,
    isEmail: reg.isEmail,
    isIP: reg.isIP,
    isIdCard: reg.isIdCard,
    isPhoneNum: reg.isPhoneNum,
    isUrl: reg.isUrl,

    /* String */
    digitUppercase: str.digitUppercase,
    ltrim: str.ltrim,
    rtrim: str.rtrim,
    trim: str.trim,
    replaceAll: str.replaceAll,

    /* Function */
    debounce: fun.debounce,
    throttle,

    /* Time */
    formatPassTime: time.formatPassTime,
    formatRemainTime: time.formatRemainTime,
    isLeapYear: time.isLeapYear,
    isSameDay: time.isSameDay,
    monthDays: time.monthDays,
    timeLeft: time.timeLeft,

    /* Web */
    aLoadStyle: web.LoadStyle,
    hasClass: web.hasClass,
    addClass: web.addClass,
    removeClass: web.removeClass,
    downloadFile: web.downloadFile,
    getCookie: web.getCookie,
    setCookie: web.setCookie,
    removeCookie: web.removeCookie,
    getOS: web.getOS,
    getExplore: web.getExplore,
    getQueryString: web.getQueryString,
    parseQueryString: web.parseQueryString,
    offset: web.offset,
    getScrollTop: web.getScrollTop,
    scrollTo: web.scrollTo,
    setScrollTop: web.setScrollTop,
    isSupportWebP: web.isSupportWebP,
    stopBubble: web.stopBubble,
    wwindowResize: web.windowResize
};

module.exports = smutils;
