<h1>#MODULO1<h1>

<h2>Criaçao do mudulo de config de env<h2>

Comando para criar modules (terminal)
<code> nest g module (shared/infrastructure/env-config)</code>
Comando para criar services (teminal)
<code> nest g service (shared/infrastructure/env-config)</code>

<h3>Problema que esta sendo resolvido com o uso desses module e services:<h3>
<p>Normalmente nossos codigos ficam cheios de process.env espalhador por ele, e isso faz com que o codigo tenha uma dependencia direta de um framework(node)<p>

<h3>Ideia central de uso de modules e services de env-config:<h3>
<p>Ele está aplicando uma Inversao de independencia que ao inves de: <br>
<code>process.env.JWT_SECRET<code><br> ele vai fazer:<br>
<code>Use Case → Interface → Implementação que lê ENV<code>
<p>

<h3>Configuração é infra.
Core só conhece contratos.<h3>
