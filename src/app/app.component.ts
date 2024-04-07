import { Component } from '@angular/core';
import { InputComponent } from './components/input/input.component';
import { SliderComponent } from './components/slider/slider.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InputComponent, SliderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'demo';
}
