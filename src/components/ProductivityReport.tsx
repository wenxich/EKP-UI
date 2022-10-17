import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import {TablePagination} from "@mui/material";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

// summative table creation

function createSummativeRows(
    name: string,
    email: string,
    orcId: string,
    deptOfd: string,
    rankOfd: string,
    trackOfd: string,
    grants: number,
    totalGrants: number,
    totalDirectGrants: number,
    pubsTotal: number,
    maxIfRelated: number,
    firstAuthor: number,
    firstAuthorRelated: number,
    lastAuthor: number
) {
    return {
        name, email, orcId, deptOfd, rankOfd, trackOfd, grants, totalGrants, totalDirectGrants, pubsTotal,
        maxIfRelated, firstAuthor, firstAuthorRelated, lastAuthor
    };
}

const summativeRows = [
    createSummativeRows('Alferiev, Ivan', '///', '///', '///',
        'Professor', 'Clinical Educator', 15, 1000000, 20, 75,
        50.65, 82.93, 3, 2),
    createSummativeRows('Alcamo, Alicia M', '///', '///', '///',
        'Professor', 'Academic Clinician', 11, 20000, 30,
        36.67, 16.4, 36.05, 2, 1),
];

// pub table creation

function createPubRows(
    authorName: string,
    authorEmail: string,
    title: string,
    pmId: number,
    link: string,
    journal: string,
    impactFactor: number,
    pubDate: string,
    authOrder: string,
) {
    return {
        authorName, authorEmail, title, pmId, link, journal, pubDate, authOrder
    };
}

const pubRows = [
    createPubRows('Alferiev, Ivan', '///', 'Environment-Sensitive Polymeric ' +
        'Micelles Encapsulating SN-38 Potently Suppress Growth of Neuroblastoma Cells Exhibiting Intrinsic and ' +
        'Acquired Drug Resistance.', 33615176, 'https://pubmed.ncbi.nlm.gov/33615176',
        'ACS Pharmacology & Translational Science', 36.376, '2/12/2021', 'last'),
    createPubRows('Alferiev, Ivan', '///', 'Selective Agonists of Nuclear ' +
        'Retinoic Acid Receptor Gamma Inhibit Growth of HCS-2/8 Chondrosarcoma Cells.', 31808569, 'https://pubmed.ncbi.nlm.nih.gov/31808569',
        'Journal of Orthopaedic Research', 39.7, '5/1/2020', 'last'),
];

// nihr table creation

function createNihrRows(
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

const nihrRows = [
    createNihrRows('Alferiev, Ivan', '///', '///',
        'Selective Agonists of Nuclear Retinoic Acid Receptor Gamma Inhibit Growth of HCS-2/8 Chondrosarcoma ' +
        'Cells.', 'Chondrosarcoma is the second most common primary bone sarcoma. Treatment of chondrosarcoma ' +
        'is limited to surgery due to radiation and che...', 'true', 31808569,
        'https://pubmed.ncbi.nlm.nih.gov/31808569', 'Journal of Orthopaedic Research'),
    createNihrRows('Alferiev, Ivan', '///', '///',
        'Nanocarrier-Based Delivery of SN22 as a Tocopheryl Oxamate Prodrug Achieves Rapid Tumor Regression and ' +
        'Extends Survival in High-Risk Neuroblastoma Models', 'Despite the use of intensive multimodality' +
        ' therapy, the majority of high-risk neuroblastoma (NB) patients do not survive. Without significant' +
        ' improveme...', 'true', 35163672, 'https://pubmed.ncbi.nim.nih.gov/35163672',
        'International Journal of Molecular Sciences'),
];

// descriptive table creation

function createDescriptiveQueryRows(query: string, year: number) {
    return { query, year };
}

const descriptiveQueryRows = [
    createDescriptiveQueryRows('Alferiev, Ivan; Alcamo, Alicia M', 2021),
];

function createDescriptiveSourceRows(source: string, date: string) {
    return { source, date };
}

const descriptiveSourceRows = [
    createDescriptiveSourceRows('PubMed', '10/6/22'),
    createDescriptiveSourceRows('CHOP Employee Database', '9/30/22'),
    createDescriptiveSourceRows('RIS Impact Factor Database', '9/15/22'),
    createDescriptiveSourceRows('NIH RePORTER Database', '9/1/22'),

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
                            <TableCell align="right">Dept OFD</TableCell>
                            <TableCell align="right">Rank OFD</TableCell>
                            <TableCell align="right">Track OFD</TableCell>
                            <TableCell align="right"># Grants</TableCell>
                            <TableCell align="right">$ Total Grants</TableCell>
                            <TableCell align="right"># Total Direct Grants</TableCell>
                            <TableCell align="right"># pubs total</TableCell>
                            <TableCell align="right">Max IF related pubs</TableCell>
                            <TableCell align="right"># first author pubs</TableCell>
                            <TableCell align="right"># first author related pubs</TableCell>
                            <TableCell align="right"># last author pubs</TableCell>
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
                                <TableCell>{row.deptOfd}</TableCell>
                                <TableCell>{row.rankOfd}</TableCell>
                                <TableCell>{row.trackOfd}</TableCell>
                                <TableCell>{row.grants}</TableCell>
                                <TableCell>{row.totalGrants}</TableCell>
                                <TableCell>{row.totalDirectGrants}</TableCell>
                                <TableCell>{row.pubsTotal}</TableCell>
                                <TableCell>{row.maxIfRelated}</TableCell>
                                <TableCell>{row.firstAuthor}</TableCell>
                                <TableCell>{row.firstAuthorRelated}</TableCell>
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

function pubTable() {
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
                            <TableCell align="right">Author Email</TableCell>
                            <TableCell align="right">Title</TableCell>
                            <TableCell align="right">PMID</TableCell>
                            <TableCell align="right">Link</TableCell>
                            <TableCell align="right">Journal Name</TableCell>
                            <TableCell align="right">Pub Date</TableCell>
                            <TableCell align="right">Auth Order</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {pubRows.map((row) => (
                            <TableRow
                                key={row.authorName}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell>{row.authorName}</TableCell>
                                <TableCell>{row.authorEmail}</TableCell>
                                <TableCell>{row.title}</TableCell>
                                <TableCell>{row.pmId}</TableCell>
                                <TableCell>{row.link}</TableCell>
                                <TableCell>{row.journal}</TableCell>
                                <TableCell>{row.pubDate}</TableCell>
                                <TableCell>{row.authOrder}</TableCell>
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

function nihrTable() {
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
                        {nihrRows.map((row) => (
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
            <p></p>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 1150}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Names</TableCell>
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

function ProductivityReport() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="Summative" value="1" />
                    <Tab label="PubMed Ref" value="2" />
                    <Tab label="NIHR Ref" value="3" />
                    <Tab label="Descriptive" value="4" />
                </TabList>
            </Box>
            <TabPanel value="1">
                {summativeTable()}
            </TabPanel>
            <TabPanel value="2">
                {pubTable()}
            </TabPanel>
            <TabPanel value="3">
                {nihrTable()}
            </TabPanel>
            <TabPanel value="4">
                {descriptiveTable()}
            </TabPanel>
        </TabContext>
    );
}

export default ProductivityReport;