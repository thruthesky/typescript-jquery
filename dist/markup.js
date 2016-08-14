define(["require", "exports"], function (require, exports) {
    "use strict";
    var Markup = (function () {
        function Markup() {
        }
        Markup.prototype.header = function () {
            return "\n        <div class=\"header\">\n        <h1>Header</h1>\n        </div>\n        ";
        };
        Markup.prototype.footer = function () {
            return "\n        <div class=\"footer\">\n        <h1>Footer</h1>\n        </div>\n        ";
        };
        return Markup;
    }());
    exports.Markup = Markup;
});
//# sourceMappingURL=markup.js.map