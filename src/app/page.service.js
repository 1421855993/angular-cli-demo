"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var PageService = /** @class */ (function () {
    function PageService(http) {
        this.http = http;
    }
    PageService.prototype.getDatas = function (currentPage, pageSize) {
        var _this = this;
        if (currentPage === void 0) { currentPage = 0; }
        if (pageSize === void 0) { pageSize = 10; }
        return new Promise(function (resolve, reject) {
            var params = new http_1.HttpParams().set('pageSize', pageSize).set('currentPage', currentPage);
            console.log(params.toString());
            _this.http.get('http://localhost:3000/room/getData', { params: params }).subscribe(function (datas) { return resolve(datas); });
        });
    };
    PageService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], PageService);
    return PageService;
}());
exports.PageService = PageService;
//# sourceMappingURL=page.service.js.map