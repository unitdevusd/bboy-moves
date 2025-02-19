import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BboyMovesVisualComponent } from './bboy-moves-visual.component';

describe('BboyMovesVisualComponent', () => {
  let component: BboyMovesVisualComponent;
  let fixture: ComponentFixture<BboyMovesVisualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BboyMovesVisualComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BboyMovesVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
