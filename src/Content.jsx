// Content.js
import Indicator from './Indicator';

function Content() {
  return (
    <div className='text-white bg-gradient-to-r from-indigo-500 to-indigo-700 p-4 flex-1 rounded-lg'>
      <div className='relative'>
        <p className='font-semibold text-lg'>For founders and project</p>
        <div className='h-[2px] w-44 mt-2 bg-gradient-to-r from-purple-500 to-pink-500'></div>
      </div>

      <div className='flex flex-col items-start mt-8 relative'>
        <div className='absolute left-5 top-0 h-full border-l-2 from-purple-500 to-pink-500'></div>

        {/* Indicators */}
        <Indicator number='1' colorFrom='purple-500' colorTo='pink-500' text='Fundraising Advisory' />
        <Indicator number='2' colorFrom='green-400' colorTo='blue-500' text='OTC Solution' />
        <Indicator number='3' colorFrom='yellow-400' colorTo='red-500' text='Launchpad CEX, DEX and much more' />
        <Indicator number='4' colorFrom='indigo-500' colorTo='purple-500' text='Free Connection to Marketing Agencies' />
      </div>
    </div>
  );
}

export default Content;
