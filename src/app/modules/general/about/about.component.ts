import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  dependencies: any;
  features: any;

  constructor() {
    this.dependencies = {
      frontend: [
<<<<<<< HEAD
        { name: 'Angular 9.1.4' },
        { name: 'Angular Universal 9.1.0' },
        { name: 'Font Awesome 5.13.0' },
        { name: 'Bootstrap 4.4.1' },
        { name: 'JQuery 3.4.1' },
=======
        { name: 'Angular 9.1.7' },
        { name: 'Angular Universal 9.1.1' },
        { name: 'Font Awesome 5.13.0' },
        { name: 'Bootstrap 4.5.0' },
        { name: 'JQuery 3.5.1' },
>>>>>>> 77fa1265ff1f6831a6eef0b7db1bd9c9d98e4aa5
      ],
      backend: [
        { name: 'Node.js' },
        { name: 'Express' },
        { name: 'pg-promise' },
      ]
    };

    this.features = {
      frontend: [
        {
          name: 'Angular CLI',
<<<<<<< HEAD
          englishTutorial: 'https://www.dev-assassin.com/tutorials/getting-started-with-angular',
          frenchTutorial: 'https://www.dev-assassin.com/tutorials/demarrer-avec-angular',
        },
        {
          name: 'Routing',
          englishTutorial: 'https://www.dev-assassin.com/tutorials/routing-with-angular',
          frenchTutorial: 'https://www.dev-assassin.com/tutorials/routing-avec-angular',
        },
        {
          name: 'Lazy loading',
          englishTutorial: 'https://www.dev-assassin.com/tutorials/lazy-loading-with-angular',
          frenchTutorial: 'https://www.dev-assassin.com/tutorials/lazy-loading-avec-angular',
        },
        {
          name: 'Bootstrap',
          englishTutorial: 'https://www.dev-assassin.com/tutorials/bootstrap-with-angular',
          frenchTutorial: 'https://www.dev-assassin.com/tutorials/bootstrap-avec-angular',
        },
        {
          name: 'Server side Rendering',
          englishTutorial: 'https://www.dev-assassin.com/tutorials/server-side-rendering-with-angular-universal',
          frenchTutorial: 'https://www.dev-assassin.com/tutorials/server-side-rendering-avec-angular-universal',
        },
        {
          name: 'HTTPClient',
          englishTutorial: 'https://www.dev-assassin.com/tutorials/httpclient-with-angular',
          frenchTutorial: 'https://www.dev-assassin.com/tutorials/httpclient-avec-angular',
        },
        {
          name: 'Transfer State',
          englishTutorial: 'https://www.dev-assassin.com/tutorials/transfer-state-with-angular',
          frenchTutorial: 'https://www.dev-assassin.com/tutorials/transfer-state-avec-angular',
        },
        {
          name: 'Progressive Web App',
          englishTutorial: 'https://www.dev-assassin.com/tutorials/progressive-web-app-with-angular',
          frenchTutorial: 'https://www.dev-assassin.com/tutorials/progressive-web-app-avec-angular',
        },
        {
          name: 'Search Engine optimization',
          englishTutorial: 'https://www.dev-assassin.com/tutorials/search-engine-optimization-with-angular',
          frenchTutorial: 'https://www.dev-assassin.com/tutorials/search-engine-optimization-avec-angular',
=======
          englishTutorial: 'https://www.ganatan.com/tutorials/getting-started-with-angular',
          frenchTutorial: 'https://www.ganatan.com/tutorials/demarrer-avec-angular',
        },
        {
          name: 'Routing',
          englishTutorial: 'https://www.ganatan.com/tutorials/routing-with-angular',
          frenchTutorial: 'https://www.ganatan.com/tutorials/routing-avec-angular',
        },
        {
          name: 'Lazy loading',
          englishTutorial: 'https://www.ganatan.com/tutorials/lazy-loading-with-angular',
          frenchTutorial: 'https://www.ganatan.com/tutorials/lazy-loading-avec-angular',
        },
        {
          name: 'Bootstrap',
          englishTutorial: 'https://www.ganatan.com/tutorials/bootstrap-with-angular',
          frenchTutorial: 'https://www.ganatan.com/tutorials/bootstrap-avec-angular',
        },
        {
          name: 'Server side Rendering',
          englishTutorial: 'https://www.ganatan.com/tutorials/server-side-rendering-with-angular-universal',
          frenchTutorial: 'https://www.ganatan.com/tutorials/server-side-rendering-avec-angular-universal',
        },
        {
          name: 'HTTPClient',
          englishTutorial: 'https://www.ganatan.com/tutorials/httpclient-with-angular',
          frenchTutorial: 'https://www.ganatan.com/tutorials/httpclient-avec-angular',
        },
        {
          name: 'Transfer State',
          englishTutorial: 'https://www.ganatan.com/tutorials/transfer-state-with-angular',
          frenchTutorial: 'https://www.ganatan.com/tutorials/transfer-state-avec-angular',
        },
        {
          name: 'Progressive Web App',
          englishTutorial: 'https://www.ganatan.com/tutorials/progressive-web-app-with-angular',
          frenchTutorial: 'https://www.ganatan.com/tutorials/progressive-web-app-avec-angular',
        },
        {
          name: 'Search Engine optimization',
          englishTutorial: 'https://www.ganatan.com/tutorials/search-engine-optimization-with-angular',
          frenchTutorial: 'https://www.ganatan.com/tutorials/search-engine-optimization-avec-angular',
>>>>>>> 77fa1265ff1f6831a6eef0b7db1bd9c9d98e4aa5
        },
        {
          name: 'Components',
          englishTutorial: null,
<<<<<<< HEAD
          frenchTutorial: 'https://www.dev-assassin.com/tutorials/components-avec-angular',
=======
          frenchTutorial: 'https://www.ganatan.com/tutorials/components-avec-angular',
>>>>>>> 77fa1265ff1f6831a6eef0b7db1bd9c9d98e4aa5
        },
        {
          name: 'Services',
          englishTutorial: null,
<<<<<<< HEAD
          frenchTutorial: 'https://www.dev-assassin.com/tutorials/services-avec-angular',
=======
          frenchTutorial: 'https://www.ganatan.com/tutorials/services-avec-angular',
>>>>>>> 77fa1265ff1f6831a6eef0b7db1bd9c9d98e4aa5
        },
        {
          name: 'Responsive Images List',
          englishTutorial: null,
          frenchTutorial: null,
        },
      ],
      backend: [
        { name: 'Local JSON' },
        { name: 'RESTFull API' },
        { name: 'CRUD API' },
        { name: 'Database Creation' },
        { name: 'Data Import' },
        { name: 'Data Export' },
      ]
    };

  }

}
