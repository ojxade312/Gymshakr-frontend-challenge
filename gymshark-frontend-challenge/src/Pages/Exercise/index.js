import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import API_URL from "../../config";

function Exercise() {
  const location = useLocation();
  const id = location.state;
  console.log(id);
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        ` https://private-922d75-recruitmenttechnicaltest.apiary-mock.com/customexercises/`
      );
      const data = await result.json();

      setExercises(data.exercises[0]);
    };

    fetchData();
  }, []);
  // console.log(exercises.transcript.replace(/<\/?[^>]+>/gi, ""));

  // function Remove() {
  //   const removed = exercises.replace(/<\/?[^>]+>/gi, "");
  //   console.log(removed);
  // }
  return (
    <ul>
      <p>{id}</p>
      <p>{exercises.name}</p>
      <p>{exercises.bodyAreas}</p>
      <p>{exercises.transcript}</p>
    </ul>
  );
}

export default Exercise;
