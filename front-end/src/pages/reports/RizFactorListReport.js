import React, { useEffect, useRef, useState } from 'react';
import PageTitle from "../../components/PageTitle/PageTitle";
import { Button, Grid, IconButton } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import { Delete as DeleteIcon, Edit as EditIcon } from "@material-ui/icons"
import Axios from "axios"
import { useDrugDispatch, useDrugState, setNameSabt } from '../../context/DrugContext'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { getDrugs, getFactor, getRizFactor } from '../../api/api_drug';
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
import { makeStyles } from '@material-ui/core/styles';

//**Start_Sate**

const RizFactorListReport = (props) => {

    //Get DrugList
    const [drugs, setDrugs] = useState([])
    const [drugContext, setDrugContext] = useState([])
    const [openPopup, setOpenPopup] = useState(false)

    // const [refresh, setRefesh] = useState(0)

    const drugDispatch = useDrugDispatch();
    const drugState = useDrugState();

    useEffect(() => {
        getRizFactor((isOk, data) => {
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
                item.factor_id,
                item.name_sabt,
                item.daroo_name,
                item.daroo_noskhe,
                item.daroo_bime,
                item.daroo_gheimat,
                item.daroo_tedad,
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

    const defaultProps = {
        bgcolor: 'background.paper',
        m: 1,
        border: 1.5,
        style: { width: 'max-content', height: 'max-content', padding: "4px" },
    };

    const useStyles = makeStyles(theme => ({
        root: {
            fontSize: '10px',
        },
        table: {
            fontSize: '5px !important',
        },
        tablerow: {
            fontSize: '5px'
        },
        tablecell: {
            fontSize: '11px'
        }
    }));

    const classes = useStyles();

    return (
        <div >
            <Grid container spacing={4} xs={12}>
                <Grid item xs={12}>
                    <Box borderColor="text.primary" {...defaultProps} borderRadius={8} xs={12} style={{ width: '100%', padding: "0 5px" }}>
                        <Grid item dir='rtl'>
                            موضوع گزارش: ریزفاکتورها
                        </Grid>
                        <Grid item dir='rtl'>
                            زمان دریافت گزارش: {onTime()}
                        </Grid>
                        <Grid item dir='ltr'>
                            تعداد ریزفاکتورها: {length}
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
            <Box borderColor="text.primary" {...defaultProps} borderRadius={3} style={{ justifyContent: 'center' }}>
                <TableContainer>
                    <Table size="small" aria-label="simple table" style={{ minWidth: 650 }} className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.tablecell}>ردیف</TableCell>
                                <TableCell className={classes.tablecell}>شماره ریزفاکتور</TableCell>
                                <TableCell className={classes.tablecell} align="right">شماره فاکتور </TableCell>
                                <TableCell className={classes.tablecell} align="right">ثبت کننده</TableCell>
                                <TableCell className={classes.tablecell} align="right">نام محصول</TableCell>
                                <TableCell className={classes.tablecell} align="right">نسخه یا otc</TableCell>
                                <TableCell className={classes.tablecell} align="right">بیمه</TableCell>
                                <TableCell className={classes.tablecell} align="right">قیمت</TableCell>
                                <TableCell className={classes.tablecell} align="right">تعداد</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {transform().map((item, index) => (
                                <TableRow>
                                    <TableCell className={classes.tablecell}>{rowNumber[index]}</TableCell>
                                    <TableCell className={classes.tablecell}>{item[0]}</TableCell>
                                    <TableCell className={classes.tablecell}>{item[1]}</TableCell>
                                    <TableCell className={classes.tablecell}>{item[2]}</TableCell>
                                    <TableCell className={classes.tablecell}>{item[3]}</TableCell>
                                    <TableCell className={classes.tablecell}>{item[4]}</TableCell>
                                    <TableCell className={classes.tablecell}>{item[5]}</TableCell>
                                    <TableCell className={classes.tablecell}>{item[6]}</TableCell>
                                    <TableCell className={classes.tablecell}>{item[7]}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </div >
    );
};

export default RizFactorListReport;
