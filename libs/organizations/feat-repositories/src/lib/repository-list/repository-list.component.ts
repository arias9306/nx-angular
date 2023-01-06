import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RepositoryStateService } from '@nx-angular/organizations/data-access';
import { filter, map, Observable } from 'rxjs';

import { PublicSourceComponent } from '../public-source/public-source.component';

@Component({
  selector: 'gitropolis-orgs-repository-list',
  standalone: true,
  imports: [PublicSourceComponent, CommonModule],
  template: `
    <h2>Repositories</h2>
    <br />
    <div class="Box">
      <ul>
        <li class="Box-row" *ngFor="let repository of repositories$ | async">
          <gitropolis-orgs-public-source
            [repository]="repository"
          ></gitropolis-orgs-public-source>
        </li>
      </ul>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RepositoryListComponent {
  private route = inject(ActivatedRoute);
  private store = inject(RepositoryStateService);

  private organizationParam$ = this.route.paramMap.pipe(
    map((params) => params.get('organization')),
    filter((organization) => organization !== null)
  ) as Observable<string>;

  repositories$ = this.store.select('repositories');

  constructor() {
    this.store.connect('organization', this.organizationParam$);
  }
}
