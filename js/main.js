$(function(){
    $('#top_popup .close').click(function(){
        $('#top_popup').fadeOut()
    }) /*#top_popup .close end*/


        var sta = 1;
        $('.top_icon .all_nav').click(function(){
            if (sta == 1){
                $(this).addClass('on');
                sta = 2;
                }else {
                    $(this).removeClass('on');
                sta = 1;
                }
        })/*.top_icon .all_nav*/

}) /*jquery end */