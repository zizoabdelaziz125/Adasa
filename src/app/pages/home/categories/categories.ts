import { Component } from '@angular/core';
import { Category } from '../../../category';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class Categories {
categories: Category[] = [
    { name: 'إضاءة', count: 3, color: 'emerald' },
    { name: 'بورتريه', count: 3, color: 'purple' },
    { name: 'مناظر طبيعية', count: 2, color: 'blue' },
    { name: 'تقنيات', count: 5, color: 'orange' },
    { name: 'معدات', count: 3, color: 'emerald' },
  ];
}
