import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import API_URL from "../../config";

function Exercise() {
  const location = useLocation();
  const id = location.state;
  console.log(id);
  const [exercises, setExercises] = useState([]);
  // const exercise = exercises[0];

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        ` https://private-922d75-recruitmenttechnicaltest.apiary-mock.com/customexercises/`
      );
      const data = await result.json();
      const index = exercises.find((element) => element.id === id);
      console.log(index);

      setExercises(data.exercises[0]);
      // console.log(data.exercises[index]);

      //?? if id ==== data.exercises.id
    };
    fetchData();
  }, []);

  // const findItem = (id) => {
  //   var newItem = exercises.find((x) => x.id === id);
  //   setExercises(newItem);
  // };
  // findItem();

  return (
    <ul>
      <p>{id}</p>
      <p>{exercises.name}</p>
      <p>{exercises.bodyAreas}</p>
      <p>{exercises.transcript}</p>

      {/* {exercises.map((x) => {
        return (
          <option key={x.id} value={x.id}>
            {x.name}
          </option>
        );
      })} */}
    </ul>
  );
}

export default Exercise;
