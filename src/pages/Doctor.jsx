// import React, { useState, useRef } from 'react';
// import scan from "../assets/images/WhatsApp Image 2026-02-07 at 16.07.11.jpeg"
// import lab from "../assets/images/WhatsApp Image 2026-02-07 at 18.47.30.jpeg"
// const DoctorDashboard = () => {
//   const [isAvailable, setIsAvailable] = useState(true);
//   const [selectedPatient, setSelectedPatient] = useState(null);
//   const [showXrayModal, setShowXrayModal] = useState(false);
//   const [showBloodTestModal, setShowBloodTestModal] = useState(false);
//   const [xrayZoom, setXrayZoom] = useState(1);
//   const [labZoom, setLabZoom] = useState(1);
//   const [activeFilter, setActiveFilter] = useState('normal');
//   const [activeLabFilter, setActiveLabFilter] = useState('normal');
//   const [uploadedXray, setUploadedXray] = useState(null);
//   const [uploadedLab, setUploadedLab] = useState(null);
//   const [isConsulting, setIsConsulting] = useState(true);

//   // Drag state for X-ray
//   const [xrayPosition, setXrayPosition] = useState({ x: 0, y: 0 });
//   const [isDraggingXray, setIsDraggingXray] = useState(false);
//   const [xrayDragStart, setXrayDragStart] = useState({ x: 0, y: 0 });

//   // Drag state for Lab Test
//   const [labPosition, setLabPosition] = useState({ x: 0, y: 0 });
//   const [isDraggingLab, setIsDraggingLab] = useState(false);
//   const [labDragStart, setLabDragStart] = useState({ x: 0, y: 0 });

//   const xrayFileInputRef = useRef(null);
//   const labTestFileInputRef = useRef(null);

//   // جعل القائمة State ليتم تقليل العدد
//   const [patientQueue, setPatientQueue] = useState([
//     {
//       id: 1,
//       name: 'Hoda Mohamed',
//       waitTime: '~5 minutes',
//       severity: 8,
//       severityLevel: 'high'
//     },
//     {
//       id: 2,
//       name: 'Sara Khalil',
//       waitTime: '~15 minutes',
//       severity: 5,
//       severityLevel: 'medium'
//     },
//     {
//       id: 3,
//       name: 'Omar Said',
//       waitTime: '~25 minutes',
//       severity: 3,
//       severityLevel: 'low'
//     }
//   ]);

//   const currentPatient = {
//     id: '#124',
//     name: 'Nada Mohamed Ali',
//     nationalId: '30310011700357',
//     age: 23,
//     gender: 'Female',
//     bloodType: 'A+',
//     bmi: 25.5,
//     chronicDiseases: ['Hypertension', 'Asthma'],
//     allergies: ['Penicillin', 'Aspirin'],
//     medications: ['Amlodipine 5mg', 'Ventolin Inhaler']
//   };

//   const aiAnalysis = {
//     symptoms: 'Red, itchy rash on arms and legs with dry scales for two weeks',
//     diagnosis: 'Possible Psoriasis',
//     confidence: 82,
//     department: 'Dermatology'
//   };

//   const treatmentHistory = [
//     {
//       id: 1,
//       condition: 'Contact Dermatitis',
//       date: '2024-11-15',
//       doctor: 'Dr. Sara Ahmed'
//     },
//     {
//       id: 2,
//       condition: 'Eczema',
//       date: '2024-08-20',
//       doctor: 'Dr. Mahmoud Khalid'
//     }
//   ];

//   // الصور المحفوظة من المريض
//   const patientXrayImage = '/mnt/user-data/uploads/28512.jpg';
//   const patientLabTestImage = '/mnt/user-data/uploads/28513.jpg';

//   const toggleStatus = () => {
//     setIsAvailable(!isAvailable);
//   };

//   const callNextPatient = () => {
//     if (!isAvailable || patientQueue.length === 0) return;
//     alert('Calling next patient: ' + patientQueue[0].name);
//     setPatientQueue(prev => prev.slice(1));
//     setIsConsulting(true);
//   };

//   const handleCompleteConsultation = () => {
//     setIsConsulting(false);
//     setUploadedXray(null);
//     setUploadedLab(null);
//   };

//   const getSeverityClasses = (level) => {
//     switch (level) {
//       case 'high': return 'border-r-red-500 bg-red-50';
//       case 'medium': return 'border-r-orange-500 bg-orange-50';
//       case 'low': return 'border-r-green-500 bg-green-50';
//       default: return 'border-r-gray-300 bg-white';
//     }
//   };

//   const getSeverityBadgeClasses = (level) => {
//     switch (level) {
//       case 'high': return 'bg-red-500 text-white';
//       case 'medium': return 'bg-orange-500 text-white';
//       case 'low': return 'bg-green-500 text-white';
//       default: return 'bg-gray-500 text-white';
//     }
//   };

//   const handleZoomIn = () => setXrayZoom(prev => prev + 0.2);
//   const handleZoomOut = () => xrayZoom > 0.4 && setXrayZoom(prev => prev - 0.2);
//   const handleResetZoom = () => {
//     setXrayZoom(1);
//     setXrayPosition({ x: 0, y: 0 });
//   };

//   // X-ray Drag Handlers
//   const handleXrayMouseDown = (e) => {
//     setIsDraggingXray(true);
//     setXrayDragStart({
//       x: e.clientX - xrayPosition.x,
//       y: e.clientY - xrayPosition.y
//     });
//   };

//   const handleXrayMouseMove = (e) => {
//     if (!isDraggingXray) return;
//     setXrayPosition({
//       x: e.clientX - xrayDragStart.x,
//       y: e.clientY - xrayDragStart.y
//     });
//   };

//   const handleXrayMouseUp = () => {
//     setIsDraggingXray(false);
//   };

//   const handleLabZoomIn = () => setLabZoom(prev => prev + 0.2);
//   const handleLabZoomOut = () => labZoom > 0.4 && setLabZoom(prev => prev - 0.2);
//   const handleResetLabZoom = () => {
//     setLabZoom(1);
//     setLabPosition({ x: 0, y: 0 });
//   };

//   // Lab Test Drag Handlers
//   const handleLabMouseDown = (e) => {
//     setIsDraggingLab(true);
//     setLabDragStart({
//       x: e.clientX - labPosition.x,
//       y: e.clientY - labPosition.y
//     });
//   };

//   const handleLabMouseMove = (e) => {
//     if (!isDraggingLab) return;
//     setLabPosition({
//       x: e.clientX - labDragStart.x,
//       y: e.clientY - labDragStart.y
//     });
//   };

//   const handleLabMouseUp = () => {
//     setIsDraggingLab(false);
//   };

