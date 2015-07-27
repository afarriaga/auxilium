$(function () {
  "use strict";

  var dialog = function () {
    // show the html element with class="js_show_this"
    $('.js_show_this').show();
    // reply a prompt with alert method
    window.alert('how are you doing today?');
    // excute a sequence of functions on the given element
    // these executions are chanined one after the other
    // this method is called chaining
    $('.js_show_this_and_make_big')
      .addClass('even_bigger_text')
      .show();
    // reply a prompt with alert method
    window.alert('Me too! See you later.');
    // write text into the element with class="js_write_into_here"
    $('.js_write_into_here').text('Goodbye world!');
  };

  var show_close_button = function () {
    /*
    First show a button to the user to close the window
    then bind a "click" event handler.

    The function click() is syntactic sugar (or shorhand)
    for $("selector").on("click", callback_function)
    The function on() is sugar for $("selector").bind("click", handler_function)

    Under the hood, this is plain javascript:
    target.addEventListener("click", handler_function);
    Handler or Listener functions are callback functions
    and make available an event argument

    Read more here:

    https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
    https://api.jquery.com/click/
    https://api.jquery.com/on/
    */

    $("#close_button").show().click(function (event) {
      // the confirm() function returns a boolean expression
      // that evaluates to true if "ok"
      if (window.confirm("Are you sure?")) {
        window.close();
      }
    });
  };

  var start_button_click_handler = function () {
    dialog();
    show_close_button();
  };

  // $("#start_button").click(dialog);
  $("#start_button").click(start_button_click_handler);
});