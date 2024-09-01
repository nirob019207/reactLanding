
function Indicator({ number, colorFrom, colorTo, text }) {
    return (
      <div className='flex items-center mb-4 relative'>
        <div
          className={`indicator bg-gradient-to-r from-${colorFrom} to-${colorTo} w-10 h-10 rounded-full flex justify-center items-center border border-white z-10`}
        >
          <span className='text-sm'>{number}</span>
        </div>
        <p className='text-white ml-4'>{text}</p>
      </div>
    );
  }
  
  export default Indicator;
  