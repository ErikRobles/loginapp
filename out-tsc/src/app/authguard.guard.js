"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("./user.service");
var i0 = require("@angular/core");
var i1 = require("./user.service");
var AuthguardGuard = /** @class */ (function () {
    function AuthguardGuard(user) {
        this.user = user;
    }
    AuthguardGuard.prototype.canActivate = function (next, state) {
        return this.user.getUserLoggedIn();
    };
    AuthguardGuard.decorators = [
        { type: core_1.Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    AuthguardGuard.ctorParameters = function () { return [
        { type: user_service_1.UserService }
    ]; };
    AuthguardGuard.ngInjectableDef = i0.defineInjectable({ factory: function AuthguardGuard_Factory() { return new AuthguardGuard(i0.inject(i1.UserService)); }, token: AuthguardGuard, providedIn: "root" });
    return AuthguardGuard;
}());
exports.AuthguardGuard = AuthguardGuard;
//# sourceMappingURL=authguard.guard.js.map