import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChildData, Reddit, RedditData } from './subreddit';

@Injectable({
  providedIn: 'root'
})
export class RedditApiService {
  url:string = "https://www.reddit.com/";
  constructor(private http:HttpClient) { }

  searchPost(searchTerm:string):Observable<Reddit>{
    return this.http.get<Reddit>(this.url + "r/aww/search/?q=" + searchTerm + "&restrict_sr=1");
  }

  searchPostById(id:string) {
    return this.http.get<ChildData>(this.url + "r/aww/comments/" + id);
  }
}
