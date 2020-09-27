import { Title } from '@angular/platform-browser';

export class TitleSetter {
  constructor(private titleService: Title) {}

  setTitle(title: string) {
     this.titleService.setTitle(title);
  }
}