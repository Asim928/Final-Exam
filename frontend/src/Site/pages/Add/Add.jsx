import axios from 'axios';
import React from 'react'
import {Formik} from 'formik'
import * as Yup from "yup"
import {Helmet} from 'react-helmet'
import './Add.scss'

const Add = () => {
  return (
    <>
    <Helmet>
        <title>Add Page</title>
    </Helmet>
    <div className="formik">
        <Formik
       initialValues={{ name: '', price: '' }}
       validationSchema={Yup.object({
        name : Yup.string().required("Name is required"),
        desc : Yup.string().required("Description is required"),
        price: Yup.number().required("Price is required")
       })}
       onSubmit={(values, { setSubmitting, resetForm }) => {
         axios.post(`http://localhost:8080/`, values).then((res)=>{
            console.log(res.data)
            setSubmitting(false)
            resetForm(true)
         })
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
       }) => (
         <form onSubmit={handleSubmit} className='addForm'>
           <input
             type="name"
             name="name"
             placeholder='Name'
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.name}
             className='input '
           />
           {errors.name && touched.name && errors.name}
           <input
             type="desc"
             name="desc"
             placeholder='Description'
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.desc}
             className='input '
           />
           {errors.desc && touched.name && errors.desc}
           <input
             type="price"
             name="price"
             placeholder='Price'
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.price}
             className='input '
           />
           {errors.price && touched.price && errors.price}
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
    </div>
    </>
  )
}

export default Add