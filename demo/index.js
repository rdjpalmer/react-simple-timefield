import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';

import TimeField from '../';
// import TimeField from '../src';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      time: '12:34',
      timeSeconds: '12:34:56',
      timeSecondsCustomColon: '12-34-56',
      timer: '25:13'
    };

    this.onChangeClock = this.onChangeClock.bind(this);
    this.onChangeTimer = this.onChangeTimer.bind(this);
  }

  onChangeClock(event, value) {
    const newTime = value.replace(/-/g, ':');
    const time = newTime.substr(0, 5);
    const timeSeconds = newTime.padEnd(8, this.state.timeSeconds.substr(5, 3));
    const timeSecondsCustomColon = timeSeconds.replace(/:/g, '-');

    this.setState({time, timeSeconds, timeSecondsCustomColon});
  }

  onChangeTimer(event, value) {
    this.setState({timer: value});
  }

  render() {
    const {time, timeSeconds, timeSecondsCustomColon, timer} = this.state;

    return (
      <section className="container">
        <section>
          <h2>Default input</h2>
          <div>
            <TimeField
              value={time}
              onChange={this.onChangeClock}
              style={{
                border: '2px solid #666',
                fontSize: 42,
                width: 107,
                padding: '5px 8px',
                color: '#333',
                borderRadius: 3
              }}
            />
          </div>
        </section>
        <section>
          <h2>Show seconds</h2>

          <div>
            <TimeField
              showSeconds
              value={timeSeconds}
              onChange={this.onChangeClock}
              style={{
                border: '2px solid #666',
                fontSize: 42,
                width: 167,
                padding: '5px 8px',
                color: '#333',
                borderRadius: 3
              }}
            />
          </div>
        </section>
        <section>
          <h2>Custom colon</h2>
          <div>
            <TimeField
              showSeconds
              colon="-"
              value={timeSecondsCustomColon}
              onChange={this.onChangeClock}
              style={{
                border: '2px solid #666',
                fontSize: 42,
                width: 170,
                padding: '5px 8px',
                color: '#333',
                borderRadius: 3
              }}
            />
          </div>
        </section>
        <section>
          <h2>React Material-UI</h2>
          <div style={{marginRight: 20}}>
            <TimeField
              showSeconds
              value={timeSeconds}
              onChange={this.onChangeClock}
              style={{width: 88}}
              input={<TextField label="Name" value={timeSeconds} variant="outlined" />}
            />
          </div>
        </section>
        <section>
          <h2>Timer input type</h2>
          <p>Allows the time to go above 24 hours</p>
          <div>
            <TimeField
              value={timer}
              onChange={this.onChangeTimer}
              style={{
                border: '2px solid #666',
                fontSize: 42,
                width: 107,
                padding: '5px 8px',
                color: '#333',
                borderRadius: 3
              }}
              inputType="timer"
            />
          </div>
        </section>
      </section>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
