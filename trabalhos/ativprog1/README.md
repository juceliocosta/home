# Atividade de programação 1

Após estudar o conteúdo inicial sobre **HTML**, crie um website utilizando puramente a linguagem **HTML5** e o editor de sua preferência (por exemplo, [Visual Studio Code](https://code.visualstudio.com/)) para exibir informações fictícias de um currículo vitae. O website deve conter duas páginas:

1. Uma página principal (**index.html**) contendo as informações gerais do currículo;

2. Uma página complementar (**experiencia.html**) para exibir detalhes sobre a experiência profissional do autor do currículo.

A página principal do website deve se apresentar como na figura modelo (*Fig. 1*) apresentada na seção de anexo deste documento.

As duas páginas devem ser construídas seguindo as orientações e restrições descritas na sequência.

## Requisitos e restrições

1. Apenas os elementos da **HTML** listados a seguir são permitidos:
```
a. <html>, <body>, <head>, <title>, <meta>

b. <h1>, <h2>, <p>, <b>, <strong>, <i>, <em>

c. <img>, <a>, <hr>, <br>, <ol>, <ul>, <li>, <address>
```
2. O website deve ser organizado a partir de uma pasta raiz de nome **ativprog1**, a qual deve conter os arquivos **index.html**, **experiencia.html** e uma subpasta de nome images contendo os arquivos de imagens necessários;

3. Nas duas páginas, a aba do navegador deve apresentar o texto: “*Currículo de Fulano de Tal*”;

4. A foto do autor do currículo na página principal deverá aparecer antes do nome, conforme modelo apresentado na figura modelo, no tamanho **120 x 120 pixels**. Utilize a foto de um avatar. Não utilize foto própria;

5. Utilize o elemento `<h1>` para inserção do nome do autor e elementos `<h2>` para os títulos relativos às seções do currículo (*Perfil, Principais Competências, Formação Acadêmica etc.*). As partes devem ser separadas por elementos `<hr>`.

6. A seção Perfil deve ter pelo menos dois parágrafos;

7. A seção *Principais Competências* deve ter uma lista não ordenadas com pelo menos 5 itens;

8. A seção *Formação Acadêmica* deve ter um conteúdo similar ao apresentado na figura modelo, contendo pelo menos dois links para sites de universidades;

9. A seção *Experiência Profissional* deve ser organizada como apresentada na figura modelo (*Fig. 1*). Deve conter listas não ordenadas aninhadas com uma lista ordenada;

10. No final da seção *Experiência Profissional* deve haver um hyperlink que dê acesso à segunda página (“**experiencia.html**”), que por sua vez deverá exibir informações detalhadas sobre a *experiência profissional* do autor do currículo. A página “**experiencia.html**” pode ser confeccionada de forma livre, porém não deve conter código **CSS** nem elementos da **HTML** que não estejam na lista indicada acima. Além disso, no final da página deve haver um *hiperlink* que permita ao usuário voltar à página principal;

11. A seção Contato deve conter informações de contato do autor do currículo e deve se apresentar como na figura modelo. Utilize os elementos adequados da **HTML5**. Repare que há uma imagem antes do endereço, outra antes do telefone e outra antes do e-mail. Tais imagens devem não precisam ser iguais àquelas do modelo, mas os tamanhos de exibição devem ser ajustados com os devidos atributos (**30 x 30 pixels**). O e-mail deve ser apresentado como um link para e-mail e o telefone como um link para telefone (veja material de aula);

12. Faça a validação do código **HTML** utilizando a ferramenta disponível no endereço [validator.w3.org](validator.w3.org).

## Disponibilização Online

A página deve ser colocada online utilizando um serviço de hospedagem gratuita, conforme apresentado no final do material de aula sobre **HTML**. O serviço de hospedagem deve ter suporte gratuito às tecnologias **PHP** e **MySQL** e deve possibilitar a criação de um subdomínio gratuito. Uma sugestão é o [infinityfree.net](https://www.infinityfree.com/), que pode ser utilizado de forma similar ao [awardspace](https://www.awardspace.com/), que foi apresentado no final do material de aula.

A página referente a Atividade de Programação 1 deve ser disponibilizado em URL finalizando com **/trabalhos/ativprog1**, sem utilizar caracteres adicionais ou letras maiúsculas.

### Veja o exemplo:

*www.seusubdominio.dominio.com/trabalhos/ativprog1*