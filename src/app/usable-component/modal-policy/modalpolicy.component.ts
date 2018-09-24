import {Component, OnInit, Input,
        Output, OnChanges, EventEmitter, trigger, state, style, animate, transition} from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'modal-policy',
    templateUrl: './modalpolicy.template.html',
    styleUrls: ['./modalpolicy.component.css'],
    // styles:
    animations: [
        trigger('animation', [
            transition('void => *', [
                style({ transform: 'scale3d(.3, .3, .3)' }),
                animate(100)
            ]),
            transition('* => void', [
                animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
            ])
        ])
    ]
})

export class ModalPolicyComponent implements OnInit {
    @Input() closable = true;
    @Input() title: string;
    @Input() visible: boolean;
    @Input() isConfirm: boolean;
    @Input() messageModal: string;
    @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() { }

    ngOnInit() { }

    close() {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    }
// tslint:disable-next-line:eofline
}
