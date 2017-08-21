import {Component, Injectable, OnInit} from '@angular/core';

@Injectable()
export class RootScopeService implements OnInit {

    private mainProjectTitle: any = "Andrew Gulin";
    public readonly modules = [
        {
            name: 'WelcomeModule',
            caption: 'Главная',
            link: 'welcome'
        },
        {
            name: 'ProjectsModule',
            caption: 'Проекты',
            link: 'projects'
        },
        {
            name: 'MusicModule',
            caption: 'Музыка',
            link: 'music'
        }
    ];

    constructor() {

    }

    ngOnInit() {
    }


    get $mainProjectTitle(): any {
        return this.mainProjectTitle;
    }

    set $mainProjectTitle(value: any) {
        this.mainProjectTitle = value;
    }

}
