import MainNavigator from "./src/config/navigation";
import { Provider } from "react-redux";
import store from "./src/Store";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    </>
  );
}
