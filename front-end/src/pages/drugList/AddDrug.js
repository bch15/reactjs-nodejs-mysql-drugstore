import React, { useEffect, useRef, useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@material-ui/core";
import { Button, Grid, IconButton } from "@material-ui/core";
import { Edit as EditIcon } from "@material-ui/icons"
import { toast } from "react-toastify";
import Axios from "axios"
import { useDrugDispatch, useDrugState,updateDrugTable } from '../../context/DrugContext'

const AddDrugForm = (props) => {

    const drugDispatch = useDrugDispatch();
    const drugState = useDrugState();

    const { title, children, openPopup, setOpenPopup } = props;

    const [drug, setDrug] = useState(
        {
            daroo_name: '',
            daroo_shekl: '',
            daroo_khatar: '',
            daroo_noskhe: '',
            daroo_bime: '',
            daroo_tolidkonande: '',
            daroo_gheimat: 0
        }
    );

    useEffect(() => {
        setDrug({
            daroo_name: '',
            daroo_shekl: '',
            daroo_khatar: '',
            daroo_noskhe: '',
            daroo_bime: '',
            daroo_tolidkonande: '',
            daroo_gheimat: 0
        })
    }, [])

    const onEditClick =()=>{
        setDrug({
            daroo_name: '',
            daroo_shekl: '',
            daroo_khatar: '',
            daroo_noskhe: '',
            daroo_bime: '',
            daroo_tolidkonande: '',
            daroo_gheimat: 0
        })
    }
    const onSaveDrug = (data) => {

        const checkProperties = (drug) => {
            let num = 0
            for (var key in drug) {
                if (drug[key] !== null && drug[key] != "" && drug[key] != 0)
                    num++
            }
            // console.log(num);
            if (num >= 7)
                return false
            else
                return true
        }
        // console.log(checkProperties(drug));
        if (!checkProperties(drug)) {
            Axios.post("http://localhost:3000/drug", data)
                .then(response => {
                    console.log(response.data)
                    setDrug(response.data)

                })
                .catch(error => {
                    console.log(error);
                })
            setOpenPopup(false)
            updateDrugTable(drugDispatch);
            toast.success("محصول با موفقیت افزوده شد")
        }
        else {
            toast.error("مشخصات کامل نمی باشد")
        }
    }

    const setDrugProperty = (key, e) => {
        switch (key) {
            case 'daroo_name':
                setDrug({ ...drug, daroo_name: e.target.value })
                break;
            case 'daroo_shekl':
                setDrug({ ...drug, daroo_shekl: e.target.value });
                break;
            case 'daroo_khatar':
                setDrug({ ...drug, daroo_khatar: e.target.value });
                break;
            case 'daroo_noskhe':
                setDrug({ ...drug, daroo_noskhe: e.target.value });
                break;
            case 'daroo_bime':
                setDrug({ ...drug, daroo_bime: e.target.value });
                break;
            case 'daroo_tolidkonande':
                setDrug({ ...drug, daroo_tolidkonande: e.target.value });
                break;
            case 'daroo_gheimat':
                setDrug({ ...drug, daroo_gheimat: e.target.value });
                break;
        }
    }

    const handleChange = (e) => {
        const regex = new RegExp(/^[1-9]\d*$/gm)
        // console.log(drugState.clickDrug.daroo_name);
        if (e.target.value.match(regex)) {
            setDrugProperty('daroo_gheimat', e)
        }
        else if (e.target.value < 0) {

            e.target.value = 0
            toast.error("قیمت نمیتواند کمتر از 0 باشد")

        }
        else if (e.target.value == 0) {
            // const { daroo_tedad, value } = e.target
            // setValue({ [daroo_tedad]: value });
            e.target.value = 0
            toast.error("قیمت نمیتواند 0 باشد")

        }
        else {
            toast.error(`مقدار ${e.target.value} صحیح نیست`)
            e.target.value = 0
        }
    };

    return (
        <Dialog open={openPopup}>
            <DialogTitle>
                <IconButton onClick={() => onEditClick()} style={{padding: '0 0 0 0'}}>
                    <EditIcon style={{color: '#c8d6e5' , width:20 , height:20}} />
                </IconButton>
                محصول جدید
            </DialogTitle>
            <DialogContent>
                مشخصات محصول جدید را وارد کنید
            </DialogContent>
            <Grid container direction={"column"} spacing={2}>
                <Grid item >
                    <TextField fullWidth style={{ width: '100%' }} placeholder={"نام دارو"} onChange={e => {
                        setDrugProperty('daroo_name', e)
                    }} />
                </Grid>
                <Grid item>
                    <TextField fullWidth style={{ width: '100%' }} placeholder={"شکل دارویی"} onChange={e => {
                        setDrugProperty('daroo_shekl', e)
                    }} />
                </Grid>
                <Grid item>
                    <TextField fullWidth style={{ width: '100%' }} placeholder={"خطر دارو"} onChange={e => {
                        setDrugProperty('daroo_khatar', e)
                    }} />
                </Grid>
                <Grid item>
                    <TextField fullWidth style={{ width: '100%' }} placeholder={"نسخه یا otc"} onChange={e => {
                        setDrugProperty('daroo_noskhe', e)
                    }} />
                </Grid>
                <Grid item>
                    <TextField fullWidth style={{ width: '100%' }} placeholder={"بیمه"} onChange={e => {
                        setDrugProperty('daroo_bime', e)
                    }} />
                </Grid>
                <Grid item>
                    <TextField fullWidth style={{ width: '100%' }} placeholder={"تولیدکننده"} onChange={e => {
                        setDrugProperty('daroo_tolidkonande', e)
                    }} />
                </Grid>
                <Grid item>
                    <TextField fullWidth style={{ width: '100%' }} placeholder={"قیمت"} type={"number"} onChange={handleChange} />
                </Grid>
            </Grid>
            <DialogActions>
                <Grid container style={{ margin: '3rem 0 0 0' }}>
                    <Grid item dir="rtl" xs={6}>
                        <Button onClick={() => onSaveDrug(drug)} variant="contained" color="primary">
                            افزودن
                        </Button>
                    </Grid>
                    <Grid item dir='ltr' xs={6}>
                        <Button onClick={() => { setOpenPopup(false) }} variant="contained" color="secondary">
                            لغو
                        </Button>
                    </Grid>
                </Grid>
            </DialogActions>
        </Dialog>
    );
};

export default AddDrugForm;
