import { useRef, useState, useEffect } from "react";
import classes from "./style/Form.module.scss";

interface FormData {
    name:string;
    surname:string;
}


export const Form:React.FC = () => {
  const [data, setData] = useState<FormData>({
    name: "",
    surname: "",
  });

  const [collected, setCollected] = useState<FormData>({
    name: "",
    surname: "",
  })

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleInputChange = ( event:React.ChangeEvent<HTMLInputElement> ) => {
    const { name, value } = event.target;
    setData((prevData) => ({
        ...prevData,
        [name]: value,
    }));
  };
  
  const handleSubmit = ( event:React.FormEvent<HTMLFormElement> ) => {
    event.preventDefault();
    setCollected({ ...data });
    setData({
        name: "",
        surname: ""
    })
  };

  const handleReset = () => {
    setData({
        name: "",
        surname: ""
    })
    setCollected({
        name: "",
        surname: ""
    })
  } 


  return (
    <>
      <form className={classes.formComp} onSubmit={handleSubmit}>
        <input name="name" value={data.name} onChange={handleInputChange} type="text" placeholder="First Name" ref={inputRef} />
        <input name="surname" value={data.surname} onChange={handleInputChange} type="text" placeholder="Last Name" />
        <br />
        <br />
        <button type="submit" className={classes.subButton}>Submit</button>
        <button onClick={handleReset} className={classes.subButton}>Reset</button>
      </form>
      <div className={classes.display}>
        <p>First Name: {collected.name}</p>
        <p>Last Name: {collected.surname}</p>
      </div>
    </>
  );
};
