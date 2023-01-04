import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TopicsComponent } from '../topics/topics.component';

@Component({
  selector: 'gitropolis-orgs-public-source',
  standalone: true,
  imports: [TopicsComponent],
  template: `
    <h3>
      {{ name }}
      <span class="Label Label--secondary ml-1">Public</span>
    </h3>
    <p>
      {{ description }}
    </p>
    <gitropolis-orgs-topics></gitropolis-orgs-topics>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicSourceComponent {
  description = 'Smart, Fast and Extensible Build System';
  name = 'nx';
}
