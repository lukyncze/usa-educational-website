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
    states.forEach(function(obj,idx){
        $('#myTable').append('<tr><td></td><td>'+obj.czname+'</td><td>'+obj.enname+'</td><td>'
        +obj.capital+'</td><td>'+obj.area+'</td><td>'+obj.population+'</td><td style="text-align: middle"><a href="'
        +obj.link+'">Klikni zde</a></td></tr>');
    });
    
    // ZVÝRAZNĚNÍ ŘÁDKU PO KLIKNUTÍ NA NĚJ
    $("#myTable td").on('click',function(){
        $('#myTable tr').removeClass('bg-secondary');
        $(this).parent('tr').addClass('bg-secondary');
    });

    // OTEVÍRÁNÍ A ZAVÍRÁNÍ DAT V TABULCE
    $('thead').click(function(){
        $('td').nextUntil('section').toggle(1000);
        $('.form-control').toggle(1000);
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