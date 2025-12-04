// HIS Ethiopia CoP Theme - Custom JavaScript

const { iconNode } = require("discourse-common/lib/icon-library");

api.modifyClass("component:site-header", {
  didInsertElement() {
    this._super(...arguments);
    // Any additional header logic if needed
  }
});

// Replace "FAQ" with "Guidelines" in the sidebar or top menu
api.addNavigationBarItem({
  name: "guidelines",
  displayName: "Guidelines",
  href: "/faq",
  icon: "book",
  customFilter: (category, args, router) => {
    return true; // Show on all pages or customize logic
  }
});

// If using the sidebar (Discourse 2.9+), we might need to target the text specifically if it's a default item.
// However, changing the text of a core route usually involves site settings or translation overrides.
// Since this is a theme, we can try to change the text via the API if it's a navigation item.

api.reopenWidget("home-logo", {
  html() {
    const h = require("virtual-dom").h;
    // Custom logic to ensure logo text fallback if needed, though HTML header handles most.
    return this._super(...arguments);
  }
});

// Change the FAQ icon to 'book' if it appears in standard menus
api.replaceIcon("question-circle", "book");

// Custom translation override for FAQ (Best effort via JS, ideally done in Admin > Customize > Text)
I18n.translations[I18n.locale].js.filters.faq = { title: "Guidelines", help: "Community Guidelines" };
I18n.translations[I18n.locale].js.sidebar.sections.community.links.faq = { content: "Guidelines", title: "Community Guidelines" };

console.log("HIS Ethiopia CoP Theme Loaded");
