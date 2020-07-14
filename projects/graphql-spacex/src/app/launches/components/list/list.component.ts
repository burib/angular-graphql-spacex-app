import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PastLaunchesListGQL } from '../../../spacexGraphql.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  constructor(private pastLaunchesService: PastLaunchesListGQL) {}

  pastLaunches$ = this.pastLaunchesService.fetch({ limit: 30 }).pipe(map(
    res => res.data.launchesPast
  ));

  ngOnInit(): void {
  }

}
