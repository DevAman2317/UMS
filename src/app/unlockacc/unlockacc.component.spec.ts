import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlockaccComponent } from './unlockacc.component';

describe('UnlockaccComponent', () => {
  let component: UnlockaccComponent;
  let fixture: ComponentFixture<UnlockaccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnlockaccComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnlockaccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
