<template>
    <div class="test_page" v-if="status === 'user'">
        <div class="container">
            <header>
                <div>
                    <img src="../assets/source/logo.png" alt="logo">
                    <p>Тестирование сотрудников</p>
                </div>
               <router-link to="/"><button>В главную</button></router-link>
            </header>
            <h2>{{ currentQuestion.text }}</h2>
            <div class="test_c">
                <div v-for="option in currentQuestion.options" :key="option.id" class="test_content">
                    <input
                        type="radio"
                        :name="currentQuestion.id"
                        :value="option.id"
                        v-model="answerId"
                    />
                    {{ option.text }}
                </div>
            </div>
            <button @click="nextQuestion">Следующий</button>
        </div>
    </div>
   </template>

   <script>
   export default {
        data() {
            return {
                status: ''
            }
        },
       computed: {
           currentQuestion() {
               const questions = this.$store.state.currentTest.questions
               const index = this.$store.state.currentQuestionIndex
               return questions[index]
           },
           answerId: {
               get() {
                   const questionId = this.currentQuestion.id
                   const userAnswer = this.$store.state.userAnswers.find(answer => answer.questionId === questionId)
                   return userAnswer ? userAnswer.answerId : null
               },
               set(id) {
                   this.$store.commit('setAnswer', { questionId: this.currentQuestion.id, answerId: id })
               }
           }
       },
       methods: {
           nextQuestion() {
               if(this.answerId == null){ // сначала надо ответить на вопрос, если не ответил то дать уведомление
                  alert('Пожалуйста, сначала ответье на вопрос')
               } else {
                  const isLast = this.$store.state.isLastQuestion
                  if (isLast === true) {
                     // последний вопрос, переходим на страницу результатов
                     this.$router.push('/result')
                  } else if (isLast === false) {
                  this.$store.commit('nextQuestion') // иначе след.вопрос
                  }
               }   
               
           },

       },
       mounted() {
        this.status = sessionStorage.status
       }
  
   }
   </script>

<style lang="scss">

.test_page{
    margin: 0 auto;
    .test_c{
        margin: 50px 0;
    }
    
  .test_content {
        font-size: 20px;   
        // margin: 20px;
  }
  header{
    p {
        color: grey;
    }
   }
 input {
    width: 20px;
    height: 20px;
    cursor: pointer;
    margin: 10px;
 }
 h2{
    margin-top: 50px;
 }
}
</style>