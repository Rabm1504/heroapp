import reactRefresh from '@vitejs/plugin-react-refresh';

export default {
  plugins: [reactRefresh()],
  esbuild: {
    jsxFactory: 'React.createElement',
    jsxInject: `import React from 'react'`,
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Agrega la extensión .jsx aquí
  },
};
