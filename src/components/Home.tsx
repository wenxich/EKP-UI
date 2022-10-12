import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';

import logo from './chop-logo.png';

function CHOPLogo() {
    // Import result is the URL of your image
    return <img src={logo} alt="Logo" width={150}/>;
}

function expertFinder() {
    return (
        <Container maxWidth="md">
            <Grid
                alignItems="center"
                justifyContent="center"
                container spacing={2}>
                <Grid item xs={4}>
                    <Typography variant="body1" gutterBottom>
                        Search all fields
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        label="Keywords"
                        sx={{m: 1, width: '20ch'}}
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained">ADD</Button>
                </Grid>
            </Grid>

            <Grid
                alignItems="center"
                justifyContent="center"
                container spacing={2}>
                <Grid item xs={4}>
                    <Typography variant="body1" gutterBottom>
                        Select date range
                    </Typography>
                </Grid>
                <Grid item xs={8}>
                    <TextField
                        id="date"
                        type="date"
                        sx={{ width: 220 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
            </Grid>
            <br></br>
            <TextField fullWidth
                       multiline={true}
                       rows={3}
                       name="Description"
                       label="Description"
                       placeholder="Description"
                       autoComplete="off"
                       variant="outlined"
            />
            <p></p>
            <Button variant="contained">Search</Button>
        </Container>
    );
}

function worksFinder() {
    return (
        <Container maxWidth="md">
            <Grid
                alignItems="center"
                justifyContent="center"
                container spacing={2}>
                <Grid item xs={3}>
                    <Typography variant="body1" gutterBottom>
                        Select Researchers
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        label="Researchers"
                        sx={{m: 1, width: '20ch'}}
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={1}>
                    <Typography variant="body1" gutterBottom>
                        OR
                    </Typography>
                </Grid>
                <Grid item xs={5}>
                    <Button variant="contained">Upload CSV</Button>
                </Grid>
            </Grid>
            <Grid
                alignItems="center"
                justifyContent="center"
                container spacing={2}>
                <Grid item xs={3}>
                    <Typography variant="body1" gutterBottom>
                        Select date range
                    </Typography>
                </Grid>
                <Grid item xs={9}>
                    <TextField
                        id="date"
                        type="date"
                        sx={{ width: 220 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
            </Grid>
            <br></br>
            <Button variant="contained">Search</Button>
        </Container>
    );
}

function Home() {
    const [status, setStatus] = React.useState(1) // 1: show expert search, 2: show works search.

    const radioHandler = (status: React.SetStateAction<number>) => {
        setStatus(status);
    };

    return (
        <Container maxWidth="lg">
            <Box minWidth="100%"
                 display="flex"
                 justifyContent="center"
                 alignItems="center">
                <Grid
                    alignItems="center"
                    justifyContent="center"
                    container spacing={2}>

                    <Grid item xs={4}>
                        <CHOPLogo/>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography variant="h4" gutterBottom>
                            Expertise Knowledge Platform
                        </Typography>
                    </Grid>

                </Grid>
            </Box>
            <FormControl>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="expert" control={<Radio/>} label="Find Expert by Keywords"
                                      checked={status === 1}
                                      onChange={() => radioHandler(1)}/>
                    <FormControlLabel value="works" control={<Radio/>} label="Find works of specific Experts"
                                      checked={status === 2}
                                      onChange={() => radioHandler(2)}/>
                    {status === 1 && expertFinder()}
                    {status === 2 && worksFinder()}
                </RadioGroup>
            </FormControl>
        </Container>
    );
}

export default Home;