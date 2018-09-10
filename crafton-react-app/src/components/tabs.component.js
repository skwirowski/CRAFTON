import React from 'react';

function ShowTabs(props) {

  const handleClick = event => {
    event.preventDefault();
    props.onClick(event.target.value);
  };

  const renderUsersTabs = array => array.map((user, index) => {
    return(
      <button key={index}
          value={user}
          onClick={handleClick}
      >
        {user}
      </button>
    );
  });

  return(
    <div>
      {renderUsersTabs(props.usersList)}
    </div>
  );
}

export default ShowTabs;