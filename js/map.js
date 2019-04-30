$(function(){
    $('h2').text('Městské části New Yorku');
    $('.casti').attr({'style':'fill:rgb(90,90,90);stroke:black'});

    $('.casti').on('click',function(){
        $('#detail h2').text($(this).data('nazev'));
        $('#detail p').text($(this).data('popis'));
        $('#detail img').attr('src',$(this).data('img')).attr('alt',$(this).data('nazev'));
        $('#detail figcaption').text($(this).data('nazev'));
    });
});