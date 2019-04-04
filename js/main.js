$(function(){
    $('#modalUvod .modal-body').text(uvod[0].text);

    // VYHLEDÁVÁNÍ V TABULCE
    $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
    
    // VYPSÁNÍ TABULKY
    staty.forEach(function(obj,idx){
        $('#myTable').append('<tr><td></td><td><img src="img/flags/'+obj.img+'.png" alt="'+obj.czname+'" class="img-fluid" data-toggle="modal" data-target="#'+obj.img+'"></td><td>'+obj.czname+'</td><td>'+obj.enname+'</td><td>'
        +obj.capital+'</td><td>'+obj.area+' km²</td><td>'+obj.population+'</td><td style="text-align: middle"><a href="'
        +obj.link+'">Odkaz na Wiki</a></td></tr>');
        $('#modals').append('<div class="modal fade" id="'+obj.img+'" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true"><div class="modal-dialog modal-lg" role="document"><div class="modal-content"><div class="modal-header"><h1 class="modal-title" id="modalLabel">'+obj.czname+'</h1><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body text-justify m-2"><div class="row"><div class="col-sm-12 col-md-7"><ul><li>Český název: <b>'+obj.czname+'</b></li><li>Anglický název: <b>'+obj.enname+'</b></li><li>Hlavní město: <b>'+obj.capital+'</b></li><li>Rozloha: <b>'+obj.area+' km²</b></li><li>Počet obyvatel: <b>'+obj.population+'</b></li><li><a href="'+obj.link+'">Odkaz na Wiki</a></li></ul></div><div class="col-sm-12 col-md-5"><figure><img src="img/flags/'+obj.img+'.png" alt="'+obj.czname+'" class="img-fluid"></figure></div></div><div class="row"><div class="col-sm-12"><figure><img src="img/position/'+obj.img+'.png" alt="'+obj.czname+'" class="img-fluid"></figure></div></div></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Zavřít</button></div></div></div></div>');
    });
    
    // ZVÝRAZNĚNÍ ŘÁDKU PO KLIKNUTÍ NA NĚJ
    $('#myTable td').on('click',function(){
        $('#myTable tr').removeClass('bg-secondary');
        $(this).parent('tr').addClass('bg-secondary');
    });

    // OTEVÍRÁNÍ A ZAVÍRÁNÍ DAT V TABULCE
    $('thead').click(function(){
        $('td').nextUntil('section').toggle(1000);
        $('.form-control').toggle(1000);
        $('#nadpis p').text('Pro detailní zobrazení klikni na vlajku státu.');
        $('#prehled h4').addClass('zmizeni');
    });

    // ZMĚNA OBRÁZKŮ 1
    $('#obrazky img').attr('src','img/'+obrazky[0].shot+'.jpg');
    $('#obrazky h3').text(obrazky[0].name);
    $('#obrazky p').text(obrazky[0].description);
    var i = 1;
    window.setInterval(function(){
        $('#obrazky img').attr('src','img/'+obrazky[i].shot+'.jpg');
        $('#obrazky h3').text(obrazky[i].name);      
        $('#obrazky p').text(obrazky[i].description);
        i<obrazky.length-1 ? i++ : i=0;
    }, 8000);

    // ZMĚNA OBRÁZKŮ 2
    $('#obrazky2 img').attr('src','img/'+obrazky2[0].shot+'.jpg');
    $('#obrazky2 h3').text(obrazky2[0].name);
    $('#obrazky2 p').text(obrazky2[0].description);
    var x = 1;
    window.setInterval(function(){
        $('#obrazky2 img').attr('src','img/'+obrazky2[x].shot+'.jpg');
        $('#obrazky2 h3').text(obrazky2[x].name);      
        $('#obrazky2 p').text(obrazky2[x].description);
        x<obrazky2.length-1 ? x++ : x=0;
    }, 8000);
})