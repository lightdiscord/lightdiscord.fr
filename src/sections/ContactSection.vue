<template>
<section class="container" id="contact">
  <h3 class="title">Contactez-moi</h3>
  <p align="justify">Après tout ce que je vous ai raconté sur moi, vous pouvez toujours décider de me contacter avec les moyens ci-dessous.</p>
  <social-list/>
</section>
</template>

<script>
import SocialList from '@/components/Contact/SocialList'

export default {
  name: 'ContactSection',
  components: {
    SocialList
  }
}
</script>
