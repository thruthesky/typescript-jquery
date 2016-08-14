define(["require", "exports"], function (require, exports) {
    "use strict";
    var Lib = (function () {
        function Lib() {
        }
        Lib.prototype.hi = function () {
            console.log('I am Number. 14');
        };
        return Lib;
    }());
    exports.Lib = Lib;
});
//# sourceMappingURL=lib.js.map