<template>
  <div id="tasks">
    <div class="container">
      <h1>Recent Tasks</h1>
      <div class="tasks">
        <Card v-for="(task, i) in tasks" :key="'task-' + i">
          <div class="card__header">
            <span class="card__title">#{{ task.taskId }} {{ task.name }}</span>
            <span class="card__status">
              <strong>{{ task.createdAt }}</strong>
            </span>
          </div>
          <div class="card__body" v-html="task.description"></div>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Card from './../components/Card'
export default {
  name: 'Task',
  components: {
    Card
  },
  data () {
    return {
      tasks: []
    }
  },
  methods: {
    getTasks () {
      axios('http://localhost:3000/api/v1/tasks')
        .then(res => res.data)
        .then(res => {
          this.tasks = res.tasks
        })
    }
  },
  created () {
    this.getTasks()
  }
}
</script>

<style lang="scss" scoped>
.tasks {
  height: calc(100vh - 200px);
  overflow: y-scroll;
}
</style>
