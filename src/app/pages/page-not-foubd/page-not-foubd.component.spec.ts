import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoubdComponent } from './page-not-foubd.component';

describe('PageNotFoubdComponent', () => {
  let component: PageNotFoubdComponent;
  let fixture: ComponentFixture<PageNotFoubdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageNotFoubdComponent]
    });
    fixture = TestBed.createComponent(PageNotFoubdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
