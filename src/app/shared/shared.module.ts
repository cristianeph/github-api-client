import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './components/layout/layout.component';
import {LayoutContentComponent} from './components/layout-content/layout-content.component';
import {LayoutSideComponent} from './components/layout-side/layout-side.component';
import {HeaderComponent} from './components/header/header.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    LayoutComponent,
    LayoutContentComponent,
    LayoutSideComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  exports: [
    LayoutComponent,
    LayoutContentComponent,
    LayoutSideComponent,
  ]
})
export class SharedModule {
}
