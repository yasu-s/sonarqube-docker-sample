import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

import { AppService } from './app.service';

describe('AppService', () => {
  let http: HttpClient;
  let service: AppService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AppService,
        { provide: HttpClient, useValue: { get: null } }
      ]
    });

    http    = TestBed.get(HttpClient);
    service = TestBed.get(AppService);
  });


  it('should create the service', () => {
    // verify
    expect(service).toBeDefined();
  });

  describe('get', () => {
    it('onClick', (done) => {
      // setup
      spyOn(http, 'get').and.returnValue(of({ memo: 'aaaa' }));

      // exercise
      service.get().subscribe(data => {
        // verify
        expect(data).toEqual({ memo: 'aaaa' });
        expect(http.get).toHaveBeenCalled();
        expect(http.get).toHaveBeenCalledWith('./assets/data.json');
        done();
      });
    });
  });
});
