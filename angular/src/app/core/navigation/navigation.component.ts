import { Component, OnInit } from '@angular/core';
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { CircuitService } from '../../shared/circuit.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  faSignInAlt = faSignInAlt; faSignOutAlt = faSignOutAlt;
  loggedIn: boolean;

  constructor(private circuitService: CircuitService) { }

  ngOnInit() {
    this.circuitService.loggedIn.subscribe(res => this.loggedIn = res);
  }

  logon() {
    this.circuitService.authenticateUser();
  }

  logout() {
    this.circuitService.logout();
  }

}