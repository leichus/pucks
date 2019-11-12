import React from 'react';
import Button from '@material-ui/core/Button';

interface CounterProps {
  value: number;
  onChange: () => void;
  counterWord: string;
}

class Counter extends React.Component<CounterProps> {
  render() {
    return (
      <div>
        <h3>{ this.props.counterWord }</h3>
        <Button variant="contained" color="primary" onClick={ this.props.onChange }>
          { `Click me... ${ this.props.value }` }
        </Button>
      </div>
    );
  }
}

export default Counter;