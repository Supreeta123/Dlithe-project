import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PestryListtComponent } from './pestry-listt.component';

describe('PestryListtComponent', () => {
  let component: PestryListtComponent;
  let fixture: ComponentFixture<PestryListtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PestryListtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PestryListtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
