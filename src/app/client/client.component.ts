import {Component, OnInit} from '@angular/core';
import {Branch} from '../shared/interfaces/branch';
import {Commit} from '../shared/interfaces/commit';
import {CommitsService} from '../shared/services/commits.service';
import to from 'await-to-js';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  commits: Commit[] = [];

  constructor(private commitsService: CommitsService) {
  }

  ngOnInit(): void {
  }

  async list(branch: Branch): Promise<void> {
    const [error, response] = await to<Commit[]>(this.commitsService.listBy(branch.name).toPromise());
    this.commits = response ? response : [];
  }

}
