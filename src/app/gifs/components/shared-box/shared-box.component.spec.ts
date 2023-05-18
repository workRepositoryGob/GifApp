import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedBoxComponent } from './shared-box.component';

describe('SharedBoxComponent', () => {
  let component: SharedBoxComponent;
  let fixture: ComponentFixture<SharedBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
