import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlPreviewComponent } from './sql-preview.component';

describe('SqlPreviewComponent', () => {
  let component: SqlPreviewComponent;
  let fixture: ComponentFixture<SqlPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SqlPreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SqlPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
