import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with current page 1 if current page is less than 1', () => {
    component.currentPage = 0;
    component.ngOnInit();
    expect(component.currentPage).toEqual(1);
  });

  it('should not change current page if current page is greater than or equal to 1', () => {
    component.currentPage = 2;
    component.ngOnInit();
    expect(component.currentPage).toEqual(2);
  });

  it('should calculate total pages correctly', () => {
    component.totalItems = 25;
    component.itemsPerPage = 10;
    expect(component.totalPages).toEqual(3);
  });

  it('should generate an array of page numbers', () => {
    component.totalItems = 25;
    component.itemsPerPage = 10;
    expect(component.pages).toEqual([1, 2, 3]);
  });

  it('should emit page change event with selected page number', () => {
    spyOn(component.pageChange, 'emit');
    component.changePage(2);
    expect(component.pageChange.emit).toHaveBeenCalledWith(2);
  });
});
