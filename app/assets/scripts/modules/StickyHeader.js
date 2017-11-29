import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';


class StickyHeader {
  constructor(){
    this.lazyImages =$(".lazyload");
    this.siteHeader = $('.site-header');
    this.headerTriggerElement = $('.large-hero__title');
    this.createHeaderWaypoint(); //this is to load on page load
    this.pageSections= $(".page-section");
    this.headerLinks = $(".primary-nav a");
    this.createPageSectionWaypoints();  //this is to load on page load
    this.addSmoothScrolling();
    this.refreshWaypoints();

  }

  refreshWaypoints(){
    this.lazyImages.on('load',function() {
      Waypoint.refreshAll();
    })
  }

  addSmoothScrolling(){
    this.headerLinks.smoothScroll();
  }

  createHeaderWaypoint() {
    var that = this;
    new Waypoint({
      element: this.headerTriggerElement[0], //this is the trigger element. js is also expecting a js native DOM element here, but we are a jwuery object so that is why we put the [0], this works bc the first item in a jquery array-like obj is a pointer to the DOM element
      handler: function(direction) {
        if (direction == "down") {
          that.siteHeader.addClass("site-header--dark");
        }  else {
          that.siteHeader.removeClass("site-header--dark");
        }
      }  //what we want to happen to the dom portion we pointed to.
      // offset: that.offsetPercentage
    });
  }

  createPageSectionWaypoints() {
    var that = this;
    this.pageSections.each(function() {
      const currentPageSection = this;

      new Waypoint({
        element: currentPageSection,
        handler:function(direction){
          if (direction == "down"){
            var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            that.headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "18%"
      });
      new Waypoint({
        element: currentPageSection,
        handler:function(direction){
          if (direction == "up"){
            var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            that.headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "-40%"
      });
    })
  }

}

export default StickyHeader;
