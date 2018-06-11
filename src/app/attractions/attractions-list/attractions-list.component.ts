import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-attractions-list',
  templateUrl: './attractions-list.component.html',
  styleUrls: ['./attractions-list.component.css']
})
export class AttractionsListComponent implements OnInit {
    public innerWidth: any;
    public hideText: string;
    public hD = 'h3';
    attraclists: any[];
    typeid: any;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
      this.route.params.subscribe((params: Params) => {
          this.typeid = params['typeid'];
          if (this.typeid) {
              console.log('Has params');
              this.attraclists = [
                  {
                      id: 1,
                      name: 'ນຳ້ຕົກຕາດນາມີ',
                      typeid: 1,
                      type: 'ສະຖານທີ່ທ່ອງທ່ຽວທຳມະຊາດ',
                      story: 'ນ້ຳຕົກຕາດ ນ້ຳຕົກຕາດ ນ້ຳຕົກຕາດ ນ້ຳຕົກຕາດ ນ້ຳຕົກຕາດ ນ້ຳຕົກຕາດ ນ້ຳຕົກຕາດ',
                      img: 'assets/1240x720.png'
                  },
                  {
                      id: 2,
                      name: 'ວັດສີນາເມືອງ',
                      typeid: 1,
                      type: 'ສະຖານທີ່ທ່ອງທ່ຽວວັດທະນະທຳ',
                      story: 'ວັດວັດວັດ ວັດວັດວັດ ວັດວັດວັດ ວັດວັດວັດ ວັດວັດວັດ',
                      img: 'assets/1280x720.jpg'
                  }
              ];
          } else {
              console.log('No has params');
              this.attraclists = [
                  {
                      id: 1,
                      name: 'ທ່ານ້ຳແມ່ນນາກ',
                      typeid: 2,
                      type: 'ສະຖານທີ່ທ່ອງທ່ຽວວິນຍານ',
                      story: 'ພີ່ມາກ ພີ່ມາກ ພີມາກຈາ ພີ່ມາກ ພີ່ມາກ ພີມາກຈາ',
                      img: 'assets/1240x720.png'
                  },
                  {
                      id: 2,
                      name: 'ວັດເຈັດປ່າຊ້າ',
                      typeid: 2,
                      type: 'ສະຖານທີ່ທ່ອງທ່ຽວວິນຍານ',
                      story: 'ວັດວັດວັດ ວັດວັດວັດ ວັດວັດວັດ ວັດວັດວັດ ວັດວັດວັດ',
                      img: 'assets/1000x540.jpg'
                  }
              ];
          }
          console.log(this.typeid);
      });
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= 560) {
      this.hideText = 'text-hide';
      this.hD = 'h5';
    }

  }
  showAttracdetail(attracid) {
    this.router.navigate(['attraction/detail', attracid]);
  }
}
