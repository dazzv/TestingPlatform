from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
from flask_mysql_connector import MySQL

import datetime

# db
app = Flask(__name__)
CORS(app)

app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_DATABASE'] = 'wos_for_testing'
app.config['MYSQL_PASSWORD'] = '02112000'

app.config.from_object(__name__)
# CORS(app, resources={r"/*":{'origins' : "*", "allow_headers": "Access-Control-Allow-Origin"}})

mysql = MySQL(app)
EXAMPLE_SQL = "SELECT * FROM news"


@app.route('/api/auth', methods=['POST'])
def handle_data():
  data = request.get_json() # Получаем тело POST-запроса как словарь в Python
  email = data['email']
  password = data['password']

  conn = mysql.connection
  cur = conn.cursor()

  query = "SELECT * FROM users WHERE login = %s"
  cur.execute(query, (email,))

  row = cur.fetchone()

  if row:
    
    if row[5] == password:
      return jsonify({
        'first_name': row[2],
        'last_name': row[3],
        'user_type': row[1],
        'profession': row[6]
        })
    else:
      return jsonify({'message': 'Пользователь не найден'})
  else:
    return jsonify({'message': 'Пользователь не найден'})


# insert into users (user_type, first_name, last_name, login, password, profession)
# values ('user', 'Сергей', 'Васильев', 'user3@mail.ru', 'user3', 'Электромонтёр')


if __name__ == "__main__": 
    app.run(debug=True)