import React from 'react'
import './addProduct.css'
import MultiSelect from 'react-multi-select-component'
import { useState } from 'react'
const AddProduct = () => {
  const [values, setValues] = useState({
    name: '',
    price: '',
    description: '',
    highlights: '',
    imageUrl: '',
    descImageUrl: [],
    category: [],
  })
  const data = [
    { label: 'pottery' },
    { label: 'handpainting' },
    { label: 'handicrafts' },
    { label: 'others', value: 4 },
  ]
  const [options] = useState(data)
  const [selected, setSelected] = useState([])
  const [category, setCategory] = useState([])
  const [img1, setImg1] = useState('')
  const [img2, setImg2] = useState('')
  const [img3, setImg3] = useState('')
  const [img4, setImg4] = useState('')
  const [descImageUrl, setdescImageUrl] = useState([])
  // const [sendSuccessFull,setsendSuccessfull]=useState(false)
  //  const [errors, setErrors] = useState({})
  //  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInput = (event) => {
    const { name, value } = event.target

    setValues({
      ...values,
      [name]: value,
    })
  }
  const tempFunction=async()=>{

    await setdescImageUrl([img1, img2, img3, img4])
    await selected.map((val) => {
      setCategory((cat) => [...cat, val.label])
      return 0
    })

  }
  const handleSubmit = (event) => {
    event.preventDefault()
    // selected.map((val) => {
    //   setCategory((cat) => [...cat, val.label])
    //   return 0;
    // })
    // if(img1 && img2 && img3)
    // {
    //   setdescImageUrl([img1, img2, img3, img4])
    // }
    setdescImageUrl([img1, img2, img3, img4])
    console.log(descImageUrl,"value of descImageUrl");
    selected.map((val) => {
      setCategory((cat) => [...cat, val.label])
      return 0
    })
    setTimeout(()=>{
      const { name, price, description, highlights, imageUrl } = values
      var datatoSend = {
        name,
        price,
        description,
        highlights,
        imageUrl,
        category,
        descImageUrl,
      }
      console.log(datatoSend)
      fetch('/user/seller/dashboard/addItem', {
        method: 'POST',
        body: JSON.stringify(datatoSend), // The data
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => {
          console.log('response returned from the server')
          console.log(response.status);
        })
        .catch((err) => {
          console.log(err)
        })
    },4000)  
    // console.log(category)
    // console.log(descImageUrl)
   
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
        <div className='form-group'>
          <label htmlFor='mainImage'>Main Image</label>
          <input
            className='form-control'
            type='text'
            name='imageUrl'
            id='imageUrl'
            onChange={handleInput}
            value={values.imageUrl}
          />
        </div>

        {/* <div class='form-group'>
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
       </div> */}
        <div className='form-group'>
          <label htmlFor='categories'>Categories</label>
          <MultiSelect
            options={options}
            value={selected}
            onChange={setSelected}
            labelledBy='Select'
          />
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
        {/* <div className='form-group'>
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
       </div> */}
        <div className='form-group'>
          <label htmlFor='descriptionImages'>Description images</label>
          <input
            className='form-control'
            type='text'
            name='descImageUrl'
            id='descImageUrl'
            onChange={(e) => {
              setImg1(e.target.value)
            }}
            value={img1}
          />
          <input
            className='form-control'
            type='text'
            name='descImageUrl'
            id='descImageUrl'
            onChange={(e) => {
              setImg2(e.target.value)
            }}
            value={img2}
          />
          <input
            className='form-control'
            type='text'
            name='descImageUrl'
            id='name'
            onChange={(e) => {
              setImg3(e.target.value)
            }}
            value={img3}
          />
          <input
            className='form-control'
            type='text'
            name='descImageUrl'
            id='descImageUrl'
            onChange={(e) => {
              setImg4(e.target.value)
            }}
            value={img4}
          />
        </div>

        <button
          className='buttonAddProductSubmit btn btn-success'
          type='submit'
        >
          Add Product
        </button>
      </form>
    </div>
  )
}

export default AddProduct
