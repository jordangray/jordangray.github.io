/* Usage:
 *
 *   <tt-accordion-group>
 *      <tt-accordion header="Accordion header" open="true">
 *       <p>Accordion content</p>
 *     </tt-accordion>
 *   </tt-accordion-group>
 *
 */

// ngAria extends ngClick with automatic tabindex="0" and enter/space triggers
var tt = angular.module('tt', ['ngAria']);


// ttAccordionGroup simply creates the group container element
tt.directive('ttAccordionGroup', function() {
  return {
    restrict: 'E',
    transclude: true,
    controller: function() {},
    template: '<div class="tt-accordion" role="tablist" ng-transclude></div>'
  };
});


// ttAccordion corresponds to an individual accordion within a ttAccordionGroup
tt.directive('ttAccordion', function() {
  return {
    require: '^^ttAccordionGroup',
    restrict: 'E',
    transclude: true,

    scope: {
      header: '@',
      open: '@',
      sticky: '@'
    },

    link: function(scope, element, attributes, ctrl) {

      // Get references to the element's header and content
      var header = element[0].querySelector('.tt-accordion__header');
      var content = element[0].querySelector('.tt-accordion__content');

        // jqLite references for convenience
      var jqWindow = angular.element(window);
      var jqHeader = angular.element(header);
      var jqContent = angular.element(content);

      // DOMRects for the accordion container and header elements
      var rect, headerRect;

      // Update DOMRects when needed
      function updateRects() {
        rect = element[0].getBoundingClientRect();
        headerRect = header.getBoundingClientRect();
      }

      // Handle click events on element header
      scope.headerClick = function() {

        // If the header is stuck, scroll to it after the element is closed
        if (scope.open && scope.sticky && rect.top < 0) {
          setTimeout(function() { element[0].scrollIntoView(); }, 0);
        }

        scope.open = !scope.open; // Toggle open state

        // Sticky headers need to be updated after opening/closing
        if (scope.sticky) {
          updateRects();
          stickIfNeeded(rect, headerRect);
        }
      }

      // If necessary, stick the header to the top of the page
      function stickIfNeeded(rect, headerRect) {
        var isTopOff = rect.top < 0; // Top of accordion is off-screen
        var isBottomOff = rect.bottom < 0; // Bottom of accordion is off-screen

        // Distance of header from top of the screen
        var bottomOffset = rect.bottom - headerRect.height;

        // Header is partially scrolled off-screen
        var isScrolledOff = scope.open && !isBottomOff && bottomOffset < 0;

        // Header is stuck if accordion is partially off the top of the page
        var isStuck = scope.open && isTopOff && !isBottomOff;

        // If header is stuck, fill up the vertical space it occupied
        var marginTop = isStuck ? headerRect.height : 0;
        jqContent.css('margin-top', marginTop + 'px');

        jqHeader
          // Add fixed position if header is stuck
          .toggleClass('tt-accordion__header--stuck', isStuck)
          .css({
            // If the header is stuck, line it up with our accordion
            left: isStuck ? rect.left + 'px' : 'auto',
            right: isStuck ? rect.right - rect.width + 'px' : 'auto',

            // If the accordion is scrolling off the top of the page, scroll
            // the header up with it
            top: isScrolledOff ? bottomOffset + 'px' : isStuck ? 0 : 'auto'
          });
      }

      if (scope.sticky) {

        // Throttle scroll event using requestAnimationFrame
        // (c.f. https://developer.mozilla.org/en-US/docs/Web/Events/scroll)
        var ticking = false;

        function scrollEvent(e) {
          updateRects();

          if (!ticking) {
            window.requestAnimationFrame(function() {
              if (scope.open) { stickIfNeeded(rect, headerRect); }
              ticking = false;
            });
          }

          ticking = true;
        }

        jqWindow.on('scroll', scrollEvent);

        // Ensure window event handler is removed with component
        scope.$on('$destroy', function () {
          jqWindow.off('scroll', scrollEvent);
        });
      }
    },

    template:
      '<section class="tt-accordion__accordion">' +
        '<h1 id="tt-accordion-header-{{::$id}}" class="tt-accordion__header" role="tab" aria-expanded="{{ !!open }}" aria-controls="tt-accordion-content-{{::$id}}" ng-click="headerClick()">' +
          '<span class="tt-accordion__marker" ng-class="open ? \'tt_icon-arrowup\' : \'tt_icon-arrowdown\'"></span>' +
          '{{header || "Header"}}' +
        '</h1>' +
        '<div id="tt-accordion-content-{{::$id}}" class="tt-accordion__content" role="tabpanel" aria-labelledby="tt-accordion-header-{{::$id}}" aria-hidden="{{ !open }}" ng-transclude></div>' +
      '</section>'
  };
});
