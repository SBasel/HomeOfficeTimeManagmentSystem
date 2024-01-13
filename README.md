# HomeOfficeTimeManagmentSystem

## Installationsanweisungen:

- git clone
- cd frontend
- npm install
- cd backend
- npm install

## Verwendete Technologien

### Frontend

- [React](https://vitejs.dev//)
- [React-DOM](https://reactjs.org/docs/react-dom.html)
- [React-Router-DOM](https://reactrouter.com/)
- [Axios](https://axios-http.com/)

### Backend

- [Express](https://expressjs.com/)
- [@emailjs/browser](https://www.emailjs.com/docs/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [cookie-parser](https://www.npmjs.com/package/cookie-parser)
- [cors](https://www.npmjs.com/package/cors)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [express-validator](https://express-validator.github.io/docs/)
- [http-errors](https://www.npmjs.com/package/http-errors)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [mysql2](https://www.npmjs.com/package/mysql2)
- [nodemailer](https://nodemailer.com/about/)

## Konfiguration

### .env

HOST='localhost'
DB_USER='root'
DATABASE='HomeOfficeTimeManagmentSystem'
PORT=3000
JWT_SECRET="dE+ihUgyAvhMQY2tuoS2xfjMpyDC2uHsVckTT0QEpjc="
RECIPIENT_EMAIL: {DEINE_RECIPIENT_EMAIL}
EMAIL_HOST: {DEIN_EMAIL_HOST}
EMAIL_PORT: {DEIN_EMAIL_PORT}
EMAIL: {DEINE_EMAIL}
PASSWORD: {DEIN_PASSWORT}

### MySQL

HomeOfficeTimeManagmentSystem.sql in MySQL importieren.

Die app.use("/add", add); kann man in z.b Postman nutzen um einen
Mitarbeiter zuerstellen.

GET http://localhost:3000/add

{
"vorname": "Max",
"nachname": "Mustermann",
"personalid": "12345",
"password": "Passwort123"
}
