import { DropdownButton, Dropdown } from "react-bootstrap";

export default function DropDown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="none" id="dropdown-basic">
        <strong className="dots">⋮</strong>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
