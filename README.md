# John Doe App

To run the project just run the command in the root // Para rodar o projeto basta rodar o comando na raiz 
``
 docker-compose up --build
 ``

# To view the UI in the browser // Para visualizar o UI no navegador
	http://localhost:3005

# Para listar todos os usuários cadastrados
``
curl --request GET \
  --url http://localhost:3000/user
  ``

# To add a new user // Para Adicionar um novo usuário

``
curl --request POST \
  --url http://localhost:3000/user \
  --header 'Content-Type: application/json' \
  --data '{
	"name": "Andre",
	"cpf":"12345678910",
	"email": "teste@teste.com",
	"color": "#ff0000"
}'
``