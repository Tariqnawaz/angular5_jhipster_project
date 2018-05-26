import './vendor.ts';

import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Ng2Webstorage, LocalStorageService, SessionStorageService  } from 'ngx-webstorage';
import { JhiEventManager } from 'ng-jhipster';

import { AuthInterceptor } from './blocks/interceptor/auth.interceptor';
import { AuthExpiredInterceptor } from './blocks/interceptor/auth-expired.interceptor';
import { ErrorHandlerInterceptor } from './blocks/interceptor/errorhandler.interceptor';
import { NotificationInterceptor } from './blocks/interceptor/notification.interceptor';
import { EcommerceSharedModule, UserRouteAccessService } from './shared';
import { EcommerceAppRoutingModule} from './app-routing.module';
import { EcommerceHomeModule } from './home/home.module';
import { EcommerceAdminModule } from './admin/admin.module';
import { EcommerceAccountModule } from './account/account.module';
import { EcommerceEntityModule } from './entities/entity.module';
import { PaginationConfig } from './blocks/config/uib-pagination.config';
import { UserComponent } from './newUserModule/user.compnent';
import { AddUserComponent } from './newUserModule/add-user.component';
import { UserService } from './newUserModule/user.service';
import { SpreadModule } from './layouts/spreadjsTutorial/spread.module';
import { SpreadSheetsModule  } from '../lib/scripts/gc.spread.sheets.angular.11.0.0';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        EcommerceAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        EcommerceSharedModule,
        EcommerceHomeModule,
        EcommerceAdminModule,
        EcommerceAccountModule,
        EcommerceEntityModule, SpreadSheetsModule,
        SpreadModule,  
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent,
        UserComponent,
        AddUserComponent
    ],
    providers: [
        ProfileService,
        PaginationConfig,
        UserService,
        UserRouteAccessService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
            deps: [
                LocalStorageService,
                SessionStorageService
            ]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthExpiredInterceptor,
            multi: true,
            deps: [
                Injector
            ]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorHandlerInterceptor,
            multi: true,
            deps: [
                JhiEventManager
            ]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: NotificationInterceptor,
            multi: true,
            deps: [
                Injector
            ]
        }
    ],
    bootstrap: [ JhiMainComponent ]
})
export class EcommerceAppModule {}
