import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RolesComponent } from "./components/roles/roles.component";
import { DesignationComponent } from "./components/designation/designation.component";
import { MasterComponent } from "./components/master/master.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  MasterComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_18_tutorials';
}
