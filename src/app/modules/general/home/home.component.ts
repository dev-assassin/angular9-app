<<<<<<< HEAD
import {Component, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment'
import { Meta, Title } from '@angular/platform-browser';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

    name = environment.application.name;
    angular = environment.application.angular;
    bootstrap = environment.application.bootstrap;
    fontawesome = environment.application.fontawesome;

    features: any;
    constructor(
        private meta: Meta,
        private titleService: Title
    ) {
        this.features =
        [
          {
            type: 'Bootstrap Prototype',
            description: 'Bootstrap Prototype , Badges, Buttons, Collapse, Popovers, Toasts, Tooltips',
            image: 'demo-bootstrap-prototype.png',
            link: 'bootstrap-prototype'
          },
          {
            type: 'Reactive Form',
            description: 'A model-driven approach to handling form inputs',
            image: 'demo-reactive-forms.png',
            link: 'reactive-form'
          },
          {
            type: 'Services',
            description: 'Use services to view a playlist and a youtube player',
            image: 'demo-services-playlist-youtube.png',
            link: 'services'
          },
          {
            type: 'Components',
            description: 'Smartphone Component with Input, Output and Event Emitter',
            image: 'demo-components.png',
            link: 'components'
          },
          {
            type: 'HttpClient',
            description: 'Use an external API with the HttpClient module',
            image: 'demo-httpclient.png',
            link: 'httpclient'
          },
          {
            type: 'Template Driven Forms',
            description: 'Forms are the mainstay of business applications',
            image: 'demo-template-driven-forms.png',
            link: 'template-driven-forms'
          },
          {
            type: 'Charts',
            description: 'Integrate the open-source library Chart.js',
            image: 'demo-charts.png',
            link: 'charts'
          },
          {
            type: 'Leafleft',
            description: 'An open-source JavaScript library for mobile-friendly interactive maps',
            image: 'demo-leaflet-feature.png',
            link: 'leaflet'
          },
          {
            type: 'Responsive Images list',
            description: 'Display a Responsive List of Images',
            image: 'demo-responsive-images-list.png',
            link: 'movies-images-list'
          },
        ];
    }

    ngOnInit() {
        this.titleService.setTitle('angular.dev-assassin: Use Application Web avec Angular');
        this.meta.addTag({
            name: 'angular.dev-assassin',
            content: 'alexandra.petrov'
        });
        this.meta.updateTag({
            name: 'description',
            content: 'Cette application a été développée avec Angular version 9.1.4 et bootstrap 4.4.1' +
            ' Elle applique le Routing, le Lazy loading, le Server side rendering et les Progressive Web App (PWA)'
        });
    }
}
=======
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name = environment.application.name;
  angular = environment.application.angular;
  bootstrap = environment.application.bootstrap;
  fontawesome = environment.application.fontawesome;

  features: any;

  constructor(
    private meta: Meta,
    private titleService: Title) {
    this.features =
      [
        {
          type: 'Bootstrap Prototype',
          description: 'Bootstrap Prototype , Badges, Buttons, Collapse, Popovers, Toasts, Tooltips',
          image: 'demo-bootstrap-prototype.png',
          link: 'bootstrap-prototype'
        },
        {
          type: 'Reactive Form',
          description: 'A model-driven approach to handling form inputs',
          image: 'demo-reactive-forms.png',
          link: 'reactive-form'
        },
        {
          type: 'Services',
          description: 'Use services to view a playlist and a youtube player',
          image: 'demo-services-playlist-youtube.png',
          link: 'services'
        },
        {
          type: 'Components',
          description: 'Smartphone Component with Input, Output and Event Emitter',
          image: 'demo-components.png',
          link: 'components'
        },
        {
          type: 'HttpClient',
          description: 'Use an external API with the HttpClient module',
          image: 'demo-httpclient.png',
          link: 'httpclient'
        },
        {
          type: 'Template Driven Forms',
          description: 'Forms are the mainstay of business applications',
          image: 'demo-template-driven-forms.png',
          link: 'template-driven-forms'
        },
        {
          type: 'Charts',
          description: 'Integrate the open-source library Chart.js',
          image: 'demo-charts.png',
          link: 'charts'
        },
        {
          type: 'Leafleft',
          description: 'An open-source JavaScript library for mobile-friendly interactive maps',
          image: 'demo-leaflet-feature.png',
          link: 'leaflet'
        },
        {
          type: 'Responsive Images list',
          description: 'Display a Responsive List of Images',
          image: 'demo-responsive-images-list.png',
          link: 'movies-images-list'
        },
      ];

  }

  ngOnInit() {
    this.titleService.setTitle('angular.ganatan: Une Application Web avec Angular');
    this.meta.addTag({
      name: 'angular.ganatan',
      content: 'danny ganatan'
    });
    this.meta.updateTag(
      {
        name: 'description',
        content: 'Cette application a été développée avec Angular version 9.1.7 et bootstrap 4.5.0' +
          ' Elle applique le Routing, le Lazy loading, le Server side rendering et les Progressive Web App (PWA)'
      });
  }

}
>>>>>>> 77fa1265ff1f6831a6eef0b7db1bd9c9d98e4aa5
