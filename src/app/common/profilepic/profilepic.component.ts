import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbbrPipe } from '../../utils/abbr.pipe';

@Component({
  selector: 'app-profilepic',
  standalone: true,
  imports: [AbbrPipe],
  templateUrl: './profilepic.component.html',
  styleUrl: './profilepic.component.scss',
})
export class ProfilepicComponent implements OnChanges {
  @Input() name: string = '';
  @Input({ required: true }) variant: 'large' | 'medium' | 'small' = 'medium';

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.name);
  }
}
