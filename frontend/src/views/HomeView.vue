<template>
    <div class="home" :style="{height: clientHeight + 'px'}">
        <div class="container">
            <header>
                <div>
                    <img src="../assets/source/logo.png" alt="logo">
                    <p>Тестирование сотрудников</p>
                </div>
               <router-link to="/"><button>В главную</button></router-link>
            </header>
            <div class="home_page" v-if="status === 'user'">
                <h1>Добро пожаловать!</h1>
                <div class="info">
                    <p>Сотрудник: {{ username }}</p>
                    <p>Профессия: {{ profession }}</p>
                </div>
                <div class="t_block">
                    <h2>{{username}} вам доступны следующее тесты:</h2>
                    <div>
                        <div v-for="test in tests" :key="test.id">
                            <h3 @click="startTest(test.id)">{{ test.title }}</h3>
                        </div>
                    </div>
                </div>
                
            </div>

            <div class="home_panel" v-if="status === 'admin'">
                <h1>Добро пожаловать Админ!</h1>
                <div class="admin_panels">
                    <p @click="active_panel='newUser'">Добавление нового пользователя</p>
                    <p @click="active_panel='newTest'"> Добавление нового теста</p>
                </div>
                <div class="admin new_user" v-if="active_panel==='newUser'">
                    <h1>Добавление нового пользователя</h1>
                    <div class="new">
                        <h2>Уровень доступа</h2>
                        <select name="role" id="id" v-model="Form.user_type">
                            <option value="admin">Администратор</option>
                            <option value="user">Пользователь</option>
                        </select>
                        <h2>Имя</h2>
                        <input type="text" required>
                        <h2>Фамилия</h2>
                        <input type="text" required>
                        <h2>Профессия</h2>
                        <select name="profession" id="id" v-model="Form.profession">
                            <option value="Машинист">Машинист</option>
                            <option value="Электромонтёр">Электромонтёр</option>
                            <option value="Оператор">Оператор</option>
                        </select>
                        <h2>Логин</h2>
                        <input type="text" required>
                        <h2>Пароль</h2>
                        <input type="text" >
                    
                        <input type="button" class="btn" value="Добавить" @click="">  
                    </div>
                </div>
                <div class="admin new_test" v-if="active_panel === 'newTest'">
                    <h1>Добавление нового теста</h1>
                    <div class="new">
                        <h2>Название теста</h2>
                        <input type="text" required>
                        <h2>Количество вопросов</h2>
                        <select name="question" v-model="questions">
                            <option value= 12 >2</option>
                            <option value= 123 >3</option>
                            <option value= 12345 >5</option>
                        </select>
                        <div class="question"
                        v-for="(question, index) in questions">
                            <h2>Вопрос {{ index + 1}}:</h2>
                            <input type="text" required>
                            <p>Варианты ответов:</p>
                            <p>А:</p>
                            <input type="text" required>
                            <p>Б:</p>
                            <input type="text" required>
                            <p>В:</p>
                            <input type="text" required>
                            <p>Варинат правильного ответа</p>
                            <select name="options">
                                <option value= 1 >А</option>
                                <option value= 2 >Б</option>
                                <option value= 3 >В</option>
                            </select>
                            <hr>
                        </div>
                                       
                        <input type="button" class="btn" value="Добавить" @click="">  
                    </div>
                
                </div>
            
        </div>    
           
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                status: '',
                username: '',
                profession: '',
                active_panel: '',

                Form: {
                    user_type: 'user',
                    profession: 'Машинист',
                    
                },

                questions: 0,

                clientHeight: 800
            }
        },
        computed: {
            tests() {
                return this.$store.state.tests.filter(test => {
                    return test.profession === this.profession
                })
            },
        },
        methods: {
            startTest(id) {
                this.$store.dispatch('startTest', id)
                this.$router.push('/test/' + id)
            },
        },

        mounted() {
            this.status = sessionStorage.status ? sessionStorage.status : ''
            this.username = sessionStorage.username ? sessionStorage.username : ''
            this.profession = sessionStorage.profession ? sessionStorage.profession : ''

            this.clientHeight =  document.documentElement.clientHeight;
        }
    }
</script>

<style lang="scss">
.button{
    cursor: pointer;
}
 select{
        width: 300px;
        padding: 10px 20px;
        text-align: center;
        font-size: 16px;
        cursor: pointer;
        border-radius: 10px;
        border: 1px solid rgb(0, 0, 0);
    }
.home{
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: center;
    margin: 0 auto;
    header{
        p {
            color: grey;
        }
    }
    h1{
    margin: 0;
    padding: 50px 0 20px;
    color: rgb(208, 0, 0);

    span{
        border-bottom: 2px solid rgb(0, 0, 0);
        color: rgb(82, 82, 82);
    }


}
}

.home_page{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    .info{
        display: flex;
        p{
            margin: 0 10px;
        }
    }
}
.t_block{
    width: 50%;
    text-align: left;

    h2{
        padding: 15px 10px;
        margin: 20px 10px 10px;
        text-align: center;
        border-bottom: 2px solid rgb(0, 0, 0);
    }
    h3{
        margin: 20px 20px 20px;
        cursor: pointer;
        font-size: 20px;
        border: 2px solid grey;
        border-radius: 20px;
        padding: 15px 20px;
        font-weight: normal;
        // border-p
    }

}
.home_panel {
    h1{
        padding: 10px 0 0;
    }
}
.admin{
    padding: 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
        font-size: 24px;
        margin: 0;
        padding: 20px 0 0;
        color: #000;
    }
    h2{
        font-size: 18px;
        font-weight: normal;
        margin: 10px 0;
    }
    input {
        width: 350px;
        padding: 10px 10px;
        border-radius: 10px;
        border: 1px solid rgb(0, 0, 0);
        font-size: 16px;
    }
    .btn {
        margin: 20px 0;
        background: rgb(145, 145, 145);
        color: #fff;
        border: none;
    }
    .new {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
    }
    .role 
    input {
        width: 20px;
        height: 20px;
        padding: 10px;
        margin: 0px 5px 0;
        cursor: pointer;
    }
}
.admin_panels{
    display: flex;
    justify-content: center;
    margin: 20px 0 0;
    p{
        font-size: 20px;
        margin: 0px 10px;
        border: 2px solid grey;
        padding: 10px 20px;
        cursor: pointer;
        border-radius: 10px;
    }
}
</style>