import React, { useEffect, useRef, useState } from 'react';
import PageTitle from "../../components/PageTitle";
import { Button, Grid, IconButton } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import { Delete as DeleteIcon, Edit as EditIcon } from "@material-ui/icons"
import Axios from "axios"
import { useDrugDispatch, useDrugState, setNameSabt } from '../../context/DrugContext'
import AddDrugForm from './AddDrug';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { getDrugs, newFactor, newRizFactor } from '../../api/api_drug';
import { toast } from "react-toastify";
import SyncIcon from '@material-ui/icons/Sync';

//**Start_Sate**

const DrugsList = (props) => {

    //Get DrugList
    const [select, setSelect] = useState([])
    const [drugs, setDrugs] = useState([])
    const [drugContext, setDrugContext] = useState([])
    const [openPopup, setOpenPopup] = useState(false)
    const [name, setName] = useState([]);

    // const [refresh, setRefesh] = useState(0)

    const drugDispatch = useDrugDispatch();
    const drugState = useDrugState();

    useEffect(() => {
        console.log("bool: " + drugState.boolRefresh);
       
        getDrugs((isOk, data) => {
            if (!isOk)
                return console.log(data.message);
            setDrugs(data)
            console.log("data");
            console.log(data);
        })
        if (drugState.bool) {
            setDrugContext([...drugState.arrInput])
        }
        //get Staff
        Axios.get("http://localhost:3000/staff-name")
            .then(response => {
                // console.log(response.data)
                setName(response.data)

            })
            .catch(error => {
                console.log(error);
            })

    }, [drugState.refresh])


    const onEditClick = (item) => {
        props.history.push({
            pathname: "/app/editDrug",
            state: item
        })
    }

    // const [openPopup, setOpenPopup] = useState(false)

    const onFactorClick = () => {
        //Creat factor by select name
        const selectName = {
            "name_sabt": drugState.nameSabt
        }
        newFactor(selectName, (isOk, data) => {
            if (!isOk)
                return toast.error(data);

            toast.success("موفقیت آمیز بود...");
            props.history.push({
                pathname: "/app/factor",
                state: select
            })
        })

    }
    //Update Context
    const onUpdateDrugState = () => {
        setDrugContext(drugContext => {
            return [...drugContext, ...select]
        })
    }
    const onTest = () => {
        console.log(drugContext);
        props.history.push({
            pathname: "/app/factor",
            state: drugContext
        })
        //setBool(false)
    }

    //Delete Drug by id
    const onDeleteClick = (item) => {
        let foundIndex = -1;
        drugs.forEach((itemDrug, index) => {
            if (itemDrug.id === item.id) {
                Axios.delete(`http://localhost:3000/drug/${item.id}`)
                    .then(response => {
                        console.log(response.data)
                    })
                    .catch(error => {
                        console.log(error);
                    })
                foundIndex = index;
            }
        });
        setDrugs(drugs => {
            return [...drugs.slice(0, foundIndex), ...drugs.slice(foundIndex + 1)]
        })
    }

    //context
    // const arrDrugDispatch = useDrugDispatch()

    const onRowState = (indexRow) => {
        drugs.forEach((itemDrug, index) => {
            indexRow.map(item => {
                if (item === index) {
                    setSelect(select => {
                        return [...select.concat(itemDrug)]
                    })
                }
            })
        });
    }
    const onHandleSelect = (e) => {
        console.log(typeof (e.target.value));
        setNameSabt(drugDispatch, e.target.value)
        drugState.arrInput.map(item => {
            item.name_sabt = e.target.value
        })
    }

    const transform = () => {
        return drugs.map(item => {
            return [
                item.daroo_name,
                item.daroo_shekl,
                item.daroo_khatar,
                item.daroo_noskhe,
                item.daroo_bime,
                item.daroo_tolidkonande,
                item.daroo_gheimat,
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
            onRowState(rowsSelected);
        }
    };

    const onRefresh=()=>{
        console.log('refresh');
        getDrugs((isOk, data) => {
            if (!isOk)
                return console.log(data.message);
            setDrugs(data)
            console.log("data");
            console.log(data);
        })
        if (drugState.bool) {
            setDrugContext([...drugState.arrInput])
        }
    }

    return (
        <div>
            {!drugState.bool &&
                <FormControl style={{ marginBottom: '2rem' }} align="right">
                    <InputLabel id="demo-simple-select-helper-label">کارکنان</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        //value={age}
                        onChange={(e) => onHandleSelect(e)}
                    >
                        <MenuItem value="">
                        </MenuItem>
                        {name.map(item => {
                            return <MenuItem value={item.name_sabt}>{item.name_sabt}</MenuItem>
                        })}
                    </Select>
                    <FormHelperText>نام خود را برای ثبت فاکتور انتخاب کنید</FormHelperText>
                </FormControl>
            }
            <Grid container spacing={4}>
                <Grid item xs={6} dir='rtl'>
                    {drugState.bool && <Button variant="outlined" color="primary">نام ثبت کننده فاکتور: {drugState.nameSabt}</Button>}
                </Grid>
                <Grid item xs={6} dir='ltr'>
                    <Button variant="contained" color="primary" style={{ color: "white" }} onClick={() => setOpenPopup(true)}>محصول جدید</Button>
                </Grid>
            </Grid>
            <PageTitle title="لیست داروهای موجود" />
            <Grid container spacing={4}>
                <Grid item xs={12}>
                
                    <MUIDataTable
                        title={<IconButton onClick={onRefresh} style={{ padding: '0 0 0 0' , fontFamily: 'Shabnam'}}>
                        <SyncIcon style={{ color: '#c8d6e5', width: 20, height: 20 }} />
                        محصولات
                    </IconButton>}
                        data={transform()}
                        columns={["نام دارو", "شکل دارویی", "خطر دارو", "نسخه یا otc", "تحت بیمه", "تولیدکننده", "قیمت", "حذف", "ویرایش"]}
                        options={options}
                    />
                </Grid>
                {!drugState.bool && <><Grid item><Button variant="contained" color="secondary" onClick={onFactorClick}>ایجاد فاکتور</Button></Grid></>}
                {drugState.bool && <><Grid item><Button variant="contained" color="secondary" onClick={onTest}>افزودن به فاکتور قبل</Button></Grid></>}
                {drugState.bool && <><Grid item><Button variant="contained" color="primary" onClick={onUpdateDrugState}>ذخیره تغییرات</Button></Grid></>}
            </Grid>
            <AddDrugForm openPopup={openPopup} setOpenPopup={setOpenPopup} />
        </div>
    );
};

export default DrugsList;
