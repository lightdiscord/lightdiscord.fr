<template>
<ul>
  <li v-for="network in social"><a :href="network.url" target="_blank">{{ network.name }}</a></li>
</ul>
</template>

<script>
export default {
  name: 'ProjectList',
  data () {
    return {
      social: [
        {
          name: 'Twitter',
          url: 'https://twitter.com/LightDiscord'
        },
        {
          name: 'GitHub',
          url: 'https://github.com/LightDiscord'
        },
        {
          name: 'Email',
          url: 'mailto:contact@lightdiscord.fr'
        }
      ]
    }
  }
}
</script>
