import React, { useState } from 'react';
import './UploadProduct.css';

const UploadProduct = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productImage, setProductImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for handling product upload will go here.
    alert('Product uploaded successfully!');
  };

  return (
    <div className="upload-product-container">
      <h1 className="upload-title">Upload Your Product</h1>
      <form className="upload-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Product Name</label>
          <input
            type="text"
            placeholder="Enter product name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Price ($)</label>
          <input
            type="number"
            placeholder="Enter product price"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            placeholder="Enter product description"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Upload Image</label>
          <input
            type="file"
            onChange={(e) => setProductImage(e.target.files[0])}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Upload Product
        </button>
      </form>
    </div>
  );
};

export default UploadProduct;
