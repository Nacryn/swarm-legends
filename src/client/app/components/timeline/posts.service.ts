import {POSTS} from './mock-posts';
import {Injectable} from 'angular2/core';

@Injectable()
export class PostService {
  getPosts() {
    return Promise.resolve(POSTS);
  }

  getPost(id: number) {
    return Promise.resolve(POSTS).then(
      posts => posts.filter(post => post.id === id)[0]
    );
  }

}
