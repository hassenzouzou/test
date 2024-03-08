import Rect, {useState} from 'react';

function MyComponent() {
  
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState();

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  return(
    <div className='container'>
      <input className='input' value={name} onChange={handleNameChange} />
      <p className='output'>Name: {name}</p>

      <input className='quantity-input' value={quantity} onChange={handleQuantityChange} type='number' />
      <p className='quantity'>Quantity: {quantity}</p>
    </div>
  );
}
export default MyComponent