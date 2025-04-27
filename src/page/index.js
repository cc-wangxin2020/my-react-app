import { useDispatch, useSelector } from "react-redux";
import { incremented, decremented } from "../store/modules/counterStore";
function App() {
  const { count } = useSelector(state => state.counter)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <button onClick={() => dispatch(incremented())}>+</button>
      {count}
      <button onClick={() => dispatch(decremented())}>-</button>

    </div>
  );
}

export default App;