import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture-with-text',
  templateUrl: './picture-with-text.component.html',
  styleUrls: ['./picture-with-text.component.css'],
})
export class PictureWithTextComponent implements OnInit {
  @Input() content!: IPictureWithTextComponenttImage;
  constructor() {}

  ngOnInit(): void {}
}

interface IPictureWithTextComponenttImage {
  text: string;
  image: {
    url: string;
    alt: string;
  };
}
