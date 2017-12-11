import * as React from 'react';
import './Hello.css';

interface Props {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}

export default class Hello extends React.Component<Props, object> {
  render() {
    const { name, enthusiasmLevel = 1, onDecrement, onIncrement } = this.props;

    if (enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(enthusiasmLevel)}
        </div>
        <div>
          <button onClick={onDecrement}>-</button>
          <button onClick={onIncrement}>+</button>
        </div>
      </div>
    );
  }
}
