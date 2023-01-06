import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'gitropolis-orgs-topics',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="d-inline-flex flex-wrap flex-items-center my-1"
      *ngIf="hasTopics"
    >
      <span
        *ngFor="let topic of topics"
        class="IssueLabel color-bg-accent color-fg mr-1"
      >
        {{ topic }}
      </span>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopicsComponent {
  @Input() topics: readonly string[] = [];

  get hasTopics(): boolean {
    return this.topics.length > 0;
  }
}
