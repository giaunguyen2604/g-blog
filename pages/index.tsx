import Loader from '../components/Loader'
import MainContainer from '../containers/MainContainer'
import { AppProvider } from '../contexts/AppContextProvider'

const IndexPage = () => (
  <AppProvider>
    <Loader />
    <MainContainer/>
  </AppProvider>
)

export default IndexPage
