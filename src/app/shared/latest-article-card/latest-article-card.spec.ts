import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestArticleCard } from './latest-article-card';

describe('LatestArticleCard', () => {
  let component: LatestArticleCard;
  let fixture: ComponentFixture<LatestArticleCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestArticleCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestArticleCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
