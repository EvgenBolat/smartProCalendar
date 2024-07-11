import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router'

@Component({
  selector: 'app-some-test-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './some-test-page.component.html',
  styleUrl: './some-test-page.component.scss'
})
export class SomeTestPageComponent {

  router = inject(Router)
  constructor() {
  }
}
