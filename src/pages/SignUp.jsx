// import React from 'react'
// import photo from "../assets/images/WhatsApp Image 2026-02-03 at 15.51.25.jpeg"
// import style from "../pages/DrHome.module.css"
// import { Button } from '@heroui/react'
// import { Link } from 'react-router'

// export default function DrHome() {
//   return (
//     <div className={style.container}>
//       <img src={photo} className={style.bgg} alt="Background" /> 

//       {/* Form Card */}
//       <div className=' my-45 backdrop-blur-sm bg-black/20 border border-white/20 rounded-3xl shadow-2xl py-12 px-8 max-w-lg w-full mx-auto'>
//         {/* Title */}
//         <h1 className='bg-gradient-to-r from-black/30 via-yellow-400 to-yellow-700 bg-clip-text text-transparent text-center text-4xl  pb-8'>
//           Register
//         </h1>

//         {/* Form */}
//         <form className='flex flex-col gap-6'>
//           {/* Email Input */}
//           <div>
//             <input 
//               type="email" 
//               className="bg-white/95 border-0 text-gray-800 text-base rounded-xl focus:ring-2 focus:ring-yellow-400 block w-full px-4 py-3.5 shadow-md placeholder:text-gray-500 transition-all" 
//               placeholder="Email" 
//               required 
//             />
//           </div>

//           {/* Password Input */}
//           <div>
//             <input 
//               type="password" 
//               className="bg-white/95 border-0 text-gray-800 text-base rounded-xl focus:ring-2 focus:ring-yellow-400 block w-full px-4 py-3.5 shadow-md placeholder:text-gray-500 transition-all" 
//               placeholder="Password" 
//               required 
//             />
//           </div>

//           {/* Submit Button */}
//           <Button 
//             type="submit"
//             className='w-full text-xl font-semibold bg-gradient-to-r from-yellow-200 to-yellow-400 text-black py-7 rounded-xl shadow-lg hover:shadow-xl transition-all mt-2'
//           >
//             Submit
//           </Button>

//           {/* Sign Up Link */}
//           <p className='text-white text-center text-base mt-2'>
//             If you don't have an email, please{' '}
//             <Link to="/SignUp">
//               <span className='text-yellow-400 font-semibold hover:text-yellow-300 cursor-pointer underline decoration-yellow-400/50 hover:decoration-yellow-300 transition-colors'>
//                 Sign Up
//               </span>
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   )
// }





// import React from 'react'
// import photo from "../assets/images/WhatsApp Image 2026-02-03 at 15.51.24 (1).jpeg"
// import style from "../pages/DrHome.module.css"
// import { Button,Input} from '@heroui/react'
// import { Link } from 'react-router'
// import {Select, SelectItem} from "@heroui/select";
// export default function DrHome() {
//   return (
//     <div className={style.container}>
//       {/* الخلفية بتفضل زي ما هي واضحة */}
//       <img src={photo} className={style.bgg} alt="Background" /> 

//       {/* الفورم بقى شفاف Glassmorphism عشان يبين اللي وراه */}
//       <div className='  backdrop-blur-md bg-white/10 border border-white/30 rounded-3xl shadow-2xl py-6 px-8 max-w-lg w-full mx-auto'>
        
//         {/* العنوان بلون أزرق طبي مريح للعين */}
//         <h1 className='text-white text-center text-5xl font-semibold pb-8 tracking-wide'>
//         Sign Up
//         </h1>

//         <form className='flex flex-col gap-6'>
//           {/* Email Input */}
//           <div>
//             <Input 
//             variant='borderd'
//               type="name" 
//              placeholder="Name"
//                 classNames={{
//                   input: "text-xl px-0 py-0 bg-white border-0 text-gray-800 text-base rounded-xl focus:ring-2 focus:ring-blue-400 block w-full px-4 py-3.5 shadow-md placeholder:text-gray-500 transition-all",
//                   inputWrapper: "border border-black rounded-2xl bg-white py-9",
//                 }}
//             />
//           </div>

//           <div>
//             <Input 
//             variant='borderd'
//               type="email" 
//              placeholder="Email"
//                 classNames={{
//                   input: "text-xl px-0 py-0 bg-white border-0 text-gray-800 text-base rounded-xl focus:ring-2 focus:ring-blue-400 block w-full px-4 py-3.5 shadow-md placeholder:text-gray-500 transition-all",
//                   inputWrapper: "border border-black rounded-2xl bg-white py-9",
//                 }}
//             />
//           </div>

//           {/* Password Input */}
//           <div>
//              <Input 
//             variant='borderd'
//               type="password" 
//              placeholder="password"
//                 classNames={{
//                   input: "text-xl px-0 py-0 bg-white border-0 text-gray-800 text-base rounded-xl focus:ring-2 focus:ring-blue-400 block w-full px-4 py-3.5 shadow-md placeholder:text-gray-500 transition-all",
//                   inputWrapper: "border border-black rounded-2xl bg-white py-9",
//                 }}
//             />
//           </div>
// <div>
//              <Input 
//             variant='borderd'
//               type="password" 
//              placeholder="repassword"
//                 classNames={{
//                   input: "text-xl px-0 py-0 bg-white border-0 text-gray-800 text-base rounded-xl focus:ring-2 focus:ring-blue-400 block w-full px-4 py-3.5 shadow-md placeholder:text-gray-500 transition-all",
//                   inputWrapper: "border border-black rounded-2xl bg-white py-9",
//                 }}
//             />
//           </div>
//           <div className='flex justify-between gap-1.5'>
//              <Input 
//             variant='borderd'
//               type="date" 
//              placeholder="Date of birth"
//                 classNames={{
//                   input: "text-xl px-0 py-0 bg-white border-0 text-gray-800 text-base rounded-xl focus:ring-2 focus:ring-blue-400 block w-full px-4 py-3.5 shadow-md placeholder:text-gray-500 transition-all",
//                   inputWrapper: "border border-black rounded-2xl bg-white py-7",
//                 }}
//             />
//             <Select  label = "Select you gender">
//               <SelectItem key={'Male'} >Male</SelectItem>
//               <SelectItem key={"Female"}>FeMale</SelectItem>
//             </Select>
             
//           </div>
//           {/* زرار بلون أزرق احترافي (Medical Blue) */}
//           <Button 
//             type="submit"
//             className='w-full text-xl font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-7 rounded-xl shadow-lg hover:shadow-cyan-500/50 hover:scale-[1.02] transition-all mt-2'
//           >
//             Submit
//           </Button>

//           {/* رابط التسجيل */}
//           <p className='text-white text-center text-base mt-2'>
//             If you don't have an email, please{' '}
//             <Link to="/">
//               <span className='text-[#5593CA] font-semibold hover:text-white cursor-pointer underline transition-colors'>
//                 Sign in
//               </span>
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   )
// }