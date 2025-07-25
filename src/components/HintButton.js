import React from 'react';
import Button from 'react-bootstrap/Button';

const HintButton = ({ onHint, disabled }) => {
  return (
    <div className="hint-button text-center my-3">
      <Button variant="warning" onClick={onHint} disabled={disabled}>
        Get a Hint
      </Button>
    </div>
  );
};

export default HintButton;
