import axios from "axios"
import { useState, useEffect, useCallback } from "react"

export const useFormValidation = (stateSchema, validationSchema, callback) => {
  const [state, setState] = useState(stateSchema)
  const [disable, setDisable] = useState(true)

  const validateState = useCallback(() => {
    const hasError = Object.keys(validationSchema).some(key => {
      const isInputRequired = validationSchema[key].required
      const stateValue = state[key].value
      const stateError = state[key].error

      return isInputRequired && (!stateValue || stateError)
    })
    return hasError
  }, [state, validationSchema])

  useEffect(() => {
    setDisable(validateState())
  }, [validateState])

  const handleChange = ({ target }) => {
    const { name, value } = target

    const field = validationSchema[name]
    let error = ""

    if (field.required) {
      if (!value) {
        error = "This field is required."
      } else {
        if (field.validator.regEx) {
          if (!field.validator.regEx.test(value)) {
            error = field.validator.error
          }
        } else if (field.validator.length) {
          if (field.validator.length > value.length) {
            error = field.validator.error
          }
        }
      }
    }

    setState(prevState => ({
      ...prevState,
      [name]: { value, error }
    }))
  }

  const handleSubmit = event => {
    event.preventDefault()

    if (!validateState()) {
      const senMailData = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          app: "Dynamicair",
          email: state.email.value,  
          name: state.name.value,
          mobile: state.phone.value,
          location: state.location.value,
          message: state.message.value
       })
    };

    fetch('http://127.0.0.1:8000/api/send-mail', senMailData)
    .then(response => response.json())
    .then(data => {
      console.log(data); 
      callback()
    })
      // axios.get(`http://127.0.0.1:8000/api/send-mail?email=${state.email.value}&app=Dymanic&name=${state.email.value}&message=${state.message.value}&location=${state.location.value}&mobile=${state.mobile.value}`)
      // .then(function (response) {
      //     alert(response.status)
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });
      
      // reset
      setState(stateSchema)
    }
  }

  return { state, disable, handleChange, handleSubmit }
}
