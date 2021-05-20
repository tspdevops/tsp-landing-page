import React,{useState} from 'react';
import axios from "axios";
//===============Components imports=======================
import { CssButton } from './cssButton'
import Snackbar from '@material-ui/core/Snackbar';
import { Alert } from '@material-ui/lab';
import Input from './input';
//==============Translation Imports============
import {useTranslation} from "react-i18next";
const API_KEY='AIzaSyAiBEzLURrGdTL_cxb0BK-LzcqEJ7B2U24'


const Form = ({page}) => {
  //==========React Hooks=============
  const [user,setUser]=useState({email:''})
  const [invalid, setInvalid]=useState(true)
  const [snackSuccessOpen, setSnackSuccessOpen] = useState(false)
  const [snackErrorOpen, setSnackErrorOpen] = useState(false)
  //============Validator function=============
  function validateInfo({email}) {
    if ( !email || !/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/.test(email)) {
      setInvalid(true)
    } else {
      setInvalid(false)
    }
    setUser({email})
  }

  //=============Register Function==================
  const postFunction = ({email})=>{
    //Autentifica el usuario
      axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {
        email,
        password:'unacontraseña'
      })
  .then((res)=>{
    //Registra al usuario en la base de datos 
        axios.post(`https://tokentsp-2153b-default-rtdb.firebaseio.com//emails.json`, {
          email: res.data.email,
          userTarget: `${t(page)}`
        })
        .then(r=>{
          setSnackSuccessOpen(true)
        })
        .catch(err=>{console.error(err)})
  }) 
  .catch((error)=>{
    setSnackErrorOpen(true)
    console.log(error)
  })
  }
  const [t] = useTranslation('global');
  const handleClose = () => {
    setSnackSuccessOpen(false);
    
  };
  return (
    <form 
    style={{
      marginTop:10,
      justifyContent: 'center',
      display:'flex',
      flexDirection:'row',
      }}
      onSubmit={(e)=>{
        e.preventDefault()
        postFunction(user)
        setUser({email:""})
      }}
      >
{/* FORM */}
      <Input value={user.email}  handleChange={e => validateInfo({...user, email: e.target.value})}  />
{/* Button */}
      <CssButton style={{outline:'none', marginLeft:-50}} type={'submit'} disabled={invalid}> {t("Button.Join")} </CssButton>
{/* Snack Success */}
    <Snackbar open={snackSuccessOpen} variant='filled' autoHideDuration={4000} onClose={handleClose}>
      <Alert severity="success"> {t("Form.alerts.success2")} </Alert>
    </Snackbar>
{/* Snack Error */}
    <Snackbar open={snackErrorOpen} autoHideDuration={2000} onClose={handleClose}>
      <Alert severity="error" variant='filled'> {t("Form.alerts.error")} </Alert>
    </Snackbar>
</form>
  )
}

export default Form
