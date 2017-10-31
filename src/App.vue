<template>
  <main class="wrapper" id="app">
    <about-section/>
    <skills-section/>
    <projects-section/>
    <contact-section/>
  </main>
</template>

<script>
import AboutSection from '@/sections/AboutSection'
import SkillsSection from '@/sections/SkillsSection'
import ProjectsSection from '@/sections/ProjectsSection'
import ContactSection from '@/sections/ContactSection'

export default {
  name: 'app',
  components: {
    AboutSection,
    SkillsSection,
    ProjectsSection,
    ContactSection
  }
}
</script>

<style>
.wrapper>.container {
  padding-bottom: .5rem;
  padding-top: 7.5rem;
}
</style>
