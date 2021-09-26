/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (_ref, $) {
  var behaviors = _ref.behaviors;

  behaviors.jqueryCookie = {
    attach: function attach() {
      if ($('body').once('js_cookie_test-init').length) {
        $('.js_cookie_test_add_button').on('click', function () {
          $.cookie('js_cookie_test', 'red panda');
        });
        $('.js_cookie_test_add_raw_button').on('click', function () {
          $.cookie.raw = true;
          $.cookie('js_cookie_test_raw', 'red panda');
        });
        $('.js_cookie_test_add_json_button').on('click', function () {
          $.cookie.json = true;
          $.cookie('js_cookie_test_json', { panda: 'red' });
          $.cookie('js_cookie_test_json_simple', 'red panda');
        });
        $('.js_cookie_test_add_json_string_button').on('click', function () {
          $.cookie.json = false;
          $.cookie('js_cookie_test_json_string', { panda: 'red' });
        });
        $('.js_cookie_test_remove_button').on('click', function () {
          $.removeCookie('js_cookie_test');
        });
      }
    }
  };
})(Drupal, jQuery);