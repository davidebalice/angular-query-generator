import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinManagerComponent } from './join-manager.component';

describe('JoinManagerComponent', () => {
  let component: JoinManagerComponent;
  let fixture: ComponentFixture<JoinManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JoinManagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JoinManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
