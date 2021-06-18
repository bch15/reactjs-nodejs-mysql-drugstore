import React, { useEffect, useRef, useState } from 'react';
import PageTitle from "../../components/PageTitle/PageTitle";
import { Button, Grid, IconButton } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import { Delete as DeleteIcon, Edit as EditIcon } from "@material-ui/icons"
import Axios from "axios"
import { useDrugDispatch, useDrugState, setNameSabt } from '../../context/DrugContext'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { getFactor } from '../../api/api_drug';
import { toast } from "react-toastify";
import AddStuff from './AddStuff';
import moment from 'jalali-moment';
import { Alert, AlertTitle } from "@material-ui/lab";
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import SyncIcon from '@material-ui/icons/Sync';

//**Start_Sate**

const Factor = (props) => {

    //Get DrugList
    const [select, setSelect] = useState([])
    const [drugs, setDrugs] = useState([])
    const [drugContext, setDrugContext] = useState([])
    const [openPopup, setOpenPopup] = useState(false)
    const [factor, setFactor] = useState([]);
    const [open, setOpen] = React.useState(false);

    // const [refresh, setRefesh] = useState(0)

    const drugDispatch = useDrugDispatch();
    const drugState = useDrugState();

    useEffect(() => {
        getFactor((isOk, data) => {
            if (!isOk)
                return console.log(data.length - 1);
            setFactor(data);
        })
    }, [])


    const onEditClick = (item) => {
        props.history.push({
            pathname: "/app/editDrug",
            state: item
        })
    }

    //Delete Drug by id
    const onDeleteClick = (item) => {
        setOpen(true);
    }

    //context
    // const arrDrugDispatch = useDrugDispatch()

    const transform = () => {
        return factor.map(item => {
            return [
                item.id,
                item.name_sabt,
                item.date = onTime(item.date),
                <IconButton onClick={() => onDeleteClick(item)}>
                    <DeleteIcon />
                </IconButton>,
                <IconButton onClick={() => onEditClick(item)}>
                    <EditIcon />
                </IconButton>,

            ]
        })
    };


    const options = {
        filterType: "dropdown",
        selectableRowsHideCheckboxes: false,
        selectableRowsOnClick: true,
        onRowSelectionChange: (currentRowsSelected, allRowsSelected, rowsSelected) => {
            // onRowState(rowsSelected);
        }
    };

    const onTime = (item) => {
        moment.locale('fa', { useGregorianParser: true });
        let m = moment(item).format('YYYY/MM/DD hh:mm:ss')
        return m
    }

    const onRefresh=()=>{
        getFactor((isOk, data) => {
            if (!isOk)
                return console.log(data.length - 1);
            setFactor(data);
        })
    }

    return (
        <div>
            <Collapse in={open}>
                <Alert
                    severity="error"
                    action={
                        <IconButton
                            dir='ltr'
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                >
                    حذف فاکتورها بدلیل وابستگی ریزفاکتورها ممکن نیست!
                </Alert>
            </Collapse>
            {!open &&
                <Grid item xs={12} dir='rtl'>
                    <Button
                        style={{ backgroundColor: '#e17055', color: 'white' }}
                        disabled={open}
                        variant="contained"
                        onClick={() => {
                            setOpen(true);
                        }}
                    >
                        هشـدار
                </Button>
                </Grid>
            }
            <PageTitle title="گزارش فاکتورهای موجود" />
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <MUIDataTable
                        title={<IconButton onClick={onRefresh} style={{ padding: '0 0 0 0' , fontFamily: 'Shabnam'}}>
                        <SyncIcon style={{ color: '#c8d6e5', width: 20, height: 20 }} />
                        فاکتورها
                    </IconButton>}
                        data={transform()}
                        columns={["شماره فاکتور", "ثبت کننده", "تاریخ ثبت", "حذف"]}
                        options={options}
                    />
                </Grid>
            </Grid>
            <AddStuff openPopup={openPopup} setOpenPopup={setOpenPopup} />
        </div>
    );
};

export default Factor;
