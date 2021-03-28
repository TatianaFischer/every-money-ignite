
import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles"


export function TransactionsTable() {

//testando com fetch
//   useEffect(() => {
//     fetch('http://localhost:3000/apiTest/transactions')
//       .then(response => response.json())
//       .then(data => console.log(data))
// }, []);

//axios
  useEffect(() => {
    api.get('transactions')
    .then(response => console.log(response.data))
}, []);


  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> Desenvolvimento de website</td>
            <td className="deposit">R$ 12.000</td>
            <td>Trabalho</td>
            <td>11/10/1991</td>
          </tr>
                 <tr>
            <td> Aluguel</td>
            <td className="withdraw">- R$ 1.000</td>
            <td>Casa</td>
            <td>11/10/1991</td>
          </tr>
                 <tr>
            <td> Desenvolvimento de website</td>
            <td>R$ 12.000</td>
            <td>Trabalho</td>
            <td>11/10/1991</td>
          </tr>
                 <tr>
            <td> Desenvolvimento de website</td>
            <td>R$ 12.000</td>
            <td>Trabalho</td>
            <td>11/10/1991</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}

export default TransactionsTable;
