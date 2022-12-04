import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeBackendService {

  constructor() { }

  getPageConfig(pageName: string) {
    const pageConfig = PAGE_CONFIG.find(pg => pg.pageName === pageName);
    if(!pageConfig) return null;
    return pageConfig;
  }
}


const PAGE_CONFIG = [
  {
    pageName: 'about',
    component: [
      {
        compID: 1,
        metadata: {
          url: 'https://picsum.photos/id/245/200/300',
          alt: 'example1',
        },
      },
      {
        compID: 2,
        metadata: {
          text: 'Example text',
          image: {
            url: 'https://picsum.photos/id/235/200/300',
            alt: 'example2',
          },
        },
      },
    ],
  },
  {
    pageName: 'contact',
    component: [
      {
        compID: 2,
        metadata: {
          text: 'Contact Information',
          image: {
            url: 'https://picsum.photos/id/237/200/300',
            alt: 'example2',
          },
        },
      },
      {
        compID: 3,
        metadata: {
          text: 'More Contact us',
        },
      },
    ],
  },
];