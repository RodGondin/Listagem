import { Table } from "react-bootstrap";
import DropDown from "./DropDown";

import { useState, useEffect } from "react";

export interface Cliente {
  id: string;
  fullName: string;
  qtdChargeback: number;
  valueChargeback: number;
  salesAmount: number;
  totalValue: number;
  chargebackPercentage: number;
  chargebackTotal: number;
}

export enum LinesPerPage {
  DEFAULT = 5,
  MAX = 50,
}

export default function MainTable() {
  const [clientNumberFilter, setClientNumberFilter] = useState<boolean>(true);
  const [clientFilter, setClientFilter] = useState<boolean>(true);
  const [qtdChargebackFilter, setQtdChargebackFilter] = useState<boolean>(true);
  const [valorChargebackFilter, setValorChargebackFilter] =
    useState<boolean>(true);
  const [qtdVendasFilter, setQtdVendasFilter] = useState<boolean>(true);
  const [valorTotalFilter, setValorTotalFilter] = useState<boolean>(true);
  const [chargebackFilter, setChargebackFilter] = useState<boolean>(true);
  const [totalChargebackFilter, setTotalChargebackFilter] =
    useState<boolean>(true);
  const [linesPerPage, setLinesPerPage] = useState<LinesPerPage>(
    LinesPerPage.DEFAULT
  );

  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(() => {
    const list: Cliente[] = [];
    for (let i = 0; i < 50; i++) {
      list.push(
        {
          id: "0001",
          fullName: "Pedro Antônio",
          qtdChargeback: 1,
          valueChargeback: 38.92,
          salesAmount: 72,
          totalValue: 32000,
          chargebackPercentage: 0.05,
          chargebackTotal: 0.03,
        },
        {
          id: "0002",
          fullName: "Antônio Carlos",
          qtdChargeback: 1,
          valueChargeback: 38.92,
          salesAmount: 17,
          totalValue: 17000,
          chargebackPercentage: 0.05,
          chargebackTotal: 0.03,
        },
        {
          id: "0003",
          fullName: "Carlos Pedro",
          qtdChargeback: 1,
          valueChargeback: 38.92,
          salesAmount: 8,
          totalValue: 5000,
          chargebackPercentage: 0.05,
          chargebackTotal: 0.03,
        }
      );
    }
    setClientes(list);
  }, []);

  return (
    <Table striped bordered hover borderless>
      <thead>
        <tr style={{ color: "#458097" }}>
          {clientNumberFilter ? (
            <th style={{ width: 150 }}>Nº CLIENTE</th>
          ) : null}

          {clientFilter ? <th style={{ width: 250 }}>CLIENTE</th> : null}

          {qtdChargebackFilter ? (
            <th id="middle" style={{ width: 180 }}>
              QTD. CHARGEBACK
            </th>
          ) : null}

          {valorChargebackFilter ? <th>VALOR CHARGEBACK</th> : null}

          {qtdVendasFilter ? <th id="middle">QTD VENDAS</th> : null}

          {valorTotalFilter ? (
            <th style={{ width: 180 }}>VALOR TOTAL</th>
          ) : null}

          {chargebackFilter ? <th id="middle">% CHARGEBACK</th> : null}

          {totalChargebackFilter ? (
            <th id="middle">% TOTAL CHARGEBACK</th>
          ) : null}

          <th id="end">
            <DropDown
              setClientNumberFilter={setClientNumberFilter}
              clientNumberFilter={clientNumberFilter}
              clientFilter={clientFilter}
              setClientFilter={setClientFilter}
              qtdChargebackFilter={qtdChargebackFilter}
              setQtdChargebackFilter={setQtdChargebackFilter}
              valorChargebackFilter={valorChargebackFilter}
              setValorChargebackFilter={setValorChargebackFilter}
              qtdVendasFilter={qtdVendasFilter}
              setQtdVendasFilter={setQtdVendasFilter}
              valorTotalFilter={valorTotalFilter}
              setValorTotalFilter={setValorTotalFilter}
              chargebackFilter={chargebackFilter}
              setChargebackFilter={setChargebackFilter}
              totalChargebackFilter={totalChargebackFilter}
              setTotalChargebackFilter={setTotalChargebackFilter}
              setLinesPerPage={setLinesPerPage}
              linesPerPage={linesPerPage}
            />
          </th>
        </tr>
      </thead>
      <tbody>
        {clientes.slice(0, linesPerPage).map((cliente, index) => {
          return (
            <tr key={index}>
              {clientNumberFilter ? <td>{cliente.id}</td> : null}
              {clientFilter ? <td>{cliente.fullName}</td> : null}
              {qtdChargebackFilter ? (
                <td id="middle">{cliente.qtdChargeback}</td>
              ) : null}
              {valorChargebackFilter ? (
                <td>R$ {cliente.valueChargeback}</td>
              ) : null}
              {qtdVendasFilter ? (
                <td id="middle">{cliente.salesAmount}</td>
              ) : null}
              {valorTotalFilter ? <td>R$ {cliente.totalValue}</td> : null}
              {chargebackFilter ? (
                <td id="middle" style={{ color: "#c73d2bdf" }}>
                  ↝ {cliente.chargebackPercentage}%
                </td>
              ) : null}
              {totalChargebackFilter ? (
                <td id="middle" style={{ color: "#c73d2bdf" }}>
                  ↝ {cliente.chargebackTotal}%
                </td>
              ) : null}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
