/* images */

import voyageDesktop from '../stories/desktop/18-days-voyage.jpg'
import voyageMobile from '../stories/mobile/18-days-voyage.jpg'

import architecturalsDesktop from '../stories/desktop/architecturals.jpg'
import architecturalsMobile from '../stories/mobile/architecturals.jpg'

import wavesDesktop from '../stories/desktop/behind-the-waves.jpg'
import wavesMobile from '../stories/mobile/behind-the-waves.jpg'

import calmWatersDesktop from '../stories/desktop/calm-waters.jpg'
import calmWatersMobile from '../stories/mobile/calm-waters.jpg'

import cityscapesDesktop from '../stories/desktop/cityscapes.jpg'
import cityscapesMobile from '../stories/mobile/cityscapes.jpg'

import darkForestDesktop from '../stories/desktop/dark-forest.jpg'
import darkForestMobile from '../stories/mobile/dark-forest.jpg'

import kingOnAfricaDesktop from '../stories/desktop/king-on-africa.jpg'
import kingOnAfricaMobile from '../stories/mobile/king-on-africa.jpg'

import landOfDreamsDesktop from '../stories/desktop/land-of-dreams.jpg'
import landOfDreamsMobile from '../stories/mobile/land-of-dreams.jpg'

import miklyWayDesktop from '../stories/desktop/milky-way.jpg'
import miklyWayMobile from '../stories/mobile/milky-way.jpg'

import mountainsDesktop from '../stories/desktop/mountains.jpg'
import mountainsMobile from '../stories/mobile/mountains.jpg'

import rageOfSeaDesktop from '../stories/desktop/rage-of-the-sea.jpg'
import rageOfSeaMobile from '../stories/mobile/rage-of-the-sea.jpg'

import runningFreeDesktop from '../stories/desktop/running-free.jpg'
import runningFreeMobile from '../stories/mobile/running-free.jpg'

import somwarpetDesktop from '../stories/desktop/somwarpet.jpg'
import somwarpetMobile from '../stories/mobile/somwarpet.jpg'

import tripToNowhereDesktop from '../stories/desktop/trip-to-nowhere.jpg'
import tripToNowhereMobile from '../stories/mobile/trip-to-nowhere.jpg'

import unforeseenCornersDesktop from '../stories/desktop/unforeseen-corners.jpg'
import unforeseenCornersMobile from '../stories/mobile/unforeseen-corners.jpg'

import worldTourDesktop from '../stories/desktop/world-tour.jpg'
import worldTourMobile from '../stories/mobile/world-tour.jpg'



export class story{
    constructor(imgDesktop, imgMobile, date, title, author){
        this.imgDesktop = imgDesktop;
        this.imgMobile = imgMobile;
        this.date = date;
        this.title = title; 
        this.author = author; 
    }
}

const mountains = new story(mountainsDesktop, mountainsMobile, 'April 25th 2020', 'The Mountains', 'John Appleseed')
const cityscapes = new story(cityscapesDesktop, cityscapesMobile, 'April 24th 2020', 'Sunset Cityscapes', 'Benjamin Cruz')
const voyage = new story(voyageDesktop, voyageMobile, 'April 20th 2020', '18 Days Voyage', 'Alexei Borodin')
const architecturals = new story(architecturalsDesktop, architecturalsMobile, 'April 19th 2020', 'Architecturals', 'Samantha Brooke')
const worldTour = new story(worldTourDesktop, worldTourMobile, 'April 14th 2020', 'World Tour', 'by Timothy Wagner')
const unforeseenCorners = new story(unforeseenCornersDesktop, unforeseenCornersMobile, 'April 12th 2020', 'Unforeseen Corners', 'William Malcolm')
const kingOnAfrica = new story(kingOnAfricaDesktop, kingOnAfricaMobile, 'April 11th 2020', 'King on Africa: Part II', 'Tim Hillenburg')
const tripToNowhere = new story(tripToNowhereDesktop, tripToNowhereMobile, 'April 10th 2020', 'The Trip to Nowhere', 'Felicia Rourke')
const rageOfSea = new story(rageOfSeaDesktop, rageOfSeaMobile, 'April 6th 2020', 'Rage of The Sea', 'Mohammed Abdul')
const runningFree = new story(runningFreeDesktop, runningFreeMobile, 'March 14th 2020', 'Running Free', 'Michelle')
const waves = new story(wavesDesktop, wavesMobile, 'March 13th 2020', 'Behind the Waves', 'Lamarr Wilson')
const calmWaters = new story(calmWatersDesktop, calmWatersMobile, 'March 12th 2020', 'Calm Waters', 'Samantha Brooke')
const miklyWay = new story(miklyWayDesktop, miklyWayMobile, 'March 11th 2020', 'The Milky Way', 'Benjamin Cruz')
const darkForest = new story(darkForestDesktop, darkForestMobile, 'March 10th 2020', 'Night at The Dark Forest', 'Mohammed Abdul')
const somwarpet = new story(somwarpetDesktop, somwarpetMobile, 'March 14th 2020', 'Somwarpet’s Beauty', 'Michelle')
const landOfDreams = new story(landOfDreamsDesktop, landOfDreamsMobile, 'February 15th 2020', 'Land of Dreams', ' William Malcolm')


export const stories = [mountains, cityscapes, voyage, architecturals, worldTour, unforeseenCorners, 
                        kingOnAfrica, tripToNowhere, rageOfSea, runningFree, waves, calmWaters, miklyWay, 
                        darkForest, somwarpet, landOfDreams]

