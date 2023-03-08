<template >
  <header class="header">
    <article class="header__content">
      <img :src="avatar[src]" :alt="avatar[src]">
      <h2>{{ name }}</h2>
      <p>Онлайн</p>
    </article>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: ['name', 'src'],
  data() {
    return {
      avatar: {
        alex: '../../public/images/alex.png',
        jane: '../../public/images/jane.png',
      }
    }
  },
}
</script>