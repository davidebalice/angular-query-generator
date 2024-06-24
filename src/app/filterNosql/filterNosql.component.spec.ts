import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldNosqlComponent } from './filterNosql.component';

describe('FieldNosqlComponent', () => {
  let component: FieldNosqlComponent;
  let fixture: ComponentFixture<FieldNosqlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FieldNosqlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FieldNosqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
