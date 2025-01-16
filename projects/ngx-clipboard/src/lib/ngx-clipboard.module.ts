import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ClipboardIfSupportedDirective } from './ngx-clipboard-if-supported.directive';
import { ClipboardDirective } from './ngx-clipboard.directive';

/*
 * @deprecated Use standalone directives "ClipboardDirective" or "ClipboardIfSupportedDirective" instead
 * */
@NgModule({
    imports: [CommonModule, ClipboardDirective, ClipboardIfSupportedDirective],
    exports: [ClipboardDirective, ClipboardIfSupportedDirective]
})
export class ClipboardModule {}
