<template>
  <div class="home">
    <div class="container">
      <h1>Dashbaord</h1>
      <div class="dashboard">
        <Card v-for="(event, i) in events" :key="'event-' + i">
          <div class="card__header">
            <span class="card__title">{{ event.title }}</span>
          </div>
          <div class="card__body">
            qwewqe
          </div>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card'
export default {
  name: 'Home',
  data () {
    return {
      events: [
        {
          title: 'Recent Added Companies',
          body: 'body1'
        },
        {
          title: 'Recent Added People',
          body: 'body1'
        },
        {
          title: 'Recent Added Jobs',
          body: 'body1'
        },
        {
          title: 'Recent Added Locations',
          body: 'body1'
        }
      ]
    }
  },
  components: {
    Card
  }
}
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;

  .dashboard {
    height: calc(100vh - 200px);
    display: grid;
    grid-gap: 1rem;
    grid-template: repeat(2, 1fr) / repeat(2, 1fr);
  }
}
</style>
