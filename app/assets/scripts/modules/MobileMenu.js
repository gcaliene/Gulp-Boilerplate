import $ from 'jquery';

class MobileMenu {
  constructor(){
    this.siteHeader= $('.site-header');
    this.menuIcon = $(".site-header__menu-icon");
    this.menuContent = $(".site-header__menu-content");
    this.events();
  }

  events(){
    this.menuIcon.click(this.toggleTheMenu.bind(this)); //by binding this, it has the same instance of this that points to the MobileMenu class rather than events

  };

  toggleTheMenu(){
    console.log("the icon was clicked");
    this.menuContent.toggleClass("site-header__menu-content--is-visible");
    this.siteHeader.toggleClass("site-header--is-expanded");
    this.menuIcon.toggleClass("site-header__menu-icon--close-x");
  }
};

export default MobileMenu;
