import {
  IoFilterOutline,
  IoAddSharp,
  IoArrowForwardOutline,
} from 'react-icons/io5';
import CanadaFlag from '../assets/canada.png';

const AccountSummary = () => {
  return (
    <section className='flex justify-between my-8'>
      <div className='space-y-3'>
        <div className='flex items-center space-x-4'>
          <h4 className='text-lg font-bold'>Account Balance</h4>
          <div className='flex items-center space-x-3 text-gray-500 border border-gray-300 rounded-lg p-2 px-3 cursor-pointer transition-all hover:bg-gray-100 active:bg-gray-200'>
            <IoFilterOutline />
            <img
              src={CanadaFlag}
              alt='canada flag'
              className='rounded-full h-4 w-4'
            />
          </div>
        </div>
        <h2 className='text-4xl font-bold'>$107,843.82 CAD</h2>
      </div>
      <div className='flex items-center space-x-4'>
        <button className='border border-gray-300 rounded-lg px-4 py-2 flex items-center space-x-2 transition-all hover:bg-gray-100 active:bg-gray-200'>
          <IoAddSharp />
          <span className='text-sm'>Add Money</span>
        </button>
        <button className='bg-emerald-500 rounded-lg px-4 py-2 flex items-center space-x-2 text-white transition-all hover:bg-emerald-600 active:bg-emerald-700'>
          <IoArrowForwardOutline />
          <span className='text-sm'>Send Money</span>
        </button>
      </div>
    </section>
  );
};

export default AccountSummary;
