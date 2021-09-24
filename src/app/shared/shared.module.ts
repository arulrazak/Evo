import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModule } from 'ngx-bootstrap/alert';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from 'ngx-bootstrap/modal';

import { SharedComponent } from './shared.component';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  declarations: [SharedComponent, SafePipe],
  imports: [
    CommonModule,
    AlertModule.forRoot(),
    TabsModule.forRoot(),
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
  ],
  exports: [AlertModule, TabsModule, CollapseModule, SafePipe],
})
export class SharedModule { }
