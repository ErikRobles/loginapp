"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_service_1 = require("../user.service");
var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(router, user) {
        this.router = router;
        this.user = user;
    }
    LoginFormComponent.prototype.ngOnInit = function () {
    };
    LoginFormComponent.prototype.loginUser = function (e) {
        e.preventDefault();
        var username = e.target.elements[0].value;
        var password = e.target.elements[1].value;
        if (username == 'admin' && password == 'admin') {
            this.user.setUserLoggedIn();
            this.router.navigate(['/dashboard']);
        }
    };
    LoginFormComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-login-form',
                    templateUrl: './login-form.component.html',
                    styleUrls: ['./login-form.component.css']
                },] },
    ];
    /** @nocollapse */
    LoginFormComponent.ctorParameters = function () { return [
        { type: router_1.Router },
        { type: user_service_1.UserService }
    ]; };
    return LoginFormComponent;
}());
exports.LoginFormComponent = LoginFormComponent;
//# sourceMappingURL=login-form.component.js.map