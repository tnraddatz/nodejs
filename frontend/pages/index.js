import React from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch';

const Index = props => (
  <div>
    <h1>Welcome to our Next.js website!</h1>
    <p> Which car do you think has the best MPG?</p>
    <ul>
    {props.cars.map(car => (
        <li key={car.brand}>
          <Link href="/cars/[brand]" as={`/cars/${car.brand}`}>
            <a>{car.brand}</a>
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

Index.getInitialProps = async function() {
  const res = await fetch('http://127.0.0.1:8000/cars');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    cars: data
  };
};

export default Index;