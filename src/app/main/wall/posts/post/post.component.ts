import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { Post } from '../../post.type';
import { ProfilepicComponent } from '../../../../common/profilepic/profilepic.component';
import { CommonModule } from '@angular/common';
import { WallService } from '../../../../wall/wall.service';
import { Comment } from '../../post.type';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-post',
  standalone: true,
  imports: [ProfilepicComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent implements AfterViewInit {
  postService = inject(WallService);
  @Input({ required: true }) post: Post | undefined;
  @Output() deletePost = new EventEmitter();
  doIlike = false;
  comments: Comment[] = [];
  formBuilder = inject(FormBuilder);

  commentForm = this.formBuilder.group({
    content: [''],
  });

  ngAfterViewInit(): void {
    if (!this.post) return;
    this.postService.doIlike(this.post?._id).subscribe((doIlike) => {
      console.log(doIlike);

      this.doIlike = doIlike.data;
    });

    this.getComments();
  }

  like() {
    if (!this.post) return;
    this.postService.like(this.post?._id).subscribe((res) => {
      console.log(res.doILike);

      this.doIlike = res.doILike;
    });
  }

  unlike() {
    if (!this.post) return;
    this.postService.unlike(this.post?._id).subscribe((res) => {
      this.doIlike = res.doILike;
    });
  }

  getComments() {
    if (!this.post) return;
    this.postService.getComments(this.post?._id).subscribe((comments) => {
      this.comments = comments;
    });
  }

  comment() {
    if (!this.post) return;
    this.postService
      .comment(this.post?._id, this.commentForm.value)
      .subscribe((res) => {
        this.commentForm.reset();
        this.getComments();
      });
  }
}
