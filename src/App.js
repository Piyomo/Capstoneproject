import './App.css';
import React, { useState } from 'react';

// Sample data for menu items
const menuItems = [
  { id: 1, name: 'Lemonade', price: 2.99 },
  { id: 2, name: 'Lemon Chicken', price: 12.99 },
  { id: 3, name: 'Lemon Tart', price: 6.99 },
  // Add more items as needed
];

// Main App component
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Menu items={menuItems} />
      <ReservationForm />
      <Contact />
      <Footer />
    </div>
  );
}

// Navbar component
function Navbar() {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>Menu</li>
        <li>Reservation</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

// Home component
function Home() {
  return (
    <div>
      <h1>Welcome to Little Lemon Restaurant</h1>
      {/* Add more content here */}
    </div>
  );
}

// Menu component
function Menu({ items }) {
  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name} - ${item.price}</li>
        ))}
      </ul>
    </div>
  );
}

// ReservationForm component
function ReservationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    partySize: '',
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Implement form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <h2>Make a Reservation</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        <label>Date:</label>
        <input type="date" name="date" value={formData.date} onChange={handleChange} />
        <label>Time:</label>
        <input type="time" name="time" value={formData.time} onChange={handleChange} />
        <label>Party Size:</label>
        <input type="number" name="partySize" value={formData.partySize} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

// Contact component
function Contact() {
  return (
    <div>
      <h2>Contact Us</h2>
      {/* Add contact information */}
    </div>
  );
}

// Footer component
function Footer() {
  return (
    <footer>
      <p>&copy; 2024 Little Lemon Restaurant</p>
    </footer>
  );
}

export default App;
