$(function(){
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
        $('#myTable tr').removeClass('bg-info');
        $(this).parent('tr').addClass('bg-info');
    });

    // OTEVÍRÁNÍ A ZAVÍRÁNÍ DAT V TABULCE
    $('thead').click(function(){
        $('td').nextUntil('section').toggle(1000);
    });

    // ZMĚNA OBRÁZKŮ
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
})