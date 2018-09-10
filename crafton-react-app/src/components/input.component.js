import React from 'react';

function InputBar(props) {
  const handleChange = event => props.onChange(event.target.value);

  return(
    <form>
      <input
        placeholder="Type here"
        onChange={handleChange}
      />
    </form>
  )
}

export default InputBar;