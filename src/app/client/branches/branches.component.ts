import {Component, OnInit} from '@angular/core';
import {BranchesService} from '../../shared/services/branches.service';
import {Branch} from '../../shared/interfaces/branch';
import to from 'await-to-js';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss']
})
export class BranchesComponent implements OnInit {
  branches: Branch[] = [];

  constructor(private branchesService: BranchesService) {
  }

  async ngOnInit(): Promise<void> {
    const [error, response] = await to<Branch[]>(this.branchesService.list().toPromise());
    this.branches = response ? response : [];
  }
}
