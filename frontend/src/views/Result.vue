<template>
    <div class="result_page container" v-if="status === 'user'">
        <header>
                <div>
                    <img src="../assets/source/logo.png" alt="logo">
                    <p>Тестирование сотрудников</p>
                </div>
               <router-link to="/"><button>В главную</button></router-link>
        </header>
        <h2>Результаты теста "{{ currentTest.title }}"</h2>
        <div>
            <div v-for="question in currentTest.questions" :key="question.id">
                <h4>{{question.id}}. {{ question.text }}</h4>
                <p>Ваш ответ: {{ getUserAnswer(question.id) }}</p>
            </div>
        </div>
        
        <button @click=" complete()">Подтвердить</button>

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
            currentTest() {
                return this.$store.state.currentTest
            }
        },
        methods: {
            getUserAnswer(questionId) {
                const userAnswer = this.$store.state.userAnswers.find(answer => answer.questionId === questionId)
                if (userAnswer) {
                    const option = this.getOptionById(questionId, userAnswer.answerId)
                    return option ? option.text : 'нет ответа'
                } else {
                    return 'нет ответа'
                }
            },
            getOptionById(questionId, optionId) {
                const question = this.currentTest.questions.find(question => question.id === questionId)
                if (question) {
                    return question.options.find(option => option.id === optionId)
                } else {
                    return null
                }
            },
            complete() {
                this.$store.dispatch('setCompletedTest')
                this.$router.push('/home')
        }
        },
        mounted() {
        this.status = sessionStorage.status
       }
    }
</script>

<style lang="scss">
.result_page{
    text-align: left;
   header{
    p {
        color: grey;
    }
   }
   h2{
        width: 700px;
        margin: 20px auto;
        line-height: 34px;
        text-align: center;
    }
    button{
        margin: 40px auto 10px;
        display: block;
    }
}
</style>