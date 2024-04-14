import { Controller } from "@hotwired/stimulus"
import { Loader } from "@googlemaps/js-api-loader"
// https://stackoverflow.com/questions/77853423/rails-7-1-2-stimulusjs-issue-with-stimulus-controller-action-after-triggering

// Connects to data-controller="map"
export default class extends Controller {
    static targets = ["map"]

    static values = {
        apiKey: String
    }

    connect() {
        this.loader = new Loader({
            apiKey: this.apiKeyValue,
            version: "weekly"
        })

        this.loader.load().then(async () => {
            const { Map } = await google.maps.importLibrary("maps");

            this.map = new Map(this.mapTarget, {
                center: {lat: 52.74799202682966, lng: -1.4760434103892268},
                zoom: 8,
            });

            var radiusCircle = new google.maps.Circle({
                strokeColor: "#333333",
                strokeOpacity: 0.5,
                strokeWeight: 2,
                fillColor: "#555555",
                fillOpacity: 0.35,
                map: this.map,
                center: {
                    lat: 52.74799202682966,
                    lng: -1.4760434103892268
                },
                radius: 1000 * 60 
            });
            this.map.fitBounds(radiusCircle.getBounds())
        });
    }
}