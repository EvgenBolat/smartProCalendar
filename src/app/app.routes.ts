import { Routes } from '@angular/router';
import { LayoutComponent } from './common-ui/layout/layout.component'
import { SomeTestPageComponent } from './pages/some-test-page/some-test-page.component'

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'me',
        pathMatch: 'full'
      }
      ,
      {
        path: 'me',
        component: SomeTestPageComponent
      },
    ]
  }
];
