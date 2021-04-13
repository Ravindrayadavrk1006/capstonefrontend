import React from 'react'
import './addProduct.css'
import {useState} from 'react';
const AddProduct = () => {
   const [values, setValues] = useState({
     name:'',
     price:'',
     description: '',
     highlights:'',
     specifications:'',
     categories:[]
   })
  //  const [errors, setErrors] = useState({})
  //  const [isSubmitting, setIsSubmitting] = useState(false)

   const handleInput = (event) => {
     const { name, value } = event.target
    //  if(name==categories)
    //  {

    //  }
     setValues({
       ...values,
       [name]: value,
     })
   }
  const handleSubmit = (event) => {
         event.preventDefault()
         console.log(values);
       }

 return (
   <div>
     <h1 id='formHeading'>
       Add product <img src='/images/newproduct.svg' alt='' />
     </h1>
     <form
       onSubmit={handleSubmit}
       className='addProductForm'
       action='/addProduct'
       method='post'
     >
       <div className='form-group'>
         <label htmlFor='name'>Name</label>
         <input
           className='form-control'
           type='text'
           name='name'
           id='name'
           onChange={handleInput}
           value={values.name}
         />
       </div>
       <div class='form-group'>
         <label Htmlfor='mainImage'>Main Image</label>
         <input type='file' class='form-control-file' id='mainImage' />
       </div>

       <div class='form-group'>
         <label Htmlfor='categories'>Example select</label>
         <select
           class='form-control'
           id='categories'
           name='categories'
           data-live-search='true'
           onChange={handleInput.bind(this)}
           value={values.categories}
         >
           <option>pottery</option>
           <option>handpainting</option>
           <option>painting</option>
           <option>handicrafts</option>
           <option>others</option>
         </select>
       </div>
       <div className='form-group'>
         <label htmlFor='price'>Price</label>
         <div className='input-group mb-3'>
           <div className='input-group-prepend'>
             <span className=' ruppee input-group-text' id='basic-addon1'>
               &#x20B9;
             </span>
           </div>
           <input
             name='price'
             id='price'
             type='text'
             className='form-control'
             aria-describedby='basic-addon1'
             onChange={handleInput}
             value={values.price}
           />
         </div>
       </div>
       <div className='form-group'>
         <label htmlFor='description'>description</label>
         <textarea
           className='form-control'
           placeholder='write in paragraph form'
           name='description'
           id='description'
           cols='30'
           rows='5'
           onChange={handleInput}
           value={values.description}
         ></textarea>
       </div>
       <div className='form-group'>
         <label htmlFor='highlights'>highlights</label>
         <textarea
           className='form-control'
           placeholder='write in bullets form'
           name='highlights'
           id='highlights'
           cols='30'
           rows='5'
           onChange={handleInput}
           value={values.highlights}
         ></textarea>
       </div>
       <div className='form-group'>
         <label htmlFor='specifications'>specifications</label>
         <textarea
           className='form-control'
           placeholder='write in bullets form'
           name='specifications'
           id='specifications'
           cols='30'
           rows='5'
           onChange={handleInput}
           value={values.specifications}
         ></textarea>
       </div>
       <div class='form-group'>
         <label Htmlfor='descriptionImages'>Description images</label>
         <input
           multiple
           type='file'
           class='form-control-file'
           id='descriptionImages'
         />
       </div>

       <button className='buttonAddProductSubmit btn btn-success' type='submit'>
         Add Product
       </button>
     </form>
   </div>
 )
}

export default AddProduct
