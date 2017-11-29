import MobileMenu  from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal'


//instances of the classes
const mobileMenu = new MobileMenu();
// const revealOnScroll = new RevealOnScroll();
new RevealOnScroll($(".feature-item"), "65%");
new RevealOnScroll($(".testimonial"), "60%");
var stickyHeader = new StickyHeader();
var modal = new Modal();
