"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.disabled = true;
        this.classes = "class1 class2";
    }
    AppComponent.prototype.changeClass = function () {
        this.classes = "class3";
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: "\n    <!--<a routerLink=\"/dashboard\">Dashboard</a>\n    <a routerLink=\"/heroes\">Heroes</a>\n    <router-outlet></router-outlet>\n    <input type=\"text\" [disabled]=\"disabled\" [ngClass]=\"classes\"/>\n    <button (click)=\"changeClass()\">click</button>\n    <table border=1>\n      &lt;!&ndash;  expression calculates colspan=2 &ndash;&gt;\n      <tr>\n        <td [attr.colspan]=\"1 + 1\">One-Two</td>\n      </tr>\n\n      &lt;!&ndash; ERROR: There is no `colspan` property to set!\n        <tr><td colspan=\"{{1 + 1}}\">Three-Four</td></tr>\n      &ndash;&gt;\n      <tr>\n        <td>Five</td>\n        <td>Six</td>\n      </tr>\n    </table>-->\n    <page></page>\n  ",
            styleUrls: ["./app.component.css"]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map