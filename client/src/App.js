import { Provider } from "react-redux";
import "./App.css";
import Tarjetas from "./componentes/Tarjetas";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Tarjetas />
      </div>
    </Provider>
  );
}

export default App;
