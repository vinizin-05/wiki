try {
    const form = document.querySelector("form") ?? null;
    const nomeInput = document.querySelector("#nome");
    const assuntoSelect = document.querySelector("#assunto");
    const mensagemTextearea = document.querySelector("#mensagem");
    const enviarBtn = document.querySelector("#enviar-btn");

    function validarFormulario(evento) {
        evento.preventDefault();
        let valido = true;
        if (nomeInput.value.trim() === "") {
            valido = false;
            alert("o campo de nome não pode ser vazio!");
        }
        if (mensagemTextearea.value.trim() === '') {
            valido = false;
            alert("mensagem não pode ser vazia!")
        } else if (mensagemTextearea.value.trim().length > 500) {
            valido = false;
            alert("mensagem deve ser menor que 500 caracteres.");
        }
        if (valido) {
            alert("Agradecemos seu contato");
            form.submit();
        }
    }

    enviarBtn.addEventListener('click', validarFormulario);
} catch (exception) {
    console.log(exception.message);
}
