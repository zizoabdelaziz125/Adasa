import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedArticleCard } from './featured-article-card';

describe('FeaturedArticleCard', () => {
  let component: FeaturedArticleCard;
  let fixture: ComponentFixture<FeaturedArticleCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedArticleCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedArticleCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
