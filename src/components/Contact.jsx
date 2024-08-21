import { useState } from 'react'
import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);
const resend = new Resend('re_123456789');

const Contact = () => {
  
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  
  console.log({email, subject, message})
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Holaaaaa')
    await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: 'cristiandavidlaguna.97@gmail.com',
      subject: 'subject',
      html: `<p>sdfsdffds</p>`
    });
  };

  return (
  <div className="border-b border-gray-900/10 pb-12 px-4">
    <h2 className="text-2xl leading-7 text-gray-900">Contacto</h2>
    <form onSubmit={handleSubmit} className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
      <div className="sm:col-span-3">
        <label className="block text-sm font-medium leading-6 text-gray-900">Asunto</label>
        <div className="mt-2">
          <input
            type="text"
            name="subject"
            id="subject"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
      </div>

      <div className="sm:col-span-3">
        <label className="block text-sm font-medium leading-6 text-gray-900">Email</label>
        <div className="mt-2">
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      <div className="sm:col-span-6">
        <label className="block text-sm font-medium leading-6 text-gray-900">descripción</label>
        <div className="mt-2">
          <textarea
            name="description"
            id="description" 
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </div>
      <div className='lg:w-[700px] flex justify-center'>
        <button type='submit' className='bg-black text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black animated duration-300 hover:border hover:border-gray-500'>Enviar correo</button>
      </div>
    </form>
  </div>
  )

}

export default Contact
