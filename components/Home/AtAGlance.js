import { useEffect, useState } from 'react';
import Link from 'next/link';
import getAllTransactions from '../../pages/api/getAllTransactions';

const AtAGlance = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const getTransactions = async () => {
      getAllTransactions().then((transactions) => {
        setTransactions(transactions);
      });
    };
    getTransactions();
  }, []);

  const formatSubtotal = (string) => {
    return Number(string.replace(/\$|,/g, ''));
  };

  let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const calculateTotalSpent = () => {
    const total = 0;

    for (let i in transactions) {
      let formattedSubtotal = formatSubtotal(
        transactions[i].fields.subtotal
      );
      total = total + formattedSubtotal;
    }
    return formatter.format(total);
  };
  const dayOne = new Date('3/23/2022');
  const today = new Date();
  const timeDifference = today.getTime() - dayOne.getTime();
  const adventureDays = Math.round(
    timeDifference / (1000 * 3600 * 24)
  );

  const totalCost = calculateTotalSpent();
  const milesSailed = '0.0';
  const completedProjects = '0';

  return (
    <div
      id='at-a-glance'
      className='at-a-glance-area pt-100 pb-70 jarallax'>
      <div className='container'>
        <div className='at-a-glance-max-wide'>
          <div className='section-title white-title'>
            <span>Onnie at a Glance</span>
            <h2>The adventure by the numbers.</h2>
          </div>

          <div className='row'>
            <div className='col-lg-6 col-sm-6'>
              <div className='at-a-glance-single overlay-one'>
                <Link href='/projects'>
                  <a>
                    <div className='overlay-two'>
                      <span className='material-icons task_alt'></span>
                      <h2>{completedProjects}</h2>
                      <h3>Completed Projects</h3>
                    </div>
                  </a>
                </Link>
              </div>
            </div>

            <div className='col-lg-6 col-sm-6'>
              <div className='at-a-glance-single overlay-one'>
                <a>
                  <div className='overlay-two'>
                    <span className='material-icons calendar_month'></span>
                    <h2>{adventureDays}</h2>
                    <h3>Days</h3>
                  </div>
                </a>
              </div>
            </div>

            <div className='col-lg-6 col-sm-6'>
              <div className='at-a-glance-single overlay-one'>
                <Link href='/onnies-costs'>
                  <a>
                    <div className='overlay-two'>
                      <span className='material-icons paid'></span>
                      <h2 className='mobile-adjustment'>
                        {totalCost}
                      </h2>
                      <h3>Total Cost (USD)</h3>
                    </div>
                  </a>
                </Link>
              </div>
            </div>

            <div className='col-lg-6 col-sm-6'>
              <div className='at-a-glance-single overlay-one'>
                <Link href='/sail-log'>
                  <a>
                    <div className='overlay-two'>
                      <span className='material-icons sailing'></span>
                      <h2>{milesSailed}</h2>
                      <h3>Miles Sailed</h3>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtAGlance;
