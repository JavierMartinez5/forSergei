import { AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

export interface NavContent {
  sectionTitle: string
  chapters: Chapter[]
}

export interface Chapter {
  chapterTitle: string
  id: string
}

export interface TabsLink {
  linkTitle: string
  sectionRouteTitle: string
}

@Component({
  selector: 'app-nav-main',
  templateUrl: './nav-main.component.html',
  styleUrls: ['./nav-main.component.scss']
})
export class NavMainComponent implements OnInit, OnDestroy {
  
  public navContent: NavContent[] = [{sectionTitle: 'Вступ', chapters: [{chapterTitle: 'Введення в JavaScript', id: '11'}, {chapterTitle: 'Довідники та специфікації', id: '12'}, {chapterTitle: 'Редактори коду', id: '13'}, {chapterTitle: 'Консоль розробника', id: '14'}]}, {sectionTitle: 'Oснови JavaScript', chapters: [{chapterTitle: 'Привіт світ!', id: '21'}, {chapterTitle: 'Структура кода', id: '22'}, {chapterTitle: 'Суворий режим - "use strict"', id: '23'}, {chapterTitle: 'змінні', id: '24'}, {chapterTitle: 'типи даних', id: '25'}, {chapterTitle: 'Взаємодія: попередження, запит, підтвердження', id: '26'}, {chapterTitle: 'перетворення типів', id: '27'}, {chapterTitle: 'Базові оператори, математика', id: '28'}, {chapterTitle: 'Оператори порівняння', id: '29'}, {chapterTitle: 'Умовне розгалуження: if, "?"', id: '291'}, {chapterTitle: 'Логічні оператори', id: '292'}, {chapterTitle: 'Оператор об\'єднання з null "??"', id: '293'}, {chapterTitle: 'Цикли while і for', id: '294'}, {chapterTitle: 'Конструкція «перемикач»', id: '295'}, {chapterTitle: 'функції', id: '296'}, {chapterTitle: 'Вираз функції', id: '297'}, {chapterTitle: 'Функції-стрілки, основи', id: '298'}, {chapterTitle: 'особливості JavaScript', id: '299'}]}]

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  pSub!: Subscription

  currentSection = 'theory'
  
  public links: TabsLink[] = [{linkTitle: 'ТЕОРІЯ', sectionRouteTitle: 'theory'}, {linkTitle: 'ТЕСТИ', sectionRouteTitle: 'tests'}, {linkTitle: 'ЗАВДАННЯ', sectionRouteTitle: 'practice'}]
  
  public currentChapterId = this.navContent[0].chapters[0].id
  
  activeLink = this.links[0].linkTitle;
  

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {}

  onTabLinkClick(linkTitle: string, sectionRouteTitle: string) {
    this.activeLink = linkTitle
    this.currentSection = sectionRouteTitle
  }
  
  ngOnInit() {
    this.router.navigate([ '/javaScript', this.navContent[0].chapters[0].id , this.links[0].sectionRouteTitle ])
  }


  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe()
    }
  }
}
