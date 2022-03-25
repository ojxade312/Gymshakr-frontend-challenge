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
        `https://private-922d75-recruitmenttechnicaltest.apiary-mock.com/customexercises/`
      );
      const data = await result.json();
      console.log(id);
      const exercise = data.exercises.find((exercise) => exercise.id === id);
      console.log(exercise);
      setExercises(exercise);
    };

    fetchData();
  }, []);

  // console.log(exercises.replace(/<\/?[^>]+>/gi, ""));  removes HTML tags sometimes.

  return (
    <ul>
      <p>{id}</p>
      <p>{exercises.name}</p>
      <p>{exercises.bodyAreas}</p>
      <p dangerouslySetInnerHTML={{ __html: exercises.transcript }}></p>
    </ul>
  );
}

export default Exercise;
