import {Component, Input, Output, EventEmitter} from '@angular/core';

export class DropdownValue {
    value:string;
    label:string;

    constructor(value:string,label:string) {
        this.value = value;
        this.label = label;
    }
}

@Component({
    selector: 'dropdown',
    template: `
        <div class="avatar-dropdown" id="icon1" (click)="onClick()">
            <span class="user-name">Fulanito</span> 
            <img src="./commons/images/foto.jpg" class="md-avatar" />    
        </div>
        <ul class="dropdown-values" *ngIf="visible">
            <li *ngFor="#value of values" (click)="selectItem(value.value)">{{value.label}}</li>
        </ul>
    `
})
export class DropdownComponent {
    private visible:boolean = false;
    @Input()
    values: DropdownValue[];

    @Output()
    select: EventEmitter<any>;

    constructor() {
        this.select = new EventEmitter();
    }

    selectItem(value) {
        this.visible = false;
        this.select.emit(value);
    }

    onClick() {
        this.visible = !this.visible;
    }
}