//   const getFilterStyle = () => {
//     switch (activeFilter) {
//       case 'contrast': return { filter: 'contrast(1.5)' };
//       case 'brightness': return { filter: 'brightness(1.3)' };
//       case 'sharpen': return { filter: 'contrast(1.2) brightness(1.1)' };
//       case 'grayscale': return { filter: 'grayscale(100%) contrast(1.2)' };
//       default: return { filter: 'none' };
//     }
//   };

//   const getLabFilterStyle = () => {
//     switch (activeLabFilter) {
//       case 'contrast': return { filter: 'contrast(1.5)' };
//       case 'brightness': return { filter: 'brightness(1.3)' };
//       case 'sharpen': return { filter: 'contrast(1.2) brightness(1.1)' };
//       case 'grayscale': return { filter: 'grayscale(100%) contrast(1.2)' };
//       default: return { filter: 'none' };
//     }
//   };

//   const handleXrayFileChange = (event) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       setUploadedXray(URL.createObjectURL(file));
//       setShowXrayModal(true);
//     }
//   };

//   const handleLabTestFileChange = (event) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       setUploadedLab(URL.createObjectURL(file));
//       setShowBloodTestModal(true);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       <div className="w-full mx-auto bg-white shadow-sm">
        
//         {/* Header */}
//         <div className="bg-[#224D7F] text-white p-8 flex flex-col md:flex-row md:p-8 gap-4 md:justify-between md:items-center">
//           <div>
//             <h1 className="text-3xl font-bold mb-2">Dr. Nada Elsalawy</h1>
//             <p className="text-lg opacity-90">Dermatology</p>
//             <p className="text-sm opacity-80">Room 205 - 2nd Floor</p>
//           </div>
//           <div className="flex gap-4 items-center">
//             <span className={`px-6 py-3 rounded-full font-bold ${isAvailable ? 'bg-green-500' : 'bg-gray-400'}`}>
//               {isAvailable ? 'Status: Available' : 'Status: Break'}
//             </span>
//             <button onClick={toggleStatus} className="px-7 py-3 border-2 border-white rounded-full font-bold hover:bg-white hover:text-slate-800 transition-all">
//               {isAvailable ? 'Take Break' : 'Return to Work'}
//             </button>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] min-h-[calc(100vh-200px)]">
//           {/* Patient Queue Sidebar */}
//           <div className="bg-slate-50 border-l border-slate-200 p-6 overflow-y-auto max-h-[calc(100vh-200px)]">
//             <div className="flex justify-between items-center mb-5">
//               <h2 className="text-xl font-bold text-slate-800">Patient Queue</h2>
//               <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">{patientQueue.length} waiting</span>
//             </div>
//             <div className="space-y-3">
//               {patientQueue.map((patient) => (
//                 <div key={patient.id} className={`bg-white p-4 rounded-xl border-r-4 cursor-pointer transition-all hover:-translate-x-1 hover:shadow-lg ${getSeverityClasses(patient.severityLevel)}`}>
//                   <div className="flex justify-between items-center mb-2">
//                     <span className="font-bold text-slate-800">{patient.name}</span>
//                     <span className={`px-2 py-1 rounded-xl text-xs font-bold ${getSeverityBadgeClasses(patient.severityLevel)}`}>{patient.severity}/10</span>
//                   </div>
//                   <div className="text-sm text-slate-600">Wait time: {patient.waitTime}</div>
//                 </div>
//               ))}
//             </div>
//             <button
//               onClick={callNextPatient}
//               disabled={!isAvailable}
//               className="w-full mt-5 py-4 bg-gradient-to-r from-azraq-400 to-blue-600 text-white rounded-xl font-bold text-lg hover:shadow-xl transition-all disabled:bg-slate-300 disabled:cursor-not-allowed"
//             >
//               Call Next Patient
//             </button>
//           </div>

//           {/* Main Patient Panel */}
//           <div className="p-8 overflow-y-auto max-h-[calc(100vh-200px)] space-y-6">
//             {!isConsulting ? (
//               <div className="flex flex-col items-center justify-center h-full text-slate-400 space-y-4">
//                 <span className="text-8xl">🏥</span>
//                 <h2 className="text-2xl font-bold text-slate-500">No Active Patient</h2>
//                 <p>Select "Call Next Patient" from the queue to start.</p>
//               </div>
//             ) : (
//               <>
//                 {/* Patient Information */}
//                 <div className="bg-white border border-slate-200 rounded-xl p-6">
//                   <h2 className="text-xl font-bold text-azraq-400 mb-5 flex items-center gap-3">
//                     <div className=""></div> 👤 Patient Information
//                   </h2>
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
//                     <div className="bg-slate-50 p-4 rounded-lg border border-slate-200  "><div className=" font-bold text-2xs  text-slate-800 mb-1">Patient ID</div><div className="text-lg font-semibold text-slate-500">{currentPatient.id}</div></div>
//                     <div className="bg-slate-50 p-4 rounded-lg border border-slate-200"><div className="text-2xs font-bold text-slate-800 mb-1">Name</div><div className="text-lg font-semibold text-slate-500">{currentPatient.name}</div></div>
//                     <div className="bg-slate-50 p-4 rounded-lg border border-slate-200"><div className="text-2xs font-bold text-slate-800 mb-1">National ID</div><div className="text-lg font-semibold text-slate-500">{currentPatient.nationalId}</div></div>
//                     <div className="bg-slate-50 p-4 rounded-lg border border-slate-200"><div className="text-2xs font-bold text-slate-800 mb-1">Age / Gender</div><div className="text-lg font-semibold text-slate-500">{currentPatient.age} years / {currentPatient.gender}</div></div>
//                     <div className="bg-slate-50 p-4 rounded-lg border border-slate-200"><div className="text-2xs font-bold text-slate-800 mb-1">Blood Type</div><div className="text-lg font-semibold text-slate-500">{currentPatient.bloodType}</div></div>
//                     <div className="bg-slate-50 p-4 rounded-lg border border-slate-200"><div className="text-2xs font-bold text-slate-800 mb-1">BMI</div><div className="text-lg font-semibold text-slate-500">{currentPatient.bmi}</div></div>
//                   </div>
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                     <div className="bg-red-50 p-5 rounded-lg border-r-4 border-red-500"><div className="font-bold text-slate-800 mb-3 text-sm">Chronic Diseases</div><ul className="space-y-1">{currentPatient.chronicDiseases.map((disease, idx) => (<li key={idx} className="text-slate-700 text-sm">• {disease}</li>))}</ul></div>
//                     <div className="bg-orange-50 p-5 rounded-lg border-r-4 border-orange-500"><div className="font-bold text-slate-800 mb-3 text-sm">Allergies</div><ul className="space-y-1">{currentPatient.allergies.map((allergy, idx) => (<li key={idx} className="text-slate-700 text-sm">• {allergy}</li>))}</ul></div>
//                     <div className="bg-blue-50 p-5 rounded-lg border-r-4 border-blue-500"><div className="font-bold text-slate-800 mb-3 text-sm">Current Medications</div><ul className="space-y-1">{currentPatient.medications.map((med, idx) => (<li key={idx} className="text-slate-700 text-sm">• {med}</li>))}</ul></div>
//                   </div>
//                 </div>

//                 {/* AI Analysis */}
//                 <div className="bg-white border border-slate-200 rounded-xl p-6">
//                   <h2 className="text-xl font-bold text-slate-800 mb-5 flex items-center gap-3">
//                     <div className=""></div> 🤖 AI Preliminary Analysis
//                   </h2>
//                   <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-xl border border-blue-500">
//                     <div className="flex justify-between items-center mb-1"><div className="font-bold text-blue-900">ٌReported Symptoms</div></div>
//            <p>Red itchy rash on arms</p>
//                     <div className="bg-white p-4 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div><div className="text-xs text-slate-600 mb-1">Ai diagnose</div><div className="font-bold text-slate-800">{aiAnalysis.diagnosis}</div></div>
//                       <div><div className="text-xs text-slate-600 mb-1">Confidence level</div><div className="font-bold text-slate-800">70%</div></div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Treatment History */}
//                 <div className="bg-white border border-slate-200 rounded-xl p-6">
//                   <h2 className="text-xl font-bold text-slate-800 mb-5 flex items-center gap-3">
//                     <div className=""></div> 📋 Treatment History
//                   </h2>
//                   <div className="space-y-3">
//                     {treatmentHistory.map((treatment) => (
//                       <div key={treatment.id} className="bg-slate-50 p-4 rounded-lg border-r-4 border-blue-500">
//                         <div className="flex justify-between items-center mb-2"><div className="font-bold text-slate-800">{treatment.condition}</div><div className="text-sm text-slate-600">{treatment.date}</div></div>
//                         <div className="text-sm text-slate-600">by {treatment.doctor}</div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Reports & Scans */}
//                 <div className="bg-white border border-slate-200 rounded-xl p-6">
//                   <h2 className="text-xl font-bold text-slate-800 mb-5 flex items-center gap-3">
//                     <div className=""></div> 🔬 Reports & Scans
//                   </h2>
//                   <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
//                     <div onClick={() => setShowXrayModal(true)} className="bg-slate-50 rounded-xl overflow-hidden cursor-pointer transition-all hover:-translate-y-2 hover:shadow-xl border-2 border-slate-200 hover:border-blue-500">
//                       <div className="bg-gradient-to-br from-slate-400 to-azraq-400 h-40 flex items-center justify-center text-white text-5xl">📊</div>
//                       <div className="p-3"><div className="font-bold text-slate-800">X-ray</div><div className="text-sm text-slate-600">2026-01-12</div></div>
//                     </div>
//                     <div onClick={() => setShowBloodTestModal(true)} className="bg-slate-50 rounded-xl overflow-hidden cursor-pointer transition-all hover:-translate-y-2 hover:shadow-xl border-2 border-slate-200 hover:border-blue-500">
//                       <div className="bg-gradient-to-br from-slate-400 to-azraq-400 h-40 flex items-center justify-center text-white text-5xl">🩸</div>
//                       <div className="p-3"><div className="font-bold text-slate-800">Blood Test</div><div className="text-sm text-slate-600">2025-12-20</div></div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Quick Actions */}
//                 <div className="bg-white border border-slate-200 rounded-xl p-6">
//                   <h2 className="text-xl font-bold text-slate-800 mb-5 flex items-center gap-3">
//                     <div className=""></div> ⚡ Quick Actions
//                   </h2>
//                   <input type="file" ref={xrayFileInputRef} onChange={handleXrayFileChange} accept="image/*" className="hidden" />
//                   <input type="file" ref={labTestFileInputRef} onChange={handleLabTestFileChange} accept="image/*" className="hidden" />
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <button onClick={() => xrayFileInputRef.current.click()} className="p-6 bg-gradient-to-r from-blue-400 to-azraq-400 text-white rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center gap-3">
//                       <span className="text-4xl">📷</span><span className="font-bold text-lg">Analyze X-ray</span><span className="text-sm opacity-90">Upload and analyze medical images</span>
//                     </button>
//                     <button onClick={() => labTestFileInputRef.current.click()} className="p-6 bg-gradient-to-r from-blue-400 to-azraq-400 text-white rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center gap-3">
//                       <span className="text-4xl">📋</span><span className="font-bold text-lg">Review Lab Test</span><span className="text-sm opacity-90">Upload and review lab results</span>
//                     </button>
//                   </div>
//                 </div>

//                 {/* Complete Consultation */}
//                 <div className="bg-white rounded-xl p-6 shadow-lg border-t-2 border-b-2 border-t-azraq-400">
//                   <h2 className="text-xl font-bold text-slate-800 mb-5 flex items-center gap-3"><div className=""></div> ✍️ Complete Consultation</h2>
//                   <div className="bg-slate-50 p-5 rounded-xl space-y-5">
//                     <div><label className="block font-bold text-slate-800 mb-2">Final Diagnosis:</label><textarea className="w-full p-3 border-2 border-slate-300 rounded-lg focus:border-blue-500 focus:outline-none resize-y min-h-[100px]" placeholder="Enter final diagnosis..." /></div>
//                     <div><label className="block font-bold text-slate-800 mb-2">Doctor's Notes:</label><textarea className="w-full p-3 border-2 border-slate-300 rounded-lg focus:border-blue-500 focus:outline-none resize-y min-h-[100px]" placeholder="Enter additional notes..." /></div>
//                     <div><label className="block font-bold text-slate-800 mb-3">AI Diagnosis Evaluation:</label><div className="flex gap-5"><label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="aiEval" value="correct" className="w-5 h-5 cursor-pointer" /><span>AI was correct</span></label><label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="aiEval" value="incorrect" className="w-5 h-5 cursor-pointer" /><span>AI was incorrect</span></label></div></div>
//                     <button onClick={handleCompleteConsultation} className="w-full py-4 bg-gradient-to-r from-azraq-400 to-blue-600 text-white rounded-xl font-bold text-xl hover:bg-green-700 shadow-lg transition-all">Complete Consultation</button>
//                   </div>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* X-ray Modal - يستخدم صورة المريض الحقيقية */}
//       {showXrayModal && (
//         <div className="fixed inset-0 bg-azraq z-50 flex items-center justify-center p-5">
//           <div className="bg-white rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
//            <div className='flex justify-between items-center'>
//              <button onClick={() => setShowXrayModal(false)} className="absolute top-3 mb-5 right-6 w-10 h-9  text-black flex items-center justify-center text-2xl hover:bg-red-600  hover:text-white">×</button>
//             <h2 className="text-xl font-bold  text-azraq-400  ">X-ray - 12-1-2026</h2>
//            </div>
//             <hr className='my-4 text-gray-300' />
//             {/* عرض صورة الأشعة */}
//             <div className="bg-slate-900 p-5 rounded-xl mb-4 overflow-hidden">
//               <div 
//                 className="relative h-[500px] overflow-hidden cursor-move flex justify-center items-center"
//                 onMouseDown={handleXrayMouseDown}
//                 onMouseMove={handleXrayMouseMove}
//                 onMouseUp={handleXrayMouseUp}
//                 onMouseLeave={handleXrayMouseUp}
//               >
//                 <img 
//                   src={scan} 
//                   alt="X-ray" 
//                   className="absolute rounded-lg transition-transform select-none w-1/2" 
//                   style={{ 
//                     transform: `translate(${xrayPosition.x}px, ${xrayPosition.y}px) scale(${xrayZoom})`,
//                     transformOrigin: 'center center',
//                     cursor: isDraggingXray ? 'grabbing' : 'grab',
//                     ...getFilterStyle()
//                   }} 
//                   draggable="false"
//                 />
//               </div>
//             </div>

