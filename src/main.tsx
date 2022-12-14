import { createRoot } from 'react-dom/client';
import App from './routes/App';
/* eslint-disable @typescript-eslint/no-non-null-assertion */

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(<App />);
