import { IoSettingsSharp } from 'react-icons/io5';

const headerMenu = [
  'Dashboard',
  'Transactions',
  'Transfers',
  'Cards',
  'Accounts',
];

const Header = () => {
  return (
    <header className='bg-black p-4 text-white text-sm'>
      <div
        className='flex items-center justify-between mx-auto'
        style={{ maxWidth: 960 }}
      >
        <ul className='flex items-center space-x-5'>
          {headerMenu.map((option) => (
            <li
              key={option}
              className={`px-5 py-1 ${
                option === 'Dashboard'
                  ? 'bg-white bg-opacity-30 font-medium'
                  : ''
              } rounded-full`}
            >
              <a href='/'>{option}</a>
            </li>
          ))}
        </ul>
        <IoSettingsSharp className='text-xl' />
      </div>
    </header>
  );
};

export default Header;
