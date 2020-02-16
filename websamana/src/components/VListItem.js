import React from 'react';

const VListItem = ({ onChange, onDelete, value }) => {
  return (
    <div className="col-sm-6 form-group">
      <input
        className="Item-field"
        value={value}
        onChange={onChange}
      />
      <button onClick={onDelete}>Excluir</button>
    </div>
  );
};

export default VListItem;
