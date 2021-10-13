import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  public $currentParam: Subject<string | null> = new Subject

  constructor() { }

  setCurrentParam(param: string | null) {
    this.$currentParam.next(param)
  }
}
