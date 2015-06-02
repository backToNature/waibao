/**
 * Created by wenshui on 15/5/27.
 */
$(function(){
    $('#dowebok').fullpage({
        sectionsColor: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'],
        menu: '#menu',
        afterLoad: function () {
            $('.fullScreen').show('explode');
        },
        onLeave: function (index, nextIndex) {
            if (nextIndex == 7) {
                $('.carousel').jCarouselLite({
                    btnNext: ".slide-pic_warpper .next",
                    btnPrev: ".slide-pic_warpper .pre"
                });
                $('.center').each(function (i) {
                    var width = $(this).width();
                    $(this).css({
                        left: $(window).width() / 2 - width / 2
                    });
                });

            }
            $('.fullScreen').hide('explode');
        },
        afterRender: function () {
            $('.fullScreen').show('explode');
        }
    });
    var pageProgram = {
        init: function () {
            this.page2();
            this.page3();
            this.page4();
            this.page7();
        },
        page2: function () {
            var xbili = $(window).width() / 1920;
            var ybili = $(window).height() / 953;
            var button_width = 132,
                button_height = 40,
                start_x = 886,
                start_y = 515;
            var button = $('#pic2_button');
            button.attr('coords',start_x * xbili + ',' + start_y *ybili + ',' + (start_x + button_width)*xbili + ',' + start_y*ybili + ',' + (start_x + button_width)*xbili + ',' + (start_y + button_height)*ybili + ',' + start_x *xbili+ ',' + (start_y + button_height)*ybili);
            $(window).on('resize', function () {
                var xbili = $(window).width() / 1920;
                var ybili = $(window).height() / 953;
                var button_width = 132,
                    button_height = 40,
                    start_x = 886,
                    start_y = 515;
                var button = $('#pic2_button');
                button.attr('coords',start_x * xbili + ',' + start_y *ybili + ',' + (start_x + button_width)*xbili + ',' + start_y*ybili + ',' + (start_x + button_width)*xbili + ',' + (start_y + button_height)*ybili + ',' + start_x *xbili+ ',' + (start_y + button_height)*ybili);
            });
        },
        page4: function () {
            var xbili = $(window).width() / 1920;
            var ybili = $(window).height() / 954;
            var button_width = 199,
                button_height = 49,
                start_x = 1060,
                start_y = 700;
            var button = $('#pic4_button');
            button.attr('coords',start_x * xbili + ',' + start_y *ybili + ',' + (start_x + button_width)*xbili + ',' + start_y*ybili + ',' + (start_x + button_width)*xbili + ',' + (start_y + button_height)*ybili + ',' + start_x *xbili+ ',' + (start_y + button_height)*ybili);

            $(window).on('resize', function () {
                var xbili = $(window).width() / 1920;
                var ybili = $(window).height() / 954;
                var button_width = 199,
                    button_height = 49,
                    start_x = 1060,
                    start_y = 700;
                var button = $('#pic4_button');
                button.attr('coords',start_x * xbili + ',' + start_y *ybili + ',' + (start_x + button_width)*xbili + ',' + start_y*ybili + ',' + (start_x + button_width)*xbili + ',' + (start_y + button_height)*ybili + ',' + start_x *xbili+ ',' + (start_y + button_height)*ybili);
            });
        },
        page3: function () {
            $('.four_icon li').hover(function () {
                var self = $(this),
                    imgSrc = self.find('.icon_logo').attr('src');
                self.addClass('li_active');
                self.find('.content_top').addClass('content_top_active');
                self.find('.content_bottom').addClass('content_bottom_active');
                self.find('.content_bottom p').addClass('active_p');
                self.find('.icon_logo').attr('src', imgSrc + '.png');
                self.find('.more').fadeIn();
            }, function () {
                var self = $(this),
                    imgSrc = self.find('.icon_logo').attr('src');
                self.removeClass('li_active');
                self.find('.content_top').removeClass('content_top_active');
                self.find('.content_bottom').removeClass('content_bottom_active');
                self.find('.content_bottom p').removeClass('active_p');
                self.find('.icon_logo').attr('src', imgSrc.slice(0,imgSrc.lastIndexOf('.png')));
                self.find('.more').fadeOut();
            });
        },
        page7: function () {
            var sidebar = $('.sidebar');
            sidebar.css({
                height: $(window).height() + 'px',
                width: $(window).width() / 2 + 'px'
            });
            $(window).on('resize', function () {
                sidebar.css({
                    height: $(window).height() + 'px',
                    width: $(window).width() / 2 + 'px'
                });
                $('.table_warpper').css('height', $(window).height() / 2 +'px');
            });

            $('.page7').delegate('.carousel li', 'click', function (e) {
                var index = $(this).attr('data-index'),
                    li_buy_title = $(this).find('.li_buy_title').text();
                $.getJSON(
                    "./item" + index + '.js',
                    function(data) {
                        $('.buy_title').text(li_buy_title);
                        var render = template('tpl_table', data);
                        $('.render_content').html(render);
                    });
                if (sidebar.css('display') != 'none') {
                    $.fn.fullpage.setAllowScrolling(true);
                } else {
                    $.fn.fullpage.setAllowScrolling(false);
                }
                sidebar.toggle('slide', {direction:'right'});
                $(document).one('click', function () {
                    sidebar.hide('slide', {direction:'right'});
                    $.fn.fullpage.setAllowScrolling(true);
                });
                e.stopPropagation();
            });
            $('.sidebar').on('click', function (e) {
                e.stopPropagation();
            });
        }
    };
    pageProgram.init();
    $('.fullScreen').css({
        height: $(window).height()+ 'px',
        width: $(window).width()+ 'px'
    });


    $('.center').each(function (i) {
        var width = $(this).width();
        $(this).css({
            left: $(window).width() / 2 - width / 2
        });
    });

    $(window).on('resize', function () {
        $('.fullScreen').css({
            height: $(window).height()+ 'px',
            width: $(window).width()+ 'px'
        });

        $('.center').each(function (i) {
            var width = $(this).width();
            $(this).css({
                left: $(window).width() / 2 - width / 2
            });
        });


    });
});