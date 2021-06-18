import React, { useEffect, useRef, useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@material-ui/core";
import { Button, Grid, IconButton } from "@material-ui/core";
import { toast } from "react-toastify";
import Axios from "axios"
import { setInputNum, setBool, setClickDrug } from '../../context/DrugContext'
import { useDrugDispatch, useDrugState,updateTotal } from '../../context/DrugContext'

const PriceForm = (props) => {

    const drugDispatch = useDrugDispatch();
    const drugState = useDrugState();

    const { title, children, openPopup, setOpenPopup } = props;

    const [open, setOpen] = useState(false);
    const [drugClick, setDrugClick] = useState();
    let tedad = 0

    useEffect(() => {
        setDrugClick(drugState.clickDrug)
        console.log();
    }, [])

    const replaceDrug = (drugList) => {
        const filterDrug = drugList.filter((item) => {
            return item.daroo_name.toLowerCase().includes(drugState.clickDrug.daroo_name.toLowerCase()) ? item.daroo_tedad = drugState.clickDrug.daroo_tedad : null
        })
        // filterDrug[0].daroo_tedad = drugState.clickDrug.daroo_tedad
        // filterDrug.map((item) => {
        //     drugState.arrInput[0].daroo_tedad = item.daroo_tedad
        //     drugState.arrInput.map((item)=>{

        //     })
        // })
        console.log(drugState.arrInput);
    }


    const handleChange = (e) => {
        const regex = new RegExp(/^[1-9]\d*$/gm)
        // console.log(drugState.clickDrug.daroo_name);
        if (e.target.value.match(regex)) {
            drugState.clickDrug.daroo_tedad = +e.target.value
        }
        else if (e.target.value < 0) {

            e.target.value = 0
            toast.error("تعداد نمیتواند کمتر از 0 باشد")

        }
        else if (e.target.value == 0) {
            // const { daroo_tedad, value } = e.target
            // setValue({ [daroo_tedad]: value });
            e.target.value = 0
            toast.error("تعداد نمیتواند 0 باشد")

        }
        else {
            toast.error(`مقدار ${e.target.value} صحیح نیست`)
            e.target.value = 0
        }
    };

    const handleClose = () => {
        setOpen(false)
    };

    const handleClickOpen = () => {
        replaceDrug(drugState.arrInput)
        // setOpenPopup(false)
        // console.log("setDrugClick:");
        // console.log(drugClick);
       
        setOpenPopup(false)
    }

    return (
        <Dialog open={openPopup}>
            <DialogTitle>نام شخص</DialogTitle>
            <DialogContent>
                تعداد محصول مورد نظر برای فروش را وارد کنید
                </DialogContent>
            <TextField
                autoFocus
                id="daroo_tedad"
                name="daroo_tedad"
                label="تعداد محصول"
                type="number"
                inputProps={{ step: 1 }}
                fullWidth
                onChange={handleChange}
            />
            <DialogActions>
                <Grid container spacing={4}>
                    <Grid item>
                        <Button onClick={handleClickOpen} variant="contained" color="primary">
                            ثبت
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button onClick={() => { setOpenPopup(false) }} variant="contained" color="secondary">
                            لغو
                        </Button>
                    </Grid>
                </Grid>
            </DialogActions>
        </Dialog>
    );
};

export default PriceForm;
