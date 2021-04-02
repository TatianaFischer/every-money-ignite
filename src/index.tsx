import React from 'react';
import ReactDOM from 'react-dom';
import {createServer, Model} from 'miragejs';
import {App} from './App';

createServer({

  //para conectar as duas rotas (get e post)
  //usar o banco de dados interno do Miragejs
  //schema é o banco de dados
 //aula chapter II - modulo 4 - Inserindo transação na API - rever.

  models: {
    transaction: Model,
  },

seeds(server) {
  server.db.loadData({
    transactions: [ 
      {
        id: 1,
        title: 'Freelancer de website',
        type: 'deposit',
        category: 'Trabalho',
        amount: 6000,
        createdAt: new Date('2021-02-12 09:00:00'),        
      },
      {
        id: 2,
        title: 'Aluguel',
        type: 'withdrawt',
        category: 'Despesa fixa',
        amount: 1100,
        createdAt: new Date('2021-02-01 11:00:00'),        
      },
    ],
  })
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

