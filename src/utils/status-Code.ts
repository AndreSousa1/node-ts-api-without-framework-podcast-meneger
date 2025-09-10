export enum statusCode {
  OK = 200, // Requisição bem-sucedida
  CREATED = 201, // Recurso criado com sucesso
  NO_CONTENT = 204, // Sucesso sem conteúdo na resposta

  BAD_REQUEST = 400, // Requisição inválida (erro do cliente)
  UNAUTHORIZED = 401, // Não autenticado
  FORBIDDEN = 403, // Acesso negado
  NOT_FOUND = 404, // Recurso não encontrado

  INTERNAL_SERVER_ERROR = 500, // Erro interno do servidor
  BAD_GATEWAY = 502, // Resposta inválida de um servidor intermediário
  SERVICE_UNAVAILABLE = 503, // Serviço temporariamente indisponível
}
