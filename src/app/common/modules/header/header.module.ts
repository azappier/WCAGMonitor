import {NgModule, ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [HeaderComponent]
})
export class HeaderModule  {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: HeaderModule
    };
  }
}
