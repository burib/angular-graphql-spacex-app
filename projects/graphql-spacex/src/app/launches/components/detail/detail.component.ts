import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LaunchDetailsGQL } from '../../../spacexGraphql.service';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailComponent implements OnInit {
  constructor(private readonly activatedRoute: ActivatedRoute,
              private readonly launchDetailsService: LaunchDetailsGQL) { }

  launchDetails$ = this.activatedRoute.paramMap.pipe(
    map((params) => params.get('id') as string),
    switchMap((id) => this.launchDetailsService.fetch({ id })),
    map((res) => res.data.launch)
  );

  ngOnInit(): void {
  }

}
