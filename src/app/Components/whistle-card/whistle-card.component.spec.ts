import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhistleCardComponent } from './whistle-card.component';

describe('WhistleCardComponent', () => {
  let component: WhistleCardComponent;
  let fixture: ComponentFixture<WhistleCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhistleCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhistleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
