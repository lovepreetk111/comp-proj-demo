import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentPlaceholderComponent } from './component-placeholder.component';

describe('ComponentPlaceholderComponent', () => {
  let component: ComponentPlaceholderComponent;
  let fixture: ComponentFixture<ComponentPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentPlaceholderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
