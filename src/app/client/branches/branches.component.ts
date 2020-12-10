import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BranchesService} from '../../shared/services/branches.service';
import {Branch} from '../../shared/interfaces/branch';
import to from 'await-to-js';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss']
})
export class BranchesComponent implements OnInit {
  @Output() selected: EventEmitter<Branch> = new EventEmitter<Branch>();
  branches: Branch[] = [];
  branch: FormControl = new FormControl();

  constructor(private branchesService: BranchesService) {
  }

  async ngOnInit(): Promise<void> {
    await this.call();
    await this.triggers();
  }

  async triggers(): Promise<void> {
    this.branch.valueChanges.subscribe(value => {
      this.selected.emit(value);
    });
  }

  async call(): Promise<void> {
    const [error, response] = await to<Branch[]>(this.branchesService.list().toPromise());
    this.branches = response ? response : [];
    if (this.branches.length > 0) {
      this.branch.setValue(this.branches[0]);
    }
  }
}
