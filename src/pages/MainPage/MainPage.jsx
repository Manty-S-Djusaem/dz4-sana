import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { types } from "../../redux/types";
import { changeDecrementFN, changeIncrementFN } from "../../redux/countReducer";
const MainPage = () => {
  const { name, age, gender } = useSelector((state) => state.userReducer.users);
  const { count } = useSelector((state) => state.countReducer);
  console.log(count);
  const dispatch = useDispatch();
  const changeInputName = (e, typeInfo) => {
    if (typeInfo === "name") {
      dispatch({
        type: types.CHANGE_NAME,
        payload: e.target.value,
      });
    } else if (typeInfo === "age") {
      dispatch({
        type: types.CHANGE_AGE,
        payload: e.target.value,
      });
    } else if (typeInfo === "gender") {
      dispatch({
        type: types.CHANGE_GENDER,
        payload: e.target.value,
      });
    }
  };

  const changeIncrement = () => {
    dispatch(changeIncrementFN());
  };
  const changeDecrement = () => {
    dispatch(changeDecrementFN());
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => changeInputName(e, "name")}
        />
        <input
          type="number"
          placeholder="age"
          onChange={(e) => changeInputName(e, "age")}
        />
        <h1>name : {name}</h1>
        <h2>age : {age}</h2>
        <h3>gender : {gender}</h3>
        <select onChange={(e) => changeInputName(e, "gender")}>
          <option>мужской</option>
          <option>женский</option>
        </select>
      </div>
      <div>
        <button onClick={changeDecrement}>-</button>
        <span>{count}</span>
        <button onClick={changeIncrement}>+</button>
      </div>
    </>
  );
};

export default MainPage;
