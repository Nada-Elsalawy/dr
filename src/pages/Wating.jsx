






// import React, { useState } from 'react';
// import { AiOutlineClockCircle, AiOutlineSearch, AiOutlineFileText, AiOutlineEdit, AiOutlineCalendar } from 'react-icons/ai';
// import { MdOutlineImage, MdCheckCircle, MdCancel } from 'react-icons/md';
// import { FaHeartbeat } from 'react-icons/fa';
// import { BiUserCircle } from 'react-icons/bi';

// const DoctorDashboard = () => {
//   const [searchId, setSearchId] = useState('124');
//   const [selectedPatient, setSelectedPatient] = useState({
//     name: 'Ahmed Mohamed Ali',
//     nationalId: '30310031700357',
//     age: 28,
//     gender: 'Male',
//     height: 175,
//     weight: 78,
//     bmi: 25.5,
//     bloodType: 'A+',
//     chronicDiseases: ['Hypertension', 'Asthma'],
//     allergies: ['Penicillin', 'Aspirin'],
//     medications: ['Amlodipine 5mg', 'Ventolin Inhaler']
//   });

//   const [aiDiagnosis, setAiDiagnosis] = useState({
//     symptoms: 'Red, itchy rash on arms and legs with dry, scaly patches for 2 weeks',
//     diagnosis: 'Possible Psoriasis',
//     confidence: 82
//   });

//   const [patientQueue] = useState([
//     { id: 1, name: 'Ahmed Mohamed', time: '~5 min', status: 'red' },
//     { id: 2, name: 'Sara Khalil', time: '~15 min', status: 'yellow' },
//     { id: 3, name: 'Omar Said', time: '~25 min', status: 'green' }
//   ]);

//   const [medicalHistory] = useState([
//     { date: '2024-11-15', condition: 'Contact Dermatitis', doctor: 'Dr. Sara Ahmed' },
//     { date: '2024-08-20', condition: 'Eczema', doctor: 'Dr. Ahmed Hassan' }
//   ]);

//   const getStatusColor = (status) => {
//     switch(status) {
//       case 'red': return 'bg-red-500';
//       case 'yellow': return 'bg-yellow-400';
//       case 'green': return 'bg-green-500';
//       default: return 'bg-gray-500';
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-4">
//       {/* Header */}
//       <div className="bg-white rounded-xl shadow-sm p-5 mb-4">
//         <div className="flex justify-between items-start">
//           <div>
//             <h1 className="text-2xl font-bold text-gray-900 mb-1">Dr. Ahmed Hassan</h1>
//             <p className="text-sm text-gray-500">Dermatology • Room 205 • 2nd Floor</p>
//           </div>
//           <div className="flex gap-2">
//             <button className="px-4 py-1.5 bg-green-500 text-white text-sm rounded-md font-medium">Available</button>
//             <button className="px-4 py-1.5 bg-white border border-gray-300 text-gray-700 text-sm rounded-md">Busy</button>
//             <button className="px-4 py-1.5 bg-white border border-gray-300 text-gray-700 text-sm rounded-md">Break</button>
//           </div>
//         </div>
//       </div>

//       <div className="grid grid-cols-4 gap-4">
//         {/* Left Sidebar - Patient Queue */}
//         <div className="col-span-1">
//           <div className="bg-white rounded-xl shadow-sm p-5">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-base font-bold text-gray-900">Patient Queue</h2>
//               <span className="px-2.5 py-0.5 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
//                 3 waiting
//               </span>
//             </div>
            
//             <div className="space-y-2.5 mb-4">
//               {patientQueue.map((patient, index) => (
//                 <div key={patient.id} className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition">
//                   <div className="flex justify-between items-center mb-1.5">
//                     <span className="text-sm font-semibold text-gray-900">{index + 1}. {patient.name}</span>
//                     <span className={`w-5 h-5 ${getStatusColor(patient.status)} rounded flex items-center justify-center text-white text-xs font-bold`}>
//                       {index + 1}
//                     </span>
//                   </div>
//                   <div className="flex items-center text-xs text-gray-500">
//                     <AiOutlineClockCircle className="w-3.5 h-3.5 mr-1" />
//                     {patient.time}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <button className="w-full bg-blue-600 text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-700 flex items-center justify-center gap-2 transition">
//               <BiUserCircle className="w-5 h-5" />
//               Call Next Patient
//             </button>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="col-span-3 space-y-4">
//           {/* Search Bar */}
//           <div className="bg-white rounded-xl shadow-sm p-4">
//             <label className="block text-xs font-semibold text-gray-700 mb-2">
//               Search Patient by ID
//             </label>
//             <div className="flex gap-2">
//               <input
//                 type="text"
//                 value={searchId}
//                 onChange={(e) => setSearchId(e.target.value)}
//                 className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
//                 placeholder="124"
//               />
//               <button className="px-5 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 flex items-center gap-2 font-medium transition">
//                 <AiOutlineSearch className="w-4 h-4" />
//                 Search
//               </button>
//             </div>
//           </div>

