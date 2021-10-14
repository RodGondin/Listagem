import {
  DropdownButton,
  Dropdown,
  ButtonGroup,
  FormGroup,
  InputGroup,
  Form,
} from "react-bootstrap";

export default function DropDown() {
  return (
    <Dropdown>
      <DropdownButton
        variant="none"
        id="dropdown-item-button"
        title={<strong id="dots">⋮</strong>}
        size="sm"
      >
        <Dropdown.ItemText id="filters">Linhas por página</Dropdown.ItemText>
        <FormGroup>
          <Form.Check.Input id="checkinput" type="checkbox" checked />
          <Form.Check.Label id="checklabel">Padrão</Form.Check.Label>
          <br />
          <Form.Check.Input id="checkinput" type="checkbox" />
          <Form.Check.Label id="checklabel">50 linhas</Form.Check.Label>
          <br />

          <Dropdown.Divider />

          <Dropdown.ItemText id="filters">Colunas</Dropdown.ItemText>

          <Form.Check.Input id="checkinput" type="checkbox" checked />
          <Form.Check.Label id="checklabel">Nº Cliente</Form.Check.Label>
          <br />
          <Form.Check.Input id="checkinput" type="checkbox" checked />
          <Form.Check.Label id="checklabel">Cliente</Form.Check.Label>
          <br />
          <Form.Check.Input id="checkinput" type="checkbox" checked />
          <Form.Check.Label id="checklabel">Qtd Chargeback</Form.Check.Label>
          <br />
          <Form.Check.Input id="checkinput" type="checkbox" checked />
          <Form.Check.Label id="checklabel">Valor Chargeback</Form.Check.Label>
          <br />
          <Form.Check.Input id="checkinput" type="checkbox" checked />
          <Form.Check.Label id="checklabel">Qtd Vendas</Form.Check.Label>
          <br />
          <Form.Check.Input id="checkinput" type="checkbox" checked />
          <Form.Check.Label id="checklabel">Valor Total</Form.Check.Label>
          <br />
          <Form.Check.Input id="checkinput" type="checkbox" checked />
          <Form.Check.Label id="checklabel">% Chargeback</Form.Check.Label>
          <br />
          <Form.Check.Input id="checkinput" type="checkbox" checked />
          <Form.Check.Label id="checklabel">
            % Total Chargeback
          </Form.Check.Label>
          <br />
          <Form.Check.Input id="checkinput" type="checkbox" checked />
          <Form.Check.Label id="checklabel">Status</Form.Check.Label>
        </FormGroup>
      </DropdownButton>
    </Dropdown>
  );
}
