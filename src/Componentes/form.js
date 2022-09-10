import { useFormik } from 'formik'
import * as yup from 'yup';

const Askme = () => {
  const formik = useFormik({
    initialValues:{ name:"", email:"" , area:""},
    validationSchema:yup.object({
      name: yup.string()
      .required("El Nombre es obligatorio")
      .max(25, "El Maximo es de 20 Caracteres"),
      email: yup.string()
      .required("El Nombre es obligatorio")
      .email("El formato del Email es incorrecto"),
      area: yup.string()
      .required("El campo de pregunta es obligatorio")
  }),
    onSubmit: values =>{
      console.log(values);
    }
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit} >
        <div>
          <label>Nombre:</label><br/>
          <input 
          type="text"
          name="name"
          id="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          />
          {formik.errors.name && <div>{formik.errors.name}</div>}
          <br/>
          <label>Email:</label><br/>
          <input 
          type="email" 
          name="email" 
          id="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          />
          <br/>
          {formik.errors.email && <div>{formik.errors.email}</div>}
          <label>Preguntame</label><br/>
          <textarea 
          type="textarea" 
          name="area" 
          id="area"
          onChange={formik.handleChange}
          value={formik.values.area}
          />
          {formik.errors.area && <div>{formik.errors.area}</div>}
        </div>
        <input type="submit" value="submit"/>
      </form>
    </div>
  )
}

export default Askme;