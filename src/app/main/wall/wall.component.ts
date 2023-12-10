import { Component } from '@angular/core';
import { CreatepostComponent } from './createpost/createpost.component';
import { PostsComponent } from './posts/posts.component';

@Component({
  selector: 'app-wall',
  standalone: true,
  imports: [CreatepostComponent, PostsComponent],
  templateUrl: './wall.component.html',
  styleUrl: './wall.component.scss',
})
export class WallComponent {}
