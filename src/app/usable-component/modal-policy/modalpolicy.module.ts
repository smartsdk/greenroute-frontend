import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ModalPolicyComponent  } from './modalpolicy.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule,
    NgbModule
  ],
  declarations: [
    ModalPolicyComponent
  ],
  exports: [
    ModalPolicyComponent
  ]
})
// tslint:disable-next-line:eofline
export class ModalPolicyModule { }
