import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEnterpriseComponent } from './detail-enterprise.component';

describe('DetailEnterpriseComponent', () => {
  let component: DetailEnterpriseComponent;
  let fixture: ComponentFixture<DetailEnterpriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailEnterpriseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailEnterpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
