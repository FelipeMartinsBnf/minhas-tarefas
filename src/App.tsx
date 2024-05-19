import { Provider } from 'react-redux'
import Contatos from './containers/Contatos'
import Title from './containers/Title/'

import EstiloGlobal from './styles'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Title />
      <Contatos />
    </Provider>
  )
}
export default App
