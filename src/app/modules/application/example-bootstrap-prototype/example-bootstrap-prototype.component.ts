<<<<<<< HEAD
import {Component} from '@angular/core';

@Component({
    selector: 'app-example-bootstrap-prototype',
    templateUrl: './example-bootstrap-prototype.component.html',
    styleUrls: ['./example-bootstrap-prototype.component.css']
})

export class ExampleBootstrapPrototypeComponent {

    current = 1;
    features = [
        { id: 1, name: 'Alerts', link: 'alerts' },
        { id: 2, name: 'Badge', link: 'badge' },
        { id: 3, name: 'Blockquotes', link: 'blockquotes' },
        { id: 4, name: 'Breadcrumb', link: 'breadcrumb' },
        { id: 5, name: 'Buttons', link: 'buttons' },
        { id: 6, name: 'Collapse', link: 'collapse' },
        { id: 7, name: 'Dropdowns', link: 'dropdowns' },
        { id: 8, name: 'Forms', link: 'forms' },
        { id: 9, name: 'List Group', link: 'list-group' },
        { id: 10, name: 'Modal', link: 'modal' },
        { id: 11, name: 'Pagination', link: 'pagination' },
        { id: 12, name: 'Popovers', link: 'popovers' },
        { id: 13, name: 'Progress', link: 'progress' },
        { id: 14, name: 'Spinners', link: 'spinners' },
        { id: 15, name: 'Toasts', link: 'toasts' },
        { id: 16, name: 'Tooltips', link: 'tooltips' },
    ];

    changeItem(item: any) {
        this.current = item.id;
    }
}
=======
import { Component } from '@angular/core';

@Component({
  selector: 'app-example-bootstrap-prototype',
  templateUrl: './example-bootstrap-prototype.component.html',
  styleUrls: ['./example-bootstrap-prototype.component.css']
})

export class ExampleBootstrapPrototypeComponent {
  current = 1;
  features = [
    { id: 1, name: 'Alerts', link: 'alerts' },
    { id: 2, name: 'Badge', link: 'badge' },
    { id: 3, name: 'Blockquotes', link: 'blockquotes' },
    { id: 4, name: 'Breadcrumb', link: 'breadcrumb' },
    { id: 5, name: 'Buttons', link: 'buttons' },
    { id: 6, name: 'Collapse', link: 'collapse' },
    { id: 7, name: 'Dropdowns', link: 'dropdowns' },
    { id: 8, name: 'Forms', link: 'forms' },
    { id: 9, name: 'List Group', link: 'list-group' },
    { id: 10, name: 'Modal', link: 'modal' },
    { id: 11, name: 'Pagination', link: 'pagination' },
    { id: 12, name: 'Popovers', link: 'popovers' },
    { id: 13, name: 'Progress', link: 'progress' },
    { id: 14, name: 'Spinners', link: 'spinners' },
    { id: 15, name: 'Toasts', link: 'toasts' },
    { id: 16, name: 'Tooltips', link: 'tooltips' },
  ];

  changeItem(item: any) {
    this.current = item.id;
  }

}
>>>>>>> 77fa1265ff1f6831a6eef0b7db1bd9c9d98e4aa5
