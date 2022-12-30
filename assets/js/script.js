// CHECAR INFORMAÇÃO DOS INPUTS:
// "chamar" os elementos do html pelo id
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const cpf = document.getElementById("cpf");
const cellphone = document.getElementById("cellphone");

// "chamar" a função de checar os inputs
form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

// função para validar (ou não) os inputs
function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const cpfValue = cpf.value;
  const cellphoneValue = cellphone.value;

  // se o input de nome for vazio -> seta erro, se não -> seta sucesso
  if (usernameValue === "") {
    setErrorFor(username, "O nome é obrigatório.");
  } else {
    setSuccessFor(username);
  }

  // se o input de email for vazio -> seta erro, se for inválido -> seta erro, se não -> seta sucesso
  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Insira um email válido.");
  } else {
    setSuccessFor(email);
  }

  // se o input de cpf for vazio -> seta erro, se for inválido -> seta erro, se não -> seta sucesso
  if (cpfValue === "") {
    setErrorFor(cpf, "O CPF é obrigatório.");
  } else if (cpfValue.length < 14) {
    setErrorFor(cpf, "Insira um CPF válido.");
  } else if (cpfValue.length > 14) {
    setErrorFor(cpf, "Insira um CPF válido.");
  } else {
    setSuccessFor(cpf);
  }

  // se o input de telefone for vazio -> seta erro, se for inválido -> seta erro, se não -> seta sucesso
  if (cellphoneValue === "") {
    setErrorFor(cellphone, "O número de telefone é obrigatório.");
  } else if (cellphoneValue.length < 15) {
    setErrorFor(cellphone, "Insira um telefone válido.");
  } else if (cellphoneValue.length > 15) {
    setErrorFor(cellphone, "Insira um telefone válido.");
  } else {
    setSuccessFor(cellphone);
  }
}

// função para exibir a mensagem o ícone de erro quando algum dos inputs apresentar erro
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // adiciona mensagem de erro
  small.innerText = message;

  // adiciona a classe de erro para que a mesma possa ser exibida
  formControl.className = "form-control error";
}

// função para exibir o ícone de sucesso quando o input não apresentar erro
function setSuccessFor(input) {
  const formControl = input.parentElement;

  // adiciona a classe de sucesso
  formControl.className = "form-control success";
}

// colocar automaticamente os caracteres extras no input cpf
function mascaracpf(cpf) {
  if (cpf.value.length == 3) cpf.value = cpf.value + ".";
  if (cpf.value.length == 7) cpf.value = cpf.value + ".";
  if (cpf.value.length == 11) cpf.value = cpf.value + "-";
}

// colocar automaticamente os caracteres extras no input cellphone
function mascara(cellphone) {
  if (cellphone.value.length == 0) cellphone.value = "(" + cellphone.value;
  if (cellphone.value.length == 3) cellphone.value = cellphone.value + ") ";
  if (cellphone.value.length == 10) cellphone.value = cellphone.value + "-";
}

// para checar se o email é realmente válido
function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
