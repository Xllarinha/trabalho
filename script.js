const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o botão "Não" e adiciona um ouvinte de evento para mostrar a tela de confirmação
    document.getElementById('noButton').addEventListener('click', function() {
        document.getElementById('menu').classList.add('hidden');
        document.getElementById('passo-2').classList.remove('hidden');
    });

    // Seleciona o botão "OK" e redireciona para a página principal ou menu
    document.getElementById('okButton').addEventListener('click', function() {
        window.location.href = 'index.html'; // Substitua 'index.html' pelo caminho para a sua página de menu
    });

    // Seleciona o botão "Cancelar" e oculta a tela de confirmação
    document.getElementById('cancelButton').addEventListener('click', function() {
        document.getElementById('passo-2').classList.add('hidden');
        document.getElementById('menu').classList.remove('hidden');
    });
});
