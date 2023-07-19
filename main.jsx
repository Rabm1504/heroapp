import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './src/components/App.jsx';
import store from './src/redux/store.js';

// Utiliza createRoot en lugar de ReactDOM.render
const root = createRoot(document.getElementById('root'));

// Verifica si ya existe un root
if (root && root._fiberRoot) {
  // Si ya existe un root, actualízalo con el nuevo componente <App>
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
} else {
  // Si no existe un root, crea uno nuevo
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}
