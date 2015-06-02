/**
 * Created by wenshui on 15/5/25.
 */
$(function () {
    var click = {
        init: function () {
            // 点击按钮触发逻辑
            var click_Funcs = {
                // 点击四幅图按钮触发的逻辑
              clicks1: function () {
                alert('咨询1');
              },
              clicks2: function () {
                  alert('咨询2');
              },
              clicks3: function () {
                  alert('咨询3');
              },
              clicks4: function () {
                  alert('咨询4');
              }
            };
            // 咨询按钮定位
            this.pic1(click_Funcs.clicks1);
            this.pic2(click_Funcs.clicks2);
            this.pic3(click_Funcs.clicks3);
            this.pic4(click_Funcs.clicks4);

        },
        pic1: function (func) {
            var win_width = $(window).width(),
                button_width = win_width / 1920 * 108,
                button_height = button_width / 108 * 37,
                start_x = win_width / 1920 * 1440,
                start_y = start_x / 1440 * 380;
            var button = $('#picOne');
            button.attr('coords',start_x + ',' + start_y + ',' + (start_x + button_width) + ',' + start_y + ',' + (start_x + button_width) + ',' + (start_y + button_height) + ',' + start_x + ',' + (start_y + button_height));
            button.on('click', function (e) {
                e.preventDefault();
                if ($.isFunction(func)) {
                    func();
                }
            });
        },
        pic2: function (func) {
            var win_width = $(window).width(),
                button_width = win_width / 1920 * 108,
                button_height = button_width / 108 * 37,
                start_x = win_width / 1920 * 1011,
                start_y = start_x / 1011 * 477;
            var button = $('#picTwo');
            button.attr('coords',start_x + ',' + start_y + ',' + (start_x + button_width) + ',' + start_y + ',' + (start_x + button_width) + ',' + (start_y + button_height) + ',' + start_x + ',' + (start_y + button_height));
            button.on('click', function (e) {
                e.preventDefault();
                if ($.isFunction(func)) {
                    func();
                }
            });
        },
        pic3: function (func) {
            var win_width = $(window).width(),
                button_width = win_width / 1920 * 108,
                button_height = button_width / 108 * 37,
                start_x = win_width / 1920 * 1440,
                start_y = start_x / 1440 * 494;
            var button = $('#picThree');
            button.attr('coords',start_x + ',' + start_y + ',' + (start_x + button_width) + ',' + start_y + ',' + (start_x + button_width) + ',' + (start_y + button_height) + ',' + start_x + ',' + (start_y + button_height));
            button.on('click', function (e) {
                e.preventDefault();
                if ($.isFunction(func)) {
                    func();
                }
            });
        },
        pic4: function (func) {
            var win_width = $(window).width(),
                button_width = win_width / 1920 * 108,
                button_height = button_width / 108 * 37,
                start_x = win_width / 1920 * 1011,
                start_y = start_x / 1011 * 418;
            var button = $('#picFour');
            button.attr('coords',start_x + ',' + start_y + ',' + (start_x + button_width) + ',' + start_y + ',' + (start_x + button_width) + ',' + (start_y + button_height) + ',' + start_x + ',' + (start_y + button_height));
            button.on('click', function (e) {
                e.preventDefault();
                if ($.isFunction(func)) {
                    func();
                }
            });
        }
    };
    click.init();
});