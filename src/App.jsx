
import './style.css';
import image2 from './assets/1.jpeg';
import Header from './Header';
import Content from './Content';

function App() {
  return (
    <div className='flex justify-center items-center h-[100vh]'>
      <div className='w-[900px] h-[600px] my-background'>
        <Header />
        <div className='px-24 py-8 flex'>
          <Content />
          <div className='flex justify-center items-center'>
            <img
              src={image2}
              className='rounded-top h-[400px] w-[300px] object-cover'
              alt='Service Image'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
