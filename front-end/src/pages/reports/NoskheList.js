import React, { useEffect, useRef, useState } from 'react';
import PageTitle from "../../components/PageTitle/PageTitle";
import { Button, Grid, IconButton } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import { Delete as DeleteIcon, Edit as EditIcon } from "@material-ui/icons"
import Axios from "axios"
import { useDrugDispatch, useDrugState, setNameSabt } from '../../context/DrugContext'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { getDrugs} from '../../api/api_drug';
import { toast } from "react-toastify";

//**Start_Sate**

const NoskheList = (props) => {

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
        

    }, [])


    const onEditClick = (item) => {
        props.history.push({
            pathname: "/app/editDrug",
            state: item
        })
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

    const transform = () => {
        return drugs.map(item => {
            return [
                item.daroo_name,
                item.daroo_noskhe,
                item.daroo_tolidkonande
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
            <PageTitle title="لیست براساس نسخه" />
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <MUIDataTable
                        title="محصولات"
                        data={transform()}
                        columns={["نام دارو", "نسخه یا otc", "تولیدکننده"]}
                        options={options}
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default NoskheList;
