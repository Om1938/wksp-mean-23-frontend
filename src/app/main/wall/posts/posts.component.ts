import { Component, OnInit, inject } from '@angular/core';
import { WallService } from '../../../wall/wall.service';
import { Post } from '../post.type';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [PostComponent],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent implements OnInit {
  postService = inject(WallService);
  posts: Post[] = [];

  constructor() {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  deletePost(deletePost: Post) {
    this.postService.deletePost(deletePost._id).subscribe((res) => {
      if (res)
        this.posts = this.posts.filter((post) => post._id !== deletePost._id);
    });
  }
}
