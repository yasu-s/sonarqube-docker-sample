import { TestBed, async, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { of } from 'rxjs';

import { App2Component } from './app2.component';
import { AppService } from './app.service';

describe('App2Component', () => {
  let component: App2Component;
  let fixture: ComponentFixture<App2Component>;
  let appService: AppService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        App2Component
      ],
      providers: [
        { provide: AppService, useValue: { get: null } }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture    = TestBed.createComponent(App2Component);
    component  = fixture.componentInstance;
    appService = TestBed.get(AppService);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    // verify
    expect(component).toBeDefined();
  });

  it('title', () => {
    // verify
    expect(component.title).toBe('ng-sample1');
  });
});
