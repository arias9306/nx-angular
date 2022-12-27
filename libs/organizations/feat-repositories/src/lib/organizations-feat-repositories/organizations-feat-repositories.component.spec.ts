import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationsFeatrepositoriesComponent } from './organizations-feat-repositories.component';

describe('OrganizationsFeatrepositoriesComponent', () => {
  let component: OrganizationsFeatrepositoriesComponent;
  let fixture: ComponentFixture<OrganizationsFeatrepositoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizationsFeatrepositoriesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrganizationsFeatrepositoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
