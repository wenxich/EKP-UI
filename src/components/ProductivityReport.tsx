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
import {styled, tableCellClasses, TablePagination} from "@mui/material";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#1976D2",
        color: theme.palette.common.white
    }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
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
                        <StyledTableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="right">Email</StyledTableCell>
                            <StyledTableCell align="right">ORCID</StyledTableCell>
                            <StyledTableCell align="right">Dept OFD</StyledTableCell>
                            <StyledTableCell align="right">Rank OFD</StyledTableCell>
                            <StyledTableCell align="right">Track OFD</StyledTableCell>
                            <StyledTableCell align="right"># Grants</StyledTableCell>
                            <StyledTableCell align="right">$ Total Grants</StyledTableCell>
                            <StyledTableCell align="right"># Total Direct Grants</StyledTableCell>
                            <StyledTableCell align="right"># pubs total</StyledTableCell>
                            <StyledTableCell align="right">Max IF related pubs</StyledTableCell>
                            <StyledTableCell align="right"># first author pubs</StyledTableCell>
                            <StyledTableCell align="right"># first author related pubs</StyledTableCell>
                            <StyledTableCell align="right"># last author pubs</StyledTableCell>
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
                                <StyledTableCell>{row.deptOfd}</StyledTableCell>
                                <StyledTableCell>{row.rankOfd}</StyledTableCell>
                                <StyledTableCell>{row.trackOfd}</StyledTableCell>
                                <StyledTableCell>{row.grants}</StyledTableCell>
                                <StyledTableCell>{row.totalGrants}</StyledTableCell>
                                <StyledTableCell>{row.totalDirectGrants}</StyledTableCell>
                                <StyledTableCell>{row.pubsTotal}</StyledTableCell>
                                <StyledTableCell>{row.maxIfRelated}</StyledTableCell>
                                <StyledTableCell>{row.firstAuthor}</StyledTableCell>
                                <StyledTableCell>{row.firstAuthorRelated}</StyledTableCell>
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
                        <StyledTableRow>
                            <StyledTableCell>Author Name</StyledTableCell>
                            <StyledTableCell align="right">Author Email</StyledTableCell>
                            <StyledTableCell align="right">Title</StyledTableCell>
                            <StyledTableCell align="right">PMID</StyledTableCell>
                            <StyledTableCell align="right">Link</StyledTableCell>
                            <StyledTableCell align="right">Journal Name</StyledTableCell>
                            <StyledTableCell align="right">Pub Date</StyledTableCell>
                            <StyledTableCell align="right">Auth Order</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {pubRows.map((row) => (
                            <StyledTableRow
                                key={row.authorName}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <StyledTableCell>{row.authorName}</StyledTableCell>
                                <StyledTableCell>{row.authorEmail}</StyledTableCell>
                                <StyledTableCell>{row.title}</StyledTableCell>
                                <StyledTableCell>{row.pmId}</StyledTableCell>
                                <StyledTableCell>{row.link}</StyledTableCell>
                                <StyledTableCell>{row.journal}</StyledTableCell>
                                <StyledTableCell>{row.pubDate}</StyledTableCell>
                                <StyledTableCell>{row.authOrder}</StyledTableCell>
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
                        {nihrRows.map((row) => (
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
                        <StyledTableRow>
                            <StyledTableCell>Names</StyledTableCell>
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