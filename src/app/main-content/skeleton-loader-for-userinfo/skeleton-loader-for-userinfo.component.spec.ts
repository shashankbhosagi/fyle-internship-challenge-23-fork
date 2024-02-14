import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonLoaderForUserinfoComponent } from './skeleton-loader-for-userinfo.component';

describe('SkeletonLoaderForUserinfoComponent', () => {
  let component: SkeletonLoaderForUserinfoComponent;
  let fixture: ComponentFixture<SkeletonLoaderForUserinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkeletonLoaderForUserinfoComponent]
    });
    fixture = TestBed.createComponent(SkeletonLoaderForUserinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
