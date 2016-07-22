/**
 * Created by Илья Яновой on 23.07.2016.
 */

(function () {
    var hexagon = $('.main__portfolio--hexagon');

    for(var i = 0; i < hexagon.length; i++){
         var a = i +1;
        hexagon.eq(i).attr('style', 'background-image: url("img/gallery/' + a + '.jpg")');
        if(i == 5){
            hexagon.eq(i).attr('style', 'background-image: url("img/gallery/' + a + '.jpg"); margin-left: 86px');
        }
    }

})();