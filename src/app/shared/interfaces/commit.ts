import {Participant} from './participant';
import {User} from './user';

export interface CommitDetail {
  commit: User;
  message: string;
  url: string;
}

export interface Commit {
  sha: string;
  author: Participant;
  committer: Participant;
  commit: CommitDetail;
  html_url: string;
}