//             {/* أدوات التحكم - Zoom */}
//             <div className="flex gap-3 mb-4 flex-wrap">
//               <button onClick={handleZoomIn} className="px-5 py-2 bg-[#82bbe4] text-white rounded-lg font-bold hover:bg-blue-600">
//               + Zoom In
//               </button>
//                <button onClick={handleResetZoom} className="px-5 py-2 bg-[#4c5361] text-white rounded-lg font-bold hover:bg-blue-600">
//                 ↻ Reset
//               </button>
//               <button onClick={handleZoomOut} className="px-5 py-2 bg-[#82bbe4] text-white rounded-lg font-bold hover:bg-blue-600">
//                - Zoom Out
//               </button>
             
//             </div>

//             {/* Filters */}
//             <div className="mb-4">
//               <strong className="block mb-2 text-slate-800">Filters:</strong>
//               <div className="flex gap-2 flex-wrap">
//                 {['normal', 'contrast', 'brightness', 'sharpen', 'grayscale'].map((filter) => (
//                   <button 
//                     key={filter} 
//                     onClick={() => setActiveFilter(filter)} 
//                     className={`px-4 py-2 rounded-lg text-sm font-medium ${activeFilter === filter ? 'bg-[#214371] text-white' : 'bg-slate-600 text-white hover:bg-slate-700'}`}
//                   >
//                     {filter.charAt(0).toUpperCase() + filter.slice(1)}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Report Information */}
//             <div className="bg-[#e8f3f9] p-5 rounded-xl border-b-1 border-t-1 border-azraq-400">
//               <h3 className="font-bold text-lg mb-4 text-azraq-400">Report Information:</h3>
//             <div className='flex justify-between pe-9'>
//                 <div>
//                     <h2 className='text-lg text-azraq-400'>Report Type</h2>
//                     <p className='pb-4 '>x-ray</p> 
//                     <h2 className='text-lg text-azraq-400'>Upload time</h2>
//                     <p>10:30Am</p>
//                 </div>
//                 <div>
//                     <h2 className='text-lg text-azraq-400'>Date</h2>
//                     <p className='pb-4' >12/1/2026</p>
//                     <h2 className='text-lg text-azraq-400'>Analyzed by</h2>
//                     <p className='pb-4'>  Dr Nada</p>
                  
//                 </div>
                
//             </div>
//               <div className='bg-white p-3'> 
//                         <h2> Ai Analysis</h2>
//                         <p>Lorem ipsum dolor sit amet consectetur.</p>
//                         </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Blood Test Modal - يستخدم صورة التحاليل الحقيقية */}
//       {showBloodTestModal && (
//         <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-5">
//           <div className="bg-white rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
//             <div className='flex justify-between items-center'>
//              <button onClick={() => setShowBloodTestModal(false)} className="absolute top-3 mb-5 right-6 w-10 h-9  text-black flex items-center justify-center text-2xl hover:bg-red-600  hover:text-white">×</button>
//             <h2 className="text-xl font-bold  text-azraq-400  ">X-ray - 12-1-2026</h2>
//            </div>
//             <hr className='my-4 text-gray-300' />
            
//             {/* عرض صورة التحليل */}
//             <div className="bg-slate-900 p-5 rounded-xl mb-4 overflow-hidden">
//               <div 
//                 className="relative h-[500px] overflow-hidden cursor-move flex justify-center items-center"
//                 onMouseDown={handleLabMouseDown}
//                 onMouseMove={handleLabMouseMove}
//                 onMouseUp={handleLabMouseUp}
//                 onMouseLeave={handleLabMouseUp}
//               >
//                 <img 
//                   src={lab} 
//                   alt="Lab Test" 
//                   className="absolute rounded-lg transition-transform select-none w-1/2" 
//                   style={{ 
//                     transform: `translate(${labPosition.x}px, ${labPosition.y}px) scale(${labZoom})`,
//                     transformOrigin: 'center center',
//                     cursor: isDraggingLab ? 'grabbing' : 'grab',
//                     ...getLabFilterStyle()
//                   }} 
//                   draggable="false"
//                 />
//               </div>
//             </div>

//             {/* أدوات التحكم - Zoom */}
//             <div className="flex gap-3 mb-4 flex-wrap">
//               <button onClick={handleLabZoomIn} className="px-5 py-2 bg-[#82bbe4] text-white rounded-lg font-bold hover:bg-blue-600">
//                 + Zoom In
//               </button>
//               <button onClick={handleResetLabZoom} className="px-5 py-2 bg-[#4c5361] text-white rounded-lg font-bold hover:bg-blue-600">
//                 ↻ Reset
//               </button>
//               <button onClick={handleLabZoomOut} className="px-5 py-2 bg-[#82bbe4] text-white rounded-lg font-bold hover:bg-blue-600">
//                 - Zoom Out
//               </button>
              
//             </div>

//             {/* Filters */}
//             <div className="mb-4">
//               <strong className="block mb-2 text-slate-800">Filters:</strong>
//               <div className="flex gap-2 flex-wrap">
//                 {['normal', 'contrast', 'brightness', 'sharpen', 'grayscale'].map((filter) => (
//                   <button 
//                     key={filter} 
//                     onClick={() => setActiveLabFilter(filter)} 
//                     className={`px-4 py-2 rounded-lg text-sm font-medium ${activeLabFilter === filter ? 'bg-blue-500 text-white' : 'bg-slate-600 text-white hover:bg-slate-700'}`}
//                   >
//                     {filter.charAt(0).toUpperCase() + filter.slice(1)}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* AI Analysis */}
//           <div className="bg-[#e8f3f9] p-5 rounded-xl border-b-1 border-t-1 border-azraq-400">
//               <h3 className="font-bold text-lg mb-4 text-azraq-400">Report Information:</h3>
//             <div className='flex justify-between pe-9'>
//                 <div>
//                     <h2 className='text-lg text-azraq-400'>Report Type</h2>
//                     <p className='pb-4 '>Blood Test</p> 
//                     <h2 className='text-lg text-azraq-400'>Upload time</h2>
//                     <p>10:30Am</p>
//                 </div>
//                 <div>
//                     <h2 className='text-lg text-azraq-400'>Date</h2>
//                     <p className='pb-4' >12/1/2026</p>
//                     <h2 className='text-lg text-azraq-400'>Analyzed by</h2>
//                     <p className='pb-4'>  Dr Nada</p>
                  
