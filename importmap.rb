pin 'application', to: 'assets/js/application.js', preload: true
pin "@hotwired/stimulus", to: "https://ga.jspm.io/npm:@hotwired/stimulus@3.2.2/dist/stimulus.js", preload: true
pin "@hotwired/stimulus-loading", to: "assets/js/stimulus-loading.js", preload: true
pin_all_from "assets/js/controllers", under: "controllers", to: 'assets/js/controllers'

pin "swiper",        to: "https://ga.jspm.io/npm:swiper@11.1.0/swiper.mjs"
pin "swiper/bundle", to: "https://ga.jspm.io/npm:swiper@11.1.0/swiper-bundle.mjs"
pin "@stimulus-components/carousel", to: "https://ga.jspm.io/npm:@stimulus-components/carousel@6.0.0/dist/stimulus-carousel.mjs"
pin "@googlemaps/js-api-loader", to: "https://ga.jspm.io/npm:@googlemaps/js-api-loader@1.16.6/dist/index.mjs"
