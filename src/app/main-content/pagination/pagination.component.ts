import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
})
export class PaginationComponent implements OnInit {
  @Input() currentPage: number = 1;
  @Input() itemsPerPage: number = 10;
  @Input() totalItems: number = 0;

  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
    // Perform initialization logic here if needed
    // For example, you might want to ensure currentPage is within bounds
    if (this.currentPage < 1) {
      this.currentPage = 1;
    }
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  changePage(page: number) {
    this.pageChange.emit(page);
  }
}
