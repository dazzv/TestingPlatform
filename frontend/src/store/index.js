import { createStore } from 'vuex'

let currentTest = window.localStorage.getItem('currentTest')
let currentQuestionIndex = window.localStorage.getItem('currentQuestionIndex')
let userAnswers = window.localStorage.getItem('userAnswers')


export default createStore({
  state: {
    // начальное состояние приложения
    currentTest: currentTest ? JSON.parse(currentTest) : null, // текущий тест, который проходит пользователь
    currentQuestionIndex: currentQuestionIndex ? JSON.parse(currentQuestionIndex) : 0, // индекс текущего вопроса в тесте
    userAnswers: userAnswers ? JSON.parse(userAnswers) : [], // ответы пользователя для текущего теста
    isLastQuestion: false,

    tests: [
        {
            id: 1,
            title: 'Тест на знание правил обслуживания пассажиров на железной дороге',
            profession: 'Оператор',
            questions: [
                {
                    id: 1,
                    text: 'Какую информацию следует сообщить пассажиру при продаже ему билета?',
                    options: [
                        { id: 1, text: 'Только номер вагона и место' },
                        { id: 2, text: 'Номер поезда, маршрут, дату и время отправления, номер вагона, номер места' },
                        { id: 3, text: 'Только дату и время отправления' },
                    ],
                    answerId: 2
                },
                {
                    id: 2,
                    text: 'Что следует сделать оператору при отсутствии в наличии билета, который запросил пассажир?',
                    options: [
                        { id: 1, text: 'Объяснить, что билета нет и попробовать предложить другой билет для того же места' },
                        { id: 2, text: 'Продать билет в другом вагоне' },
                        { id: 3, text: 'Направить пассажира к другому оператору' },
                    ],
                    answerId: 1
                },
                {
                    id: 3,
                    text: 'В каких случаях оператор должен предоставить пассажиру возможность занять место в другом вагоне?',
                    options: [
                        { id: 1, text: 'Когда он потерял билет' },
                        { id: 2, text: 'Когда место, которое было забронировано, оказалось занятым' },
                        { id: 3, text: 'Когда пассажир заплатил больше, чем стоимость билета на класс выше' },
                    ],
                    answerId: 2
                },
                {
                    id: 4,
                    text: 'Какие документы необходимо предъявить при продаже билета?',
                    options: [
                        { id: 1, text: 'Паспорт' },
                        { id: 2, text: 'Водительское удостоверение' },
                        { id: 3, text: 'Свидетельство о рождении' },
                    ],
                    answerId: 1
                },
            ]
        },
        {
            id: 2,
            title: 'Тест на знание железнодорожной техники',
            profession: 'Оператор',
            questions: [
                {
                    id: 1,
                    text: 'Какой тип локомотива используется на больших скоростях?',
                    options: [
                        { id: 1, text: 'Электровоз' },
                        { id: 2, text: 'Дизель-электровоз' },
                        { id: 3, text: 'Паровоз' },
                    ],
                    answerId: 1
                },
                {
                    id: 2,
                    text: 'Что такое грузовой вагон типа "платформа"?',
                    options: [
                        { id: 1, text: 'Вагон для перевозки грузов на поддонах' },
                        { id: 2, text: 'Вагон для перевозки животных' },
                        { id: 3, text: 'Вагон для перевозки сжиженных газов' },
                    ],
                    answerId: 1
                },
                {
                    id: 3,
                    text: 'Как называется устройство, которое используется для сцепления вагонов в поезде?',
                    options: [
                        { id: 1, text: 'Штатив' },
                        { id: 2, text: 'Кузов' },
                        { id: 3, text: 'Сцепка' },
                    ],
                    answerId: 3
                },
                {
                    id: 4,
                    text: 'Что такое тормозной кран на локомотиве?',
                    options: [
                        { id: 1, text: 'Устройство для управления скоростью поезда' },
                        { id: 2, text: 'Устройство для остановки поезда' },
                        { id: 3, text: 'Устройство для сцепки вагонов' },
                    ],
                    answerId: 2
                },
                {
                    id: 5,
                    text: 'Как называется специальный вагон, который используется для перевозки жидкостей?',
                    options: [
                        { id: 1, text: 'Цистерна' },
                        { id: 2, text: 'Платформа' },
                        { id: 3, text: 'Хоппер' },
                    ],
                    answerId: 1
                },
            ]
        },
        {
            id: 3,
            title: 'Тест на знание правил безопасности на железной дороге',
            profession: 'Оператор',
            questions: [
                {
                    id: 1,
                    text: 'Какие предметы запрещено перевозить в пассажирском поезде?',
                    options: [
                        { id: 1, text: 'Огнестрельное оружие' },
                        { id: 2, text: 'Алкогольные напитки' },
                        { id: 3, text: 'Все вышеперечисленное' },
                    ],
                    answerId: 3
                },
                {
                    id: 2,
                    text: 'Что нужно сделать, если ты заметил человека, находящегося на железнодорожных путях?',
                    options: [
                        { id: 1, text: 'Подать сигнал тревоги и попросить помощи' },
                        { id: 2, text: 'Попытаться убедить человека уйти с путей' },
                        { id: 3, text: 'Сообщить об этом диспетчеру и следовать инструкциям' },
                    ],
                    answerId: 3
                },
                {
                    id: 3,
                    text: 'Какие действия нужно предпринять при приближении поезда к переезду?',
                    options: [
                        { id: 1, text: 'Ускорить скорость и пересечь переезд как можно быстрее' },
                        { id: 2, text: 'Остановиться на безопасном расстоянии от переезда и дождаться проезда поезда' },
                        { id: 3, text: 'Проехать переезд на красный сигнал светофора' },
                    ],
                    answerId: 2
                },
                {
                    id: 4,
                    text: 'Какие меры безопасности нужно соблюдать при работе на железнодорожном перегоне?',
                    options: [
                        { id: 1, text: 'Носить светоотражающие жилеты' },
                        { id: 2, text: 'Соблюдать правила работы в бригаде' },
                        { id: 3, text: 'Все вышеперечисленное' },
                    ],
                    answerId: 3
                },
                {
                    id: 5,
                    text: 'Что нужно делать, если ты стал свидетелем аварии на железной дороге?',
                    options: [
                        { id: 1, text: 'Подойти к месту аварии и оказать помощь пострадавшим' },
                        { id: 2, text: 'Сообщить об этом диспетчеру и следовать инструкциям' },
                        { id: 3, text: 'Ничего не делать и продолжить свой рабочий процесс' },
                    ],
                    answerId: 2
                },
            ]
        },
        {
            id: 4,
            title: 'Тест на знание правил безопасности для машинистов тепловозов',
            profession: 'Машинист',
            questions: [
                {
                    id: 1,
                    text: 'Что нужно сделать перед началом движения тепловоза?',
                    options: [
                        { id: 1, text: 'Проверить тормоза и световую сигнализацию' },
                        { id: 2, text: 'Проверить работу двигателя и системы охлаждения' },
                        { id: 3, text: 'Проверить наличие груза в вагонах' },
                    ],
                    answerId: 1
                },
                {
                    id: 2,
                    text: 'Какие действия нужно предпринять при приближении к переезду?',
                    options: [
                        { id: 1, text: 'Ускорить скорость и пересечь переезд как можно быстрее' },
                        { id: 2, text: 'Остановиться на безопасном расстоянии от переезда и дождаться проезда поезда' },
                        { id: 3, text: 'Проехать переезд на красный сигнал светофора' },
                    ],
                    answerId: 2
                },
                {
                    id: 3,
                    text: 'Какие меры безопасности нужно соблюдать при работе на железнодорожном перегоне?',
                    options: [
                        { id: 1, text: 'Носить светоотражающие жилеты' },
                        { id: 2, text: 'Соблюдать правила работы в бригаде' },
                        { id: 3, text: 'Все вышеперечисленное' },
                    ],
                    answerId: 3
                },
                {
                    id: 4,
                    text: 'Какие действия нужно предпринять при обнаружении неисправности на тепловозе во время движения?',
                    options: [
                        { id: 1, text: 'Продолжать движение до ближайшей станции и сообщить о неисправности' },
                        { id: 2, text: 'Остановить тепловоз и произвести ремонт на месте' },
                        { id: 3, text: 'Продолжать движение, игнорируя неисправность' },
                    ],
                    answerId: 1
                },
                {
                    id: 5,
                    text: 'Какие меры безопасности нужно соблюдать при маневрировании тепловозом на станции?',
                    options: [
                        { id: 1, text: 'Соблюдать правила движения по перегонам' },
                        { id: 2, text: 'Использовать световую и звуковую сигнализацию' },
                        { id: 3, text: 'Все вышеперечисленное' },
                    ],
                    answerId: 2
                },
            ]
        },
        {
            id: 5,
            title: 'Тест на знание профессии "Электромонтёр железной дороги"',
            profession: 'Электромонтёр',
            questions: [
                {
                    id: 1,
                    text: 'Что такое ток?',
                    options: [
                        { id: 1, text: 'Единица измерения напряжения' },
                        { id: 2, text: 'Единица измерения силы электрического тока' },
                        { id: 3, text: 'Единица измерения сопротивления' },
                    ],
                    answerId: 2
                },
                {
                    id: 2,
                    text: 'Для чего нужна изоляционная обувь при работе с электричеством?',
                    options: [
                        { id: 1, text: 'Для защиты от обморожения' },
                        { id: 2, text: 'Для защиты от скачков напряжения' },
                        { id: 3, text: 'Для защиты от поражения электрическим током' },
                    ],
                    answerId: 3
                },
                {
                    id: 3,
                    text: 'Какой инструмент используется для измерения напряжения?',
                    options: [
                        { id: 1, text: 'Линейка' },
                        { id: 2, text: 'Тензометр' },
                        { id: 3, text: 'Вольтметр' },
                    ],
                    answerId: 3
                },
                {
                    id: 4,
                    text: 'Что такое заземление?',
                    options: [
                        { id: 1, text: 'Подключение к источнику основного напряжения' },
                        { id: 2, text: 'Удаление электрического потенциала на землю' },
                        { id: 3, text: 'Добавление электрического потенциала на землю' },
                    ],
                    answerId: 2
                },
                {
                    id: 5,
                    text: 'Каким образом можно найти место обрыва провода?',
                    options: [
                        { id: 1, text: 'Необходимо заменить весь провод' },
                        { id: 2, text: 'Провести визуальный осмотр' },
                        { id: 3, text: 'Использовать прибор для поиска обрывов проводов' },
                    ],
                    answerId: 3
                }
            ]
        },
        {
            id: 6,
            title: 'Тест на знание правил технического обслуживания тепловоза',
            profession: 'Машинист',
            questions: [
                {
                    id: 1,
                    text: 'Как часто нужно проводить технический осмотр тепловоза?',
                    options: [
                        { id: 1, text: 'Ежедневно перед началом работы' },
                        { id: 2, text: 'Раз в неделю' },
                        { id: 3, text: 'Раз в месяц' },
                    ],
                    answerId: 1
                },
                {
                    id: 2,
                    text: 'Какие действия нужно предпринять при обнаружении неисправности во время технического осмотра?',
                    options: [
                        { id: 1, text: 'Продолжить работу и произвести ремонт на следующем осмотре' },
                        { id: 2, text: 'Сообщить ответственному за техническое обслуживание и произвести ремонт' },
                        { id: 3, text: 'Игнорировать неисправность' },
                    ],
                    answerId: 2
                },
                {
                    id: 3,
                    text: 'Какие меры безопасности нужно соблюдать при проведении работ на двигателе тепловоза?',
                    options: [
                        { id: 1, text: 'Выключить двигатель и отключить электропитание' },
                        { id: 2, text: 'Носить защитную одежду и средства индивидуальной защиты' },
                        { id: 3, text: 'Все вышеперечисленное' },
                    ],
                    answerId: 3
                },
                {
                    id: 4,
                    text: 'Какие меры безопасности нужно соблюдать при заправке топлива на тепловозе?',
                    options: [
                        { id: 1, text: 'Выполнять заправку только на специально оборудованных площадках' },
                        { id: 2, text: 'Не курить и не использовать открытый огонь вблизи топливных баков' },
                        { id: 3, text: 'Все вышеперечисленное' },
                    ],
                    answerId: 3
                },
            ]
        },
        {
            id: 7,
            title: 'Тест на знание правил эксплуатации тепловоза',
            profession: 'Машинист',
            questions: [
                {
                    id: 1,
                    text: 'Какая максимальная скорость разрешена для движения тепловоза на главных путях?',
                    options: [
                        { id: 1, text: '60 км/ч' },
                        { id: 2, text: '80 км/ч' },
                        { id: 3, text: '120 км/ч' },
                    ],
                    answerId: 2
                },
                {
                    id: 2,
                    text: 'Какие действия нужно предпринять при обнаружении неисправности во время эксплуатации тепловоза?',
                    options: [
                        { id: 1, text: 'Продолжить работу и произвести ремонт на следующей станции' },
                        { id: 2, text: 'Сообщить диспетчеру и произвести ремонт' },
                        { id: 3, text: 'Игнорировать неисправность' },
                    ],
                    answerId: 2
                },
                {
                    id: 3,
                    text: 'Какие меры безопасности нужно соблюдать при движении тепловоза по железной дороге?',
                    options: [
                        { id: 1, text: 'Соблюдать скоростной режим и правила дистанции' },
                        { id: 2, text: 'Следить за сигналами светофоров и знаками' },
                        { id: 3, text: 'Все вышеперечисленное' },
                    ],
                    answerId: 3
                },
                {
                    id: 4,
                    text: 'Какие меры безопасности нужно соблюдать при пересечении железнодорожных путей на транспортном средстве?',
                    options: [
                        { id: 1, text: 'Продолжать движение, если нет приближающихся поездов' },
                        { id: 2, text: 'Остановиться на безопасном расстоянии от железнодорожного переезда и убедиться в отсутствии поездов' },
                        { id: 3, text: 'Пересекать пути только на зеленый сигнал светофора' },
                    ],
                    answerId: 2
                },
            ]
        },
        {
            id: 8,
            title: 'Тест на знание профессии "Электромонтёр железной дороги" (часть 2)',
            profession: 'Электромонтёр',
            questions: [
                {
                    id: 1,
                    text: 'Какой вид энергии используется для питания железнодорожного транспорта?',
                    options: [
                        { id: 1, text: 'Тепловая' },
                        { id: 2, text: 'Ядерная' },
                        { id: 3, text: 'Электрическая' },
                    ],
                    answerId: 3
                },
                {
                    id: 2,
                    text: 'Что такое троллейбус?',
                    options: [
                        { id: 1, text: 'Автобус на дизельном топливе' },
                        { id: 2, text: 'Автобус на газу' },
                        { id: 3, text: 'Электрический автобус с подающей линией' },
                    ],
                    answerId: 3
                },
                {
                    id: 3,
                    text: 'Что такое высоковольтный распределительный щит?',
                    options: [
                        { id: 1, text: 'Конструкция для размещения электрооборудования' },
                        { id: 2, text: 'Конструкция для защиты от электромагнитных помех' },
                        { id: 3, text: 'Конструкция для распределения напряжения выше 1000 В' },
                    ],
                    answerId: 3
                },
                {
                    id: 4,
                    text: 'Какое оборудование используется для подъема локомотивов?',
                    options: [
                        { id: 1, text: 'Специальные краны' },
                        { id: 2, text: 'Лебедки' },
                        { id: 3, text: 'Хвостовые устройства' },
                    ],
                    answerId: 3
                }
            ]
        },
        {
            id: 9,
            title: 'Тест на знание профессии "Электромонтёр железной дороги" (часть 3)',
            profession: 'Электромонтёр',
            questions: [
                {
                    id: 1,
                    text: 'Что такое контактная сеть?',
                    options: [
                        { id: 1, text: 'Сеть электрооборудования, управляющая работой локомотивов' },
                        { id: 2, text: 'Сеть, которая обеспечивает передачу электрического тока для движения поездов' },
                        { id: 3, text: 'Сеть видеонаблюдения, контролирующая работу персонала' },
                    ],
                    answerId: 2
                },
                {
                    id: 2,
                    text: 'Что такое электрокомплект?',
                    options: [
                        { id: 1, text: 'Сборка электрооборудования' },
                        { id: 2, text: 'Конструкции для взрывоопасных зон' },
                        { id: 3, text: 'Спецтехника для монтажа контактной сети' },
                    ],
                    answerId: 1
                },
                {
                    id: 3,
                    text: 'Как называется механизм, который отвечает за передвижение поездов на определенном расстоянии между ними?',
                    options: [
                        { id: 1, text: 'Сигнализация' },
                        { id: 2, text: 'Автоматика' },
                        { id: 3, text: 'Дистанционное управление' },
                        { id: 4, text: 'Блокировка путей' },
                    ],
                    answerId: 4
                },
                {
                    id: 4,
                    text: 'Какой вид оборудования используется для управления светофорами на станциях?',
                    options: [
                        { id: 1, text: 'Контроллеры' },
                        { id: 2, text: 'Автоматические выключатели' },
                        { id: 3, text: 'Реле времени' },
                    ],
                    answerId: 1
                }
            ]
        }
      // другие тесты
  ],


  },
  mutations: {
    setCurrentTest(state, id) {
        state.currentTest = state.tests.find(test => test.id === id)
        window.localStorage.setItem('currentTest', JSON.stringify(state.currentTest))

        state.currentQuestionIndex = 0
        window.localStorage.setItem('currentQuestionIndex', JSON.stringify(state.currentQuestionIndex))

        state.userAnswers = []
        state.isLastQuestion = false
        window.localStorage.setItem('userAnswers', JSON.stringify(state.userAnswers))

    },


    setAnswer(state, { questionId, answerId }) {
        const userAnswerIndex = state.userAnswers.findIndex(answer => answer.questionId === questionId)
        if (userAnswerIndex === -1) {
            state.userAnswers.push({ questionId, answerId })
        } else {
            state.userAnswers[userAnswerIndex].answerId = answerId
        }

        if(state.currentTest.questions.length == questionId){
          state.isLastQuestion = true
        }

    },
    nextQuestion(state) {
        state.currentQuestionIndex++
    },

  },
  actions: {
    startTest({ commit }, id) {
        commit('setCurrentTest', id)
    },

    setCompletedTest({commit}){
        
    }
  },
  getters: {
  }
})
 
  

