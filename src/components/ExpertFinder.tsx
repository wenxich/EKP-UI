import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {TablePagination} from "@mui/material";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

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
                <Grid item alignItems="stretch">
                    <Typography>Search table</Typography>
                </Grid>

                <Grid item alignItems="stretch">
                    <TextField
                        id="filled-search"
                        label="Search terms"
                        variant="standard"
                    />
                </Grid>
            </Grid>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 1150}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">ORCID</TableCell>
                            <TableCell align="right">Dept ESPA</TableCell>
                            <TableCell align="right">Dept OFD</TableCell>
                            <TableCell align="right">Rank OFD</TableCell>
                            <TableCell align="right">Track OFD</TableCell>
                            <TableCell align="right"># related pubs</TableCell>
                            <TableCell align="right"># pubs total</TableCell>
                            <TableCell align="right">% pubs related</TableCell>
                            <TableCell align="right">Median IF related pubs</TableCell>
                            <TableCell align="right">Max IF related pubs</TableCell>
                            <TableCell align="right"># first author related pubs</TableCell>
                            <TableCell align="right"># last author related pubs</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {summativeRows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.email}</TableCell>
                                <TableCell>{row.orcId}</TableCell>
                                <TableCell>{row.deptEspa}</TableCell>
                                <TableCell>{row.deptOfd}</TableCell>
                                <TableCell>{row.rankOfd}</TableCell>
                                <TableCell>{row.trackOfd}</TableCell>
                                <TableCell>{row.relatedPubs}</TableCell>
                                <TableCell>{row.pubsTotal}</TableCell>
                                <TableCell>{row.pubsRelated}</TableCell>
                                <TableCell>{row.medianIfRelated}</TableCell>
                                <TableCell>{row.maxIfRelated}</TableCell>
                                <TableCell>{row.firstAuthor}</TableCell>
                                <TableCell>{row.lastAuthor}</TableCell>
                            </TableRow>
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
                <Grid item alignItems="stretch">
                    <Typography>Search table</Typography>
                </Grid>

                <Grid item alignItems="stretch">
                    <TextField
                        id="filled-search"
                        label="Search terms"
                        variant="standard"
                    />
                </Grid>
            </Grid>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 1150}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Author Name</TableCell>
                            <TableCell align="right">Active Dir Name</TableCell>
                            <TableCell align="right">Author Email</TableCell>
                            <TableCell align="right">Title</TableCell>
                            <TableCell align="right">Abstract</TableCell>
                            <TableCell align="right">Active</TableCell>
                            <TableCell align="right">PMID</TableCell>
                            <TableCell align="right">Link</TableCell>
                            <TableCell align="right">Journal Name</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {referenceRows.map((row) => (
                            <TableRow
                                key={row.authorName}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell>{row.authorName}</TableCell>
                                <TableCell>{row.activeDir}</TableCell>
                                <TableCell>{row.authorEmail}</TableCell>
                                <TableCell>{row.title}</TableCell>
                                <TableCell>{row.abstract}</TableCell>
                                <TableCell>{row.active}</TableCell>
                                <TableCell>{row.pmId}</TableCell>
                                <TableCell>{row.link}</TableCell>
                                <TableCell>{row.journalName}</TableCell>
                            </TableRow>
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
                <Grid item alignItems="stretch">
                    <Typography>Search table</Typography>
                </Grid>

                <Grid item alignItems="stretch">
                    <TextField
                        id="filled-search"
                        label="Search terms"
                        variant="standard"
                    />
                </Grid>
            </Grid>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 1150}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Query</TableCell>
                            <TableCell>Year</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {descriptiveQueryRows.map((row) => (
                            <TableRow
                                key={row.query}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell>{row.query}</TableCell>
                                <TableCell>{row.year}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <br></br>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 1150}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Data Sources Used in Query</TableCell>
                            <TableCell>Date Last Updated</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {descriptiveSourceRows.map((row) => (
                            <TableRow
                                key={row.source}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell>{row.source}</TableCell>
                                <TableCell>{row.date}</TableCell>
                            </TableRow>
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
        </Box>
    );
}

function ExpertFinder() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="Summative" value="1" />
                    <Tab label="Reference" value="2" />
                    <Tab label="Descriptive" value="3" />
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
    );
}

export default ExpertFinder;