import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement);

const filterOptions = ['12 months', '30 days', '7 days'];

const Graph = () => {
  const labels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  return (
    <section>
      <div className='flex item-center justify-between'>
        <div className='flex item-center space-x-8 text-sm'>
          <p className='self-center'>Spending over time</p>
          <div className='flex items-center space-x-1 font-medium'>
            <div className='h-2 w-2 rounded-full bg-green-400'></div>
            <p>EFTs</p>
          </div>
          <div className='flex items-center space-x-1 font-medium'>
            <div className='h-2 w-2 rounded-full bg-green-300'></div>
            <p>Card Payments</p>
          </div>
          <div className='flex items-center space-x-1 font-medium'>
            <div className='h-2 w-2 rounded-full bg-green-200'></div>
            <p>Internation Transfers</p>
          </div>
        </div>

        <div className='px-5 py-2 flex'>
          <ul className='border border-gray-300 flex items-center text-sm rounded-lg font-medium'>
            {filterOptions.map((option, i) => (
              <li
                key={option}
                className={`p-2 px-4 cursor-pointer hover:bg-gray-100 transition-all active:bg-gray-200 ${
                  i < filterOptions.length ? 'border-l border-gray-300' : ''
                }`}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className='my-8'>
        <Bar
          width={'100%'}
          height={210}
          options={{
            maintainAspectRatio: false,
            scales: {
              x: {
                grid: {
                  display: false,
                },
              },
              y: {
                grid: {
                  color: '#f3f4f6',
                },
                ticks: {
                  display: false,
                },
              },
            },
          }}
          data={{
            labels,
            datasets: [
              {
                barThickness: 24,
                data: labels.map(() => Math.floor(Math.random() * 10)),
                backgroundColor: '#4ade80',
                stack: 'Stack-0',
              },
              {
                barThickness: 24,
                data: labels.map(() => Math.floor(Math.random() * 10)),
                backgroundColor: '#bbf7d0',
                stack: 'Stack-0',
              },
              {
                barThickness: 24,
                data: labels.map(() => Math.floor(Math.random() * 10)),
                backgroundColor: '#dcfce7',
                stack: 'Stack-0',
              },
            ],
          }}
        />
      </div>
    </section>
  );
};

export default Graph;
