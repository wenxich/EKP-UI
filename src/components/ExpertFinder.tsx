import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Button, CssBaseline, styled, tableCellClasses, TablePagination, ThemeProvider} from "@mui/material";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import {createTheme} from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: 'rgba(0,0,0,0)',
        }
    },
});

const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#1976D2",
        color: theme.palette.common.white
    }
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0
    }
}));

// summative table creation

function createSummativeRows(
    name: string,
    email: string,
    orcId: string,
    deptEspa: string,
    deptOfd: string,
    rankOfd: string,
    trackOfd: string,
    relatedPubs: number,
    pubsTotal: number,
    pubsRelated: number,
    medianIfRelated: number,
    maxIfRelated: number,
    firstAuthor: number,
    lastAuthor: number
) {
    return {
        name, email, orcId, deptEspa, deptOfd, rankOfd, trackOfd, relatedPubs, pubsTotal, pubsRelated,
        medianIfRelated, maxIfRelated, firstAuthor, lastAuthor
    };
}

const summativeRows = [
    createSummativeRows('Alferiev, Ivan', '///', '///', '///',
        '///', 'Professor', 'Clinical Educator', 15, 20,
        75, 50.65, 82.93, 3, 2),
    createSummativeRows('Alcamo, Alicia M', '///', '///', '///',
        '///', 'Professor', 'Academic Clinician', 11, 30,
        36.67, 16.4, 36.05, 2, 1)
];

// reference table creation

function createReferenceRows(
    authorName: string,
    activeDir: string,
    authorEmail: string,
    title: string,
    abstract: string,
    active: string,
    pmId: number,
    link: string,
    journalName: string,
) {
    return {
        authorName, activeDir, authorEmail, title, abstract, active, pmId, link, journalName
    };
}

const referenceRows = [
    createReferenceRows('Alferiev, Ivan', '///', '///',
        'Selective Agonists of Nuclear Retinoic Acid Receptor Gamma Inhibit Growth of HCS-2/8 Chondrosarcoma ' +
        'Cells.', 'Chondrosarcoma is the second most common primary bone sarcoma. Treatment of chondrosarcoma ' +
        'is limited to surgery due to radiation and che...', 'true', 31808569,
        'https://pubmed.ncbi.nlm.nih.gov/31808569', 'Journal of Orthopaedic Research'),
    createReferenceRows('Alferiev, Ivan', '///', '///',
        'Nanocarrier-Based Delivery of SN22 as a Tocopheryl Oxamate Prodrug Achieves Rapid Tumor Regression and ' +
        'Extends Survival in High-Risk Neuroblastoma Models', 'Despite the use of intensive multimodality' +
        ' therapy, the majority of high-risk neuroblastoma (NB) patients do not survive. Without significant' +
        ' improveme...', 'true', 35163672, 'https://pubmed.ncbi.nim.nih.gov/35163672',
        'International Journal of Molecular Sciences'),
];

// descriptive table creation

function createDescriptiveQueryRows(query: string, year: number) {
    return {query, year};
}

const descriptiveQueryRows = [
    createDescriptiveQueryRows('Brain [OR] Blood [OR] Cell', 2021),
];

function createDescriptiveSourceRows(source: string, date: string) {
    return {source, date};
}

const descriptiveSourceRows = [
    createDescriptiveSourceRows('PubMed', '10/6/22'),

];

function summativeTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item
                      sx={{display: 'flex', alignItems: 'end'}}>
                    <Typography>Search table</Typography>
                </Grid>
                <Grid item>
                    <TextField size="small"
                               id="filled-search"
                               label="Search terms"
                               variant="standard"
                    />
                </Grid>
            </Grid>
            <p></p>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 1150}} aria-label="simple table">
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="right">Email</StyledTableCell>
                            <StyledTableCell align="right">ORCID</StyledTableCell>
                            <StyledTableCell align="right">Dept ESPA</StyledTableCell>
                            <StyledTableCell align="right">Dept OFD</StyledTableCell>
                            <StyledTableCell align="right">Rank OFD</StyledTableCell>
                            <StyledTableCell align="right">Track OFD</StyledTableCell>
                            <StyledTableCell align="right"># related pubs</StyledTableCell>
                            <StyledTableCell align="right"># pubs total</StyledTableCell>
                            <StyledTableCell align="right">% pubs related</StyledTableCell>
                            <StyledTableCell align="right">Median IF related pubs</StyledTableCell>
                            <StyledTableCell align="right">Max IF related pubs</StyledTableCell>
                            <StyledTableCell align="right"># first author related pubs</StyledTableCell>
                            <StyledTableCell align="right"># last author related pubs</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {summativeRows.map((row) => (
                            <StyledTableRow
                                key={row.name}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <StyledTableCell>{row.name}</StyledTableCell>
                                <StyledTableCell>{row.email}</StyledTableCell>
                                <StyledTableCell>{row.orcId}</StyledTableCell>
                                <StyledTableCell>{row.deptEspa}</StyledTableCell>
                                <StyledTableCell>{row.deptOfd}</StyledTableCell>
                                <StyledTableCell>{row.rankOfd}</StyledTableCell>
                                <StyledTableCell>{row.trackOfd}</StyledTableCell>
                                <StyledTableCell>{row.relatedPubs}</StyledTableCell>
                                <StyledTableCell>{row.pubsTotal}</StyledTableCell>
                                <StyledTableCell>{row.pubsRelated}</StyledTableCell>
                                <StyledTableCell>{row.medianIfRelated}</StyledTableCell>
                                <StyledTableCell>{row.maxIfRelated}</StyledTableCell>
                                <StyledTableCell>{row.firstAuthor}</StyledTableCell>
                                <StyledTableCell>{row.lastAuthor}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={summativeRows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    p: 1,
                    m: 1,
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                }}
            >
                <Button variant="contained">Transfer to R360</Button>
                <Button variant="contained">Download CSV</Button>
            </Box>
        </Box>
    );
}

function referenceTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item
                      sx={{display: 'flex', alignItems: 'end'}}>
                    <Typography>Search table</Typography>
                </Grid>

                <Grid item>
                    <TextField
                        id="filled-search"
                        label="Search terms"
                        variant="standard"
                    />
                </Grid>
            </Grid>
            <p></p>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 1150}} aria-label="simple table">
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell>Author Name</StyledTableCell>
                            <StyledTableCell align="right">Active Dir Name</StyledTableCell>
                            <StyledTableCell align="right">Author Email</StyledTableCell>
                            <StyledTableCell align="right">Title</StyledTableCell>
                            <StyledTableCell align="right">Abstract</StyledTableCell>
                            <StyledTableCell align="right">Active</StyledTableCell>
                            <StyledTableCell align="right">PMID</StyledTableCell>
                            <StyledTableCell align="right">Link</StyledTableCell>
                            <StyledTableCell align="right">Journal Name</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {referenceRows.map((row) => (
                            <StyledTableRow
                                key={row.authorName}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <StyledTableCell>{row.authorName}</StyledTableCell>
                                <StyledTableCell>{row.activeDir}</StyledTableCell>
                                <StyledTableCell>{row.authorEmail}</StyledTableCell>
                                <StyledTableCell>{row.title}</StyledTableCell>
                                <StyledTableCell>{row.abstract}</StyledTableCell>
                                <StyledTableCell>{row.active}</StyledTableCell>
                                <StyledTableCell>{row.pmId}</StyledTableCell>
                                <StyledTableCell>{row.link}</StyledTableCell>
                                <StyledTableCell>{row.journalName}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={summativeRows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    p: 1,
                    m: 1,
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                }}
            >
                <Button variant="contained">Download CSV</Button>
            </Box>
        </Box>
    );
}

function descriptiveTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item
                      sx={{display: 'flex', alignItems: 'end'}}>
                    <Typography>Search table</Typography>
                </Grid>

                <Grid item>
                    <TextField
                        id="filled-search"
                        label="Search terms"
                        variant="standard"
                    />
                </Grid>
            </Grid>
            <p></p>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 1150}} aria-label="simple table">
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell>Query</StyledTableCell>
                            <StyledTableCell>Year</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {descriptiveQueryRows.map((row) => (
                            <StyledTableRow
                                key={row.query}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <StyledTableCell>{row.query}</StyledTableCell>
                                <StyledTableCell>{row.year}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <br></br>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 1150}} aria-label="simple table">
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell>Data Sources Used in Query</StyledTableCell>
                            <StyledTableCell>Date Last Updated</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {descriptiveSourceRows.map((row) => (
                            <StyledTableRow
                                key={row.source}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <StyledTableCell>{row.source}</StyledTableCell>
                                <StyledTableCell>{row.date}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={summativeRows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    p: 1,
                    m: 1,
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                }}
            >
                <Button variant="contained">Download CSV</Button>
            </Box>
        </Box>
    );
}

function ExpertFinder() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <TabContext value={value}>
                <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Summative" value="1"/>
                        <Tab label="Reference" value="2"/>
                        <Tab label="Descriptive" value="3"/>
                    </TabList>
                </Box>
                <TabPanel value="1">
                    {summativeTable()}
                </TabPanel>
                <TabPanel value="2">
                    {referenceTable()}
                </TabPanel>
                <TabPanel value="3">
                    {descriptiveTable()}
                </TabPanel>
            </TabContext>
        </ThemeProvider>
    );
}

export default ExpertFinder;