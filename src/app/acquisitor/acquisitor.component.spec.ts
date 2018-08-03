import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AcquisitorComponent } from './acquisitor.component';


describe('AcquisitorComponent', () => {
  let component: AcquisitorComponent;
  let fixture: ComponentFixture<AcquisitorComponent>;
   beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcquisitorComponent ]
    })
    .compileComponents();
  }));
   beforeEach(() => {
    fixture = TestBed.createComponent(AcquisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
   it('should create', () => {
    expect(component).toBeTruthy();
  });
});