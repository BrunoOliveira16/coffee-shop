$(document).ready(function() {
    $('#tel').mask('(00) 00000-0000', {
        placeholder: '(xx) xxxxx-xxxx',
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            tel: {
                required: true
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            tel: 'Por favor, insira seu telefone',
            email: 'Por favor, insira seu email',
            mensagem: "Por favor deixe uma mensagem para nós"
        },
        submitHandler: function(form) {
            console.log(form)
            $('#nome').val('');
            $('#email').val('');
            $('#tel').val('');
            $('#mensagem').val('');
        },
    })
});