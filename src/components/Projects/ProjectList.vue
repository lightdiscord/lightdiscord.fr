<template>
<ul>
  <li v-for="project in projects">
    <a :href="project.url" target="_blank" rel="noopener">{{ project.name }}</a>
    <span v-if="project.organization">(<a target="_blank" rel="noopener" :href="project.organization.url">@{{ project.organization.name }}</a>)</span>
  </li>
</ul>
</template>

<script>
export default {
  name: 'ProjectList',
  data () {
    return {
      projects: [
        {
          name: 'DiscordBot-ClashOfCode',
          url: 'https://github.com/LightDiscord/DiscordBot-ClashOfCode'
        },
        {
          name: 'discord_viewer.rs',
          url: 'https://github.com/LightDiscord/discord_viewer.rs'
        },
        {
          name: 'Hastebin.rs',
          url: 'https://github.com/LightDiscord/Hastebin.rs'
        },
        {
          name: 'Frontend',
          url: 'https://github.com/NotEnoughIdea/Frontend',
          organization: {
            name: 'NotEnoughIdea',
            url: 'https://github.com/NotEnoughIdea'
          }
        }
      ]
    }
  }
}
</script>
