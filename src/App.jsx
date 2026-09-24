import Header from './componentes/header.jsx'
import Sidebar from './componentes/sidebar.jsx'
import Biblioteca from './paginas/Biblioteca.jsx'

function App() {
  return (
    <>
      <Sidebar />

      <div className="main-wrapper">
        <Header />

        <main className="content-area">
          <Biblioteca />
        </main>
      </div>
    </>
  )
}

export default App