import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RouteService } from 'src/app/services/route.service';



@Component({
  selector: 'app-content-main-page',
  templateUrl: './content-main-page.component.html',
  styleUrls: ['./content-main-page.component.scss']
})
export class ContentMainPageComponent implements OnInit {
  
  constructor( private route: ActivatedRoute, private routeService: RouteService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.routeService.setCurrentParam(params.section)
      console.log(params.section)
    })
  }

}
