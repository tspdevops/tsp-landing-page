import React, { useState } from 'react'
import axios from "axios";
//===============Components imports=======================
import { Typography } from '@material-ui/core';
import { CssButton } from '../Components/EmailForm/cssButton'
import Input from '../Components/EmailForm/input'
import Snackbar from '@material-ui/core/Snackbar';
import { Alert } from '@material-ui/lab';
//=================Translations Imports================
import {useTranslation} from 'react-i18next';
const API_KEY='AIzaSyAiBEzLURrGdTL_cxb0BK-LzcqEJ7B2U24'

const SignUp = ({setOpen, page}) => {
  const [t] = useTranslation('global')
  //=============React Hooks==============
  const [user, setUser] = useState({
    username: '',
    email:'',
    password:''
  });
  const [invalid, setInvalid] = useState(true)
  const [snackSuccessOpen, setSnackSuccessOpen] = useState(false)
  const [snackErrorOpen, setSnackErrorOpen] = useState(false)
  //=============Register Function==================
  const postFunction = ({email, password, username})=>{
    //Autentifica el usuario
      axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {
        email,
        password,
      })
  .then((res)=>{
    //Registra al usuario en la base de datos 
        axios.post(`https://tokentsp-2153b-default-rtdb.firebaseio.com//users.json`, {
          email: res.data.email,
          password,
          username,
          userTarget: `${t(page)}`
        })
        .then(r=>{
          setSnackSuccessOpen(true)
        })
        .catch(err=>{console.error(err)})
  }) 
  .catch((error)=>{
    setSnackErrorOpen(true)
  })
  }

//============Validator function=============
  function validateInfo({username,email, password}) {
    if (!username || !password || password.length < 6 || !email || !/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/.test(email)) {
      setInvalid(true)
    } else {
      setInvalid(false)
    }
    setUser({username, email, password})
  }

  const handleClose = () => {
    setSnackSuccessOpen(false);
    setOpen(false)
  };

  return (
    <div>
      <form style={{marginTop:10,alignItems: 'center',display:'flex', flexDirection:'column'}}
        onSubmit={e=>{
          e.preventDefault()
          postFunction(user)
          
    }}  
    >
        <Typography> {t("Button.SignUp")} </Typography>
        
        <Input value={user.username}  pholder={t('Form.labels.username')} handleChange={e => validateInfo({...user, username: e.target.value})} />
      
        <Input value={user.email}  pholder={t('Form.labels.email')}  handleChange={e => validateInfo({...user, email: e.target.value})} />
        
        <Input value={user.password} type='password' pholder={t('Form.labels.password')} handleChange={e => validateInfo({...user, password: e.target.value})}/>
        
        <CssButton  style={{outline:'none', margin:10}} disabled={invalid} type="submit"> {t("Button.SignUp")}  </CssButton>
   
        <Typography variant='body2' style={{fontFamily: '"Noto Sans", sans-serif',opacity: 0.5,marginTop: 3,fontSize: 10}} > {t("Form.advise")} </Typography>
      </form>
      {/* Snack Success */}
      <Snackbar open={snackSuccessOpen} variant='filled' autoHideDuration={3000} onClose={handleClose}>
      <Alert severity="success"> {t("Form.alerts.success")} </Alert>
      </Snackbar>
      {/* Snack Error */}
      <Snackbar open={snackErrorOpen} autoHideDuration={3000} onClose={handleClose}>
      <Alert severity="error" variant='filled'> {t("Form.alerts.error")} </Alert>
      </Snackbar>
    </div>
  )}

export default SignUp
