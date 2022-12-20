import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'nx-angular-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="container-lg p-responsive">
      <h1>Gitropolis</h1>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'gitropolis';
}
