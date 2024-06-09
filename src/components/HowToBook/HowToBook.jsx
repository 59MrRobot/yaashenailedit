import React from 'react';
import './HowToBook.scss';

export const HowToBook = () => {
  return (
    <div className="how-to-book" id="how-to-book">
      <h2>How To Book</h2>

      <div className="how-to-book__container">
        <p>
          Complete the form.
        </p>

        <p>
          A non-refundable deposit of 50% of your total is required to secure booking.  NO DEPOSIT =  NO BOOKING.
        </p>

        <p>
          If some time has gone by, please reconfirm if the requested slot is still available before making your deposit.
        </p>

        <p>
          After paying the deposit, please send proof of payment so we can confirm all necessary details of your appointment.
        </p>

        <p>
          The remaining balance of the set can be paid either in cash or with an immediate EFT payment at the end of your appointment.
        </p>
      </div>
    </div>
  )
}