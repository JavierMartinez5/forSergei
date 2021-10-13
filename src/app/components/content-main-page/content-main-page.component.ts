import { Component, Input, OnInit } from '@angular/core';

export interface SomeObj {
  currentId: string
  currentSection: string
}

@Component({
  selector: 'app-content-main-page',
  templateUrl: './content-main-page.component.html',
  styleUrls: ['./content-main-page.component.scss']
})
export class ContentMainPageComponent implements OnInit {
  @Input() someObj!: SomeObj
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
