import { Component, Input } from '@angular/core';
import { RedditApiService } from '../reddit-api.service';
import { ChildData } from '../subreddit';

@Component({
  selector: 'app-subreddit-details',
  templateUrl: './subreddit-details.component.html',
  styleUrls: ['./subreddit-details.component.css']
})
export class SubredditDetailsComponent {
  constructor(private redditservice : RedditApiService) {}

  ngOnInit() : void {}

  @Input() displayPost : ChildData = {} as ChildData;
}
