<template>
<table>
  <thead>
    <tr>
      <th class="middle"></th>
      <th>Langage</th>
      <th>Expérience</th>
      <th>Librairies utilisées</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="language in languages" :key="language.name">
      <td class="middle">{{ language.rating }}</td>
      <td>{{ language.name }}</td>
      <td>{{ language.time }}</td>
      <td v-html="libraries(language)"></td>
    </tr>
  </tbody>
</table>
</template>

<style>
td.middle, th.middle {
  text-align: center;
}
</style>

<script>
export default {
  name: 'LanguageTable',
  data () {
    return {
      languages: [
        {
          name: 'Javascript',
          rating: `❤️`,
          libs: [
            ['expressjs', 'http://expressjs.com/'],
            ['discord.js', 'https://discord.js.org/'],
            ['VueJS', 'https://vuejs.org/'],
            ['Babel', 'https://babeljs.io/'],
            ['Socket.io', 'https://socket.io/'],
            ['Vanilla-JS', 'http://vanilla-js.com/'],
            `Et plein d'autre...`
          ],
          time: '~1 an'
        },
        {
          name: 'Rust',
          rating: `❤️`,
          libs: [
            ['Metal IO', 'https://github.com/carllerche/mio'],
            ['Rocket.rs', 'https://rocket.rs/'],
            ['Hyper.rs', 'https://hyper.rs/'],
            ['reqwest', 'https://github.com/seanmonstar/reqwest'],
            ['serenity', 'https://github.com/zeyla/serenity'],
            `Y'en a encore plein...`
          ],
          time: '~2 mois'
        },
        {
          name: 'Java',
          rating: `😕`,
          time: '~2 ans',
          libs: [
            ['JDA', 'https://github.com/DV8FromTheWorld/JDA'],
            ['Spigot', 'https://www.spigotmc.org/'],
            `D'autre dont je n'ai plus les noms`
          ]
        }/*,
        {
          name: 'PHP',
          rating: `💩`,
          time: '~1 ans',
          libs: [
            `Nan mais lol, PHP quoi`
          ]
        }
        */
      ]
    }
  },
  methods: {
    libraries (language) {
      return language.libs ? language.libs.map(lib => Array.isArray(lib) ? `<a target="_blank" href="${lib[1]}">${lib[0]}</a>` : lib).join(', ') : ''
    }
  }
}
</script>
