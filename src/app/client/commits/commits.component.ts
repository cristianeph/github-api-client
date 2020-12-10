import {Component, Input, OnInit} from '@angular/core';
import {Commit} from '../../shared/interfaces/commit';

@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.scss']
})
export class CommitsComponent implements OnInit {
  @Input() commits: Commit[] = [];
  displayedColumns = ['mensaje', 'autor', 'links'];

  constructor() {
  }

  ngOnInit(): void {
  }

}
