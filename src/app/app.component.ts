import { Component } from '@angular/core';
import { Child, ChildData } from './subreddit';
import { RedditApiService } from './reddit-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Unit_8_Angular_Paupers_Reddit_Lab';

  searchResults : Child[] = [];
  searchTerm : string = "";
  selectedPost : ChildData = {} as ChildData;

  constructor(private redditAPI:RedditApiService) {}

  searchReddit() : void {
    this.redditAPI.searchPost(this.searchTerm).subscribe(
      (result)=>{
        this.searchResults = result.data.children;
      }
    );
  }

  getPostDetails(id : string) : void {
    this.redditAPI.searchPostById(id).subscribe(
      (result)=>{
        this.selectedPost = result;
      }
    );
  }
}
