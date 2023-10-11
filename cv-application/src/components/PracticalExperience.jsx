export default function PracticalExperience() {
  return (
    <form action="">
      <h1>Practical Experience</h1>
      <div className="">
        <label htmlFor="">Company Name:</label>
        <input type="text" />
      </div>
      <div className="">
        <label htmlFor="">Position Title:</label>
        <input type="text" />
      </div>
      <div className="">
        <label htmlFor="">Main responsibilities:</label>
        <input type="text" />
      </div>
      <div className="">
        <label htmlFor="">Date from:</label>
        <input type="date" />
      </div>
      <div className="">
        <label htmlFor="">Until:</label>
        <input type="date" />
      </div>
      <button>Edit</button>
      <button type="submit">Submit</button>
    </form>
  );
}
