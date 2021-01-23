import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {

  films$: Observable<any>;

  constructor(private navController: NavController, private router: Router, private api: ApiService) { }

  ngOnInit() {
    this.films$ = this.api.getFilms();
  }

  openDetails(film) {
    let split = film.url.split('/');
    let filmId = split[split.length - 2];
    this.router.navigateByUrl(`/tabs/films/${filmId}`);
  }

  goToPlanets() {
    this.navController.navigateRoot(`/tabs/planets`)
  }

}
