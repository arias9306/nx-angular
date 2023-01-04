import { Component } from '@angular/core';

import { PublicSourceComponent } from '../public-source/public-source.component';

@Component({
  selector: 'gitropolis-orgs-repository',
  standalone: true,
  imports: [PublicSourceComponent],
  template: `
    <h2>Repositories</h2>
    <br />
    <div class="Box">
      <ul>
        <li class="Box-row">
          <gitropolis-orgs-public-source></gitropolis-orgs-public-source>
        </li>
      </ul>
    </div>
  `,
  styles: [],
})
export class OrganizationsFeatrepositoriesComponent {}
