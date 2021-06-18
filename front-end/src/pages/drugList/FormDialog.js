import React, { useEffect, useRef, useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@material-ui/core";
import { Button, Grid, IconButton } from "@material-ui/core";
import { toast } from "react-toastify";
import Axios from "axios"

const FormDialog = (props) => {

    const { title, children, openPopup, setOpenPopup } = props;

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState({
        name_sabt:""
    });

    const handleChange = (e) => {
        const {name , value}= e.target
        setValue({[name]: value});
    };

    const handleClose = () => {
        setOpen(false)
    };

    const handleClickOpen = () => {
        const data = value
        Axios.post("http://localhost:3000/factor", data)
            .then(response => {
                const data = response.data;
                console.log(response.data)
            })
            .catch(error => {
                console.log(error);
            })
        setOpenPopup(false)
        toast.success("تغييرات با موفقيت اعمال شد")
        console.log(value);
    }
    return (
        <Dialog open={openPopup}>
            <DialogTitle>نام شخص</DialogTitle>
            <DialogContent>
                لطفا نام خود را برای ثبت فاکتور وارد کنید.
                </DialogContent>
            <TextField
                autoFocus
                id="name"
                name="name_sabt"
                label="نام خود را وارد کنید"
                type="email"
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

export default FormDialog;
