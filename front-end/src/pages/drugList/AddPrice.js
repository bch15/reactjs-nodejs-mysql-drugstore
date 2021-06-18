import React, { useEffect, useState } from 'react';
import PageTitle from "../../components/PageTitle/PageTitle";
import { Button, Grid, TextField } from "@material-ui/core";
import { toast } from "react-toastify";
import Axios from "axios"

const AddPrice = (props) => {

    const [drug, setDrug] = useState({});

    useEffect(() => {
        setDrug(props.location.state || {})
    }, [])

    // const onSaveEdit = (data) => {
    //     Axios.put("http://localhost:3000/drug", data)
    //         .then(response => {
    //             console.log(response.data)
    //             setDrug(response.data)

    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    //     props.history.push("/app/drugList")
    //     toast.success("تغييرات با موفقيت اعمال شد")
    // }
    const onSaveEdit=(data)=>{
        props.history.push({
            pathname: "/app/factor",
            state: data
        })
        toast.success("تغييرات با موفقيت اعمال شد")
    }
    const onBackPressed = () => {
        props.history.push("/app/factor")
    }

    const setDrugProperty = (key, e) => {
        switch (key) {
            case 'daroo_tedad':
                setDrug({ ...drug, 	daroo_tedad: e.target.value })
                break;
        }
    }
    return (
        <div>
            <PageTitle title="تعداد فروش" />
            <Grid container direction={"column"} spacing={2}>
                <Grid item>
                    <TextField placeholder={"قیمت دارو"} type={"number"} value={drug.daroo_gheimat} />
                </Grid>  
                <Grid item>
                    <TextField placeholder={"تعداد فروش"} type={"number"} onChange={e => {
                        setDrugProperty('daroo_name', e)
                    }} />
                </Grid>
                <Grid item>
                    <Button variant={"contained"} onClick={()=>onSaveEdit(drug)}>ثبت تغييرات</Button>
                    <Button variant={"contained"} onClick={onBackPressed}>لغو</Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default AddPrice;
