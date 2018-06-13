"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("../user.service");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(user) {
        this.user = user;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-dashboard',
                    templateUrl: './dashboard.component.html',
                    styleUrls: ['./dashboard.component.css']
                },] },
    ];
    /** @nocollapse */
    DashboardComponent.ctorParameters = function () { return [
        { type: user_service_1.UserService }
    ]; };
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map