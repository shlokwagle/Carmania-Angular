import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FavsService } from 'src/app/lib/favs.service';

@Component({
  selector: 'app-favs',
  templateUrl: './favs.component.html',
  styleUrls: ['./favs.component.css'],
})
export class FavsComponent implements OnInit, OnChanges {
  @Input() postId: number;
  active = true;

  constructor(private favsService: FavsService) {}
  ngOnInit(): void {}

  ngOnChanges(): void {
    this.active = this.favsService.checkFavState(this.postId);
  }

  toggleFav() {
    this.active = this.favsService.onToggleFav(this.postId);
  }
}
