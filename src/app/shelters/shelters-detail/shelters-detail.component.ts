import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryRef, ImageItem, VideoItem, YoutubeItem , GalleryItem} from '@ngx-gallery/core';
import { Lightbox } from '@ngx-gallery/lightbox';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {LocationcheckService} from '../../services/locationcheck.service';
import {DetailService} from '../../services/detail.service';
import {NgProgress} from 'ngx-progressbar';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shelters-detail',
  templateUrl: './shelters-detail.component.html',
  styleUrls: ['./shelters-detail.component.css']
})
export class SheltersDetailComponent implements OnInit {
    items: GalleryItem[];
    rooms: GalleryItem[];
    id: any;
    shelters: Object = {};
    roomsT: Object = {};
    weather: Object = {};
    info_near_by: Object = {};
    zoom = 10;

    lat: number;
    lng: number;

    public imageData: Array<{srcUrl: string, previewUrl: string}> = [];
    public roomsData: Array<{srcUrl: string, previewUrl: string}> = [];
    public innerWidth: any;
    public hideText: string;
    public cTainer = 'container';
    public hD = 'h3';
    public hP = 'h1'
    constructor(
        public gallery: Gallery,
        public lightbox: Lightbox,
        public ngProgress: NgProgress,
        private route: ActivatedRoute,
        private router: Router,
        private safeSanitizer: DomSanitizer,
        private locationService: LocationcheckService,
        private detailService: DetailService
    ) {
        this.ngProgress.start();
        this.route.params.subscribe((params: Params) => {
            this.id = params['id'];
            if (this.id) {
                const shelSubscript: Subscription = this.detailService.getShelter(this.id).subscribe((res) => {
                    this.shelters = res.json()['data'];
                    this.roomsT = this.shelters['rooms']
                    console.log(this.shelters)
                    console.log(this.roomsT)

                    this.ngProgress.done();
                    const nearSubscript: Subscription = this.detailService.getInfoNearby(
                        this.shelters['_id'],
                        this.shelters['location']['lat']
                        + ',' +
                        this.shelters['location']['long']
                    )
                        .subscribe((near_res) => {
                            this.info_near_by = near_res.json()['data'];
                            console.log(this.info_near_by);
                            nearSubscript.unsubscribe();
                        }, (near_error) => {
                            nearSubscript.unsubscribe();
                        });
                    const apiSubscript: Subscription = this.locationService.getLocalWeater(
                        this.shelters['location']['lat'],
                        this.shelters['location']['long']
                    ).subscribe((api_res) => {
                        this.weather = api_res.json()['current_observation'];
                        apiSubscript.unsubscribe();
                    }, (api_error) => {
                        apiSubscript.unsubscribe();
                    });
                    for (let i = 0; i < this.shelters['images'].length; i++) {
                        this.imageData[i] = {
                            srcUrl: this.shelters['images'][i],
                            previewUrl: this.shelters['images'][i]
                        };
                    };
                    for (let j = 0; j < this.shelters['rooms'].length; j++) {
                        this.roomsData[j] = {
                            srcUrl: this.shelters['rooms'][j]['room_image'],
                            previewUrl: this.shelters['rooms'][j]['room_image']
                        };
                    };
                    /*Restaurant*/
                    this.items = this.imageData.map(item => new ImageItem(item.srcUrl, item.previewUrl));
                    this.gallery.ref('shelterlightbox').load(this.items);
                    /*Menu*/
                    this.rooms = this.roomsData.map(item => new ImageItem(item.srcUrl, item.previewUrl));
                    this.gallery.ref('roomslightbox').load(this.rooms);
                    shelSubscript.unsubscribe();
                }, (shel_error) => {
                    this.ngProgress.done();
                    shelSubscript.unsubscribe();
                    this.router.navigate(['/home']);
                });
            }
        });
    }


    ngOnInit() {
        this.innerWidth = window.innerWidth;
        if (this.innerWidth <= 560) {
            this.cTainer = '';
            this.hD = 'h5';
            this.hP = '';
        }
    }

    safeVideoUrl(): SafeResourceUrl {
        let url = '';
        if (this.shelters['video_url']) {
            url = this.shelters['video_url'];
        }
        const new_url = url.split('&')[0];
        const urlArray = new_url.split('=');
        if (urlArray[0] === 'https://www.youtube.com/watch?v') {
            const youtube_id = urlArray[1];
            const youtube_domain = urlArray[0].split('watch')[0];
            const youtube_embed_url = youtube_domain + 'embed/' + youtube_id;
            return this.safeSanitizer.bypassSecurityTrustResourceUrl(youtube_embed_url);
        }
        return this.safeSanitizer.bypassSecurityTrustResourceUrl(url);
    }
    openLightbox(index: number) {
        this.lightbox.open(index, 'shelterlightbox', {
            panelClass: 'fullscreen'
        });
    }
    openMenubox(index: number) {
        this.lightbox.open(index, 'roomslightbox', {
        });
    }

}
