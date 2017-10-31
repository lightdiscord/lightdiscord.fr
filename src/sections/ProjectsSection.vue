<template>
<section class="container" id="projects">
  <h3 class="title">Projets</h3>
  <p align="justify">Je ou j'ai participé à de nombreux projets, en solo ou en groupe. Les projets auxquels j'ai participé sont listés ci-dessous.</p>
  <project-list/>
</section>
</template>

<script>
import ProjectList from '@/components/Projects/ProjectList'

export default {
  name: 'ProjectsSection',
  components: {
    ProjectList
  }
}
</script>
