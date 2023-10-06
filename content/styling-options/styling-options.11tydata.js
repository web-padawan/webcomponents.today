module.exports = {
  url: "styling-options",
  header: "Styling Options",
  description: "Overview of various aspects related to styling web components with and without Shadow DOM.",
  items: [
    {
      url: "https://web.dev/constructable-stylesheets/",
      title: "Constructable Stylesheets",
      thumbnail: "webdev.png",
      quote: "Constructable Stylesheets make it possible to apply shared CSS styles to multiple Shadow Roots easily.",
    },
    {
      url: "https://medium.com/patternfly-elements/patternfly-elements-theming-hooks-css-broadcast-variables-4c8d40cbcab7",
      title: "Contextually-aware web components",
      thumbnail: "medium.svg",
      quote: "Using CSS custom properties as “broadcast” variables to inform about changing background colors.",
    },
    {
      url: "https://www.colorglare.com/css-resets-and-global-styles-in-web-components-c71fcea86dbd",
      title: "CSS resets and global styles in web components",
      thumbnail: "medium.svg",
      quote: "Importing CSS in web components to make them work in any environment.",
    },
    {
      url: "https://nolanlawson.com/2021/08/15/does-shadow-dom-improve-style-performance/",
      title: "Does shadow DOM improve style performance?",
      thumbnail: "nolan-lawson.png",
      quote: "Research on how style encapsulation can improve rendering performance.",
    },
    {
      url: "https://every-layout.dev/blog/eschewing-shadow-dom/",
      title: "Eschewing Shadow DOM",
      thumbnail: "every-layout.png",
      quote: "Shadow DOM has a very opinionated way of preventing styles being applied from the parent document.",
    },
    {
      url: "https://www.abeautifulsite.net/posts/flash-of-undefined-custom-elements/",
      title: "Flash of Undefined Custom Elements (FOUCE)",
      thumbnail: "cory-laviska.png",
      quote:
        "Web components are defined and registered with JavaScript, which might cause a brief flash of unstyled HTML.",
    },
    {
      url: "https://web.dev/custom-properties-web-components/",
      title: "How Nordhealth uses Custom Properties in Web Components",
      thumbnail: "webdev.png",
      quote: "The benefits of using Custom CSS Properties in design systems and component libraries.",
    },
    {
      url: "https://nolanlawson.com/2021/01/03/options-for-styling-web-components/",
      title: "Options for styling web components",
      thumbnail: "nolan-lawson.png",
      quote: "Research on the different ways that a standalone web component can expose a styling API.",
    },
    {
      url: "https://javascript.info/shadow-dom-style",
      title: "Shadow DOM styling",
      thumbnail: "javascript-info.png",
      quote:
        "As a general rule, local styles work only inside the shadow tree, and document styles work outside of it.",
    },
    {
      url: "https://kittygiraudel.com/2021/08/23/shadow-roots-and-inheritance/",
      title: "Shadow roots and inheritance",
      thumbnail: "kitty-giraudel.jpeg",
      quote: "I encountered a bit of a HTML/CSS oddity the other day, so I thought I’d share what I learnt.",
    },
    {
      url: "https://www.dannymoerkerke.com/blog/smart-styling-of-web-components/",
      title: "Smart Styling Of Web Components",
      thumbnail: "danny-moerkerke.png",
      quote:
        "Web Components provide an excellent solution for state-based styling by reflecting properties to attributes.",
    },
    {
      url: "https://nolanlawson.com/2022/06/22/style-scoping-versus-shadow-dom-which-is-fastest/",
      title: "Style scoping versus shadow DOM: which is fastest?",
      thumbnail: "nolan-lawson.png",
      quote: "Shadow DOM comes out as the most consistently performant scoping option.",
    },
    {
      url: "https://css-tricks.com/styling-a-web-component/",
      title: "Styling a Web Component",
      thumbnail: "css-tricks.svg",
      quote: "Using a web component doesn’t mean the styles of it are entirely isolated.",
    },
    {
      url: "https://web-components-cg.netlify.app/articles/using/styling-shadow/",
      title: "Styling Components Using Shadow DOM",
      thumbnail: "wc-cg.png",
      quote: "Different ways of styling components which are using shadow DOM.",
    },
    {
      url: "https://www.matuzo.at/blog/2022/100daysof-day45/",
      title: "The specificity of ::slotted() content",
      thumbnail: "matuzo.png",
      quote:
        "By using ::slotted() we can add styles, but these styles have lower specificity than global document styles.",
    },
    {
      url: "https://medium.com/patternfly-elements/patternfly-elements-theming-hooks-using-css-variables-in-a-component-4e8c481f86b6",
      title: "Theming hooks: Using CSS variables to trick-out your web components",
      thumbnail: "medium.svg",
      quote: "PatternFly Elements web components have a standard way of stacking variables and fallback values.",
    },
    {
      url: "https://css-tricks.com/thinking-through-styling-options-for-web-components/",
      title: "Thinking Through Styling Options for Web Components",
      thumbnail: "css-tricks.svg",
      quote:
        "Defining styles for a web component in a don’t-leak-out way, and less so a way to get global styles to leak in.",
    },
    {
      url: "https://css-tricks.com/web-component-pseudo-classes-and-pseudo-elements/",
      title: "Web Component Pseudo-Classes and Pseudo-Elements",
      thumbnail: "css-tricks.svg",
      quote: "CSS features to use from within the web component and from outside it.",
    },
    {
      url: "https://css-tricks.com/web-standards-meet-user-land-using-css-in-js-to-style-custom-elements/",
      title: "Web Standards Meet User-Land: Using CSS-in-JS to Style Custom Elements",
      thumbnail: "css-tricks.svg",
      quote: "Using the shadow DOM is common when creating custom elements, but is not required.",
    },
    {
      url: "https://lamplightdev.com/blog/2019/03/26/why-is-my-web-component-inheriting-styles/",
      title: "Why is my Web Component inheriting styles?",
      thumbnail: "lamplightdev.png",
      quote: "Inheritable styles will be applied to both your Shadow and Light DOM.",
    },
  ],
};
