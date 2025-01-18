import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Narutoship from './Narutoship'

function App() {
  

  return (
    <main className='bg-black'>
    <Navbar  className='bg-transparent fixed' />
    <Hero />
    <Narutoship />
    </main>
  )
}

export default App
