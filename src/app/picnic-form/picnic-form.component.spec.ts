import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicnicFormComponent } from './picnic-form.component';

describe('PicnicFormComponent', () => {
  let component: PicnicFormComponent;
  let fixture: ComponentFixture<PicnicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicnicFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicnicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