//           {/* Patient Information */}
//           <div className="bg-white rounded-xl shadow-sm p-5">
//             <h2 className="text-lg font-bold text-gray-900 mb-4">Patient Information</h2>
            
//             <div className="grid grid-cols-2 gap-x-8 gap-y-4">
//               <div>
//                 <label className="text-xs text-gray-500 block mb-0.5">Name</label>
//                 <p className="text-sm font-semibold text-gray-900">{selectedPatient.name}</p>
//               </div>
//               <div>
//                 <label className="text-xs text-gray-500 block mb-0.5">National ID</label>
//                 <p className="text-sm font-semibold text-gray-900">{selectedPatient.nationalId}</p>
//               </div>
//               <div>
//                 <label className="text-xs text-gray-500 block mb-0.5">Age / Gender</label>
//                 <p className="text-sm font-semibold text-gray-900">{selectedPatient.age} years / {selectedPatient.gender}</p>
//               </div>
//               <div>
//                 <label className="text-xs text-gray-500 block mb-0.5">Blood Type</label>
//                 <p className="text-sm font-semibold text-gray-900">{selectedPatient.bloodType}</p>
//               </div>
//               <div>
//                 <label className="text-xs text-gray-500 block mb-0.5">Height / Weight</label>
//                 <p className="text-sm font-semibold text-gray-900">{selectedPatient.height} cm / {selectedPatient.weight} kg</p>
//               </div>
//               <div>
//                 <label className="text-xs text-gray-500 block mb-0.5">BMI</label>
//                 <p className="text-sm font-semibold text-gray-900">{selectedPatient.bmi}</p>
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-x-8 gap-y-3 mt-5 pt-5 border-t border-gray-100">
//               <div>
//                 <label className="text-xs text-gray-500 block mb-2">Chronic Diseases</label>
//                 <div className="flex gap-2 flex-wrap">
//                   {selectedPatient.chronicDiseases.map((disease, idx) => (
//                     <span key={idx} className="px-2.5 py-1 bg-red-50 text-red-700 rounded-full text-xs font-medium">
//                       {disease}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//               <div>
//                 <label className="text-xs text-gray-500 block mb-2">Allergies</label>
//                 <div className="flex gap-2 flex-wrap">
//                   {selectedPatient.allergies.map((allergy, idx) => (
//                     <span key={idx} className="px-2.5 py-1 bg-orange-50 text-orange-700 rounded-full text-xs font-medium">
//                       {allergy}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <div className="mt-3">
//               <label className="text-xs text-gray-500 block mb-2">Current Medications</label>
//               <div className="flex gap-2 flex-wrap">
//                 {selectedPatient.medications.map((med, idx) => (
//                   <span key={idx} className="px-2.5 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
//                     {med}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* AI Preliminary Analysis */}
//           <div className="bg-gradient-to-br from-purple-50 via-purple-50 to-blue-50 rounded-xl shadow-sm p-5 border border-purple-100">
//   <div className="flex justify-between items-center mb-4">
//     <h2 className="text-lg font-bold text-gray-900">AI Preliminary Analysis</h2>
//     <FaHeartbeat className="w-5 h-5 text-purple-600" />
//   </div>

//   <div className="mb-4">
//     <label className="text-xs font-medium text-gray-600 block mb-1.5">Symptoms Reported</label>
//     <p className="text-sm text-gray-800 leading-relaxed">{aiDiagnosis.symptoms}</p>
//   </div>

//   <div className="grid grid-cols-2 gap-6 mb-4">
//     <div>
//       <label className="text-xs font-medium text-gray-600 block mb-1.5">AI Diagnosis</label>
//       <p className="text-xl font-bold text-purple-700">{aiDiagnosis.diagnosis}</p>
//     </div>
//     <div>
//       <label className="text-xs font-medium text-gray-600 block mb-1.5">Confidence Level</label>
//       <div className="flex items-center gap-2 mt-2">
//         <div className="flex-1 h-2.5 bg-purple-200 rounded-full overflow-hidden">
//           <div 
//             className="h-full bg-purple-600 rounded-full transition-all duration-500"
//             style={{ width: `${aiDiagnosis.confidence}%` }}
//           />
//         </div>
//         <span className="text-base font-bold text-purple-700 min-w-[38px]">{aiDiagnosis.confidence}%</span>
//       </div>
//     </div>
//   </div>

