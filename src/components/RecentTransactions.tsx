import { IoCalendarClearOutline } from 'react-icons/io5';
import VisaIcon from '../assets/visa.png';
import SpotifyIcon from '../assets/spotify.png';

const filterOptions = ['View All', 'Transfers', 'Cards'];

const RecentTransactions = () => {
  return (
    <section className='my-8'>
      <div className='border border-gray-300 rounded-lg'>
        <div className='flex items-center justify-between px-5 py-3 border-b'>
          <p>Recent Transactions</p>
          <div className='p-2 px-3 border border-gray-300 flex items-center space-x-3 rounded-lg cursor-pointer transition-all hover:shadow-lg'>
            <IoCalendarClearOutline />
            <p className='text-sm'>Select Dates</p>
          </div>
        </div>

        <div className='px-5 py-2 flex border-b'>
          <ul className='border border-gray-300 flex items-center text-sm rounded-lg font-medium'>
            {filterOptions.map((option, i) => (
              <li
                key={option}
                className={`p-2 px-4 cursor-pointer hover:bg-gray-100 transition-all ${
                  i < filterOptions.length ? 'border-l border-gray-300' : ''
                }`}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>

        <div className='grid grid-cols-12 gap-8 py-3 px-4 text-sm border-b font-medium'>
          <div className='col-span-6'>Transaction</div>
          <div className='col-span-1'>Amount</div>
          <div className='col-span-2'>Date</div>
          <div className='col-span-3'>Card</div>
        </div>

        <div className='grid grid-cols-12 gap-8 py-3 px-4 text-sm border-b items-center'>
          <div className='col-span-6 flex items-center space-x-2'>
            <div className='w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full'>
              AC
            </div>
            <p>A Coffee</p>
          </div>
          <div className='col-span-1'>- $18.99</div>
          <div className='col-span-2'>Wed 1:00 PM</div>
          <div className='col-span-3 flex items-center space-x-4'>
            <img src={VisaIcon} alt='visa' className='h-10' />
            <div className=''>
              <p>VISA 1234</p>
              <p className='text-gray-400'>Expiry 06/2024</p>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-12 gap-8 py-3 px-4 text-sm border-b items-center'>
          <div className='col-span-6 flex items-center space-x-2'>
            <div className='w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full'>
              <img src={SpotifyIcon} alt='' />
            </div>
            <p>Spotify</p>
          </div>
          <div className='col-span-1'>- $18.99</div>
          <div className='col-span-2'>Wed 1:00 PM</div>
          <div className='col-span-3 flex items-center space-x-4'>
            <img src={VisaIcon} alt='visa' className='h-10' />
            <div className=''>
              <p>VISA 1234</p>
              <p className='text-gray-400'>Expiry 06/2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentTransactions;
