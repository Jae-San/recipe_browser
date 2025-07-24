import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthBar } from './auth-bar';

describe('AuthBar', () => {
  let component: AuthBar;
  let fixture: ComponentFixture<AuthBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
