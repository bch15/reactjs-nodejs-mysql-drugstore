import React, { useEffect, useRef, useState } from 'react';
import PageTitle from "../../components/PageTitle/PageTitle";
import { Button, Grid, IconButton } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import { Delete as DeleteIcon, Edit as EditIcon } from "@material-ui/icons"
import Axios from "axios"
import { useDrugDispatch, useDrugState, setNameSabt } from '../../context/DrugContext'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { getDrugs, getFactor } from '../../api/api_drug';
import { toast } from "react-toastify";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import moment from 'jalali-moment';

//**Start_Sate**

const FactorList = (props) => {

    //Get DrugList
    const [drugs, setDrugs] = useState([])
    const [drugContext, setDrugContext] = useState([])
    const [openPopup, setOpenPopup] = useState(false)

    // const [refresh, setRefesh] = useState(0)

    const drugDispatch = useDrugDispatch();
    const drugState = useDrugState();

    useEffect(() => {
        getFactor((isOk, data) => {
            if (!isOk)
                return console.log(data.length - 1);
            setDrugs(data);
        })

    }, [])

    //context
    // const arrDrugDispatch = useDrugDispatch()
    let length = [drugs.length]
    let rowNumber = []
    for (let i = 1; i <= length; i++) {
        rowNumber.push(i)

    }
    const transform = () => {
        return drugs.map(item => {
            return [
                item.id,
                item.name_sabt,
                item.date = onFactorTime(item.date)
            ]
        })
    };


    const options = {
        filterType: "dropdown",
        print: false,
        display: false,
        selectableRowsHideCheckboxes: false,
        selectableRowsOnClick: true,
        onRowSelectionChange: (currentRowsSelected, allRowsSelected, rowsSelected) => {
            // onRowState(rowsSelected);
        }
    };

    const onTime = () => {
        moment.locale('fa', { useGregorianParser: true });
        let m = moment().format('YYYY/MM/DD hh:mm:ss')
        return m
    }
    const onFactorTime = (item) => {
        moment.locale('fa', { useGregorianParser: true });
        let m = moment(item).format('YYYY/MM/DD hh:mm:ss')
        return m
    }

    const defaultProps = {
        bgcolor: 'background.paper',
        m: 1,
        border: 1.5,
        style: { width: 'max-content', height: 'max-content', padding: "4px" },
    };

    return (
        <div >
            <Grid container spacing={4} xs={12}>
                <Grid item xs={12}>
                    <Box borderColor="text.primary" {...defaultProps} borderRadius={8} xs={12} style={{ width: '100%', padding: "0 5px" }}>
                        <Grid item dir='rtl'>
                            موضوع گزارش: فاکتورها
                        </Grid>
                        <Grid item dir='rtl'>
                            زمان دریافت گزارش: {onTime()}
                        </Grid>
                        <Grid item dir='ltr'>
                            تعداد فاکتورها: {length}
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
            <Box borderColor="text.primary" {...defaultProps} borderRadius={3} style={{ justifyContent: 'center' }}>
                <TableContainer>
                    <Table size="small" aria-label="simple table" style={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell>ردیف</TableCell>
                                <TableCell>شماره فاکتور</TableCell>
                                <TableCell align="right">ثبت کننده فاکتور</TableCell>
                                <TableCell align="right">زمان ثبت فاکتور</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {transform().map((item, index) => (
                                <TableRow>
                                    <TableCell>{rowNumber[index]}</TableCell>
                                    <TableCell>{item[0]}</TableCell>
                                    <TableCell>{item[1]}</TableCell>
                                    <TableCell>{item[2]}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </div >
    );
};

export default FactorList;
