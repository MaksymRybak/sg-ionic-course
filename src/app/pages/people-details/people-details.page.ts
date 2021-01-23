import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.page.html',
  styleUrls: ['./people-details.page.scss'],
})
export class PeopleDetailsPage implements OnInit {
  peopleDetails: any;

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    const peopleId = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getPeopleDetails(peopleId).subscribe(pd => {
      this.peopleDetails = pd;
    })
  }

}
