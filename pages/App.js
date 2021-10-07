import { Button, Grid, Stack } from '@mui/material'
import Box from '@mui/material/Box';
import React from 'react'
import CustomizedSlider from './Percentage';

const App = () => {


    function Cal( props){

        switch (props) {

            case '+':
               return console.log(a+b)
                break;


            case '-':
                   return console.log(a-b)
                break;


            case '*':
                   return console.log(a*b)
                break;


            case '/':
                   return console.log(a/b)
                break;


            case '%':
                   return console.log(a%b)
                break;


        
            default:
                break;


        }
        
    }


    return (
        <>
            <Stack direction="row" width={4/4} spacing={{ xs: 0, md: 1 }}>

                <Box
                    sx={{
                        width: { xs: 0 / 4, md: 3 / 4, lg: 4 / 4 },
                        height: '98vh',
                        bgcolor: '',
                        backgroundImage:"url('./img/Lside.jpg')",
                        // '&:hover': {
                        //     backgroundColor: 'primary.main',
                        //     opacity: [0.9, 0.8, 0.7],
                        // },
                    }}
                />



                {/* ============================================================================================================== */}


                <Box
                    sx={{
                        padding:'-10px',
                        margin:'-10px',
                        width: { xs: 4 / 4, md: 1 / 4, lg: 2 / 4 },
                        height: '98vh',
                        // bgcolor: 'rgb(2,0,36)',
                        bgcolor:'linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(2,19,56,1) 90%, rgba(0,212,255,1) 100%)',
                        // '&:hover': {
                        //     backgroundColor: 'primary.main',
                        //     opacity: [0.9, 0.8, 0.7],
                        // },
                    }}
                >
                    <Box>
                        <CustomizedSlider />
                    </Box>


                    {/* ============================================== */}

                    
                    <Stack direction="column" spacing={1} overflow="hidden">

                        <Grid mt={0} pt={0.3}  sx={{
                            width: '100%',
                            height: '6vh',
                            paddingRight:'10px',
                            color: 'rgb(2,0,36)',
                            fontSize: 'xx-large',
                            fontWeight: 'bold',
                            
                            textAlign:'right',
                            // '&:hover': {
                            //     backgroundColor: 'primary.main',
                            //     opacity: [0.9, 0.8, 0.7],
                            // },
                        }}>
                            123456789
                            
                        </Grid>
                        <Box mt={1}  sx={{
                            width: '100%',
                            height: '6vh',
                            paddingRight:'10px',
                            // color: 'white',
                            fontSize: 'xx-large',
                            fontWeight: 'bold',
                            textAlign:'right',
                            // '&:hover': {
                            //     backgroundColor: 'primary.main',
                            //     opacity: [0.9, 0.8, 0.7],
                            // },
                        }}>
                            Total
                            
                        </Box>

                        <Stack  pt={1} justifyContent="center" sx={{ width: 4 / 4,bgcolor:'' }} spacing={1} >

                            <Box sx={{ width: 4 / 4, display: 'flex', height: '', bgcolor: '' }} justifyContent="space-around" >
                                <Button value='c' onClick={(e)=>{ alert(e.target.value) }} sx={{ borderRadius: '50px', padding: '5px', height: '60px', fontSize: 'x-large',color:'red' }} p={5} variant="outlined"> C </Button>
                                <Button value='()' onClick={(e)=>{ alert(e.target.value) }} sx={{ borderRadius: '50px', padding: '5px', height: '60px', fontSize: 'x-large' }} p={5} variant="outlined"> ( ) </Button>
                                <Button value='%' onClick={(e)=>{ alert(e.target.value) }} sx={{ borderRadius: '50px', padding: '5px', height: '60px', fontSize: 'x-large' }} p={5} variant="outlined"> % </Button>
                                <Button value='/' onClick={(e)=>{ alert(e.target.value) }} sx={{ borderRadius: '50px', padding: '5px', height: '60px', fontSize: 'x-large' }} p={5} variant="outlined"> / </Button>
                            </Box>
                            <Box sx={{ width: 4 / 4, display: 'flex' }} justifyContent="space-around" >
                                <Button value='7' onClick={(e)=>{ alert(e.target.value) }} sx={{ borderRadius: '50px', padding: '5px', height: '60px', fontSize: 'x-large' }} p={5} variant="outlined"> 7 </Button>
                                <Button value='8' onClick={(e)=>{ alert(e.target.value) }} sx={{ borderRadius: '50px', padding: '5px', height: '60px', fontSize: 'x-large' }} p={5} variant="outlined"> 8 </Button>
                                <Button value='9' onClick={(e)=>{ alert(e.target.value) }} sx={{ borderRadius: '50px', padding: '5px', height: '60px', fontSize: 'x-large' }} p={5} variant="outlined"> 9 </Button>
                                <Button value='*' onClick={(e)=>{ alert(e.target.value) }} sx={{ borderRadius: '50px', padding: '5px', height: '60px', fontSize: 'x-large' }} p={5} variant="outlined"> * </Button>
                            </Box>
                            <Box sx={{ width: 4 / 4, display: 'flex' }} justifyContent="space-around" >
                                <Button value='6' onClick={(e)=>{ alert(e.target.value) }} sx={{ borderRadius: '50px', padding: '5px', height: '60px', fontSize: 'x-large' }} p={5} variant="outlined"> 6 </Button>
                                <Button value='5' onClick={(e)=>{ alert(e.target.value) }} sx={{ borderRadius: '50px', padding: '5px', height: '60px', fontSize: 'x-large' }} p={5} variant="outlined"> 5 </Button>
                                <Button value='4' onClick={(e)=>{ alert(e.target.value) }} sx={{ borderRadius: '50px', padding: '5px', height: '60px', fontSize: 'x-large' }} p={5} variant="outlined"> 4 </Button>
                                <Button value='-' onClick={(e)=>{ alert(e.target.value) }} sx={{ borderRadius: '50px', padding: '5px', height: '60px', fontSize: 'x-large' }} p={5} variant="outlined"> - </Button>
                            </Box>
                            <Box sx={{ width: 4 / 4, display: 'flex' }} justifyContent="space-around" >
                                <Button value='1' onClick={(e)=>{ alert(e.target.value) }} sx={{ borderRadius: '50px', padding: '5px', height: '60px', fontSize: 'x-large' }} p={5} variant="outlined"> 1 </Button>
                                <Button value='2' onClick={(e)=>{ alert(e.target.value) }} sx={{ borderRadius: '50px', padding: '5px', height: '60px', fontSize: 'x-large' }} p={5} variant="outlined"> 2 </Button>
                                <Button value='3' onClick={(e)=>{ alert(e.target.value) }} sx={{ borderRadius: '50px', padding: '5px', height: '60px', fontSize: 'x-large' }} p={5} variant="outlined"> 3 </Button>
                                <Button value='+' onClick={(e)=>{ alert(e.target.value) }} sx={{ borderRadius: '50px', padding: '5px', height: '60px', fontSize: 'x-large' }} p={5} variant="outlined"> + </Button>
                            </Box>
                            <Box sx={{ width: 4 / 4, display: 'flex' }} justifyContent="space-around" >
                                <Button value='+/-' onClick={(e)=>{ alert(e.target.value) }} sx={{ borderRadius: '50px', padding: '5px', height: '60px', fontSize: 'x-large' }} p={5} variant="outlined"> +/- </Button>
                                <Button value='0' onClick={(e)=>{ alert(e.target.value) }} sx={{ borderRadius: '50px', padding: '5px', height: '60px', fontSize: 'x-large' }} p={5} variant="outlined"> 0 </Button>
                                <Button value='.' onClick={(e)=>{ alert(e.target.value) }} sx={{ borderRadius: '50px', padding: '5px', height: '60px', fontSize: 'xxx-large',paddingBottom:'32px' }} p={5} variant="outlined"> . </Button>
                                <Button value='=' onClick={(e)=>{ alert(e.target.value) }} sx={{ borderRadius: '50px', padding: '5px', height: '60px', fontSize: 'xxx-large',color:'white',bgcolor:'green' }} p={5} variant="outlined"> = </Button>
                            </Box>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </>
    )
}

export default App
