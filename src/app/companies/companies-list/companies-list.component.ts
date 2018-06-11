import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css']
})
export class CompaniesListComponent implements OnInit {
    public innerWidth: any;
    public hideText: string;
    public hD = 'h3';
    compalists: any[];
    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
                this.compalists = [
                    {
                        id: 1,
                        name: 'ບໍລິສັດທ່ຽວນາປີ',
                        detail: 'ນ້ຳຕົກຕາດ ນ້ຳຕົກຕາດ ນ້ຳຕົກຕາດ ນ້ຳຕົກຕາດ ນ້ຳຕົກຕາດ ນ້ຳຕົກຕາດ ນ້ຳຕົກຕາດ',
                        img: 'assets/1240x720.png'
                    },
                    {
                        id: 2,
                        name: 'ບໍລິສັດທ່ຽວນາປີ',
                        detail: 'ວັດວັດວັດ ວັດວັດວັດ ວັດວັດວັດ ວັດວັດວັດ ວັດວັດວັດ',
                        img: 'assets/1280x720.jpg'
                    },
                    {
                        id: 3,
                        name: 'ບໍລິສັດທ່ຽວພອນທິບ',
                        detail: 'ພີ່ມາກ ພີ່ມາກ ພີມາກຈາ ພີ່ມາກ ພີ່ມາກ ພີມາກຈາ',
                        img: 'assets/1240x720.png'
                    },
                    {
                        id: 4,
                        name: 'ບໍລິສັດທ່ຽວສີວັນ',
                        detail: 'ວັດວັດວັດ ວັດວັດວັດ ວັດວັດວັດ ວັດວັດວັດ ວັດວັດວັດ',
                        img: 'assets/1000x540.jpg'
                    }
                ];

        this.innerWidth = window.innerWidth;
        if (this.innerWidth <= 560) {
            this.hideText = 'text-hide';
            this.hD = 'h5';
        }

    }
    showCompadetail(compaid) {
        this.router.navigate(['company/detail', compaid]);
    }
}
