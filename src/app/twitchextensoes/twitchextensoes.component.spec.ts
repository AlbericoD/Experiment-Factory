import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitchextensoesComponent } from './twitchextensoes.component';

describe('TwitchextensoesComponent', () => {
  let component: TwitchextensoesComponent;
  let fixture: ComponentFixture<TwitchextensoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitchextensoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitchextensoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
