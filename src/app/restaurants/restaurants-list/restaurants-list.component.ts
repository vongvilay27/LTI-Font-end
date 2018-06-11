import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';

@Component({
  selector: 'app-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.css']
})
export class RestaurantsListComponent implements OnInit {
    public innerWidth: any;
    public hideText: string;
    public hD = 'h3';
    restaulists: any[];
    typeid: any;
    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.typeid = params['typeid'];
            if (this.typeid) {
                console.log('Has params');
                this.restaulists = [
                    {
                        id: 1,
                        name: 'ຮ້ານອາຫານນາງພິມພາ',
                        typeid: 1,
                        type: 'ຮ້ານອາຫານພີ້ບ້ານ',
                        story: 'ນ້ຳຕົກຕາດ ນ້ຳຕົກຕາດ ນ້ຳຕົກຕາດ ນ້ຳຕົກຕາດ ນ້ຳຕົກຕາດ ນ້ຳຕົກຕາດ ນ້ຳຕົກຕາດ',
                        img: 'assets/1240x720.png'
                    },
                    {
                        id: 2,
                        name: 'ຮ້ານ 3 ນາງເຝີ',
                        typeid: 1,
                        type: 'ຮ້ານອາຫານຈານດ່ວນ',
                        story: 'ວັດວັດວັດ ວັດວັດວັດ ວັດວັດວັດ ວັດວັດວັດ ວັດວັດວັດ',
                        img: 'assets/1280x720.jpg'
                    }
                ];
            } else {
                console.log('No has params');
                this.restaulists = [
                    {
                        id: 1,
                        name: 'ຮ້ານອາຫານນັ້ນລະນະ',
                        typeid: 2,
                        type: 'ຮ້ານອາຫານຕາມສັ່ງ',
                        story: 'ພີ່ມາກ ພີ່ມາກ ພີມາກຈາ ພີ່ມາກ ພີ່ມາກ ພີມາກຈາ',
                        img: 'assets/1240x720.png'
                    },
                    {
                        id: 2,
                        name: 'ຮ້ານອາຫານນັ້ນລະນະ',
                        typeid: 2,
                        type: 'ຮ້ານອາຫານຕາມສັ່ງ',
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
    showAttracdetail(restauid) {
        this.router.navigate(['restaurant/detail', restauid]);
    }
}
