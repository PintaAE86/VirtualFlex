
import './App.css'
import MainLayout from './components/MainLayout';
import Sidebar from './components/Sidebar';


function App() {


  return (
    <main className='main'>
      <div className='header'>
        <h1 className='header__title'>Title</h1>
      </div>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className='main'>
        < MainLayout />
      </div>
      <div className='main'>
        < MainLayout />
      </div>
    </main>
  )
}

export default App
