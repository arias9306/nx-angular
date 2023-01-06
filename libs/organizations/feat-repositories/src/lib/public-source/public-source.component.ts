import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Repository } from '@nx-angular/organizations/data-access';

import { TopicsComponent } from '../topics/topics.component';

@Component({
  selector: 'gitropolis-orgs-public-source',
  standalone: true,
  imports: [TopicsComponent, CommonModule],
  template: `
    <h3>
      {{ repository?.name }}
      <span class="Label Label--secondary ml-1">Public</span>
    </h3>
    <p *ngIf="repository?.description">
      {{ repository?.description }}
    </p>
    <gitropolis-orgs-topics
      [topics]="repository?.topics ?? []"
    ></gitropolis-orgs-topics>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicSourceComponent {
  @Input() repository: Repository | null = null;
}
