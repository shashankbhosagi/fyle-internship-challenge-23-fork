import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepoCardComponent } from './repo-card.component';

describe('RepoCardComponent', () => {
  let component: RepoCardComponent;
  let fixture: ComponentFixture<RepoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepoCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render repo name', () => {
    const repoName = 'Test Repo';
    component.repo = { name: repoName };
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.repo-name').textContent).toContain(
      repoName
    );
  });

  it('should truncate long repo names', () => {
    const repoName = 'This is a very long repository name';
    const maxLength = 10;
    const truncatedName = 'This is a ...';
    const result = component.limitStringSize(repoName, maxLength);
    expect(result).toEqual(truncatedName);
  });

  it('should return empty string for null or undefined repo name', () => {
    expect(component.limitStringSize(null!, 10)).toEqual('');
    expect(component.limitStringSize(undefined!, 10)).toEqual('');
  });
});
