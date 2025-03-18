// import React, { useState } from 'react';
// import "../Styles/contact.css";
// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     crimeType: '',
//     incidentDate: '',
//     location: '',
//     description: '',
//     anonymous: false
//   });

//   const crimeTypes = ['Theft', 'Assault', 'Vandalism', 'Fraud', 'Cybercrime', 'Other'];

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form Submitted:', formData);
//     alert('Report submitted successfully.');
//   };

//   return (
//     <div style={{ maxWidth: '500px', margin: 'auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
//       <h2>Crime Reporting Form</h2>
//       <form onSubmit={handleSubmit}>
//         {!formData.anonymous && (
//           <>
//             <label>Name:</label>
//             <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//           </>
//         )}
//         <label>
//           <input type="checkbox" name="anonymous" checked={formData.anonymous} onChange={handleChange} />
//           Report Anonymously
//         </label>

//         <label>Email:</label>
//         <input type="email" name="email" value={formData.email} onChange={handleChange} required />

//         <label>Phone:</label>
//         <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

//         <label>Type of Crime:</label>
//         <select name="crimeType" value={formData.crimeType} onChange={handleChange} required>
//           <option value="">Select</option>
//           {crimeTypes.map((crime, index) => (
//             <option key={index} value={crime}>{crime}</option>
//           ))}
//         </select>

//         <label>Date of Incident:</label>
//         <input type="date" name="incidentDate" value={formData.incidentDate} onChange={handleChange} required />

//         <label>Location:</label>
//         <input type="text" name="location" value={formData.location} onChange={handleChange} required />

//         <label>Description:</label>
//         <textarea name="description" value={formData.description} onChange={handleChange} rows="4" required />

//         <button type="submit">Submit Report</button>
//       </form>
//     </div>
//   );
// };

// export default Contact;
import '../styles/Contact.css';
// import "bootstrap/dist/css/bootstrap.min.css";
import { BsAsterisk } from "react-icons/bs";


function Contact() {
    return (
        <section className="container mt-5">
            <div className="map mb-4">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5327263231125!2d30.088148373116155!3d-1.9394623366849733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6eb4b136305%3A0xfa7ecaf4c40f3383!2skLab!5e0!3m2!1sen!2srw!4v1738315273112!5m2!1sen!2srw"
                    width="100%"
                    height="400"
                    style={{ border: "0" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            
            {/* Left-aligned form inside a row */}
            <div className="formClass">
                <div className="col-md-4">
                <h1>Leave Us a Message</h1><br/><br/>
                    <form className="p-4 border rounded bg-light">
                        {/* Name Fields */}
                        <div className="mb-3">
                        <label htmlFor="inputName" className="form-label">Name </label><BsAsterisk className="asteriskIcon" />
                            <input type="text" className="form-control" placeholder="First name" />
                            {/* <label htmlFor="inputName" className="form-label">First</label> */}
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder="Last name" />
                            {/* <label htmlFor="inputName" className="form-label">Last</label> */}
                        </div>

                        {/* Email Field */}
                        <div className="mb-3">
                            <label htmlFor="inputEmail" className="form-label">Email </label> <BsAsterisk className="asteriskIcon" />
                            <input type="email" className="form-control" id="inputEmail" placeholder="Enter your email" />
                        </div>

                        {/* Textarea */}
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Comment or Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" placeholder="Write your message here..."></textarea>
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
              
               
                <div className="otherInf">
                <h2>Our Store</h2> <br/> <br/>
                  <p>501-521 Fashion Ave, New York, NY 10018, USA</p><br/>
                  <p>PHONE: </p>
                  <p>+1 212 244 2681 </p> <br/>
                  <p>E-MAIL: </p>
                  <p>office@example.org </p> <br/>
                 <h2> Store Hours </h2> 
                   <p>  Sun: Closed   </p>
                   <p>  Mon to Sat: 10 AM – 5:30 PM </p>
                </div>
            </div>
        </section>
    );
}

export default Contact;
