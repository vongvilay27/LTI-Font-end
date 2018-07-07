import { Component, OnInit } from '@angular/core';
import {Lightbox} from '@ngx-gallery/lightbox';
import {LocationcheckService} from '../../services/locationcheck.service';
import {Gallery, GalleryItem, ImageItem} from '@ngx-gallery/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {NgProgress} from 'ngx-progressbar';
import {Subscription} from 'rxjs';
import {DetailService} from '../../services/detail.service';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-another-detail',
  templateUrl: './another-detail.component.html',
  styleUrls: ['./another-detail.component.css']
})
export class AnotherDetailComponent implements OnInit {
    items: GalleryItem[];
    id: any;
    anothers: Object = {};
    weather: Object = {};
    info_near_by: Object = {};
    zoom = 10;

    lat: number;
    lng: number;

    public imageData: Array<{srcUrl: string, previewUrl: string}> = [];

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
                const anoSubscript: Subscription = this.detailService.getAnother(this.id).subscribe((int_res) => {
                    this.anothers = int_res.json()['data'];
                    this.ngProgress.done();
                    const nearSubscript: Subscription = this.detailService.getInfoNearby(
                        this.anothers['_id'],
                        this.anothers['location']['lat']
                        + ',' +
                        this.anothers['location']['long']
                    )
                        .subscribe((near_res) => {
                            this.info_near_by = near_res.json()['data'];
/*                            console.log(this.info_near_by);*/
                            nearSubscript.unsubscribe();
                        }, (near_error) => {
                            nearSubscript.unsubscribe();
                        });
                    const apiSubscript: Subscription = this.locationService.getLocalWeater(
                        this.anothers['location']['lat'],
                        this.anothers['location']['long']
                    ).subscribe((api_res) => {
                        this.weather = api_res.json()['current_observation'];
                        apiSubscript.unsubscribe();
                    }, (api_error) => {
                        apiSubscript.unsubscribe();
                    });
                    for (let i = 0; i < this.anothers['images'].length; i++) {
                        this.imageData[i] = {
                            srcUrl: this.anothers['images'][i],
                            previewUrl: this.anothers['images'][i]
                        };
                    }
                    this.items = this.imageData.map(item => new ImageItem(item.srcUrl, item.previewUrl));
                    this.gallery.ref('lightbox').load(this.items);
                    anoSubscript.unsubscribe();
                }, (att_error) => {
                    this.ngProgress.done();
                    anoSubscript.unsubscribe();
                    this.router.navigate(['/home']);
                });
            }
        });
    }


    ngOnInit() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.lat = position.coords.latitude;
                this.lng = position.coords.longitude;
            });
        }
    }
    openLightbox(index: number) {
        this.lightbox.open(index, 'lightbox', {
            panelClass: 'fullscreen'
        });
    }

    safeVideoUrl(): SafeResourceUrl {
        let url = '';
        if (this.anothers['video_url']) {
            url = this.anothers['video_url'];
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

}
