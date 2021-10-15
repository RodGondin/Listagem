import { DropdownButton, Dropdown, FormGroup, Form } from "react-bootstrap";
import { LinesPerPage } from "./MainTable";

export default function DropDown({
  clientFilter,
  setClientFilter,
  clientNumberFilter,
  setClientNumberFilter,
  qtdChargebackFilter,
  setQtdChargebackFilter,
  valorChargebackFilter,
  setValorChargebackFilter,
  qtdVendasFilter,
  setQtdVendasFilter,
  valorTotalFilter,
  setValorTotalFilter,
  chargebackFilter,
  setChargebackFilter,
  totalChargebackFilter,
  setTotalChargebackFilter,
  setLinesPerPage,
  linesPerPage,
}) {
  return (
    <Dropdown>
      <DropdownButton
        variant="none"
        id="dropdown-item-button"
        title={<strong id="dots">⋮</strong>}
        size="sm"
        data-cy="menu"
      >
        <Dropdown.ItemText id="filters">Linhas por página</Dropdown.ItemText>
        <FormGroup>
          <Form.Check.Input
            id="checkinput"
            type="checkbox"
            name="row"
            value="padrão"
            onChange={() => {
              setLinesPerPage(LinesPerPage.DEFAULT);
            }}
            checked={linesPerPage === LinesPerPage.DEFAULT}
          />
          <Form.Check.Label id="checklabel">Padrão</Form.Check.Label>
          <br />
          <Form.Check.Input
            id="checkinput"
            type="checkbox"
            name="row"
            value="50linhas"
            onChange={() => {
              setLinesPerPage(LinesPerPage.MAX);
            }}
            checked={linesPerPage === LinesPerPage.MAX}
          />
          <Form.Check.Label id="checklabel">50 linhas</Form.Check.Label>
          <br />

          <Dropdown.Divider />
          <Dropdown.ItemText id="filters">Colunas</Dropdown.ItemText>

          <Form.Check.Input
            id="checkinput"
            type="checkbox"
            name="column"
            onChange={() => setClientNumberFilter(!clientNumberFilter)}
            checked={clientNumberFilter}
          />
          <Form.Check.Label id="checklabel">Nº Cliente</Form.Check.Label>
          <br />

          <Form.Check.Input
            id="checkinput"
            type="checkbox"
            name="column"
            onChange={() => setClientFilter(!clientFilter)}
            checked={clientFilter}
            data-cy="checkbox-client"
          />
          <Form.Check.Label id="checklabel">Cliente</Form.Check.Label>
          <br />

          <Form.Check.Input
            id="checkinput"
            type="checkbox"
            name="column"
            onChange={() => setQtdChargebackFilter(!qtdChargebackFilter)}
            checked={qtdChargebackFilter}
            data-cy="checkbox-qtdchargeback"
          />
          <Form.Check.Label id="checklabel">Qtd Chargeback</Form.Check.Label>
          <br />

          <Form.Check.Input
            id="checkinput"
            type="checkbox"
            name="column"
            onChange={() => setValorChargebackFilter(!valorChargebackFilter)}
            checked={valorChargebackFilter}
            data-cy="checkbox-valorchargeback"
          />
          <Form.Check.Label id="checklabel">Valor Chargeback</Form.Check.Label>
          <br />

          <Form.Check.Input
            id="checkinput"
            type="checkbox"
            name="column"
            onChange={() => setQtdVendasFilter(!qtdVendasFilter)}
            checked={qtdVendasFilter}
          />
          <Form.Check.Label id="checklabel">Qtd Vendas</Form.Check.Label>
          <br />

          <Form.Check.Input
            id="checkinput"
            type="checkbox"
            name="column"
            onChange={() => setValorTotalFilter(!valorTotalFilter)}
            checked={valorTotalFilter}
          />
          <Form.Check.Label id="checklabel">Valor Total</Form.Check.Label>
          <br />

          <Form.Check.Input
            id="checkinput"
            type="checkbox"
            name="column"
            onChange={() => setChargebackFilter(!chargebackFilter)}
            checked={chargebackFilter}
          />
          <Form.Check.Label id="checklabel">% Chargeback</Form.Check.Label>
          <br />

          <Form.Check.Input
            id="checkinput"
            type="checkbox"
            name="column"
            onChange={() => setTotalChargebackFilter(!totalChargebackFilter)}
            checked={totalChargebackFilter}
          />
          <Form.Check.Label id="checklabel">
            % Total Chargeback
          </Form.Check.Label>
          <br />
        </FormGroup>
      </DropdownButton>
    </Dropdown>
  );
}
