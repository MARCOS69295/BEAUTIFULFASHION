<script>
    document.querySelector('form').addEventListener('submit', function(e) {
        // Prevenindo o envio padrão do formulário
        e.preventDefault();

        var email = document.querySelector('input[type="text"]').value;
        var senha = document.querySelector('input[type="password"]').value;

        // Simples validação de email e senha
        if(email === '' || senha === '') {
            alert('Por favor, preencha todos os campos.');
        } else {
            alert('Login efetuado com sucesso!');

            // Aqui você pode adicionar o código para enviar os dados do formulário
            // Por exemplo, via AJAX ou redirecionando para outra página
            // Para este exemplo, estamos apenas mostrando um alerta
        }
    });

    document.querySelector('input[type="reset"]').addEventListener('click', function() {
        alert('Os campos foram limpos!');
    });
</script>
