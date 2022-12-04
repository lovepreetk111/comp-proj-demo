import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {
  @Input() image!: IPictureComponentImage;
  constructor() { }

  ngOnInit(): void {
  }

}


interface IPictureComponentImage{
  url: string;
  alt: string;
}
