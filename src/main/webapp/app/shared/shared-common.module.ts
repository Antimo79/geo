import { NgModule } from '@angular/core';

import { GeoSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [GeoSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [GeoSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class GeoSharedCommonModule {}
