import { Application } from "@hotwired/stimulus"

const application = Application.start()

// This is for SwiperJS
import Carousel from '@stimulus-components/carousel'
application.register('carousel', Carousel)

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }