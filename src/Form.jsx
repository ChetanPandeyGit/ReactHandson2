import { useState } from "react";

function Form() {

  const [data, setData] = useState({ fullName: '', dept: '', rating: '' });

  const [record, setRecord] = useState([]);

  function handleOnChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = { ...data, id: new Date().getTime().toString() }
    setRecord([...record, newRecord])
    setData({ fullName: '', dept: '',  rating: ''})
  }

  return (
    <>
      <form onSubmit={handleSubmit}>

        <label htmlFor="full-name">Name : </label>
        <input type="text" id="full-name" placeholder="Type name here.." autoComplete="off" value={data.fullName} name="fullName"  onChange={handleOnChange} />
        <br />
        <label htmlFor="dept">Department : </label>
        <input type="text" id="dept" placeholder="Type department here.." autoComplete="off" value={data.dept} name="dept" onChange={handleOnChange} />
        <br />
        <label htmlFor="rating">Rating : </label>
        <input type="number" id="rating" placeholder="Type rating here.." autoComplete="off" value={data.rating} name="rating" onChange={handleOnChange} />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <div id='output'>
        {
          record.map((item) => {
            const { id, fullName, dept, rating } = item;
            return (
              <div className="record-display" key={id}>
                <p>Name : { fullName }  |  Department : { dept }  |  Rating : { rating }</p>
                <p></p>
                <p></p>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Form