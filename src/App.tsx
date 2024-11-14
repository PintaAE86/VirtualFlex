
import './App.css'
import MainLayout from './components/MainLayout';
import Sidebar from './components/Sidebar';


function App() {


  return (
    <main className='main'>
      <div className='main__header'>
        <h1 className='header__title'>Title</h1>
      </div>
      <div className='main__sidebar'>
        <Sidebar />
      </div>
      <div className='main__layout'>
        < MainLayout />
      </div>
    </main>
  )
}

export default App
