import React, { useEffect, useState } from 'react';
import PageTitle from "../../components/PageTitle";
import { Button, Grid, TextField } from "@material-ui/core";
import { toast } from "react-toastify";
import Axios from "axios"

const EditDrugs = (props) => {

    const [drug, setDrug] = useState({});

    useEffect(() => {
        setDrug(props.location.state || {})
    }, [])

    const onSaveEdit = (data) => {
        Axios.put("http://localhost:3000/drug", data)
            .then(response => {
                console.log(response.data)
                setDrug(response.data)

            })
            .catch(error => {
                console.log(error);
            })
        props.history.push("/app/drugList")
        toast.success("تغييرات با موفقيت اعمال شد")
    }
    const onBackPressed = () => {
        props.history.push("/app/drugList")
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
    return (
        <div>
            <PageTitle title="ویرایش مشخصات دارو" />
            <Grid container direction={"column"} spacing={2}>
                <Grid item>
                    <TextField placeholder={"نام دارو"} value={drug.daroo_name} onChange={e => {
                        setDrugProperty('daroo_name', e)
                    }} />
                </Grid>
                <Grid item>
                    <TextField placeholder={"شکل دارویی"} value={drug.daroo_shekl} onChange={e => {
                        setDrugProperty('daroo_shekl', e)
                    }} />
                </Grid>
                <Grid item>
                    <TextField placeholder={"خطر دارو"} value={drug.daroo_khatar} onChange={e => {
                        setDrugProperty('daroo_khatar', e)
                    }} />
                </Grid>
                <Grid item>
                    <TextField placeholder={"نسخه یا otc"} value={drug.daroo_noskhe} onChange={e => {
                        setDrugProperty('daroo_noskhe', e)
                    }} />
                </Grid>
                <Grid item>
                    <TextField placeholder={"بیمه"} value={drug.daroo_bime} onChange={e => {
                        setDrugProperty('daroo_bime', e)
                    }} />
                </Grid>
                <Grid item>
                    <TextField placeholder={"تولیدکننده"} value={drug.daroo_tolidkonande} onChange={e => {
                        setDrugProperty('daroo_tolidkonande', e)
                    }} />
                </Grid>
                <Grid item>
                    <TextField placeholder={"قیمت"} type={"number"} value={drug.daroo_gheimat} onChange={e => {
                        setDrugProperty('daroo_gheimat', e)
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

export default EditDrugs;
