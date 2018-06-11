import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';

@Component({
  selector: 'app-shelters-list',
  templateUrl: './shelters-list.component.html',
  styleUrls: ['./shelters-list.component.css']
})
export class SheltersListComponent implements OnInit {
    public innerWidth: any;
    public hideText: string;
    public hD = 'h3';
    sheltlists: any[];
    typeid: any;
    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.typeid = params['typeid'];
            if (this.typeid) {
                console.log('Has params');
                this.sheltlists = [
                    {
                        id: 1,
                        name: 'ບ້ານພັກນາດີ',
                        typeid: 1,
                        type: 'ບ້ານພັກ',
                        story: 'ນ້ຳຕົກຕາດ ນ້ຳຕົກຕາດ ນ້ຳຕົກຕາດ ນ້ຳຕົກຕາດ ນ້ຳຕົກຕາດ ນ້ຳຕົກຕາດ ນ້ຳຕົກຕາດ',
                        img: 'assets/1240x720.png'
                    },
                    {
                        id: 2,
                        name: 'ໂຮງແຮມພູສີ',
                        typeid: 1,
                        type: 'ໂຮງແຮມ',
                        story: 'ວັດວັດວັດ ວັດວັດວັດ ວັດວັດວັດ ວັດວັດວັດ ວັດວັດວັດ',
                        img: 'assets/1280x720.jpg'
                    }
                ];
            } else {
                console.log('No has params');
                this.sheltlists = [
                    {
                        id: 1,
                        name: 'ຫ້ອງແຖວ',
                        typeid: 2,
                        type: 'ຫ້ອງແຖວ',
                        story: 'ພີ່ມາກ ພີ່ມາກ ພີມາກຈາ ພີ່ມາກ ພີ່ມາກ ພີມາກຈາ',
                        img: 'assets/1240x720.png'
                    },
                    {
                        id: 2,
                        name: 'ຫ້ອງແຖວ',
                        typeid: 2,
                        type: 'ຫ້ອງແຖວ',
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
    showShelterdetail(sheltid) {
        this.router.navigate(['shelter/detail', sheltid]);
    }

}
