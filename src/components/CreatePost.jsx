import React, { useState } from 'react';

function CreatePost() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitting Name ${name} ${email} ${message}`)
    // You can add your API call here to submit the data to the server
  };

  return (
    <div class="createPost">
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <label>Email:</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>Content:</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
          <button type="submit" 
            disabled={
                message.length === 0 || 
                name.length === 0 ||
                email.length === 0}>
                  Submit
                </button>
      </form>
    </div>
  );
}

export default CreatePost;