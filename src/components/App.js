// create your App component here
import React, { useEffect, useState } from "react";

const url = "https://dog.ceo/api/breeds/image/random";

export default function App() {
  const [image, setImage] = useState(null);

  const getRandomDogImage = () => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setImage(data.message);
      });
  };

  useEffect(() => {
    getRandomDogImage();
  }, []);

  return (
    <div>
      {image ? <img src={image} alt="A Random Dog" /> : <p>Loading...</p>}
    </div>
  );
}
