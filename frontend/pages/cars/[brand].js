
import fetch from 'isomorphic-unfetch';

const Cars = props => ( 
    <div>
      <h1>{props.brand}</h1>
      <p>The {props.brand} gets {props.mpg} miles per gallon!</p>
    </div>
)

Cars.getInitialProps = async ({query}) => {
    var brand = query.brand
    console.log(brand)
    var st = 'http://127.0.0.1:8000/cars?brand=' + brand
    console.log(st)
    const res = await fetch(st);
    const data = await res.json();
    console.log(data)
    return {
        mpg: data.mpg, 
        brand: brand
    }
}
  
  export default Cars