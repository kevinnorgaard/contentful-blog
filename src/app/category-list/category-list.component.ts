import { Component } from '@angular/core';
import { CategoryComponent } from './category/category.component';

@Component({
    selector: 'app-category-list',
    templateUrl: './category-list.component.html',
    styleUrl: './category-list.component.css',
    imports: [CategoryComponent]
})
export class CategoryListComponent {}
