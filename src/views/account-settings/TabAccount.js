// ** React Imports
import { useState,useEffect } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Alert from '@mui/material/Alert'
import Select from '@mui/material/Select'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import AlertTitle from '@mui/material/AlertTitle'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'

// ** Icons Imports
import Close from 'mdi-material-ui/Close'

const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}))

const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}))

const ResetButtonStyled = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(4.5),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginLeft: 0,
    textAlign: 'center',
    marginTop: theme.spacing(4)
  }
}))

const TabAccount = () => {



    
  const [name, setName] = useState("nakset product");
  





  useEffect(() => {
    async function fetchText() {

      

      let response = await fetch('http://localhost:3001/api/Categories');
  
      console.log(response.status); // 200
      console.log(response.statusText); // OK
  
      if (response.status === 200) {
          let data = await response.json();
          // handle data
          console.log("this is the datat",data)
          
  
           
      }
  }
  
  fetchText();
  }, []);
  // ** State
  const [openAlert, setOpenAlert] = useState(true)
  
  const [imgSrc, setImgSrc] = useState('/images/avatars/1.png')

  const onChange = file => {
    const reader = new FileReader()
    const { files } = file.target
    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result)
      reader.readAsDataURL(files[0])
    }
  }

 const handelsumbit =async ()=>{


  let apiUrl = 'https://api.cloudinary.com/v1_1/my_online_store/image/upload';
                          
      let data1 = {
        "file":imgSrc,
        "upload_preset": "hamzamamadi",
        "api_key":"171741584542441"
      }
  const one =   await fetch(apiUrl, {
        body: JSON.stringify(data1),
        headers: {
          'content-type': 'application/json'
        },
        method: 'POST',
      }).then(res => res.json()).
      then(async(data2) => {
        data2.secure_url;
         
var data={
 
  name:name,
 
  url:data2.secure_url


}

  let response = await fetch('http://localhost:3001/api/addingCat',{method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },body: JSON.stringify({...data})});
  
      console.log(response.status); // 200
      console.log(response.statusText); // OK
  
      if (response.status === 200) {
          let data = await response.json();
          // handle data
          console.log("this is the datat",data)
      
         
  
           
      }
       
        
      
      })
      console.log("this is onw",one)




 }
 
  return (
    <CardContent>
      <form>
        <Grid container spacing={7}>
          <Grid item xs={12} sx={{ marginTop: 4.8, marginBottom: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ImgStyled src={imgSrc} alt='Profile Pic' />
              <Box>
                <ButtonStyled component='label' variant='contained' htmlFor='account-settings-upload-image'>
                  Upload New Photo
                  <input
                    hidden
                    type='file'
                    onChange={onChange}
                    accept='image/png, image/jpeg '
                    id='account-settings-upload-image'
                  />
                </ButtonStyled>
                <ResetButtonStyled color='error' variant='outlined' onClick={() => setImgSrc('/images/avatars/1.png')}>
                  Reset
                </ResetButtonStyled>
                <Typography variant='body2' sx={{ marginTop: 5 }}>
                  Allowed PNG or JPEG. Max size of 800K.
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='Name of category' onChange={(e)=>{setName(e.target.value)}}  placeholder='name'  />
          </Grid>
       
           
       
       
         
         
          

          {openAlert ? (
            <Grid item xs={12} sx={{ mb: 3 }}>
              <Alert
                severity='warning'
                sx={{ '& a': { fontWeight: 400 } }}
                action={
                  <IconButton size='small' color='inherit' aria-label='close' onClick={() => setOpenAlert(false)}>
                    <Close fontSize='inherit' />
                  </IconButton>
                }
              >
                <AlertTitle>Your email is not confirmed. Please check your inbox.</AlertTitle>
                <AlertTitle>Your email is not confirmed. Please check your inbox.</AlertTitle>

                <Link href='/' onClick={e => e.preventDefault()}>
                  Resend Confirmation
                </Link>
              </Alert>
            </Grid>
          ) : null}

          <Grid item xs={12}>
            <Button variant='contained'  onClick={()=>{handelsumbit()}} sx={{ marginRight: 3.5 }}>
              Add now
            </Button>
            <Button type='reset' variant='outlined' color='secondary'>
              Reset
            </Button>
          </Grid>
        </Grid>
      </form>
    </CardContent>
  )
}

export default TabAccount
