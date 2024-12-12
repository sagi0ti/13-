import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_nxq79vc', 'template_nvl1ay3', form.current, {
        publicKey: 'DMNn-TKLViEQdkIse',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className='flex flex-col rounded-xl shadow-2xl m-auto my-[50px] h-[320px]  bg-blue-gray-100 w-[400px]'>
      <form className='flex flex-col gap-2 m-auto my-[40px] text-center w-[300px]' ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea className='m-1' name="message" />
      <input className='bg-black w-[100px] m-auto text-white rounded-2xl'  type="submit" value="Send" />
    </form>
    </div>
    
  );
}
