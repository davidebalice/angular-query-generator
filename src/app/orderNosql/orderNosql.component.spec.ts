import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderNosqlComponent } from './orderNosql.component';

describe('OrderNosqlComponent', () => {
  let component: OrderNosqlComponent;
  let fixture: ComponentFixture<OrderNosqlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderNosqlComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderNosqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
