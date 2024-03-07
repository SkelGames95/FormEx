import { Form } from "./Form";
import classes from './style/App.module.scss'

export const App = () => {
  return (
    <div className={classes.body}>
    <h1>Sign Up</h1>
     <Form />
    </div>
  );
};
