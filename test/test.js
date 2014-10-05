var ModuleTestWMBaseTime = (function(global) {

var _runOnNode = "process" in global;
var _runOnWorker = "WorkerLocation" in global;
var _runOnBrowser = "document" in global;

return new Test("WMBaseTime", {
        disable:    false,
        browser:    true,
        worker:     true,
        node:       true,
        button:     true,
        both:       true, // test the primary module and secondary module
    }).add([
        testWMBaseTime_setAndGet,
        testWMBaseTime_now,
    ]).run().clone();

function testWMBaseTime_setAndGet(test, pass, miss) {

    WMBaseTime.set(1000);
    var result = WMBaseTime.get();

    if (result === 1000) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testWMBaseTime_now(test, pass, miss) {

    WMBaseTime.set(1000);

    setTimeout(function() {
        var result = WMBaseTime.now();

        console.log("now: " + result);
        if (result >= 2000 && result <= 2111) {
            test.done(pass());
        } else {
            test.done(miss());
        }
    }, 1000);
}

})((this || 0).self || global);

