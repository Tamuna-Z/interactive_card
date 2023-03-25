import "./Form.css";
function Form() {
  return (
    <div className="formContainer">
      <form className="form">
        <div className="inputName">
          <label>Cardholder Name</label>
          <input type="text" placeholder=" e.g Tamar Zurabashvili" required />
        </div>

        <div className="inputNumber">
          <label>Card Number</label>
          <input
            type="number"
            placeholder="e.g. 1234 5678 9123 0000"
            maxLength={19}
            required
          />
        </div>

        <article>
          <div className="inputDate">
            <label>Exp. Date (MM/YY)</label>
            <input className="half" type="month" placeholder="MM/YY" />
          </div>

          <div className="inputDate">
            <label>CVC</label>
            <input className="half" type="number" placeholder=" 123" />
          </div>
        </article>
        <button>Confirm</button>
      </form>
    </div>
  );
}

export default Form;