//   <button className="w-full bg-purple-600 text-white py-3 rounded-lg text-sm font-semibold hover:bg-purple-700 flex items-center justify-center gap-2 transition shadow-md">
//     <FaHeartbeat className="w-5 h-5" />
//     Analyze with Specialist AI Model
//   </button>
// </div>
//           {/* Medical History Timeline */}
//           <div className="bg-white rounded-xl shadow-sm p-5">
//             <h2 className="text-lg font-bold text-gray-900 mb-4">Medical History Timeline</h2>
//             <div className="space-y-3">
//               {medicalHistory.map((record, idx) => (
//                 <div key={idx} className="flex gap-4 pb-3 border-b border-gray-100 last:border-0">
//                   <div className="text-xs text-gray-500 w-20 flex-shrink-0">{record.date}</div>
//                   <div className="flex-1">
//                     <p className="text-sm font-semibold text-gray-900">{record.condition}</p>
//                     <p className="text-xs text-gray-500 mt-0.5">by {record.doctor}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Quick Actions */}
//           <div className="bg-white rounded-xl shadow-sm p-5">
//             <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h2>
//             <div className="grid grid-cols-4 gap-3">
//               <button className="flex flex-col items-center gap-2 p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all">
//                 <AiOutlineFileText className="w-7 h-7 text-blue-600" />
//                 <span className="text-xs font-medium text-gray-700 text-center">Request Lab Test</span>
//               </button>
//               <button className="flex flex-col items-center gap-2 p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all">
//                 <MdOutlineImage className="w-7 h-7 text-blue-600" />
//                 <span className="text-xs font-medium text-gray-700 text-center">Request X-ray</span>
//               </button>
//               <button className="flex flex-col items-center gap-2 p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all">
//                 <AiOutlineEdit className="w-7 h-7 text-blue-600" />
//                 <span className="text-xs font-medium text-gray-700 text-center">Prescribe</span>
//               </button>
//               <button className="flex flex-col items-center gap-2 p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all">
//                 <AiOutlineCalendar className="w-7 h-7 text-blue-600" />
//                 <span className="text-xs font-medium text-gray-700 text-center">Schedule Follow-up</span>
//               </button>
//             </div>
//           </div>

//           {/* Complete Consultation */}
//           <div className="bg-white rounded-xl shadow-sm p-5">
//             <h2 className="text-lg font-bold text-gray-900 mb-4">Complete Consultation</h2>
            
//             <div className="mb-4">
//               <label className="block text-xs font-semibold text-gray-700 mb-2">Final Diagnosis</label>
//               <textarea
//                 className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
//                 rows="3"
//                 placeholder="Enter final diagnosis..."
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-xs font-semibold text-gray-700 mb-2">Doctor Notes</label>
//               <textarea
//                 className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
//                 rows="4"
//                 placeholder="Add notes..."
//               />
//             </div>

//             <div className="mb-5">
//               <label className="block text-xs font-semibold text-gray-700 mb-3">AI Diagnosis Feedback</label>
//               <div className="grid grid-cols-2 gap-3">
//                 <button className="py-2.5 border-2 border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:border-green-500 hover:bg-green-50 hover:text-green-700 flex items-center justify-center gap-2 transition-all">
//                   <MdCheckCircle className="w-5 h-5" />
//                   AI Correct
//                 </button>
//                 <button className="py-2.5 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 flex items-center justify-center gap-2 transition-all">
//                   <MdCancel className="w-5 h-5" />
//                   AI Incorrect
//                 </button>
//               </div>
//               <label className="flex items-center gap-2 mt-3">
//                 <input type="checkbox" className="w-3.5 h-3.5 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
//                 <span className="text-xs text-gray-700">Follow-up required</span>
//               </label>
//             </div>

//             <div className="grid grid-cols-2 gap-3">
//               <button className="py-2.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-200 transition">
//                 Save & Continue
//               </button>
//               <button className="py-2.5 bg-green-600 text-white rounded-lg text-sm font-semibold hover:bg-green-700 transition">
//                 Complete Consultation
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DoctorDashboard;


