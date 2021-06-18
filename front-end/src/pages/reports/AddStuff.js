import React, { useEffect, useRef, useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@material-ui/core";
import { Button, Grid, IconButton } from "@material-ui/core";
import { Edit as EditIcon } from "@material-ui/icons"
import { toast } from "react-toastify";
import Axios from "axios"
import { useDrugDispatch, useDrugState,updateDrugTable } from '../../context/DrugContext'

const AddStuff = (props) => {

    const drugDispatch = useDrugDispatch();
    const drugState = useDrugState();

    const { title, children, openPopup, setOpenPopup } = props;

    const [drug, setDrug] = useState(
        {
            name_sabt: '',
        }
    );

    useEffect(() => {
        setDrug({
            name_sabt: '',
        })
    }, [])

    const onEditClick =()=>{
        setDrug({
            name_sabt: '',
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
            if (num >= 1)
                return false
            else
                return true
        }
        // console.log(checkProperties(drug));
        if (!checkProperties(drug)) {
            Axios.post("http://localhost:3000/staff-name", data)
                .then(response => {
                    console.log(response.data)
                    setDrug(response.data)

                })
                .catch(error => {
                    console.log(error);
                })
            setOpenPopup(false)
            toast.success("شخص جدید با موفقیت افزوده شد")
        }
        else {
            toast.error("مشخصات کامل نمی باشد")
        }
    }

    const setDrugProperty = (key, e) => {
        switch (key) {
            case 'daroo_name':
                setDrug({ ...drug, name_sabt: e.target.value })
                break;
        }
    }
    return (
        <Dialog open={openPopup}>
            <DialogTitle>
                <IconButton onClick={() => onEditClick()} style={{padding: '0 0 0 0'}}>
                    <EditIcon style={{color: '#c8d6e5' , width:20 , height:20}} />
                </IconButton>
                کارمند جدید
            </DialogTitle>
            <DialogContent>
                مشخصات شخص را وارد کنید
            </DialogContent>
            <Grid container direction={"column"} spacing={2}>
                <Grid item >
                    <TextField style={{ width: '100%' }} placeholder={"نام شخص"} onChange={e => {
                        setDrugProperty('daroo_name', e)
                    }} />
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

export default AddStuff;
