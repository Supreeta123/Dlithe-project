import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PestryListtDetailsComponent } from './pestry-listt-details.component';

describe('PestryListtDetailsComponent', () => {
  let component: PestryListtDetailsComponent;
  let fixture: ComponentFixture<PestryListtDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PestryListtDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PestryListtDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
