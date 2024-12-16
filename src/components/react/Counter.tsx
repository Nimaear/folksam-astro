import { useStore } from "@nanostores/react";
import { counter, increment } from "../../store/counter";

import * as stylex from "@stylexjs/stylex";
import { button, card } from "./counter.stylex";

export const Counter: React.FC = () => {

  const count = useStore(counter);

  return (
    <div {...stylex.props(card.root)}>
      <h2>React</h2>
      <p>Count: {count}</p>
      <button {...stylex.props(button.root)} onClick={increment}>Increment</button>
    </div>
  );
}
