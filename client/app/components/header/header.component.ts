import { Component, OnInit } from '@angular/core';
import { GETHTTPService } from '../../services/http/get.httpService';

@Component({
    selector: 'bank-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    providers: [GETHTTPService]
})

export class HeaderComponent implements OnInit {

    currentLocation: any;
    constructor(private getHTTPService: GETHTTPService) {
        navigator.geolocation.getCurrentPosition((position: any) => {
            this.locationSuccess(position, this)
        }, this.locationFail);
    }

    ngOnInit() {}

    logoURL: string = '../../assets/images/logo.png';

    locationSuccess(position: any, self: any): void {
        console.log('positionin locationSucess : ', position);
        console.log('self : ', self);
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        // self.getCurrentLocation(latitude, longitude);
        let geoCoding = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + '%2C' + long + '&language=en';
        self.getHTTPService.getData(geoCoding).subscribe(
            (data: any) => {
                console.log('data in locationSucess: ', data);
                console.log('location : ', data.results[1].formatted_address);
                this.currentLocation = data.results[1].formatted_address;
            });
        /*$.getJSON(geoCoding).done(function(location: any) {
            console.log(location);
        });*/
    }

    locationFail(): void {
        console.log('Oops, could not find you.');
        this.currentLocation = 'No Location';
    }

    /*getCurrentLocation(lat: any, long: any): void {
        // let latlng = new google.maps.LatLng(lat, long);
        let geoCoding = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + '%2C' + long + '&language=en';

        $.getJSON(geoCoding).done(function(location: any) {
            console.log(location);
        })

    }*/

}