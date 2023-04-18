import "./styles.css";

function App() {
  return (
    <>
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="item ">New Item</label>
          <input type="text" id="item" />
        </div>
        <button className="btn">Add</button>
      </form>
      {/* Header */}
      <h1 className="header">ToDo List</h1>
      {/* Item */}
      <ul className="list">
        <li>
          <label htmlFor="">
            <input type="checkbox" />
            Item 1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
      {/* Item */}
      <ul className="list">
        <li>
          <label htmlFor="">
            <input type="checkbox" />
            Item 2
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
      {/* Item */}
      <ul className="list">
        <li>
          <label htmlFor="">
            <input type="checkbox" />
            Item 3
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>
  );
}

export default App;
