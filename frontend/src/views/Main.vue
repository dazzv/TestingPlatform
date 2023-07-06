<template>
    <div class="main">
        <div class="container">
            <header>
                <div>
                    <img src="../assets/source/logo.png" alt="logo">
                    <p>Тестирование сотрудников</p>
                </div>
                <h2 @click="authPanel = true">Войти</h2> 
            </header>
            <div class="content">
                <h1>Добро пожаловать в сервис для тестирование<br>сотрудников РЖД!</h1>
                <button @click="start()">Вход в систему</button>
            </div>
            <div class="auth" v-if="authPanel == true">
                <h1>Вход в систему</h1>
                <h2>Введите логин</h2>
                <input type="text" v-model="Form.email">
                <h2>Введите пароль</h2>
                <input type="password" v-model="Form.password">
                <p></p>
                <p>*Для получения логина и пароля обратитесь к администрацию вашей организации</p>
                <div class="btns">
                    <button  @click="authPanel = false">Отмена</button>
                    <button @click="checkData()">Войти</button>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'main',
    data() {
        return {
            clientHeight: 800,

            authPanel: false,
            status: '',
            profession: '',

            Form: {
                    email: "",
                    password: ""
                },
        }
    },
    methods: {
        start(){
            if(this.status === 'admin' || this.status === 'user'){
                this.$router.push('/home')
            } else {
                this.authPanel = true
            }

        },

        async checkData() {
            if(this.Form.email && this.Form.password){
                await axios.post('http://127.0.0.1:5000/api/auth', {
                email: this.Form.email,
                password: this.Form.password
                }, {
                headers: {
                    'Content-Type': 'application/json'
                },
                })
                .then(response => {
                    const user = response.data
                    if(user.first_name){
                        this.status = user.user_type
                        this.username = user.first_name +  ' ' + user.last_name
                        this.profession = user.profession

                        sessionStorage.status = this.status
                        sessionStorage.username = this.username
                        sessionStorage.profession = this.profession

                        this.Form.email = ''
                        this.Form.password = ''

                        this.$router.push('/home')
                        this.$router.push({ name: 'home', params: { username: user.username } })
                    } else {
                        this.status = 'error'
                        alert(user.message);
                    }

                })
                .catch(error => console.error(error))

                this.authPanel = false

            } else {
                alert("Заполните необходимые поля!")
            }
                
        },
    },
    mounted() { 
        this.status = sessionStorage.status ? sessionStorage.status : ''
    }
}
</script>

<style lang="scss">
.main {
    background-image: url(../assets/source/rzd.jpg);
    background-repeat: no-repeat;
    background-position: (center, center);
    margin: 0 auto;
    height: 900px;
}
.main:after {
  content: '';
  width: 100%;
  height: 900px;
  position: absolute;
  top: 0; left: 0;
  background: linear-gradient(to bottom, transparent 0%,  rgba(0,0,0,1) 100%);
}
.container{
    width: 80%;
    margin: 0 auto;
    height: 100%;
    z-index: 10;
    position: relative;
}


header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    color: black;
    padding: 20px 0 0;

    border-bottom: 2px solid red;

    h2 {
        margin: 0 0 20px;
        font-size: 20px;
        cursor: pointer;
        color: rgb(255, 255, 255);
    }

    img {
        width: 200px;
    }
    p{
        padding: 0;
        margin: 0 0 10px 0;
        color: rgb(255, 255, 255);
    }
}

.content{
    margin: 200px 0 0;
    color: #fff;

    h1{
        line-height: 40px;
        color: #fff;
    }
    button {
        margin: 150px 0 0;
    }
}

.auth{
    position: fixed;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    padding: 40px 80px 60px;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    box-shadow: 0px 4px 1000px #244050;
    z-index: 100;

    h1 {
        margin: 0px 0 20px;
        color: #000;

    }
    h2 {
        font-size: 20px;
        margin: 20px 0 5px;
        font-weight: 500;
    }
    input {
        width: 250px;
        padding: 10px 10px;
        border-radius: 10px;
        border: 1px solid #457895;
        font-size: 16px;
    }
    button {
        margin: 40px 10px 0;
    }
}

</style>