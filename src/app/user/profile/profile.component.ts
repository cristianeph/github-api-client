import {Component, OnInit} from '@angular/core';
import {UserService} from '../../shared/services/user.service';
import {User} from '../../shared/interfaces/user';
import to from 'await-to-js';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  info: User | null = null;

  constructor(private userService: UserService) {
  }

  async ngOnInit(): Promise<void> {
    const [error, response] = await to<User>(this.userService.get().toPromise());
    this.info = response ? response : null;
  }

  openGitUrl(): void {
    window.open(`https://github.com/cristianeph/${environment.apiRepository}`);
  }

}
