import authorImg from '../walle-john.jpeg';

const Quote = () => (
  <div className="quoteDiv">
    <img src={authorImg} alt="author" />
    <p>
      Mathematics is much more than computation with pencil and a
      paper and getting answers to routine exercises. In fact, it
      can easily be argued that computation, such as doing long
      division, is not mathematics at all. Calculators can do the
      same thing and calculators can only calculate – they cannot
      do mathematics.
    </p>
    <p>
      - John A. Van de Walle
    </p>
  </div>
);

export default Quote;
