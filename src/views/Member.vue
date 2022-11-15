<template>
  <div class="uk-container uk-container-small">
    <NavigationBar />
    <MemberTabNav />
    <MemberList />
    <BottomNavigationBar />
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar'
import BottomNavigationBar from '@/components/BottomNavigationBar'
import MemberTabNav from '@/components/MemberTabNav'
import MemberList from '@/components/MemberList'

export default {
  components : { NavigationBar, BottomNavigationBar, MemberTabNav, MemberList },
}
</script>