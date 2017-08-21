import {Component, Input, OnInit} from '@angular/core';
import {RootScopeService} from "../../common/root-scope.service";
import {Router} from "@angular/router";

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    private buttons: any;

    constructor(private rootScope: RootScopeService, private router: Router) {
        this.buttons = this.rootScope.modules;
    }

    click() {
        this.router.navigate([this.buttons.link]);
    }

    ngOnInit() {
    }

}
