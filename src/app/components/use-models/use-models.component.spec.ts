import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseModelsComponent } from './use-models.component';

describe('UseModelsComponent', () => {
  let component: UseModelsComponent;
  let fixture: ComponentFixture<UseModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseModelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
