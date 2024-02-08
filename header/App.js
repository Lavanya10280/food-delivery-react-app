import React from 'react';
import Header from './Header'; // Import the Header component
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      {/* Include the Header component */}
      <Header />
      {/* Add space */}
      <div style={{ height: '500px' }} />
      {/* Other components and content */}
      {/* Add space */}
      <div style={{ flex: '1' }} />
      <Footer />
    </div>
  );
}

export default App;
