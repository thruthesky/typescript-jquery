define(["require", "exports", './lib', './markup'], function (require, exports, lib_1, markup_1) {
    "use strict";
    var Index = (function () {
        function Index() {
            console.log("index.ts constructor begins.");
            this.lib = new lib_1.Lib();
            this.markup = new markup_1.Markup();
        }
        Index.prototype.getBody = function () {
            return $('body');
        };
        Index.prototype.insertHeader = function () {
            this.getBody().prepend(this.markup.header());
        };
        Index.prototype.insertFooter = function () {
            this.getBody().append(this.markup.footer());
        };
        Index.prototype.start = function () {
            this.lib.hi();
            this.insertHeader();
            this.insertFooter();
        };
        return Index;
    }());
    var index = new Index();
    index.start();
});
//# sourceMappingURL=index.js.map