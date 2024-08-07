import { useForm } from "../Hooks/useForm";

export default function CreateItem() {
  const initialFormValues = {
    name: "",
    price: "",
  };
  const formSubmitHandler = (values) => {
    fetch('http://localhost:3030/jsonstore/create-these/new-items')
  };

  const { values, changeHandler, submitHandler } = useForm(initialFormValues, formSubmitHandler );

  return (
    <>
      <div style={{ textAlign: "center", marginBottom: "2em" }}>
        <h1>Hi, Boss!</h1>
        <h2>Looks like we got work to do</h2>
      </div>

      <section>
        <form
          style={{ width: "200px", margin: "auto" }}
          onSubmit={submitHandler}
        >
          <input
            type="text"
            name="name"
            id="Item's name"
            value={values.name}
            onChange={changeHandler}
            placeholder="Item's name"
          />
          <br />
          <input
            type="text"
            name="price"
            id="Price"
            value={values.price}
            onChange={changeHandler}
            placeholder="price"
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
