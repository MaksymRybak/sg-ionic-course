import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {

  people$: Observable<any>;

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
    this.people$ = this.api.getPeople();
  }

  openDetails(p) {
    let split = p.url.split('/');
    let id = split[split.length - 2];
    this.router.navigateByUrl(`/tabs/people/${id}`);
  }
}
