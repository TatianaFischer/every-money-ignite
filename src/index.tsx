import React from 'react';
import ReactDOM from 'react-dom';
import {createServer, Model} from 'miragejs';
import {App} from './App';

createServer({

  //para conectar as duas rotas (get e post)
  //usar o banco de dados interno do Miragejs
  //schema é o banco de dados

  models: {
    transaction: Model,
  },
  routes() {

    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {

      const data =  JSON.parse(request.requestBody)

      return schema.create('transaction', data);
    })
  }
})
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

