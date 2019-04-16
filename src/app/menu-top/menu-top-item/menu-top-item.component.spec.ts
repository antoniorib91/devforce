import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTopItemComponent } from './menu-top-item.component';

describe('MenuTopItemComponent', () => {
  let component: MenuTopItemComponent;
  let fixture: ComponentFixture<MenuTopItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuTopItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTopItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
