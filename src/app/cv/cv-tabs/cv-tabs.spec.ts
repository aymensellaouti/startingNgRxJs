import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CvTabs } from './cv-tabs';

describe('CvTabs', () => {
  let component: CvTabs;
  let fixture: ComponentFixture<CvTabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvTabs]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CvTabs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
