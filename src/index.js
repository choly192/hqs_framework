import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';

export const App = () => {
  return (
    <main className="system">
      <h2>测试框架</h2>
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
