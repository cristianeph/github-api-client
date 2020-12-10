import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ClientRoutingModule} from './client-routing.module';
import {CommitsComponent} from './commits/commits.component';
import {BranchesComponent} from './branches/branches.component';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ClientComponent } from './client.component';
import {UserModule} from '../user/user.module';


@NgModule({
  declarations: [CommitsComponent, BranchesComponent, ClientComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,

    UserModule,
  ]
})
export class ClientModule {
}
