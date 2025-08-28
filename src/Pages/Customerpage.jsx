import React, { useState, useEffect } from "react";
import axios from "axios";


function CustomerPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "" });
  const [customers, setCustomers] = useState([]);
  const [editingId, setEditingId] = useState(null);

  // Fetch all customers
  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    const res = await axios.get("http://localhost:4000/api/customers");
    setCustomers(res.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await axios.put(`http://localhost:4000/api/customers/${editingId}`, form);
      setEditingId(null);
    } else {
      await axios.post("http://localhost:4000/api/customers", form);
    }
    setForm({ name: "", email: "", phone: "", company: "" });
    fetchCustomers();
  };

  const handleEdit = (customer) => {
    setForm(customer);
    setEditingId(customer._id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:4000/api/customers/${id}`);
    fetchCustomers();
  };

  return (
    <div style={{ width: "600px", margin: "auto" }}>
      <h2>Customer Form</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required />
        <input name="company" placeholder="Company" value={form.company} onChange={handleChange} required />
        <button type="submit">{editingId ? "Update" : "Add"} Customer</button>
      </form>

      <h3>Customer List</h3>
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Phone</th><th>Company</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((c) => (
            <tr key={c._id}>
              <td>{c.name}</td>
              <td>{c.email}</td>
              <td>{c.phone}</td>
              <td>{c.company}</td>
              <td>
                <button onClick={() => handleEdit(c)}>Edit</button>
                <button onClick={() => handleDelete(c._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerPage;
