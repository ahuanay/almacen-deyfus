cambiar_tienda();
cambiar_modo_oscuro();

$('#tienda').change(function (e) { 
    e.preventDefault();
    localStorage.setItem('tienda', $(this).val());
    cambiar_tienda();
});

$('#modo_oscuro').click(function (e) { 
    e.preventDefault();
    localStorage.setItem('theme', 'true');
    cambiar_modo_oscuro();
});

$('#modo_normal').click(function (e) { 
    e.preventDefault();
    localStorage.setItem('theme', 'false');
    cambiar_modo_oscuro();
});

$('.enviar_productos_tienda').click(function (e) { 
    e.preventDefault();
    $('#tienda_destino').val(localStorage.getItem('tienda'));
});

function cambiar_tienda() {
    $('#tienda').val(localStorage.getItem('tienda'));
}

function cambiar_modo_oscuro() {
    var theme = localStorage.getItem('theme');
    if(theme == 'true') {
        $('#theme').attr('href', 'https://bootswatch.com/4/darkly/bootstrap.min.css');
        $('#modo_oscuro').hide();
        $('#modo_normal').show();

    } else {
        $('#theme').attr('href', 'https://bootswatch.com/4/cerulean/bootstrap.min.css');
        $('#modo_normal').hide();
        $('#modo_oscuro').show();
    }
}