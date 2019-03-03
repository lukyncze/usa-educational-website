$(function(){
    var overviewStates = $('#states');
    var links = $('#links ul');
    states.forEach(function(obj,idx){
        overviewStates.append('<h4>'+obj.czname+'</h4><p>Anglický název: '+obj.enname+'</p><p>Hlavní město: '+obj.capital+'</p><p>Rozloha: '+obj.area+'</p><p>Počet obyvatel: '
        +obj.population+'</p>');
        //overviewStates.append('<h4>'+obj.czname+'<small>'+obj.enname+'</small></h4><br>');
        links.append('<li><a href="'+ obj.link +'">'+ obj.czname +'</a></li>');
    });

    $('#states h4').click(function(){
        if ($(this).nextUntil('h4').is(':hidden')) {
            $(this).css({'background-color':'#048'});
        } else {
            $(this).css({'background-color':'#444'});
        }
        $(this).nextUntil('h4').toggle(1000);
    });
})