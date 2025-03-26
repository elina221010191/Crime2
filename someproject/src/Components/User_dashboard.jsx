import React, { useState } from 'react';
import "../Styles/userdashboard.css";
const User_dashboard = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    crimeType: '',
    incidentDate: '',
    location: '',
    description: '',
    anonymous: false
  });

  const crimeTypes = ['Theft', 'Assault', 'Vandalism', 'Fraud', 'Cybercrime', 'Other'];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Report submitted successfully.');
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2>Crime Reporting Form</h2>
      <form onSubmit={handleSubmit}>
        {!formData.anonymous && (
          <>
            <label>Name:</label>
            <input type="text" className="name" value={formData.name} onChange={handleChange} required />
          </>
        )}
        <label>
          <input type="checkbox" className="anonymous" checked={formData.anonymous} onChange={handleChange} />
          Report Anonymously
        </label>

        <label>Email:</label>
        <input type="email" className="email" value={formData.email} onChange={handleChange} required />

        <label>Phone:</label>
        <input type="tel" className="phone" value={formData.phone} onChange={handleChange} required />

        <label>Type of Crime:</label>
        <select className="crimeType" value={formData.crimeType} onChange={handleChange} required>
          <option value="">Select</option>
          {crimeTypes.map((crime, index) => (
            <option key={index} value={crime}>{crime}</option>
          ))}
        </select>

        <label>Date of Incident:</label>
        <input type="date" className="incidentDate" value={formData.incidentDate} onChange={handleChange} required />

        <label>Location:</label>
        <input type="text" className="location" value={formData.location} onChange={handleChange} required />

        <label>Description:</label>
        <textarea className="description" value={formData.description} onChange={handleChange} rows="4" required />

        <button type="submit">Submit Report</button>
      </form>
    </div>
  );
};

export default User_dashboard;

// import React, { useState } from "react";
// import { Card, CardContent } from "./Components/Card";
// import { Button } from "./Components/Button";
// //import { Input } from "@/components/ui/input";
// //import { Table } from "@/components/ui/table";
// import { Trash, Edit } from "lucide-react";

// export default function UserManagement() {
//   const [users, setUsers] = useState([
//     { id: 1, name: "John Doe", email: "john@example.com" },
//     { id: 2, name: "Jane Doe", email: "jane@example.com" },
//   ]);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [editingUser, setEditingUser] = useState(null);

//   const addUser = () => {
//     if (!name || !email) return;
//     if (editingUser) {
//       setUsers(
//         users.map((user) =>
//           user.id === editingUser.id ? { ...user, name, email } : user
//         )
//       );
//       setEditingUser(null);
//     } else {
//       setUsers([...users, { id: Date.now(), name, email }]);
//     }
//     setName("");
//     setEmail("");
//   };

//   const editUser = (user) => {
//     setName(user.name);
//     setEmail(user.email);
//     setEditingUser(user);
//   };

//   const deleteUser = (id) => {
//     setUsers(users.filter((user) => user.id !== id));
//   };

//   return (
//     <div className="p-4 max-w-2xl mx-auto">
//       <Card className="mb-4 p-4">
//         <h2 className="text-xl font-bold mb-2">{editingUser ? "Edit User" : "Add User"}</h2>
//         <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="mb-2" />
//         <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="mb-2" />
//         <Button onClick={addUser}>{editingUser ? "Update User" : "Add User"}</Button>
//       </Card>

//       <Card>
//         <CardContent>
//           <Table>
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user) => (
//                 <tr key={user.id}>
//                   <td>{user.name}</td>
//                   <td>{user.email}</td>
//                   <td>
//                     <Button variant="ghost" onClick={() => editUser(user)}><Edit size={16} /></Button>
//                     <Button variant="ghost" onClick={() => deleteUser(user.id)}><Trash size={16} /></Button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
