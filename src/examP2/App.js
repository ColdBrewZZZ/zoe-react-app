
import React, { useState } from 'react';

function App() {
    
    const [selectedItem, setSelectedItem] = useState([]);
    const [items, setItems] = useState([
        { name: 'Empire State Building', price: 5, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/800px-Empire_State_Building_%28aerial_view%29.jpg' },
        { name: 'Basketball', price: 7, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Basketball.png/220px-Basketball.png' },
        { name: 'Space Needle', price: 10, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Space_Needle_2011-07-04.jpg/800px-Space_Needle_2011-07-04.jpg' },
        { name: 'Willis Tower', price: 2, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Willis_Tower_From_Lake.jpg/1200px-Willis_Tower_From_Lake.jpg' },
    ]);
    const [showAddItem, setShowAddItem] = useState(false);
    const [newItem, setNewItem] = useState({
        name: '',
        price: '',
        image: '',
    });
    

    
    

   
    const itemClick = (item) => {
        setSelectedItem(item);
    };

    const addItemClick = () => {
        setShowAddItem(true);
    };

    const addNewItemToItems = () => {
        const { name, price, image } = newItem;
        setItems((prevItems) => [...prevItems, newItem]);
        setNewItem({
          name: '',
          price: '',
          image: '',
        });
      };

      const handleNameChange = (event) => {
        setNewItem({ ...newItem, name: event.target.value });
      };
    
      const handlePriceChange = (event) => {
        setNewItem({ ...newItem, price: event.target.value });
      };
    
      const handleImageChange = (event) => {
        setNewItem({ ...newItem, image: event.target.value });
      };


    return (
      <>
      <header className="text-center bg-info p-3 mb-2">Items Management</header>
        <div className="container">
            <div className="row">
                <div className="col-md-4 ">
                    <h3>Items</h3>
                    <div className="border border-info">
                    {items.map((item) => (
                        <div onClick={() => itemClick(item)} style={{ cursor: 'pointer', color: 'greenyellow' }}>
                            <p>{item.name}   ${item.price}</p>
                        </div>
                    ))
                    }
                    </div>
                    
                </div>
                <div className="col-md-4">
                    <h3>Item Details</h3>
                    <div className="border border-info text-center">
                        <img src={selectedItem.image} alt='image' style={{width: '100%', height: '3cm', border: 'black 2px solid'}}/>
                        <p>{selectedItem.name}</p>
                        <p>${selectedItem.price}</p>
                    </div>
                </div>
                {showAddItem && (
                <div className="col-md-4 text-center">
                    <h3>Add New Item</h3>
                       <div className="border border-info p-2">
                       <input
                            type="text"
                            placeholder="name"
                            value={newItem.name}
                            onChange={handleNameChange}
                        />
                        <br />
                        <input
                            type="text"
                            placeholder="price"
                            value={newItem.price}
                            onChange={handlePriceChange}
                        />
                        <br />
                        <input
                            type="text"
                            placeholder="image url"
                            value={newItem.image}
                            onChange={handleImageChange}
                        />
                        <br />
                        <button onClick={addNewItemToItems} className="col-12 btn-light border-dark mt-5">Add</button>
                        </div>
                        
                </div>)}
            </div>
            <div className="text-center m-2">
            <button  className="col-4 btn-light border-dark" onClick={addItemClick}>Add New Item</button>
            </div>
            
        </div>
        
       
      </>
    );
  }


export default App;
