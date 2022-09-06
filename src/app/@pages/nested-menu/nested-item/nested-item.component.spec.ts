import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedItemComponent } from './nested-item.component';

describe('NestedItemComponent', () => {
  let component: NestedItemComponent;
  let fixture: ComponentFixture<NestedItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
