import { Component, OnInit } from 'angular2/core';

import { Post } from './post';
import { PostService } from './posts.service';

@Component({
  selector: 'timeline',
  templateUrl: 'app/components/timeline/timeline.component.html',
  styleUrls: ['app/components/timeline/timeline.component.css']
})

export class TimelineComponent implements OnInit {
  posts: Post[];
  selectedPost: Post;

  constructor(private _postService: PostService) { }

  getPosts() {
    this._postService.getPosts().then(posts => this.posts = posts);
  }

  ngOnInit() {
    this.getPosts();
  }

}
