import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';

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

function summativeTable() {
    return (
        <Box>
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
            <Grid

                alignItems="center"
                justifyContent="center"
                container spacing={2}>
                <Grid item xs={6}>
                    <Typography variant="body1" gutterBottom>
                        Showing rows 1 to 2 of 2
                    </Typography>
                </Grid>
                <Grid item xs={1}>
                    <Typography variant="body1" gutterBottom>
                        Page
                    </Typography>
                </Grid>
                <Grid item xs={5}>
                    <Stack direction="row" spacing={2}>
                        <IconButton size="small">&lt;&lt;</IconButton>
                        <IconButton size="small">&lt;</IconButton>
                        <IconButton size="small">1</IconButton>
                        <IconButton size="small">2</IconButton>
                        <IconButton size="small">3</IconButton>
                        <IconButton size="small">4</IconButton>
                        <IconButton size="small">5</IconButton>
                        <IconButton size="small">&gt;</IconButton>
                        <IconButton size="small">&gt;&gt;</IconButton>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
}

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
function pubTable() {
    return (
        <Box>
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
            <Grid

                alignItems="center"
                justifyContent="center"
                container spacing={2}>
                <Grid item xs={6}>
                    <Typography variant="body1" gutterBottom>
                        Showing rows 1 to 2 of 4
                    </Typography>
                </Grid>
                <Grid item xs={1}>
                    <Typography variant="body1" gutterBottom>
                        Page
                    </Typography>
                </Grid>
                <Grid item xs={5}>
                    <Stack direction="row" spacing={2}>
                        <IconButton size="small">&lt;&lt;</IconButton>
                        <IconButton size="small">&lt;</IconButton>
                        <IconButton size="small">1</IconButton>
                        <IconButton size="small">2</IconButton>
                        <IconButton size="small">3</IconButton>
                        <IconButton size="small">4</IconButton>
                        <IconButton size="small">5</IconButton>
                        <IconButton size="small">&gt;</IconButton>
                        <IconButton size="small">&gt;&gt;</IconButton>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
}

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

function nihrTable() {
    return (
        <Box>
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
            <Grid

                alignItems="center"
                justifyContent="center"
                container spacing={2}>
                <Grid item xs={6}>
                    <Typography variant="body1" gutterBottom>
                        Showing rows 1 to 2 of 25
                    </Typography>
                </Grid>
                <Grid item xs={1}>
                    <Typography variant="body1" gutterBottom>
                        Page
                    </Typography>
                </Grid>
                <Grid item xs={5}>
                    <Stack direction="row" spacing={2}>
                        <IconButton size="small">&lt;&lt;</IconButton>
                        <IconButton size="small">&lt;</IconButton>
                        <IconButton size="small">1</IconButton>
                        <IconButton size="small">2</IconButton>
                        <IconButton size="small">3</IconButton>
                        <IconButton size="small">4</IconButton>
                        <IconButton size="small">5</IconButton>
                        <IconButton size="small">&gt;</IconButton>
                        <IconButton size="small">&gt;&gt;</IconButton>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
}

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

function descriptiveTable() {
    return (
        <Box>
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
        </Box>
    );
}

function ProductivityReport() {
    const [status, setStatus] = React.useState(1)
    // 1. show summative. 2. show pub. 3. show nihr. 4. show descriptive.

    const buttonHandler = (status: React.SetStateAction<number>) => {
        setStatus(status);
    };

    return (
        <Container maxWidth="lg">
            <Stack direction="row" spacing={2}>
                <Button variant="outlined"
                        onClick={() => {
                            buttonHandler(1)
                        }}>Summative</Button>
                <Button variant="outlined"
                        onClick={() => {
                            buttonHandler(2)
                        }}>PubMed Reference</Button>
                <Button variant="outlined"
                        onClick={() => {
                            buttonHandler(3)
                        }}>NIHR Reference</Button>
                <Button variant="outlined"
                        onClick={() => {
                            buttonHandler(4)
                        }}>Descriptive</Button>
            </Stack>
            <Container maxWidth="md">
                <Grid
                    alignItems="center"
                    justifyContent="center"
                    container spacing={2}>
                    <Grid item xs={3}>
                        <Typography variant="body1" gutterBottom>
                            Search table
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            label="Search terms"
                            sx={{m: 1, width: '20ch'}}
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="body1" gutterBottom>
                            Number of rows per page
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <FormControl size="small">
                            <InputLabel id="demo-simple-select-label">2</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="2"
                            >
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </Container>
            {status === 1 && summativeTable()}
            {status === 2 && pubTable()}
            {status === 3 && nihrTable()}
            {status === 4 && descriptiveTable()}
        </Container>
    );
}

export default ProductivityReport;