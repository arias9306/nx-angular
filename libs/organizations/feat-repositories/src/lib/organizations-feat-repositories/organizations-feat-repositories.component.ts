import { Component } from '@angular/core';

import { RepositoryListComponent } from '../repository-list/repository-list.component';

@Component({
  selector: 'gitropolis-orgs-repository',
  standalone: true,
  imports: [RepositoryListComponent],
  template: `
    <gitropolis-orgs-repository-list></gitropolis-orgs-repository-list>
  `,
  styles: [],
})
export class OrganizationsFeatrepositoriesComponent {}
