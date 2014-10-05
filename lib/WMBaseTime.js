(function(global) {
"use strict";

// --- dependency modules ----------------------------------
// --- define / local variables ----------------------------
//var _runOnNode = "process" in global;
//var _runOnWorker = "WorkerLocation" in global;
//var _runOnBrowser = "document" in global;

var _baseTime = 0; // base time
var _diffTime = 0; // difference time

// --- class / interfaces ----------------------------------
function WMBaseTime() {
}

//{@dev
WMBaseTime["repository"] = "https://github.com/uupaa/WMBaseTime.js"; // GitHub repository URL. http://git.io/Help
//}@dev

WMBaseTime["now"] = WMBaseTime_now; // WMBaseTime.now():Number
WMBaseTime["set"] = WMBaseTime_set; // WMBaseTime.set(time:Number):void
WMBaseTime["get"] = WMBaseTime_get; // WMBaseTime.get():Number

// --- implements ------------------------------------------
function WMBaseTime_now() { // @ret Number
    return Date.now() - _diffTime;
}

function WMBaseTime_set(time) { // @arg Number
//{@dev
    $valid($type(time, "Number"), WMBaseTime_set, "time");
//}@dev

    _baseTime = time;
    _diffTime = Date.now() - time;
}

function WMBaseTime_get() { // @ret Number
    return _baseTime;
}

// --- validate / assertions -------------------------------
//{@dev
function $valid(val, fn, hint) { if (global["Valid"]) { global["Valid"](val, fn, hint); } }
function $type(obj, type) { return global["Valid"] ? global["Valid"].type(obj, type) : true; }
//function $keys(obj, str) { return global["Valid"] ? global["Valid"].keys(obj, str) : true; }
//function $some(val, str, ignore) { return global["Valid"] ? global["Valid"].some(val, str, ignore) : true; }
//function $args(fn, args) { if (global["Valid"]) { global["Valid"].args(fn, args); } }
//}@dev

// --- exports ---------------------------------------------
if ("process" in global) {
    module["exports"] = WMBaseTime;
}
global["WMBaseTime" in global ? "WMBaseTime_" : "WMBaseTime"] = WMBaseTime; // switch module. http://git.io/Minify

})((this || 0).self || global); // WebModule idiom. http://git.io/WebModule

