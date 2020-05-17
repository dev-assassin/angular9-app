import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleBootstrapPrototypeRoutingModule } from './example-bootstrap-prototype-routing.module';
import { ExampleBootstrapPrototypeComponent } from './example-bootstrap-prototype.component';

<<<<<<< HEAD

@NgModule({
    imports: [
        CommonModule,
        ExampleBootstrapPrototypeRoutingModule
    ],
    exports: [
        ExampleBootstrapPrototypeComponent
    ],
    declarations: [
        ExampleBootstrapPrototypeComponent
    ],
    providers: []
})

=======
@NgModule({
  declarations: [
    ExampleBootstrapPrototypeComponent,
  ],
  exports: [
    ExampleBootstrapPrototypeComponent,
  ],
  imports: [
    CommonModule,
    ExampleBootstrapPrototypeRoutingModule
  ]
})
>>>>>>> 77fa1265ff1f6831a6eef0b7db1bd9c9d98e4aa5
export class ExampleBootstrapPrototypeModule { }
