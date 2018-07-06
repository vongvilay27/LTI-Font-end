import { Component, OnInit } from '@angular/core';
import {Gallery, GalleryItem, ImageItem} from '@ngx-gallery/core';
import {Lightbox} from '@ngx-gallery/lightbox';
import {LocationcheckService} from '../../services/locationcheck.service';
import {TypeService} from '../../services/type.service';
import {AllService} from '../../services/all.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {NgProgress} from 'ngx-progressbar';
import {Subscription} from 'rxjs';
import {DetailService} from '../../services/detail.service';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-companies-detail',
  templateUrl: './companies-detail.component.html',
  styleUrls: ['./companies-detail.component.css']
})
export class CompaniesDetailComponent implements OnInit {
    items: GalleryItem[];
    id: any;
    tourcompanies: Object = {};
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
                const comSubscript: Subscription = this.detailService.getTourCompany(this.id).subscribe((att_res) => {
                    this.tourcompanies = att_res.json()['data'];
                    this.ngProgress.done();
                    const nearSubscript: Subscription = this.detailService.getInfoNearby(
                        this.tourcompanies['_id'],
                        this.tourcompanies['location']['lat']
                        + ',' +
                        this.tourcompanies['location']['long']
                    )
                        .subscribe((near_res) => {
                            this.info_near_by = near_res.json()['data'];
                            console.log(this.info_near_by);
                            nearSubscript.unsubscribe();
                        }, (near_error) => {
                            nearSubscript.unsubscribe();
                        });
                    const apiSubscript: Subscription = this.locationService.getLocalWeater(
                        this.tourcompanies['location']['lat'],
                        this.tourcompanies['location']['long']
                    ).subscribe((api_res) => {
                        this.weather = api_res.json()['current_observation'];
                        apiSubscript.unsubscribe();
                    }, (api_error) => {
                        apiSubscript.unsubscribe();
                    });
                    for (let i = 0; i < this.tourcompanies['images'].length; i++) {
                        this.imageData[i] = {
                            srcUrl: this.tourcompanies['images'][i],
                            previewUrl: this.tourcompanies['images'][i]
                        };
                    }
                    this.items = this.imageData.map(item => new ImageItem(item.srcUrl, item.previewUrl));
                    this.gallery.ref('lightbox').load(this.items);
                    comSubscript.unsubscribe();
                }, (att_error) => {
                    this.ngProgress.done();
                    comSubscript.unsubscribe();
                    this.router.navigate(['/home']);
                });
            }
        });
    }

    ngOnInit() {

    }
    safeVideoUrl(): SafeResourceUrl {
        let url = '';
        if (this.tourcompanies['video_url']) {
            url = this.tourcompanies['video_url'];
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
        this.lightbox.open(index, 'lightbox', {
            panelClass: 'fullscreen'
        });
    }


}
