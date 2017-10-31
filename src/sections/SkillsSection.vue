<template>
<section class="container" id="skills">
<h3 class="title">Compétences</h3>
<p align="justify">
Chaque jour j'essaie d'accroître mes connaissances,
donc il m'arrive d'apprendre de nouveaux langage pour rigoler ou d'expérimenter de nouvelles librairies.
</p>
<language-table/>
<p align="justify">
Les langages cités ci-dessus,
ne reflètent pas la liste des langages que je connais.
J'ai seulement comptais les langages dans lesquels je peux faire un peu tout ce que je veux.
Bien évidemment il y a des langages non listés que je suis ou que j'envisage d'apprendre comme l'<a target="_blank" rel="noopener" href="https://elixir-lang.org/">Elixir</a>, le <a target="_blank" rel="noopener" href="https://www.ruby-lang.org/fr/">Ruby</a> ou encore le <a target="_blank" rel="noopener" href="https://golang.org/">GO</a><!-- Y'a le dart aussi, nan j'déconne -->.
</p>
<p align="justify">
Pour le moment je n'ai parlé que de langages,
mais j'ai dû au fil du temps me familiariser avec des technologies comme <a href="https://docker.com">Docker</a>.
Au niveau des bases de données j'ai déjà travaillé avec <a target="_blank" rel="noopener" href="https://www.mysql.com/">MySQL</a>, <a target="_blank" rel="noopener" href="https://www.postgresql.org/">PostgreSQL</a>, <a target="_blank" rel="noopener" href="https://www.mongodb.com/">MongoDB</a> ou encore <a target="_blank" rel="noopener" href="https://www.rethinkdb.com/">RethinkDB</a>.
Niveau Proxy, j'ai déjà installé et configuré <a target="_blank" rel="noopener" href="https://nginx.org/">Nginx</a>, <a target="_blank" rel="noopener" href="https://caddyserver.com/">Caddy</a> et <a target="_blank" rel="noopener" href="https://apache.org/">Apache</a>.
Et d'autre principes, protocoles et technologies comme JWT, OAuth, RabbitMQ, Redis, Micro-Service, Serverless.
</p>
</section>
</template>

<script>
import LanguageTable from '@/components/Skills/LanguagesTable'

export default {
  name: 'SkillsSection',
  components: {
    LanguageTable
  }
}
</script>
