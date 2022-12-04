import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FakeBackendService } from '../fake-backend.service';

@Component({
  selector: 'app-component-placeholder',
  templateUrl: './component-placeholder.component.html',
  styleUrls: ['./component-placeholder.component.css']
})
export class ComponentPlaceholderComponent implements OnInit {
  page: any;
  currentPageIndex = 0;
  pages: Array<any> = [
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
  constructor(private activeRouter: ActivatedRoute,private fake:  FakeBackendService, private router: Router) { }

  ngOnInit(): void {
    this.activeRouter.params.subscribe((params:any) => {
      //console.log(params)
      const page = params.page;
      //const pageIndex = this.pages.findIndex(pg => pg.pageName === page);
      //this.currentPageIndex = pageIndex;\\
      this.page = this.fake.getPageConfig(page)
      if(!this.page) this.router.navigate(['/not-found'])
    })
  }

}
