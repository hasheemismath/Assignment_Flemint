import React, { useState } from 'react'
import EmployeeForm from "./EmployeeForm";
import PageHeader from "../../components/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import useTable from "../../components/useTable";
import * as employeeService from "../../services/employeeService";
import Controls from "../../components/controls/Controls";
import { Search } from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
import Popup from "../../components/Popup";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';
import AddCircleSharpIcon from '@material-ui/icons/AddCircleSharp';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Link from "@material-ui/core/Link";


const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(2),
        padding: theme.spacing(1),
        backgroundColor: '#f1f1f1'
    },
    searchInput: {
        width: '75%'
    },
    newButton: {
        position: 'absolute',
        backgroundColor:'#ffffff'
        // right: '10px'
    },
    table: {
        backgroundColor:'#f1f1f1',
        width: 800,
        height:20,
        marginTop:'60px'
    },
    tableCon:{
        backgroundColor:'#f1f1f1'
    },
    box:{
        paddingLeft:'50px'
    },
    bottom:{
        display:'flex',
        flexDirection:'column',
        color:'#56d5fe',

    }
}))


const headCells = [
    { id: 'fullName', label: 'Employee Name' },
    { id: 'email', label: 'Email Address (Personal)' },
    { id: 'mobile', label: 'Mobile Number' },
    { id: 'department', label: 'Department' },
    { id: 'actions', label: 'Actions', disableSorting: true }
]

function createData(name, calories, fat) {
    return { name, calories, fat};
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0),
    createData('Ice cream sandwich', 237, 9.0)
];

export default function Employees() {

    const classes = useStyles();
    const [recordForEdit, setRecordForEdit] = useState(null)
    const [records, setRecords] = useState(employeeService.getAllEmployees())
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [openPopup, setOpenPopup] = useState(false)

    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(records, headCells, filterFn);

    const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value == "")
                    return items;
                else
                    return items.filter(x => x.fullName.toLowerCase().includes(target.value))
            }
        })
    }

    const addOrEdit = (employee, resetForm) => {
        if (employee.id == 0)
            employeeService.insertEmployee(employee)
        else
            employeeService.updateEmployee(employee)
        resetForm()
        setRecordForEdit(null)
        setOpenPopup(false)
        setRecords(employeeService.getAllEmployees())
    }

    const openInPopup = item => {
        setRecordForEdit(item)
        setOpenPopup(true)
    }

    return (
        <>
            <PageHeader
                title="New Employee"
                subTitle="DashBoard | Cases"
                icon={<PeopleOutlineTwoToneIcon fontSize="small" />}
            />


            {/*<Paper className={classes.pageContent}>*/}

            {/*    /!*<Toolbar>*!/*/}
            {/*    /!*    <Controls.Input*!/*/}
            {/*    /!*        label="Search Employees"*!/*/}
            {/*    /!*        className={classes.searchInput}*!/*/}
            {/*    /!*        InputProps={{*!/*/}
            {/*    /!*            startAdornment: (<InputAdornment position="start">*!/*/}
            {/*    /!*                <Search />*!/*/}
            {/*    /!*            </InputAdornment>)*!/*/}
            {/*    /!*        }}*!/*/}
            {/*    /!*        onChange={handleSearch}*!/*/}
            {/*    /!*    />*!/*/}
            {/*    /!*    <Controls.Button*!/*/}
            {/*    /!*        text="Add New"*!/*/}
            {/*    /!*        variant="outlined"*!/*/}
            {/*    /!*        startIcon={<AddIcon />}*!/*/}
            {/*    /!*        className={classes.newButton}*!/*/}
            {/*    /!*        onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}*!/*/}
            {/*    /!*    />*!/*/}
            {/*    /!*</Toolbar>*!/*/}
            {/*    <TblContainer>*/}
            {/*        <TblHead />*/}
            {/*        <TableBody>*/}
            {/*            {*/}
            {/*                recordsAfterPagingAndSorting().map(item =>*/}
            {/*                    (<TableRow key={item.id}>*/}
            {/*                        <TableCell>{item.fullName}</TableCell>*/}
            {/*                        <TableCell>{item.email}</TableCell>*/}
            {/*                        <TableCell>{item.mobile}</TableCell>*/}
            {/*                        <TableCell>{item.department}</TableCell>*/}
            {/*                        <TableCell>*/}
            {/*                            <Controls.ActionButton*/}
            {/*                                color="primary"*/}
            {/*                                onClick={() => { openInPopup(item) }}>*/}
            {/*                                <EditOutlinedIcon fontSize="small" />*/}
            {/*                            </Controls.ActionButton>*/}
            {/*                            <Controls.ActionButton*/}
            {/*                                color="secondary">*/}
            {/*                                <CloseIcon fontSize="small" />*/}
            {/*                            </Controls.ActionButton>*/}
            {/*                        </TableCell>*/}
            {/*                    </TableRow>)*/}
            {/*                )*/}
            {/*            }*/}
            {/*        </TableBody>*/}
            {/*    </TblContainer>*/}
            {/*    <TblPagination />*/}
            {/*</Paper>*/}

            <h2>Employment</h2>
            <h5>Add your post work experience</h5>
            <Controls.Button
                text="Add Employee"
                variant="Sharp"
                color="#ffffff"
                startIcon={<AddCircleSharpIcon color={"primary"} />}
                className={classes.newButton}
                onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
            />

            <TableContainer component={Paper} className={classes.tableCon}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead className={classes.heading}>
                        <TableRow>
                            <TableCell><b>Dessert (100g serving)</b></TableCell>
                            <TableCell align=""><b>Calories</b></TableCell>
                            <TableCell className={classes.box}/>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="">{row.calories}</TableCell>
                                <TableCell className={classes.box}>{row.fat}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <div className={classes.bottom}>
                <a href="/">Skip this test now</a>
                <a href="/">Back</a>
            </div>




            <Popup
                title="Employee Form"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <EmployeeForm
                    recordForEdit={recordForEdit}
                    addOrEdit={addOrEdit} />
            </Popup>
        </>
    )
}
