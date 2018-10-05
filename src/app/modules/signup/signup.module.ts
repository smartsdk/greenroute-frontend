import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { SignupComponent } from './signup.component';
import { AccountVerificationComponent } from './account-verification.component';

// Elementos del template
import { TemplateModule } from '../../template/template.module';
import { ModalPopupModule  } from '../../usable-component/modal-popup/modalpopup.module';
import { ModalPolicyModule  } from '../../usable-component/modal-policy/modalpolicy.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule,
    TemplateModule,
    ModalPopupModule,
    ModalPolicyModule
  ],
  declarations: [
    SignupComponent,
    AccountVerificationComponent
  ],
  exports: [
    SignupComponent,
    AccountVerificationComponent
  ]
})
export class SignupModule { }
