import { Component, inject } from '@angular/core';
import { ProfilepicComponent } from '../../../common/profilepic/profilepic.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { WallService } from '../../../wall/wall.service';
import { AuthService } from '../../../auth/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-createpost',
  standalone: true,
  imports: [CommonModule, ProfilepicComponent, ReactiveFormsModule],
  templateUrl: './createpost.component.html',
  styleUrl: './createpost.component.scss',
})
export class CreatepostComponent {
  authService = inject(AuthService);
  formBuilder = inject(FormBuilder);
  postService = inject(WallService);
  constructor() {}

  postForm = this.formBuilder.group({
    title: '',
    content: '',
  });
  post() {
    this.postService.post(this.postForm.value).subscribe((post) => {
      console.log(post);
    });
  }
}
