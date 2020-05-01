import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-categories-bar',
  templateUrl: './categories-bar.component.html',
  styleUrls: ['./categories-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
