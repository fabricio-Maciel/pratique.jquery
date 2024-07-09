$(document).ready(function () {
  $("#telefone").mask("(00) 00000-0000");
  $("#cpf").mask("000.000.000-00");

  $("#cep").mask("00000-000");

  $("#carousel-imagens").slick({
    autoplay: true,
    arrows: false,
  });

  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: true,
      },
      endereco: {
        required: true,
      },
      cep: {
        required: true,
      },
      cpf: {
        required: true,
      },
    },
    messages: {
      nome: "Por favor, insira seu nome",
      email: "Por favor, digite seu e-mail",
      telefone: "Por favor, digite seu telefone",
      Endereco: "Por favor, digite seu endereço",
      cep: "Por favor, digite o cep",
      cpf: "Por favor, digite o seu cpf",
    },
    submitHandler: function (form) {
      alert(
        "Sua requisição foi enviada para análise, parabéns pela aquisição!"
      );
      form.reset();
    },
    invalidHandler: function (form, validator) {
      alert("Por favor, preencha os campos para prosseguir com a compra!");
    },
  });
});
