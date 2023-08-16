import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  footer_logo=[
    {
      img: '../../../../assets/img/footer_logo.png'
    }
  ]
}
