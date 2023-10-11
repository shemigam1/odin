export default function GeneralInfo({ handleName }) {
  return (
    <form action="">
      <h1>General Information</h1>
      <div className="">
        <label htmlFor="">Name:</label>
        <input type="text" onChange={handleName} />
      </div>
      <div className="">
        <label htmlFor="">Email:</label>
        <input type="email" />
      </div>
      <div className="">
        <label htmlFor="">Phone No:</label>
        <input type="text" />
      </div>
      <button>Edit</button>
      <button type="submit">Submit</button>
    </form>
  );
}
