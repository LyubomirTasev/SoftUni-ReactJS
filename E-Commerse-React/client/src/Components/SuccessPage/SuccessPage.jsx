import './SuccessPage.css'

export default function SuccessPage() {
  function generateRandom10DigitNumber() {
    let randomDecimal = Math.random();

    
    let random10DigitNumber =
      Math.floor(randomDecimal * 9000000000) + 1000000000;

    return random10DigitNumber;
  }

  return (
    <div className='wrapper'>
      <h1>Thank You for the order {generateRandom10DigitNumber()}!</h1>
      <p>Please check the confirmation we sent to your email.</p>
    </div>
  );
}
