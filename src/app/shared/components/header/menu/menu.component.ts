import { Component, OnInit } from '@angular/core';

// SERVICE
import { HeaderService } from 'src/app/shared/services/header/header.service';

@Component({
  selector: 'app-header-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {
  menu: any;

  constructor(private HS: HeaderService) { }

  ngOnInit() {
    this.getMenu();
  }

  getMenu() {
    this.HS.getJSON().subscribe((res) => {
      this.menu = JSON.parse(res._body);

      console.log( JSON.parse(res._body));
    });
  }
}
