var Clock = (function () {
    function Clock(h, m) {
        this.currentTime = new Date();
    }
    return Clock;
}());
var SetTimeClock = (function () {
    function SetTimeClock(h, m) {
        this.currentTime = new Date();
    }
    SetTimeClock.prototype.setTime = function (date) {
        this.currentTime = date;
    };
    return SetTimeClock;
}());
