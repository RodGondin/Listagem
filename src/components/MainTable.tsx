import { Table } from "react-bootstrap";

export default function MainTable() {
  return (
    <Table striped bordered hover borderless>
      <thead>
        <tr style={{ color: "#458097" }}>
          <th style={{ width: 150 }}>Nº CLIENTE</th>
          <th style={{ width: 250 }}>CLIENTE</th>
          <th id="middle" style={{ width: 180 }}>
            QTD. CHARGEBACK
          </th>
          <th>VALOR CHARGEBACK</th>
          <th id="middle">QTD VENDAS</th>
          <th style={{ width: 180 }}>VALOR TOTAL</th>
          <th id="middle">% CHARGEBACK</th>
          <th id="middle">% TOTAL CHARGEBACK</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>0001</td>
          <td>Pedro Antonio</td>
          <td id="middle">1</td>
          <td>R$ 38,92</td>
          <td id="middle">5</td>
          <td>R$32.000</td>
          <td id="middle" style={{ color: "#c73d2bdf" }}>
            ↝ 0.05%
          </td>
          <td id="middle" style={{ color: "#c73d2bdf" }}>
            ↝ 0.03%
          </td>
        </tr>
        <tr>
          <td>0002</td>
          <td>Rogerio Flores</td>
          <td id="middle">1</td>
          <td>R$ 38,92</td>
          <td id="middle">5</td>
          <td>R$1.500</td>
          <td id="middle" style={{ color: "#c73d2bdf" }}>
            ↝ 0.05%
          </td>
          <td id="middle" style={{ color: "#c73d2bdf" }}>
            ↝ 0.03%
          </td>
        </tr>
        <tr>
          <td>0003</td>
          <td>Francisco Coelho</td>
          <td id="middle">1</td>
          <td>R$ 38,92</td>
          <td id="middle">5</td>
          <td>R$1.500</td>
          <td id="middle" style={{ color: "#c73d2bdf" }}>
            ↝ 0.05%
          </td>
          <td id="middle" style={{ color: "#c73d2bdf" }}>
            ↝ 0.03%
          </td>
        </tr>
      </tbody>
    </Table>
  );
}
