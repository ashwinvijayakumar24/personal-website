import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminConsole = () => {
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({ title: '', description: '', content: '' });
  const [token, setToken] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const response = await axios.get('https://personal-website-2v8c.onrender.com/api/blogs');
    setBlogs(response.data);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://personal-website-2v8c.onrender.com/api/login', { username, password });
      setToken(response.data.token);
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const handleCreateBlog = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://personal-website-2v8c.onrender.com/api/blogs', newBlog, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setNewBlog({ title: '', description: '', content: '' });
      fetchBlogs();
    } catch (error) {
      console.error('Failed to create blog', error);
    }
  };

  const handleUpdateBlog = async (id, updatedBlog) => {
    try {
      await axios.put(`https://personal-website-2v8c.onrender.com/api/blogs/${id}`, updatedBlog, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchBlogs();
    } catch (error) {
      console.error('Failed to update blog', error);
    }
  };

  if (!token) {
    return (
    <div className='bg-white min-h-screen'>
        
        <form onSubmit={handleLogin} className='bg-white flex items-center justify-center min-h-screen'>
            <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            />
            <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}z
            placeholder="Password"
            />
            <button type="submit">Login</button>
        </form>
    </div>
    );
  }

  return (
    <div>
      <h2>Create New Blog</h2>
      <form onSubmit={handleCreateBlog}>
        <input
          type="text"
          value={newBlog.title}
          onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
          placeholder="Title"
        />
        <input
          type="text"
          value={newBlog.description}
          onChange={(e) => setNewBlog({ ...newBlog, description: e.target.value })}
          placeholder="Description"
        />
        <textarea
          value={newBlog.content}
          onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
          placeholder="Content"
        />
        <button type="submit">Create Blog</button>
      </form>

      <h2>Existing Blogs</h2>
      {blogs.map(blog => (
        <div key={blog._id}>
          <h3>{blog.title}</h3>
          <p>{blog.description}</p>
          <button onClick={() => handleUpdateBlog(blog._id, { ...blog, title: 'Updated Title' })}>
            Update Title
          </button>
        </div>
      ))}
    </div>
  );
};

export default AdminConsole;