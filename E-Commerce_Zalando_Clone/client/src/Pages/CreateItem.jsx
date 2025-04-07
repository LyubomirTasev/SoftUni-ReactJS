import { useForm } from "../Hooks/useForm";

export default function CreateItem() {
  const initialFormValues = {
    name: "",
    price: "",
    image: "",
    description: ""
  };
  const createHandler = (values) => {
    console.log(values);
    
  };

  const { values, changeHandler, submitHandler } = useForm(initialFormValues, createHandler );

  return (
    <>
      <div style={{ textAlign: "center", marginBottom: "2em" }}>
        <h1>Hi, Boss!</h1>
        <h2>Looks like we got work to do</h2>
      </div>

      <section>
        <form
          style={{ width: "200px", margin: "auto", border: "3px solid #c9c9c9", padding: "2em" }}
          onSubmit={submitHandler}
        >
          <label htmlFor="Item's name">Item's name</label>
          <input
            type="text"
            name="name"
            id="Item's name"
            value={values.name}
            onChange={changeHandler}
          />
          <br />
          <label htmlFor="Price">Price:</label>
          <input
            type="text"
            name="price"
            id="Price"
            value={values.price}
            onChange={changeHandler}
          />
          <br />
          <label htmlFor="Image">Image:</label>
          <input 
          type="text"
          name="image"
          id="image" 
          value={values.image}
          onChange={changeHandler}
          />
          <br />
          <label htmlFor="Description">Description:</label>
          <input style={{width: '200px', height: '50px'}}
          type="text"
          name="description"
          id="description" 
          value={values.description}
          onChange={changeHandler}
          />
          {/* <textarea name="Description" placeholder="Description"></textarea> */}

          <div>
            <button type="submit">Create</button>
          </div>
        </form>
      </section>
    </>
  );
}
