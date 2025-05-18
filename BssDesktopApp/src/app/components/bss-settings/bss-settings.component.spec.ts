import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BssSettingsComponent } from './bss-settings.component';

describe('BssSettingsComponent', () => {
  let component: BssSettingsComponent;
  let fixture: ComponentFixture<BssSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BssSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BssSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
