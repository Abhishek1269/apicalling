import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

const [postData, setPostData] = useState({
  name: '',
  mail: ''
 });

const [putData, setPutData] = useState({
  id: '',
  name: '',
  mail: ''
});

const handlePostInputChange = (e) => {
  const { name, value } = e.target;
  setPostData({
    ...postData,
   [name]: value
  });
};

const handlePutInputChange = (e) => {
  const { name, value } = e.target;
  setPutData({
    ...putData,
    [name]: value
  });
};

const handlePostSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', postData);
    console.log('POST Response:', response.data);
    setPostData({ name: '', mail: '' });
    alert("Data Posted through POST request");
  } catch (error) {
    console.error('Error while posting data:', error);
    alert(error);
  }
};

const handlePutSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${putData.id}`, putData);
    console.log('PUT Response:', response.data);
    setPutData({ id: '', name: '', mail: '' });
    alert("Data updated through PUT request")
  } catch (error) {
    console.error('Error while updating data:', error);
    alert(error);
  }
};

return (
  <div className="card mt-3 m-auto justify-content-center align-items-center" style={{ width: '45rem', height: '41rem', padding: '20px', border: '5px solid', borderRadius: '15px' }}>
    <h1>React Axios POST and PUT Example</h1>
    <div className="post-form">
      <h2>Create New Post</h2>
      <form className="mb-3" onSubmit={handlePostSubmit}>
        <div>
          <label className="form-label">Name:</label>
          <input className="form-control"
            type="text"
            name="name"
            value={postData.name}
            onChange={handlePostInputChange}/>
        </div>
        <div>
          <label className="form-label">Mail ID:</label>
          <input className="form-control"
            type="email"
            name="mail"
            value={postData.body}
            onChange={handlePostInputChange}/>
        </div>
        <button className='btn btn-primary mt-3' type="submit">Submit</button>
      </form>
    </div>


    <div className="put-form">
      <h2>Update Existing Post</h2>
      <form onSubmit={handlePutSubmit}>
        <div>
          <label className="form-label">ID:</label>
          <input className="form-control"
            type="text"
            name="id"
            value={putData.id}
            onChange={handlePutInputChange}/>
        </div>
        <div>
          <label className="form-label">Name:</label>
          <input className="form-control"
            type="text"
            name="name"
            value={putData.name}
            onChange={handlePutInputChange}
          />
        </div>
        <div>
          <label className="form-label">Mail ID:</label>
          <input className="form-control"
            type="email"
            name="mail"
            value={putData.mail}
            onChange={handlePutInputChange}/>
        </div>
        <button className='btn btn-primary mt-3 mb-3' type="submit">Update</button>
      </form>
    </div>
  </div>
  );
}
export default App;