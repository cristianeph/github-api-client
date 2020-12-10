import {Component, OnInit} from '@angular/core';
import {Branch} from '../shared/interfaces/branch';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  list(branch: Branch): void {

  }

}
