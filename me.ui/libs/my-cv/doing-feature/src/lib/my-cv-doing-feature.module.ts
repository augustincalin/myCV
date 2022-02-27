import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DoingComponent } from './doing/doing.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: DoingComponent },
    ]),
  ],
  declarations: [DoingComponent],
})
export class MyCvDoingFeatureModule {}
