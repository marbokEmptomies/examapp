import routes from '../routes'
import { useRoutes } from 'react-router-dom';

const App: React.FC = () => {
  const content = useRoutes(routes);

  return content;
};

export default App
