import { MantineProvider } from "@mantine/core"
import Footer from "./components/footer"
import Navbar from "./components/nav-bar"
import AppRoutes from "./Routes/app-routes"
import '@mantine/core/styles.css';
function App() {

  return (
    <MantineProvider>
      <Navbar />
      <AppRoutes/>
      <Footer />
    </MantineProvider>

  )
}

export default App
