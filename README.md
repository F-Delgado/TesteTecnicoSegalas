# Teste Tecnico Segalas
Desenvolvimento de Aplicativo de Bloco de Notas - Java,React e Spring Boot Descrição da Tarefa:

Desenvolver um aplicativo de bloco de notas semelhante ao "Bloco de Notas" padrão do sistema operacional Windows. O aplicativo será desenvolvido com um frontend em React e um backend em Spring Boot, utilizando o Spring Data para persistência de dados e incorporando testes para garantir a qualidade do código.

Requisitos Funcionais: 
1. O aplicativo deve permitir que o usuário crie, visualize, edite e exclua notas de texto.
2. Cada nota deve conter um título e um corpo de texto.
3. O usuário deve poder visualizar a lista de notas existentes.
4. O usuário deve poder editar ou excluir qualquer nota existente. 
5. O aplicativo deve ter uma interface de usuário intuitiva e responsiva, desenvolvida em React.

Requisitos Técnicos: 
1. O frontend deve ser desenvolvido em React, com uma experiência de usuário fluida e amigável.
2. O backend deve ser desenvolvido em Spring Boot, seguindo as melhores práticas do framework. 
3. Utilize o Spring Data para realizar a persistência de dados das notas em um banco de dados. 
4. Implemente testes automatizados (unitários e/ou integrados) para garantir a robustez e estabilidade do aplicativo.

Entregáveis: 
1. Código fonte completo do aplicativo, incluindo o frontend em React e o backend em Spring Boot. 
2. Instruções detalhadas de como executar o aplicativo localmente. 
3. Documentação descrevendo as principais decisões de design, tecnologias utilizadas e uma breve explicação sobre os testes implementados.

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

                                    Minha Aplicação - Leia com atenção

Tecnologia utilizada:
Spring Boot para Backend.
Spring Data JPA para persistência de dados.
React para o Frontend.
PostgreSQL para Banco de dados.
JUnit para os teste. 

Algumas dependencias foram adicionadas no projeto na qual mesmo pode ser visualizado no POM.xml.
Neste repositório você encontra 4 pasta uma com parte do backend, frontend, deploy e um com collection do Postman, este projeto possui teste automatizados na parte do backend porem o mesmo só realiza o teste do repositorio e do controller,  o mesmo possui documentação Swagger quando estiver executando o projeto basta ir no link
"Sobre" e mesmo possui um link que redirecionara para documentação da API.

Este projeto foi criado utilizando banco de dados PostgreSQL e as configurações utilizada nele esta disponivel dentro da pasta src/main/resources no arquivo application.properties assim como os script estão na pasta src/main/resources/db/migration, eu utilizei 2 databases sendo um para DEV outro para Test.

Segue instrução para execução deste projeto:
-Realizar o clone deste repositorio em sua maquina.
-Este repositorio tem 3 pasta e cada uma contendo (Backend,Frontend e Deploy).

-SUBINDO O BACKEND:
-Ter Java versão 17 instalado na maquina, realizar a instalação banco dados PostgreSQL assim como a configuração do mesmo e criação do banco. 
-Na pasta Deploy abrir um prompt de comando rodar seguinte comando:
java -jar apiBlocoDeNota-0.0.1-SNAPSHOT.jar

-SUBINDO O FRONTEND:
-Abrir na pasta FrontEnd/bloco-de-notas
-Abrir um prompt de comando rodar seguinte comando:
npm start 






