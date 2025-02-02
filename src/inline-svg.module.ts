import { NgModule, ModuleWithProviders } from '@angular/core';
import { InlineSVGComponent } from './inline-svg.component';
import { InlineSVGConfig } from './inline-svg.config';
import { InlineSVGDirective } from './inline-svg.directive';

@NgModule({
  declarations: [InlineSVGDirective, InlineSVGComponent],
  exports: [InlineSVGDirective],
  // Removed entryComponents as it is no longer needed
})
export class InlineSVGModule {
  static forRoot(config?: InlineSVGConfig): ModuleWithProviders<InlineSVGModule> {
    return {
      ngModule: InlineSVGModule,
      providers: [
        { provide: InlineSVGConfig, useValue: config }
      ]
    };
  }
}
