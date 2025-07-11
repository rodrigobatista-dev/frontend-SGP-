const API_URL = "http://localhost:8082/api";

export async function buscarTarefas() {
  const resposta = await fetch(`${API_URL}/tarefas`);
  return resposta.json();
}

export async function buscarProjetos() {
  const resposta = await fetch(`${API_URL}/projetos`);
  return resposta.json();
}

export async function buscarUsuarios() {
  const resposta = await fetch(`${API_URL}/usuarios`);
  return resposta.json();
}
