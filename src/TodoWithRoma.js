import React from "react";

import styles from "./TodoWithRoma.module.css";

function TodoWithRoma() {
  const [value, setValue] = React.useState("");
  const [inputValue, setIputValue] = React.useState([
    {
      title: "hello my friend",
    },
  ]);

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  const addTodoList = () => {
    if (value.trim() !== "") {
      setIputValue([
        ...inputValue,
        {
          title: value,
          id: Math.random(),
        },
      ]);
      setValue("");
    } else {
      alert("Поляны толтур тип!");
    }
  };

  const onSubmitHandle = (e) => {
    e.preventDefault();
  };
  const onDeleteHandler = (todo) => {
    const deleted = inputValue.filter((item) => item.id !== todo);
    setIputValue(deleted);
  };
  return (
    <form className={styles.container} onSubmit={onSubmitHandle}>
      <input value={value} onChange={changeHandler} type="text" />
      <button onClick={addTodoList}>add</button>
      {inputValue.map((el, index) => {
        return (
          <li key={index} className={styles.lishka}>
            {el.title} <button onClick={() => onDeleteHandler(el.id)}>x</button>
          </li>
        );
      })}
    </form>
  );
}

export default TodoWithRoma;
