"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var header_component_1 = require("./header/header.component");
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var home_component_1 = require("./home/home.component");
var login_component_1 = require("./login/login.component");
var login_form_component_1 = require("./login-form/login-form.component");
var footer_component_1 = require("./footer/footer.component");
var user_service_1 = require("./user.service");
var authguard_guard_1 = require("./authguard.guard");
var appRoutes = [
    { path: 'dashboard',
        canActivate: [authguard_guard_1.AuthguardGuard],
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'login',
        component: login_form_component_1.LoginFormComponent
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        app_component_1.AppComponent,
                        header_component_1.HeaderComponent,
                        dashboard_component_1.DashboardComponent,
                        home_component_1.HomeComponent,
                        login_component_1.LoginComponent,
                        login_form_component_1.LoginFormComponent,
                        footer_component_1.FooterComponent
                    ],
                    imports: [
                        router_1.RouterModule.forRoot(appRoutes),
                        platform_browser_1.BrowserModule,
                        forms_1.FormsModule
                    ],
                    providers: [user_service_1.UserService, authguard_guard_1.AuthguardGuard],
                    bootstrap: [app_component_1.AppComponent]
                },] },
    ];
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map