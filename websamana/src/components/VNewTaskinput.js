import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormControl, InputGroup } from 'react-bootstrap';


const VNewTaskinput = ({ onSubmit }) => {

  const [VnewItem, VsetNewItem] = useState('');

  function setNewTask({target}) {
    VsetNewItem(target.value);
  }

  function submit(e) {
    e.preventDefault();
    onSubmit(VnewItem);
  }

  

  return (
    <div>
      <form onSubmit={submit}>
      <InputGroup className="mb-3">
            <InputGroup.Prepend>

      <InputGroup.Text>$</InputGroup.Text>
      

            </InputGroup.Prepend>
            <FormControl
       placeholder=""
      aria-label="Amount (to the nearest dollar)"
      onChange={setNewTask}
    />

        </InputGroup>

        <button type="submit">
          Adicionar
        </button>
      </form>
    </div>
  )
};

export default VNewTaskinput;
