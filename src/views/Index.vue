<template>
  <div class="uk-container uk-container-small uk-flex uk-flex-center uk-flex-middle" uk-height-viewport="expand: true">
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm'

export default {
  components : { LoginForm }
}
</script>

<style>
.uk-navbar-container:not(.uk-navbar-transparent) {
  background: white;
}
</style>