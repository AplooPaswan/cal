import { Button, Grid, Stack } from '@mui/material'
import Box from '@mui/material/Box';
import React, { useState } from 'react'
import CustomizedSlider from './Percentage';

const App = () => {

    const [value, setValue] = useState(0)
    const [opn, setOpn] = useState('')
    function setClear() {
        setValue(0)
        setOpn('')
    }
    function Cal(props) {

        switch (props) {

            case '+':
                return console.log(a + b)
                break;


            case '-':
                return console.log(a - b)
                break;


            case '*':
                return console.log(a * b)
                break;


            case '/':
                return console.log(a / b)
                break;


            case '%':
                return console.log(a % b)
                break;



            default:
                break;


        }

    }


    return (
        <Grid>
            <Stack direction="row" width={4 / 4} spacing={{ xs: 0, md: 1 }} >

                <Box
                    sx={{
                        width: { xs: 0 / 4, md: 3 / 4, lg: 4 / 4 },
                        height: '98vh',
                        bgcolor: '',
                        backgroundImage: "url('./img/Lside.jpg')",
                        // '&:hover': {
                        //     backgroundColor: 'primary.main',
                        //     opacity: [0.9, 0.8, 0.7],
                        // },
                    }}
                />



                {/* ============================================================================================================== */}

                {/* background-image: radial-gradient( circle farthest-corner at 1.3% 2.8%,  rgba(239,249,249,1) 0%, rgba(182,199,226,1) 100.2% ); */}

                <Grid
                    sx={{
                        padding: '-10px',
                        margin: '-10px',
                        width: { xs: 4 / 4, md: 1 / 4, lg: 2 / 4 },
                        height: '98vh',
                        // bgcolor: '#CDDCDC',
                        // background: 'linear-gradient(360deg, #1CB5E0 0%, #000851 100%)',
                        //     backgroundColor: 'primary.main',
                        //     opacity: [0.9, 0.8, 0.7],
                        // },
                    }}
                >
                    <Grid>
                        <CustomizedSlider />
                    </Grid>


                    {/* ============================================== */}


                    <Stack direction="column" spacing={1} overflow="hidden">

                        <Grid bgcolor="">
                            <Grid mt={0} pt={0.3} sx={{
                                width: '100%',
                                height: '6vh',
                                paddingRight: '10px',
                                color: 'rgb(2,0,36)',
                                fontSize: 'xx-large',
                                fontWeight: 'bold',
                                
                                color: '',
                                textAlign: 'right',
                                // '&:hover': {
                                //     backgroundColor: 'primary.main',
                                //     opacity: [0.9, 0.8, 0.7],
                                // },
                            }}>
                                {value} {'  '} {opn}

                            </Grid>
                            <Grid mt={1} sx={{
                                width: '100%',
                                height: '6vh',
                                paddingRight: '10px',
                                // color: 'white',
                                // bgcolor: 'GrayText',
                                fontSize: 'xx-large',
                                fontWeight: 'bold',
                                textAlign: 'right',
                                // '&:hover': {
                                //     backgroundColor: 'primary.main',
                                //     opacity: [0.9, 0.8, 0.7],
                                // },
                            }}>
                               

                            </Grid>
                        </Grid>

                        <Stack pt={1} justifyContent="center" sx={{ width: 4 / 4, bgcolor: '' }} spacing={1} >

                            <Box sx={{ width: 4 / 4, display: 'flex', height: '', bgcolor: '' }} justifyContent="space-around" >
                                <Button value='c' onClick={(e) => { setClear() }} sx={{ borderRadius: '50px', padding: '5px', height: '60px', fontSize: 'x-large', color: 'red' }} p={5} variant="outlined"> C </Button>
                                <Button value='( )' onClick={(e) => { setOpn(e.target.value) }} sx={{ borderRadius: '50px', padding: '5px', height: '60px', fontSize: 'x-large' }} p={5} variant="outlined"> ( ) </Button>
                                <Button value='%' onClick={(e) => { setOpn(e.target.value) }} sx={{ borderRadius: '50px', padding: '5px', height: '60px', fontSize: 'x-large' }} p={5} variant="outlined"> % </Button>
                                <Button value='/' onClick={(e) => { setOpn(e.target.value) }} sx={{ borderRadius: '50px', padding: '5px', height: '60px', fontSize: 'x-large' }} p={5} variant="outlined"> / </Button>
                            </Box>
                            <Box sx={{ width: 4 / 4, display: 'flex' }} justifyContent="space-around" >
                                <Button value='7' onClick={(e) => { setValue(e.target.value) }} sx={{ borderRadius: '50px', padding: '5px', height: '60px', fontSize: 'x-large' }} p={5} variant="outlined"> 7 </Button>
                                <Button value='8' onClick={(e) => { setValue(e.target.value) }} sx={{ borderRadius: '50px', padding: '5px', height: '60px', fontSize: 'x-large' }} p={5} variant="outlined"> 8 </Button>
                                <Button value='9' onClick={(e) => { setValue(e.target.value) }} sx={{ borderRadius: '50px', padding: '5px', height: '60px', fontSize: 'x-large' }} p={5} variant="outlined"> 9 </Button>
                                <Button value='*' onClick={(e) => { setOpn(e.target.value) }} sx={{ borderRadius: '50px', padding: '5px', height: '60px', fontSize: 'x-large' }} p={5} variant="outlined"> * </Button>
                            </Box>
                            <Box sx={{ width: 4 / 4, display: 'flex' }} justifyContent="space-around" >
                                <Button value='6' onClick={(e) => { setValue(e.target.value) }} sx={{ borderRadius: '50px', padding: '5px', height: '60px', fontSize: 'x-large' }} p={5} variant="outlined"> 6 </Button>
                                <Button value='5' onClick={(e) => { setValue(e.target.value) }} sx={{ borderRadius: '50px', padding: '5px', height: '60px', fontSize: 'x-large' }} p={5} variant="outlined"> 5 </Button>
                                <Button value='4' onClick={(e) => { setValue(e.target.value) }} sx={{ borderRadius: '50px', padding: '5px', height: '60px', fontSize: 'x-large' }} p={5} variant="outlined"> 4 </Button>
                                <Button value='-' onClick={(e) => { setOpn(e.target.value) }} sx={{ borderRadius: '50px', padding: '5px', height: '60px', fontSize: 'x-large' }} p={5} variant="outlined"> - </Button>
                            </Box>
                            <Box sx={{ width: 4 / 4, display: 'flex' }} justifyContent="space-around" >
                                <Button value='1' onClick={(e) => { setValue(e.target.value) }} sx={{ borderRadius: '50px', padding: '5px', height: '60px', fontSize: 'x-large' }} p={5} variant="outlined"> 1 </Button>
                                <Button value='2' onClick={(e) => { setValue(e.target.value) }} sx={{ borderRadius: '50px', padding: '5px', height: '60px', fontSize: 'x-large' }} p={5} variant="outlined"> 2 </Button>
                                <Button value='3' onClick={(e) => { setValue(e.target.value) }} sx={{ borderRadius: '50px', padding: '5px', height: '60px', fontSize: 'x-large' }} p={5} variant="outlined"> 3 </Button>
                                <Button value='+' onClick={(e) => { setOpn(e.target.value) }} sx={{ borderRadius: '50px', padding: '5px', height: '60px', fontSize: 'x-large' }} p={5} variant="outlined"> + </Button>
                            </Box>
                            <Box sx={{ width: 4 / 4, display: 'flex' }} justifyContent="space-around" >
                                <Button value='+/-' onClick={(e) => { setValue(e.target.value) }} sx={{ borderRadius: '50px', padding: '5px', height: '60px', fontSize: 'x-large' }} p={5} variant="outlined"> +/- </Button>
                                <Button value='0' onClick={(e) => { setValue(e.target.value) }} sx={{ borderRadius: '50px', padding: '5px', height: '60px', fontSize: 'x-large' }} p={5} variant="outlined"> 0 </Button>
                                <Button value='.' onClick={(e) => { setValue(e.target.value) }} sx={{ borderRadius: '50px', padding: '5px', height: '60px', fontSize: 'xxx-large', paddingBottom: '32px' }} p={5} variant="outlined"> . </Button>
                                <Button value='=' onClick={(e) => { setOpn(e.target.value) }} sx={{ borderRadius: '50px', padding: '5px', height: '60px', fontSize: 'xxx-large', color: 'white', bgcolor: 'green' }} p={5} variant="outlined"> = </Button>
                            </Box>
                        </Stack>
                    </Stack>
                </Grid>
            </Stack>
        </Grid>
    )
}

export default App
