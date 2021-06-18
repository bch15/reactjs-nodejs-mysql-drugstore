import React, { useEffect, useRef, useState } from 'react';
import PageTitle from "../../components/PageTitle/PageTitle";
import { Button, Grid, IconButton } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import { Delete as DeleteIcon, Edit as EditIcon } from "@material-ui/icons"
import Axios from "axios"
import { useDrugDispatch, useDrugState, setNameSabt } from '../../context/DrugContext'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { getRizFactor } from '../../api/api_drug';
import { toast } from "react-toastify";
import AddStuff from './AddStuff';
import moment from 'jalali-moment';
import { Alert, AlertTitle } from "@material-ui/lab";
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';

//**Start_Sate**

const RizFactorList = (props) => {

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
        getRizFactor((isOk, data) => {
            if (!isOk)
                return console.log(data.length - 1);
            setFactor(data);
        })
    }, [])


    const onEditClick = (item) => {
        props.history.push({
            pathname: "/app/edit-rizfactor",
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
                item.factor_id,
                item.name_sabt,
                item.daroo_name,
                item.daroo_noskhe,
                item.daroo_bime,
                item.daroo_gheimat,
                item.daroo_tedad,
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
                    حذف ریزفاکتور های ثبت شده ممکن نیست!
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
            <PageTitle title="ریزفاکتورهای موجود" />
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <MUIDataTable
                        title="ریز فاکتورها"
                        data={transform()}
                        columns={["شماره ریزفاکتور", "شماره فاکتور", "ثبت کننده", "نام دارو", "نسخه یا", "بیمه", "قیمت", "تعداد", "حذف", "ویرایش"]}
                        options={options}
                    />
                </Grid>
            </Grid>
            <AddStuff openPopup={openPopup} setOpenPopup={setOpenPopup} />
        </div>
    );
};

export default RizFactorList;
