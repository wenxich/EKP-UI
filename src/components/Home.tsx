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
import {
    CssBaseline,
    InputLabel,
    Menu,
    MenuItem,
    OutlinedInput,
    Select,
    ThemeOptions,
    ThemeProvider,
    useTheme
} from "@mui/material";
import {SelectChangeEvent} from "@mui/material/Select";
import {createTheme} from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: 'rgba(0,0,0,0.54)',
        },
        background: {
            default: '#D9D9D9',
        },
    },
});

function CHOPLogo() {
    // Import result is the URL of your image
    return <img src={logo} alt="Logo" width={150}/>;
}

function Home() {

    const [status, setStatus] = React.useState(1) // 1: show expert search, 2: show works search.

    const radioHandler = (status: React.SetStateAction<number>) => {
        setStatus(status);
    };

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [personName, setPersonName] = React.useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: {value},
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const names = [
        'Oliver Hansen',
        'Van Henry',
        'April Tucker',
        'Ralph Hubbard',
        'Omar Alexander',
        'Carlos Abbott',
        'Miriam Wagner',
        'Bradley Wilkerson',
        'Virginia Andrews',
        'Kelly Snyder',
    ];

    return (

        <ThemeProvider theme={theme}>
            <CssBaseline/>
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
                    </RadioGroup>
                </FormControl>
                {status === 1 && <div>
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
                                <Button
                                    id="basic-button"
                                    variant="contained"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                >
                                    ADD
                                </Button>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={handleClose}>Add with AND</MenuItem>
                                    <MenuItem onClick={handleClose}>Add with OR</MenuItem>
                                    <MenuItem onClick={handleClose}>Add with NOT</MenuItem>
                                </Menu>
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
                                    sx={{width: 220}}
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
                </div>}

                {status === 2 && <div>
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
                                <FormControl sx={{width: 200}}>
                                    <InputLabel id="demo-multiple-name-label">Researchers</InputLabel>
                                    <Select
                                        labelId="demo-multiple-name-label"
                                        id="demo-multiple-name"
                                        multiple
                                        value={personName}
                                        onChange={handleChange}
                                        input={<OutlinedInput label="Name"/>}
                                    >
                                        {names.map((name) => (
                                            <MenuItem
                                                key={name}
                                                value={name}
                                            >
                                                {name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
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
                                    sx={{width: 220}}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <br></br>
                        <Button variant="contained">Search</Button>
                    </Container>
                </div>}
            </Container>
        </ThemeProvider>
    );
}

export default Home;