"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GUID = /** @class */ (function () {
    function GUID(str) {
        this.str = str || GUID.getNewGUIDString();
    }
    GUID.getNewGUIDString = function () {
        var d = new Date().getTime();
        if (window.performance && typeof window.performance.now === "function") {
            d += performance.now();
        }
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    };
    GUID.prototype.toString = function () {
        return this.str;
    };
    return GUID;
}());
exports.GUID = GUID;
//# sourceMappingURL=GUID.js.map