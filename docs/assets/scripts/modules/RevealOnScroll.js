import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  constructor(elements, offset) {
    this.itemsToReveal = elements;
    this.offsetPercentage = offset;
    this.hideInitially();
    this.createWaypoints();

  }

  hideInitially(){
    this.itemsToReveal.addClass("reveal-item");
  }

  createWaypoints(){
    const that = this;
    this.itemsToReveal.each(function(){
      const currentItem = this;
      new Waypoint({
        element: currentItem, //this is the dom portion
        handler: function() {
          $(currentItem).addClass("reveal-item--is-visible");
        },  //what we want to happen to the dom portion we pointed to.
        offset: that.offsetPercentage
      });
    });
  };
};

export default RevealOnScroll;
