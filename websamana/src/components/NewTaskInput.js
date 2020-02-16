import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormControl, InputGroup } from 'react-bootstrap';


const NewTaskInput = ({ onSubmit }) => {

  const [newItem, setNewItem] = useState('');

  function setNewTask({target}) {
    setNewItem(target.value);
  }

  function submit(e) {
    e.preventDefault();
    onSubmit(newItem);
  }

  if(setNewTask == 'KIT'){
      const valor = '10,00'
  }

  return (
    <div>
      <form onSubmit={submit}>
      <InputGroup className="mb-3">
            <InputGroup.Prepend>


            </InputGroup.Prepend>
            <FormControl
       placeholder="Digite o nome do produto"
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

export default NewTaskInput;
