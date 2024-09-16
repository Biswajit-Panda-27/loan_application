import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoanApplicationComponent } from './pages/loan-application/loan-application.component';
import { ApplicatinListComponent } from './pages/applicatin-list/applicatin-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoanApplicationComponent,ApplicatinListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'loan_application';
}
