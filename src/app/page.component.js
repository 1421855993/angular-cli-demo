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
var page_service_1 = require("./page.service");
var PageComponent = /** @class */ (function () {
    function PageComponent(pageService) {
        this.pageService = pageService;
        this.datas = [];
        // 显示多少页数
        this.pageShow = 5;
        this.centerPage = Math.ceil(this.pageShow / 2) - 1;
        this.currentPage = 0;
    }
    PageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var c = localStorage.getItem("currentPage");
        this.currentPage = c === undefined ? 0 : Number(c);
        this.getData();
        setInterval(function () { return _this.getData(); }, 30000);
    };
    PageComponent.prototype.OnDestroy = function () {
        localStorage.removeItem("currentPage");
    };
    PageComponent.prototype.getData = function () {
        var _this = this;
        this.pageService.getDatas(this.currentPage).
            then(function (datas) {
            localStorage.setItem("currentPage", String(_this.currentPage));
            _this.datas = datas.data;
            _this.totalSize = datas.count;
            _this.lastPage = Math.ceil(_this.totalSize / 10);
            _this.pages = [];
            if (_this.lastPage < _this.pageShow) {
                for (var i = 0; i < _this.lastPage; i++) {
                    _this.pages.push(i);
                }
            }
            else {
                if (_this.currentPage >= _this.centerPage) {
                    if (_this.currentPage <= (_this.lastPage - 1 - _this.centerPage)) {
                        for (var i = 0; i < _this.pageShow; i++) {
                            _this.pages.push(_this.currentPage - _this.centerPage + i);
                        }
                    }
                    else {
                        for (var i = 0; i < _this.pageShow; i++) {
                            _this.pages.push(_this.lastPage - 1 - i);
                        }
                        _this.pages.sort();
                    }
                }
                else {
                    for (var i = 0; i < _this.pageShow; i++) {
                        _this.pages.push(i);
                    }
                }
            }
        });
    };
    PageComponent.prototype.turnPage = function (pageId) {
        if (pageId > this.lastPage - 1) {
            return;
        }
        else if (pageId < 0) {
            return;
        }
        else if (pageId === this.currentPage) {
            return;
        }
        this.currentPage = pageId;
        this.getData();
    };
    PageComponent = __decorate([
        core_1.Component({
            selector: 'page',
            templateUrl: './page.component.html',
            styleUrls: ["./page.component.css"]
        }),
        __metadata("design:paramtypes", [page_service_1.PageService])
    ], PageComponent);
    return PageComponent;
}());
exports.PageComponent = PageComponent;
//# sourceMappingURL=page.component.js.map