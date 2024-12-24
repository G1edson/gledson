function status(request, response) {
  response.status(200).json({ chave: "alunos do curso.dev é fora da média" });
}

export default status;
