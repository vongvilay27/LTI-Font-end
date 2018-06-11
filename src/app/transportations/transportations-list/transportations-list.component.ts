import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';

@Component({
  selector: 'app-transportations-list',
  templateUrl: './transportations-list.component.html',
  styleUrls: ['./transportations-list.component.css']
})
export class TransportationsListComponent implements OnInit {
    public innerWidth: any;
    public hideText: string;
    public hD = 'h3';
    transporlists: any[];
    typeid: any;
    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.typeid = params['typeid'];
            if (this.typeid) {
                console.log('Has params');
                this.transporlists = [
                    {
                        id: 1,
                        name: 'ຄິວລົດສາຍຕາເວັນຕົກ',
                        typeid: 1,
                        type: 'ສະຖານີຂົນສົ່ງທາງບົກ',
                        story: 'ນ້ຳຕົກຕາດ ນ້ຳຕົກຕາດ ນ້ຳຕົກຕາດ ນ້ຳຕົກຕາດ ນ້ຳຕົກຕາດ ນ້ຳຕົກຕາດ ນ້ຳຕົກຕາດ',
                        img: 'assets/1240x720.png'
                    },
                    {
                        id: 2,
                        name: 'ຄິວລົດສາຍຕາເວັນອອຫ',
                        typeid: 1,
                        type: 'ສະຖານີຂົນສົ່ງທາງບົກ',
                        story: 'ວັດວັດວັດ ວັດວັດວັດ ວັດວັດວັດ ວັດວັດວັດ ວັດວັດວັດ',
                        img: 'assets/1280x720.jpg'
                    }
                ];
            } else {
                console.log('No has params');
                this.transporlists = [
                    {
                        id: 1,
                        name: 'ສະຖານີລົດ',
                        typeid: 2,
                        type: 'ສະຖານີຂົນສົ່ງທາງບົກ',
                        story: 'ພີ່ມາກ ພີ່ມາກ ພີມາກຈາ ພີ່ມາກ ພີ່ມາກ ພີມາກຈາ',
                        img: 'assets/1240x720.png'
                    },
                    {
                        id: 2,
                        name: 'ສະຖານີລົດ',
                        typeid: 2,
                        type: 'ສະຖານີຂົນສົ່ງທາງບົກ',
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
    showTranspordetail(transporid) {
        this.router.navigate(['transportation/detail', transporid]);
    }


}
