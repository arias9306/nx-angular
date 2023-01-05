import { inject, Injectable } from '@angular/core';
import { from, map } from 'rxjs';

import { octokitToken } from './octokit.token';

@Injectable({
  providedIn: 'root',
})
export class RepositoryApiService {
  private octokit = inject(octokitToken);

  byOrganization(organization: string) {
    return from(
      this.octokit.rest.repos.listForOrg({
        org: organization,
        sort: 'updated',
      })
    ).pipe(map((response) => response.data));
  }
}