//                 </div>
                
//             </div>
//               <div className='bg-white p-3'> 
//                         <h2 className='my-3'> Ai Analysis</h2>
//                         <p>Hemoglobin:14.2g/dl(Normal)</p>
//                         <p>WBC : 7,500/ul(Normal)</p>
//                         </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DoctorDashboard;


import React, { useState, useRef } from 'react';
import scan from "../assets/images/WhatsApp Image 2026-02-07 at 16.07.11.jpeg"
import lab from "../assets/images/WhatsApp Image 2026-02-07 at 18.47.30.jpeg"
const DoctorDashboard = () => {
  const [isAvailable, setIsAvailable] = useState(true);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [showXrayModal, setShowXrayModal] = useState(false);
  const [showBloodTestModal, setShowBloodTestModal] = useState(false);
  const [xrayZoom, setXrayZoom] = useState(1);
  const [labZoom, setLabZoom] = useState(1);
  const [activeFilter, setActiveFilter] = useState('normal');
  const [activeLabFilter, setActiveLabFilter] = useState('normal');
  const [uploadedXray, setUploadedXray] = useState(null);
  const [uploadedLab, setUploadedLab] = useState(null);
  const [isConsulting, setIsConsulting] = useState(true);

  // Drag state for X-ray
  const [xrayPosition, setXrayPosition] = useState({ x: 0, y: 0 });
  const [isDraggingXray, setIsDraggingXray] = useState(false);
  const [xrayDragStart, setXrayDragStart] = useState({ x: 0, y: 0 });

  // Drag state for Lab Test
  const [labPosition, setLabPosition] = useState({ x: 0, y: 0 });
  const [isDraggingLab, setIsDraggingLab] = useState(false);
  const [labDragStart, setLabDragStart] = useState({ x: 0, y: 0 });

  const xrayFileInputRef = useRef(null);
  const labTestFileInputRef = useRef(null);

  // جعل القائمة State ليتم تقليل العدد
  const [patientQueue, setPatientQueue] = useState([
    {
      id: 1,
      name: 'Hoda Mohamed',
      waitTime: '~5 minutes',
      severity: 8,
      severityLevel: 'high'
    },
    {
      id: 2,
      name: 'Sara Khalil',
      waitTime: '~15 minutes',
      severity: 5,
      severityLevel: 'medium'
    },
    {
      id: 3,
      name: 'Omar Said',
      waitTime: '~25 minutes',
      severity: 3,
      severityLevel: 'low'
    }
  ]);

  const currentPatient = {
    id: '#124',
    name: 'Nada Mohamed Ali',
    nationalId: '30310011700357',
    age: 23,
    gender: 'Female',
    bloodType: 'A+',
    bmi: 25.5,
    chronicDiseases: ['Hypertension', 'Asthma'],
    allergies: ['Penicillin', 'Aspirin'],
    medications: ['Amlodipine 5mg', 'Ventolin Inhaler']
  };

  const aiAnalysis = {
    symptoms: 'Red, itchy rash on arms and legs with dry scales for two weeks',
    diagnosis: 'Possible Psoriasis',
    confidence: 82,
    department: 'Dermatology'
  };

  const treatmentHistory = [
    {
      id: 1,
      condition: 'Contact Dermatitis',
      date: '2024-11-15',
      doctor: 'Dr. Sara Ahmed'
    },
    {
      id: 2,
      condition: 'Eczema',
      date: '2024-08-20',
      doctor: 'Dr. Mahmoud Khalid'
    }
  ];

  // الصور المحفوظة من المريض
  const patientXrayImage = '/mnt/user-data/uploads/28512.jpg';
  const patientLabTestImage = '/mnt/user-data/uploads/28513.jpg';

  const toggleStatus = () => {
    setIsAvailable(!isAvailable);
  };

  const callNextPatient = () => {
    if (!isAvailable || patientQueue.length === 0) return;
    alert('Calling next patient: ' + patientQueue[0].name);
    setPatientQueue(prev => prev.slice(1));
    setIsConsulting(true);
  };

  const handleCompleteConsultation = () => {
    setIsConsulting(false);
    setUploadedXray(null);
    setUploadedLab(null);
  };

  const getSeverityClasses = (level) => {
    switch (level) {
      case 'high': return 'border-r-red-500 bg-red-50';
      case 'medium': return 'border-r-orange-500 bg-orange-50';
      case 'low': return 'border-r-green-500 bg-green-50';
      default: return 'border-r-gray-300 bg-white';
    }
  };

  const getSeverityBadgeClasses = (level) => {
    switch (level) {
      case 'high': return 'bg-red-500 text-white';
      case 'medium': return 'bg-orange-500 text-white';
      case 'low': return 'bg-green-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const handleZoomIn = () => setXrayZoom(prev => prev + 0.2);
  const handleZoomOut = () => xrayZoom > 0.4 && setXrayZoom(prev => prev - 0.2);
  const handleResetZoom = () => {
    setXrayZoom(1);
    setXrayPosition({ x: 0, y: 0 });
  };

  // X-ray Drag Handlers
  const handleXrayMouseDown = (e) => {
    setIsDraggingXray(true);
    setXrayDragStart({
      x: e.clientX - xrayPosition.x,
      y: e.clientY - xrayPosition.y
    });
  };

  const handleXrayMouseMove = (e) => {
    if (!isDraggingXray) return;
    setXrayPosition({
      x: e.clientX - xrayDragStart.x,
      y: e.clientY - xrayDragStart.y
    });
  };

  const handleXrayMouseUp = () => {
    setIsDraggingXray(false);
  };

  const handleLabZoomIn = () => setLabZoom(prev => prev + 0.2);
  const handleLabZoomOut = () => labZoom > 0.4 && setLabZoom(prev => prev - 0.2);
  const handleResetLabZoom = () => {
    setLabZoom(1);
    setLabPosition({ x: 0, y: 0 });
  };

  // Lab Test Drag Handlers
  const handleLabMouseDown = (e) => {
    setIsDraggingLab(true);
    setLabDragStart({
      x: e.clientX - labPosition.x,
      y: e.clientY - labPosition.y
    });
  };

  const handleLabMouseMove = (e) => {
    if (!isDraggingLab) return;
    setLabPosition({
      x: e.clientX - labDragStart.x,
      y: e.clientY - labDragStart.y
    });
  };

  const handleLabMouseUp = () => {
    setIsDraggingLab(false);
  };

  const getFilterStyle = () => {
    switch (activeFilter) {
      case 'contrast': return { filter: 'contrast(1.5)' };
      case 'brightness': return { filter: 'brightness(1.3)' };
      case 'sharpen': return { filter: 'contrast(1.2) brightness(1.1)' };
      case 'grayscale': return { filter: 'grayscale(100%) contrast(1.2)' };
      default: return { filter: 'none' };
    }
  };

  const getLabFilterStyle = () => {
    switch (activeLabFilter) {
      case 'contrast': return { filter: 'contrast(1.5)' };
      case 'brightness': return { filter: 'brightness(1.3)' };
      case 'sharpen': return { filter: 'contrast(1.2) brightness(1.1)' };
      case 'grayscale': return { filter: 'grayscale(100%) contrast(1.2)' };
      default: return { filter: 'none' };
    }
  };

  const handleXrayFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedXray(URL.createObjectURL(file));
      setShowXrayModal(true);
      event.target.value = null;
    }
  };

  const handleLabTestFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedLab(URL.createObjectURL(file));
      setShowBloodTestModal(true);
      event.target.value = null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="w-full mx-auto bg-[#e8f3f9] shadow-sm">
        
        {/* Header */}
        <div className="bg-white border-b border-slate-200 p-4 flex  flex-col sm:flex-row gap-3  sm:justify-between sm:items-center">
          <div>
            <h1 className="text-2xl font-bold text-[#2C5F8D]">Dr. Nada Elsalawy</h1>
            <p className="text-sm text-[#5B9BD5]">Dermatology</p>
            <p className="text-xs text-slate-500">Room 205 - 2nd Floor</p>
          </div>
          <div className="flex gap-3 items-center">
            <button className={`px-5 py-2 rounded-lg font-medium text-sm ${!isAvailable ? 'bg-gray-100 text-gray-600' : (isConsulting ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600')}`}>
              Status: {!isAvailable ? 'Break' : (isConsulting ? 'Busy' : 'Available')}
            </button>
            <button onClick={toggleStatus} className="px-5 py-2 bg-azraq-400 hover:bg-slate-800 text-white rounded-lg font-medium text-sm transition-all">
              {isAvailable ? 'Take Break' : 'Return to Work'}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr]">
          {/* Patient Queue Sidebar */}
          <div className="bg-slate-50 border-l border-slate-200 lg:p-6 lg:sticky p-5 lg:top-0 lg:h-screen overflow-y-auto">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-xl font-bold text-slate-800">Patient Queue</h2>
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">{patientQueue.length} waiting</span>
            </div>
            <div className="space-y-3">
              {patientQueue.map((patient) => (
                <div key={patient.id} className={`bg-white p-4 rounded-xl border-r-4 cursor-pointer transition-all hover:-translate-x-1 hover:shadow-lg ${getSeverityClasses(patient.severityLevel)}`}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-slate-800">{patient.name}</span>
                    <span className={`px-2 py-1 rounded-xl text-xs font-bold ${getSeverityBadgeClasses(patient.severityLevel)}`}>{patient.severity}/10</span>
                  </div>
                  <div className="text-sm text-slate-600">Wait time: {patient.waitTime}</div>
                </div>
              ))}
            </div>
            <button
              onClick={callNextPatient}
              disabled={!isAvailable}
              className="w-full mt-5 py-4 bg-gradient-to-r from-azraq-400 to-blue-600 text-white rounded-xl font-bold text-lg hover:shadow-xl transition-all disabled:bg-slate-300 disabled:cursor-not-allowed"
            >
              Call Next Patient
            </button>
          </div>

          {/* Main Patient Panel */}
          <div className="p-4 sm:p-6 lg:p-8 space-y-6">
            {!isConsulting ? (
              <div className="flex flex-col items-center justify-center h-full text-slate-400 space-y-4">
                <span className="text-8xl">🏥</span>
                <h2 className="text-2xl font-bold text-slate-500">No Active Patient</h2>
                <p>Select "Call Next Patient" from the queue to start.</p>
              </div>
            ) : (
              <>
                {/* Patient Information */}
                <div className="bg-white border border-slate-200 rounded-xl p-6">
                  <h2 className="text-xl font-bold text-azraq-400 mb-5 flex items-center gap-3">
                    <div className=""></div> 👤 Patient Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200  "><div className=" font-bold text-2xs  text-slate-800 mb-1">Patient ID</div><div className="text-lg font-semibold text-slate-500">{currentPatient.id}</div></div>
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200"><div className="text-2xs font-bold text-slate-800 mb-1">Name</div><div className="text-lg font-semibold text-slate-500">{currentPatient.name}</div></div>
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200"><div className="text-2xs font-bold text-slate-800 mb-1">National ID</div><div className="text-lg font-semibold text-slate-500">{currentPatient.nationalId}</div></div>
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200"><div className="text-2xs font-bold text-slate-800 mb-1">Age / Gender</div><div className="text-lg font-semibold text-slate-500">{currentPatient.age} years / {currentPatient.gender}</div></div>
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200"><div className="text-2xs font-bold text-slate-800 mb-1">Blood Type</div><div className="text-lg font-semibold text-slate-500">{currentPatient.bloodType}</div></div>
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200"><div className="text-2xs font-bold text-slate-800 mb-1">BMI</div><div className="text-lg font-semibold text-slate-500">{currentPatient.bmi}</div></div>
                  </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-red-50 p-4 rounded-xl">
                      <p className="font-bold text-red-700 mb-2">⚠️ Chronic Diseases</p>
                      <ul className="text-sm space-y-1">{currentPatient.chronicDiseases.map((disease, i) => (<li key={i} className="text-slate-700">• {disease}</li>))}</ul>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-xl">
                      <p className="font-bold text-orange-700 mb-2">🚫 Allergies</p>
                      <ul className="text-sm space-y-1">{currentPatient.allergies.map((allergy, i) => (<li key={i} className="text-slate-700">• {allergy}</li>))}</ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-xl">
                      <p className="font-bold text-green-700 mb-2">💊 Current Medications</p>
                      <ul className="text-sm space-y-1">{currentPatient.medications.map((med, i) => (<li key={i} className="text-slate-700">• {med}</li>))}</ul>
                    </div>
                  </div>
                </div>

                {/* AI Analysis */}
                <div className="bg-white border border-slate-200 rounded-xl p-6">
                  <h2 className="text-xl font-bold text-slate-800 mb-5 flex items-center gap-3">
                    <div className=""></div> 🤖 AI Preliminary Analysis
                  </h2>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-xl border border-blue-500">
                    <div className="flex justify-between items-center mb-1"><div className="font-bold text-blue-900">Reported Symptoms</div></div>
           <p className='py-3'>Red itchy rash on arms</p>
                    <div className="bg-white p-4 rounded-lg grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div><div className="text-2xs text-slate-600 mb-1">Ai diagnose</div><div className="font-bold text-slate-800">{aiAnalysis.diagnosis}</div></div>
                      <div><div className="text-2xs text-slate-600 mb-1">Confidence level</div><div className="font-bold text-slate-800">70%</div></div>
                      <div><div className="text-2xs text-slate-600 mb-1">Recomended department</div><div className="font-bold text-slate-800">Dermatology</div></div>
                    </div>
                  </div>
                </div>

                {/* Treatment History */}
                <div className="bg-white border border-slate-200 rounded-xl p-6">
                  <h2 className="text-xl font-bold text-slate-800 mb-5 flex items-center gap-3">
                    <div className=""></div> 📋 Treatment History
                  </h2>
                  <div className="space-y-3">
                    {treatmentHistory.map((treatment) => (
                      <div key={treatment.id} className="bg-slate-50 p-4 rounded-lg border-r-4 border-blue-500">
                        <div className="flex justify-between items-center mb-2"><div className="font-bold text-slate-800">{treatment.condition}</div><div className="text-sm text-slate-600">{treatment.date}</div></div>
                        <div className="text-sm text-slate-600">by {treatment.doctor}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Reports & Scans */}
                <div className="bg-white border border-slate-200 rounded-xl p-6">
                  <h2 className="text-xl font-bold text-slate-800 mb-5 flex items-center gap-3">
                    <div className=""></div> 🔬 Reports & Scans
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div onClick={() => setShowXrayModal(true)} className="bg-slate-50 rounded-xl overflow-hidden cursor-pointer transition-all hover:-translate-y-2 hover:shadow-xl border-2 border-slate-200 hover:border-blue-500">
                      <div className="sm:h-48 h-39 bg-slate-900 flex items-center justify-center overflow-hidden">
                        <img src={uploadedXray || scan} alt="X-ray" className="h-full w-full object-cover" />
                      </div>
                      <div className="p-4 bg-white">
                        <div className="font-bold text-slate-800 text-lg">X-ray</div>
                        <div className="text-sm text-slate-600">Click to view details</div>
                      </div>
                    </div>
                    <div onClick={() => setShowBloodTestModal(true)} className="bg-slate-50 rounded-xl overflow-hidden cursor-pointer transition-all hover:-translate-y-2 hover:shadow-xl border-2 border-slate-200 hover:border-blue-500">
                      <div className="sm:h-48 h-39 bg-slate-900 flex items-center justify-center overflow-hidden">
                        <img src={uploadedLab || lab} alt="Lab Test" className="h-full w-full object-cover" />
                      </div>
                      <div className="p-4 bg-white">
                        <div className="font-bold text-slate-800 text-lg">Blood Test</div>
                        <div className="text-sm text-slate-600">Click to view details</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white border border-slate-200 rounded-xl p-6">
                  <h2 className="text-xl font-bold text-slate-800 mb-5 flex items-center gap-3">
                    <div className=""></div> ⚡ Quick Actions
                  </h2>
                  <input type="file" ref={xrayFileInputRef} onChange={handleXrayFileChange} accept="image/*" className="hidden" />
                  <input type="file" ref={labTestFileInputRef} onChange={handleLabTestFileChange} accept="image/*" className="hidden" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button onClick={() => xrayFileInputRef.current.click()} className="p-6 bg-gradient-to-r from-blue-400 to-azraq-400 text-white rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center gap-3">
                      <span className="text-4xl">📷</span><span className="font-bold text-lg">Analyze X-ray</span><span className="text-sm opacity-90">Upload and analyze medical images</span>
                    </button>
                    <button onClick={() => labTestFileInputRef.current.click()} className="p-6 bg-gradient-to-r from-blue-400 to-azraq-400 text-white rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center gap-3">
                      <span className="text-4xl">📋</span><span className="font-bold text-lg">Review Lab Test</span><span className="text-sm opacity-90">Upload and review lab results</span>
                    </button>
                  </div>
                </div>

                {/* Complete Consultation */}
                <div className="bg-white rounded-xl p-6 shadow-lg border-t-2 border-b-2 border-t-azraq-400">
                  <h2 className="text-xl font-bold text-slate-800 mb-5 flex items-center gap-3"><div className=""></div> ✍️ Complete Consultation</h2>
                  <div className="bg-slate-50 p-5 rounded-xl space-y-5">
                    <div><label className="block font-bold text-slate-800 mb-2">Final Diagnosis:</label><textarea className="w-full p-3 border-2 border-slate-300 rounded-lg focus:border-blue-500 focus:outline-none resize-y min-h-[100px]" placeholder="Enter final diagnosis..." /></div>
                    <div><label className="block font-bold text-slate-800 mb-2">Doctor's Notes:</label><textarea className="w-full p-3 border-2 border-slate-300 rounded-lg focus:border-blue-500 focus:outline-none resize-y min-h-[100px]" placeholder="Enter additional notes..." /></div>
                    <div><label className="block font-bold text-slate-800 mb-3">AI Diagnosis Evaluation:</label><div className="flex gap-5"><label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="aiEval" value="correct" className="w-5 h-5 cursor-pointer" /><span>AI was correct</span></label><label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="aiEval" value="incorrect" className="w-5 h-5 cursor-pointer" /><span>AI was incorrect</span></label></div></div>
                    <button onClick={handleCompleteConsultation} className="w-full py-4 bg-gradient-to-r from-azraq-400 to-blue-600 text-white rounded-xl font-bold text-xl hover:bg-green-700 shadow-lg transition-all">Complete Consultation</button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* X-ray Modal - يستخدم صورة المريض الحقيقية */}
      {showXrayModal && (
        <div className="fixed inset-0 bg-azraq z-50 flex items-center justify-center p-5">
          <div className="bg-white rounded-3xl p-4 sm:p-6 lg:p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
           <div className='flex justify-between items-center'>
             <button onClick={() => setShowXrayModal(false)} className="absolute top-3 mb-5 right-6 w-10 h-9  text-black flex items-center justify-center text-2xl hover:bg-red-600  hover:text-white">×</button>
            <h2 className="text-xl font-bold  text-azraq-400  ">X-ray - 12-1-2026</h2>
           </div>
            <hr className='my-4 text-gray-300' />
            {/* عرض صورة الأشعة */}
            <div className="bg-slate-900 p-5 rounded-xl mb-4 overflow-hidden">
              <div 
                className="relative h-[500px] overflow-hidden cursor-move flex justify-center items-center"
                onMouseDown={handleXrayMouseDown}
                onMouseMove={handleXrayMouseMove}
                onMouseUp={handleXrayMouseUp}
                onMouseLeave={handleXrayMouseUp}
              >
                <img 
                  src={uploadedXray || scan} 
                  alt="X-ray" 
                  className="absolute rounded-lg transition-transform select-none w-full sm:w-1/2" 
                  style={{ 
                    transform: `translate(${xrayPosition.x}px, ${xrayPosition.y}px) scale(${xrayZoom})`,
                    transformOrigin: 'center center',
                    cursor: isDraggingXray ? 'grabbing' : 'grab',
                    ...getFilterStyle()
                  }} 
                  draggable="false"
                />
              </div>
            </div>

            {/* أدوات التحكم - Zoom */}
            <div className="flex gap-3 mb-4 flex-wrap">
              <button onClick={handleZoomIn} className="px-5 py-2 bg-[#82bbe4] text-white rounded-lg font-bold hover:bg-blue-600">
              + Zoom In
              </button>
               <button onClick={handleResetZoom} className="px-5 py-2 bg-[#4c5361] text-white rounded-lg font-bold hover:bg-blue-600">
                ↻ Reset
              </button>
              <button onClick={handleZoomOut} className="px-5 py-2 bg-[#82bbe4] text-white rounded-lg font-bold hover:bg-blue-600">
               - Zoom Out
              </button>
             
            </div>

            {/* Filters */}
            <div className="mb-4">
              <strong className="block mb-2 text-slate-800">Filters:</strong>
              <div className="flex gap-2 flex-wrap">
                {['normal', 'contrast', 'brightness', 'sharpen', 'grayscale'].map((filter) => (
                  <button 
                    key={filter} 
                    onClick={() => setActiveFilter(filter)} 
                    className={`px-4 py-2 rounded-lg text-sm font-medium ${activeFilter === filter ? 'bg-[#214371] text-white' : 'bg-slate-600 text-white hover:bg-slate-700'}`}
                  >
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Report Information */}
            <div className="bg-[#e8f3f9] p-5 rounded-xl border-b-1 border-t-1 border-azraq-400">
              <h3 className="font-bold text-lg mb-4 text-azraq-400">Report Information:</h3>
            <div className='flex justify-between pe-9'>
                <div>
                    <h2 className='text-lg text-azraq-400'>Report Type</h2>
                    <p className='pb-4 '>x-ray</p> 
                    <h2 className='text-lg text-azraq-400'>Upload time</h2>
                    <p>10:30Am</p>
                </div>
                <div>
                    <h2 className='text-lg text-azraq-400'>Date</h2>
                    <p className='pb-4' >12/1/2026</p>
                    <h2 className='text-lg text-azraq-400'>Analyzed by</h2>
                    <p className='pb-4'>  Dr Nada</p>
                  
                </div>
                
            </div>
              <div className='bg-white p-3 sm:w-auto'> 
                        <h2 className='my-3 text-center'> Ai Analysis</h2>
                        <p className='my-3 text-center'>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
            </div>
          </div>
        </div>
      )}

      {/* Blood Test Modal - يستخدم صورة التحاليل الحقيقية */}
      {showBloodTestModal && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-5">
          <div className="bg-white rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            <div className='flex justify-between items-center'>
             <button onClick={() => setShowBloodTestModal(false)} className="absolute top-3 mb-5 right-6 w-10 h-9  text-black flex items-center justify-center text-2xl hover:bg-red-600  hover:text-white">×</button>
            <h2 className="text-xl font-bold  text-azraq-400  ">X-ray - 12-1-2026</h2>
           </div>
            <hr className='my-4 text-gray-300' />
            
            {/* عرض صورة التحليل */}
            <div className="bg-slate-900 p-5 rounded-xl mb-4 overflow-hidden">
              <div 
                className="relative h-[500px] overflow-hidden cursor-move flex justify-center items-center"
                onMouseDown={handleLabMouseDown}
                onMouseMove={handleLabMouseMove}
                onMouseUp={handleLabMouseUp}
                onMouseLeave={handleLabMouseUp}
              >
                <img 
                  src={uploadedLab || lab} 
                  alt="Lab Test" 
                  className="absolute rounded-lg transition-transform select-none w-1/2" 
                  style={{ 
                    transform: `translate(${labPosition.x}px, ${labPosition.y}px) scale(${labZoom})`,
                    transformOrigin: 'center center',
                    cursor: isDraggingLab ? 'grabbing' : 'grab',
                    ...getLabFilterStyle()
                  }} 
                  draggable="false"
                />
              </div>
            </div>

            {/* أدوات التحكم - Zoom */}
            <div className="flex gap-3 mb-4 flex-wrap">
              <button onClick={handleLabZoomIn} className="px-5 py-2 bg-[#82bbe4] text-white rounded-lg font-bold hover:bg-blue-600">
                + Zoom In
              </button>
              <button onClick={handleResetLabZoom} className="px-5 py-2 bg-[#4c5361] text-white rounded-lg font-bold hover:bg-blue-600">
                ↻ Reset
              </button>
              <button onClick={handleLabZoomOut} className="px-5 py-2 bg-[#82bbe4] text-white rounded-lg font-bold hover:bg-blue-600">
                - Zoom Out
              </button>
              
            </div>

            {/* Filters */}
            <div className="mb-4">
              <strong className="block mb-2 text-slate-800">Filters:</strong>
              <div className="flex gap-2 flex-wrap">
                {['normal', 'contrast', 'brightness', 'sharpen', 'grayscale'].map((filter) => (
                  <button 
                    key={filter} 
                    onClick={() => setActiveLabFilter(filter)} 
                    className={`px-4 py-2 rounded-lg text-sm font-medium ${activeLabFilter === filter ? 'bg-blue-500 text-white' : 'bg-slate-600 text-white hover:bg-slate-700'}`}
                  >
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* AI Analysis */}
          <div className="bg-[#e8f3f9] p-5 rounded-xl border-b-1 border-t-1 border-azraq-400">
              <h3 className="font-bold text-lg mb-4 text-azraq-400">Report Information:</h3>
            <div className='flex justify-between pe-9'>
                <div>
                    <h2 className='text-lg text-azraq-400'>Report Type</h2>
                    <p className='pb-4 '>Blood Test</p> 
                    <h2 className='text-lg text-azraq-400'>Upload time</h2>
                    <p>10:30Am</p>
                </div>
                <div>
                    <h2 className='text-lg text-azraq-400'>Date</h2>
                    <p className='pb-4' >12/1/2026</p>
                    <h2 className='text-lg text-azraq-400'>Analyzed by</h2>
                    <p className='pb-4'>  Dr Nada</p>
                  
                </div>
                
            </div>
              <div className='bg-white p-3  sm:p-4 sm:w-auto'> 
                        <h2 className='my-3 text-center'> Ai Analysis</h2>
                        <p className='text-center'>Hemoglobin:14.2g/dl(Normal)</p>
                        <p className='text-center'>WBC : 7,500/ul(Normal)</p>
                        </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorDashboard;