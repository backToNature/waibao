/**
 * Created by wenshui on 15/5/25.
 */
$(function () {
    var banner_program = {
        init: function () {
            this.top_left_logo(); // 顶部左上角logo
            this.center_logo();

        },
        top_left_logo: function () {
            var win_width = $(window).width(),
                logo_width = win_width/ 5,
                logo_height = logo_width / 5 * 2;
            $('#left_top_logo').attr('coords', "0,0,"+logo_width+",0,"+logo_width+","+logo_height+",0,"+logo_height+"");

        },
        center_logo: function () {
            var win_width = $(window).width(),
                logo_width = win_width / 128 * 15,
                logo_height = logo_width / 225 * 254,
                start_x = win_width / 4, // 初始横坐标
                start_y = start_x / 97 * 87;
            $('#center_logo1').attr('coords', start_x + ","+start_y+","+(start_x + logo_width)+","+start_y+","+(start_x + logo_width)+","+(start_y+logo_height)+","+start_x+","+(start_y+logo_height)+"");
            $('#center_logo2').attr('coords', (start_x+logo_width) + ","+start_y+","+((start_x+logo_width) + logo_width)+","+start_y+","+((start_x+logo_width) + logo_width)+","+(start_y+logo_height)+","+(start_x+logo_width)+","+(start_y+logo_height)+"");
            $('#center_logo3').attr('coords', (start_x+logo_width*2) + ","+start_y+","+((start_x+logo_width*2) + logo_width)+","+start_y+","+((start_x+logo_width*2) + logo_width)+","+(start_y+logo_height)+","+(start_x+logo_width*2)+","+(start_y+logo_height)+"");
            $('#center_logo4').attr('coords', (start_x+logo_width*3) + ","+start_y+","+((start_x+logo_width*3) + logo_width)+","+start_y+","+((start_x+logo_width*3) + logo_width)+","+(start_y+logo_height)+","+(start_x+logo_width*3)+","+(start_y+logo_height)+"");
        }

    };
    banner_program.init();
});
