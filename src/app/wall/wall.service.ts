import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Post, Comment } from '../main/wall/post.type';

@Injectable({
  providedIn: 'root',
})
export class WallService {
  comment(_id: string, value: Partial<{ content: string | null }>) {
    return this.http.post<Comment>(
      `${this.baseUrl}posts/${_id}/comments`,
      value,
      {
        withCredentials: true,
      }
    );
  }
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string
  ) {}

  getPosts() {
    return this.http.get<Post[]>(`${this.baseUrl}posts`);
  }

  post(value: Partial<{ title: string | null; content: string | null }>) {
    return this.http.post<Post>(`${this.baseUrl}posts`, value, {
      withCredentials: true,
    });
  }

  doIlike(postId: string) {
    return this.http.get<{ data: boolean }>(
      `${this.baseUrl}posts/${postId}/doIlike`,
      {
        withCredentials: true,
      }
    );
  }

  like(postId: string) {
    return this.http.post<{ doILike: boolean }>(
      `${this.baseUrl}posts/${postId}/like`,
      null,
      {
        withCredentials: true,
      }
    );
  }

  unlike(postId: string) {
    return this.http.delete<{ doILike: boolean }>(
      `${this.baseUrl}posts/${postId}/like`,
      {
        withCredentials: true,
      }
    );
  }

  getComments(postId: string) {
    return this.http.get<Comment[]>(`${this.baseUrl}posts/${postId}/comments`, {
      withCredentials: true,
    });
  }

  deletePost(postId: string) {
    return this.http.delete(`${this.baseUrl}posts/${postId}`, {
      withCredentials: true,
    });
  }
}
