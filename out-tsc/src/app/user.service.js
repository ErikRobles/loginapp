"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var i0 = require("@angular/core");
var UserService = /** @class */ (function () {
    function UserService() {
        this.isUserLoggedIn = false;
    }
    UserService.prototype.setUserLoggedIn = function () {
        this.isUserLoggedIn = true;
    };
    UserService.prototype.getUserLoggedIn = function () {
        return this.isUserLoggedIn;
    };
    UserService.decorators = [
        { type: core_1.Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    UserService.ctorParameters = function () { return []; };
    UserService.ngInjectableDef = i0.defineInjectable({ factory: function UserService_Factory() { return new UserService(); }, token: UserService, providedIn: "root" });
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map