import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Modal } from '../.';

const App = () => {
  return (
    <div>
      <Modal isOpen onClose={() => {}}>
        <p>hello!</p>
      </Modal>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
