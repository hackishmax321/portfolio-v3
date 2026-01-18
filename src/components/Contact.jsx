import React, { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)

  const handleFormChange = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  }

  return (
    <section className='relative flex-col justify-center items-center c-spacing sector-spacing' id='contact'>
        <h2  className='text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-600'>Let's Talk</h2>
        <p className="text-gray-300 subtext">Send queries and other using form below</p>
        <br></br>
        <div  className='flex flex-col items-center justify-center max-w-md p-5 mx-auto border rounded-2xl border-white/10 bg-primary'>
          <form className='w-full text-left' onSubmit={handleSubmit}>
            <div className='mb-5'>
              <label htmlFor='name' className='field-label'>Full Name</label>
              <input  
              name='name'
              id='name'
              type='text'
              className='field-input field-input-focus'
              placeholder='eg: Ishan Gayantha'
              autoComplete='name'
              value={formData.name}
              onChange={handleFormChange}
              required
              />
            </div>
            <div className='mb-5'>
              <label htmlFor='email' className='field-label'>Email</label>
              <input  
              name='email'
              id='email'
              type='email'
              className='field-input field-input-focus'
              placeholder='eg: your.email@mail.com'
              autoComplete='email'
              value={formData.email}
              onChange={handleFormChange}
              required
              />
            </div>
            <div className='mb-5'>
              <label htmlFor='message' className='field-label'>Message in Detail</label>
              <textarea  
              name='message'
              id='message'
              type='text'
              rows={5}
              className='field-input field-input-focus'
              placeholder='eg: Ishan Gayantha'
              autoComplete='name'
              value={formData.message}
              onChange={handleFormChange}
              required
              />
            </div>
            <button className='w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-purple-700 to-royal text-white hover animation'>{loading?'SENDING':'SEND'}</button>
          </form>
        </div>
    </section>
  )
}

export default Contact