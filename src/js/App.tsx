import React, { ChangeEvent } from 'react';
import Counter from './Counter';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { FormGroup } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';

interface AppState {
  count: number;
  counterWord: string;
  checked: boolean;
}

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 100,
    label: '100',
  },
];

class App extends React.Component<{}, AppState> {
  constructor(props) {
    super(props);

    this.state = { count: 0, counterWord: 'This is THE Counter', checked: false };
  }

  render() {
    const fun = [];

    for (let i = 0; i < this.state.count; i++)
      fun.push(<div className="divStyle2" key={ i }>Counters are fun!!!</div>);

    return (
      <Box boxShadow={ 3 }>
        <div className="App">
          <div className="divStyle">Welcome to my counter!</div>
          <Counter value={ this.state.count }
                   onChange={ this.incrementCounter }
                   counterWord={ this.state.counterWord }
          />
          <div>
            <Button variant="contained" color="secondary" onClick={ this.resetCounter }>Reset</Button>
          </div>

          <FormControlLabel
            control={ <Checkbox checked={ this.state.checked } onChange={ this.handleChange() } value={ 'checked' }
                                color="default"/> }
            label="Lock Counter"
          />

          <div> { fun } </div>

        </div>
      </Box>
    );
  }

  incrementCounter = () => {
    if (!this.state.checked)
      this.setState(state => {
        return { count: state.count + 1 };
      });

  };

  resetCounter = () => {
    if (!this.state.checked)
      this.setState(state => {
        return { count: 0 };
      });
  };

  handleChange = () => (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(state => {
      return { checked: !this.state.checked };
    });
  };
}


export default App;