import React, { useState } from "react";
import {
  FaSearch,
  FaRegClock,
  FaHeartbeat,
  FaFlask,
  FaRegImage,
  FaPills,
  FaCalendarPlus,
  FaUser
} from "react-icons/fa";
import { MdCheckCircle, MdCancel } from "react-icons/md";

const DoctorDashboard = () => {
  const [searchId, setSearchId] = useState("124");

  const patientQueue = [
    { name: "Ahmed Mohamed", time: "~5 min", color: "bg-red-500", num: 8 },
    { name: "Sara Khalil", time: "~15 min", color: "bg-orange-400", num: 5 },
    { name: "Omar Said", time: "~25 min", color: "bg-emerald-500", num: 3 },
  ];

  const medicalHistory = [
    { date: "01/02/2025", condition: "Skin Rash", doctor: "Dr. Ali" },
    { date: "15/03/2025", condition: "Allergy Check", doctor: "Dr. Sara" },
  ];

  const Info = ({ label, value }) => (
    <div>
      <p className="text-xs text-gray-500">{label}</p>
      <p className="font-semibold text-sm">{value}</p>
    </div>
  );

  const Tag = ({ color, children }) => {
    let bgColor = color === "red" ? "bg-red-100 text-red-700" :
                  color === "yellow" ? "bg-yellow-100 text-yellow-700" :
                  "bg-blue-100 text-blue-700";
    return (
      <span className={`${bgColor} px-2 py-0.5 rounded text-xs font-medium`}>
        {children}
      </span>
    );
  };

  const Action = ({ icon, label }) => (
    <button className="flex flex-col items-center justify-center gap-1 bg-slate-50 rounded-lg p-3 text-sm font-semibold hover:bg-slate-100 transition">
      {icon}
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-slate-50 p-6 text-slate-800">

      {/* ================= HEADER ================= */}
      <header className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-xl font-bold">Dr. Ahmed Hassan</h1>
          <p className="text-xs text-slate-500">
            Dermatology • Room 205 • 2nd Floor
          </p>
        </div>

        <div className="flex gap-2">
          <button className="px-4 py-1.5 bg-emerald-500 text-white text-xs font-semibold rounded-md">
            Available
          </button>
          <button className="px-4 py-1.5 border border-slate-300 text-xs rounded-md">
            Busy
          </button>
          <button className="px-4 py-1.5 border border-slate-300 text-xs rounded-md">
            Break
          </button>
        </div>
      </header>

      {/* ================= LAYOUT ================= */}
      <div className="grid grid-cols-12 gap-6">

        {/* ================= QUEUE ================= */}
        <aside className="col-span-3">
          <div className="bg-white rounded-xl shadow-sm p-5">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-sm font-bold">Patient Queue</h2>
              <span className="bg-blue-50 text-blue-600 text-xs px-2 py-0.5 rounded">
                3 waiting
              </span>
            </div>

            <div className="space-y-3">
              {patientQueue.map((p, i) => (
                <div
                  key={i}
                  className="p-3 rounded-lg border border-slate-100 hover:bg-slate-50 cursor-pointer"
                >
                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm font-semibold">
                        {i + 1}. {p.name}
                      </p>
                      <p className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                        <FaRegClock size={11} />
                        {p.time}
                      </p>
                    </div>
                    <span
                      className={`${p.color} text-white text-xs w-5 h-5 rounded flex items-center justify-center`}
                    >
                      {p.num}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 rounded-lg flex items-center justify-center gap-2">
              <FaUser />
              Call Next Patient
            </button>
          </div>
        </aside>

        {/* ================= MAIN ================= */}
        <main className="col-span-9 flex flex-col gap-6">

          {/* SEARCH */}
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <p className="text-xs font-semibold mb-2">Search Patient by ID</p>
            <div className="flex gap-2">
              <input
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                className="flex-1 border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-4 rounded-lg flex items-center gap-2 text-sm font-semibold">
                <FaSearch />
                Search
              </button>
            </div>
          </div>

          {/* PATIENT INFO */}
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <h2 className="font-bold mb-4">Patient Information</h2>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <Info label="Name" value="Nada Elsalawy" />
              <Info label="National ID" value="30302222399075" />
              <Info label="Age / Gender" value="28 / Male" />
              <Info label="Blood Type" value="A+" />
              <Info label="Height / Weight" value="175 cm / 78 kg" />
              <Info label="BMI" value="25.5" />
            </div>

            <hr className="my-3 text-[#d8dde3]" />

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-sm text-[#90a1b9]">Chronic Diseases</p>
                <div className="flex gap-3 my-2">
                  <Tag color="red">Hypertension</Tag>
                  <Tag color="red">Asthma</Tag>
                </div>
              </div>

              <div>
                <p className="text-sm text-[#90a1b9]">Allergies</p>
                <div className="flex gap-3 my-2">
                  <Tag color="yellow">Penicillin</Tag>
                  <Tag color="yellow">Aspirin</Tag>
                </div>
              </div>
            </div>

            <hr className="my-3 text-[#d8dde3]" />

            <div>
              <p className="text-sm text-[#90a1b9]">Current Medication</p>
              <div className="flex gap-3 my-2">
                <Tag color="blue">Amlodipine 5mg</Tag>
              </div>
            </div>
          </div>

          {/* AI ANALYSIS */}
          <div className="bg-gradient-to-br from-purple-100/70 via-purple-50 to-blue-50 rounded-2xl p-6 border border-purple-200">
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-bold">AI Preliminary Analysis</h2>
              <FaHeartbeat className="text-purple-600" />
            </div>

            <div className="bg-white p-3">
              <p>Symptoms Reported</p>
              <p className="text-sm text-slate-700 mb-4">
                Red, itchy rash on arms and legs with dry, scaly patches for 2 weeks
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-white mt-3 p-3">
                <p className="text-xs text-slate-500 mb-1">AI Diagnosis</p>
                <p className="font-bold text-purple-700">
                  Possible Psoriasis
                </p>
              </div>

              <div className="bg-white mt-3 p-3">
                <p className="text-xs text-slate-500 mb-1">Confidence Level</p>
                <div className="flex items-center gap-3">
                  <div className="w-full h-2.5 bg-purple-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-purple-600 rounded-full"
                      style={{ width: "82%" }}
                    />
                  </div>
                  <span className="text-sm font-bold text-purple-700">82%</span>
                </div>
              </div>
            </div>

            <button className="w-full h-11 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold rounded-lg flex items-center justify-center gap-2">
              <FaHeartbeat />
              Analyze with Specialist AI Model
            </button>
          </div>

          {/* Medical History Timeline */}
          <div className="bg-white rounded-xl shadow-sm p-5">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Medical History Timeline</h2>
            <div className="space-y-3">
              {medicalHistory.map((record, idx) => (
                <div key={idx} className="flex gap-4 pb-3 border-b border-gray-100 last:border-0">
                  <div className="text-xs text-gray-500 w-20 flex-shrink-0">{record.date}</div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900">{record.condition}</p>
                    <p className="text-xs text-gray-500 mt-0.5">by {record.doctor}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* QUICK ACTIONS */}
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <h2 className="font-bold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-4 gap-3">
              <Action icon={<FaFlask />} label="Lab Test" />
              <Action icon={<FaRegImage />} label="X-ray" />
              <Action icon={<FaPills />} label="Prescribe" />
              <Action icon={<FaCalendarPlus />} label="Follow-up" />
            </div>
          </div>

          {/* COMPLETE */}
          <div className="bg-white rounded-xl shadow-sm p-5">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Complete Consultation</h2>

            <div className="mb-4">
              <label className="block text-xs font-semibold text-gray-700 mb-2">Final Diagnosis</label>
              <textarea
                className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
                rows={3}
                placeholder="Enter final diagnosis..."
              />
            </div>

            <div className="mb-4">
              <label className="block text-xs font-semibold text-gray-700 mb-2">Doctor Notes</label>
              <textarea
                className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
                rows={4}
                placeholder="Add notes..."
              />
            </div>

            <div className="mb-5">
              <label className="block text-xs font-semibold text-gray-700 mb-3">AI Diagnosis Feedback</label>
              <div className="grid grid-cols-2 gap-3">
                <button className="py-2.5 border-2 border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:border-green-500 hover:bg-green-50 hover:text-green-700 flex items-center justify-center gap-2 transition-all">
                  <MdCheckCircle className="w-5 h-5" />
                  AI Correct
                </button>
                <button className="py-2.5 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 flex items-center justify-center gap-2 transition-all">
                  <MdCancel className="w-5 h-5" />
                  AI Incorrect
                </button>
              </div>
              <label className="flex items-center gap-2 mt-3">
                <input type="checkbox" className="w-3.5 h-3.5 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                <span className="text-xs text-gray-700">Follow-up required</span>
              </label>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button className="py-2.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-200 transition">
                Save & Continue
              </button>
              <button className="py-2.5 bg-green-600 text-white rounded-lg text-sm font-semibold hover:bg-green-700 transition">
                Complete Consultation
              </button>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
};

export default DoctorDashboard;