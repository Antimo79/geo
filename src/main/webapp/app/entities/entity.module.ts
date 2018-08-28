import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { GeoCutcUtzUbicMySuffixModule } from './cutc-utz-ubic-my-suffix/cutc-utz-ubic-my-suffix.module';
import { GeoBbaGeo01MySuffixModule } from './bba-geo-01-my-suffix/bba-geo-01-my-suffix.module';
import { GeoBbaGeo02ClMySuffixModule } from './bba-geo-02-cl-my-suffix/bba-geo-02-cl-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        GeoCutcUtzUbicMySuffixModule,
        GeoBbaGeo01MySuffixModule,
        GeoBbaGeo02ClMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GeoEntityModule {}
