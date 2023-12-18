import './SuccessPage.css'

export default function SuccessPage() {
  function generateRandom10DigitNumber() {
    // Generate a random decimal between 0 (inclusive) and 1 (exclusive)
    let randomDecimal = Math.random();

    // Scale the random decimal to a 10-digit integer
    let random10DigitNumber =
      Math.floor(randomDecimal * 9000000000) + 1000000000;

    return random10DigitNumber;
  }

  return (
    <>
      <h1>Thank You for the order {generateRandom10DigitNumber()}!</h1>
      <p>Please check the confirmation we sent to your email.</p>
    </>
  );
}
