import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedArticles } from './featured-articles';

describe('FeaturedArticles', () => {
  let component: FeaturedArticles;
  let fixture: ComponentFixture<FeaturedArticles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedArticles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedArticles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
