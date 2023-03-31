# Front End Developer Challenge - tbk Creative
![List Session](https://i.imgur.com/qb1I4cVm.jpg)  
A previous coding challenge from tbk Creative aimed towards front-end developers.  
Entailed building a mock popover featuring a parallax effect, accessibility features, and session data storage.  
See the demo in action on GitHub Pages [here](https://sitauros.github.io/Demo_tbk_FrontEnd_Challenge/).

  * [Requirements](#requirements)
  * [Gotchas](#gotchas)
  * [Useful Links](#useful-links)

## Requirements
1. Take the Photoshop file of the photo above and implement the design as a mobile-responsive popover.
2. CSS preprocessors and JS frameworks/libraries are permitted.
3. With regards to the popover:
   * Account for all breakpoints between desktop (1200px) and mobile (320px) resolutions.
   * Popover is to display after a visitor has been on the website for 3 seconds.
   * Ensure the popover and form are web accessible following AODA/WCAG standards. 
     * Must be able to navigate and close the popover via keyboard.
   * If the popover is closed, it should not redeploy on subsequent page reloads/views.
4. When the user scrolls downward, the shavings need to fall slowly while the chisel needs to move upwards.

## Gotchas
 1. Relying on online .psd to HTML converters gave me page slices of varying quality. 
    * One site gave me a version where the shapes at the top/bottom of the popover were solid instead of hollow.
 2. Stacking elements can result in `z-index` issues with nested elements.
 3. Lower half of popover required a `clearfix` as the shaving was positioned directly above it with the `float: right` property.
 4. Chrome Inspector did not properly respect media breakpoints before adding the meta viewport tag.
 5. Firefox did not properly calculate document height via `jQuery.offset()` and would add the container's `bottom: 400px` property whereas Chrome and Edge did not.
 6. Figuring out how to do custom checkboxes, bullet points, and scaling backgrounds.
 
## Useful Links
* [MSDN - The Stacking Context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context) - Useful for understanding z-index stacking rules
* [W3C Custom Checkboxes](https://www.w3schools.com/howto/howto_css_custom_checkbox.asp) - Involves wrapping an input field around its label and the `::after` pseudo-element
* [StackOverflow - Is localStorage availabie?](https://stackoverflow.com/a/25108867) - Directly applicable to session storage too
* [BrowserStack - Reponsive Background Images](https://www.browserstack.com/guide/how-to-make-images-responsive) - Fixed issue when content height was larger than background image and creating white space.
