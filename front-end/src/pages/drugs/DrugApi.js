import React, {useEffect, useState} from 'react';
import PageTitle from "../../components/PageTitle";
import {Grid} from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import Axios from "axios"


const DrugApi = () => {

    const [drugs,setDrugs]= useState([])

    useEffect(() => {
        Axios.get("http://localhost:3000/drugs")
            .then(response =>{
                console.log(response.data)
                setDrugs(response.data)
            })
            .catch(error =>{
                console.log(error);
            })
    }, [])

    const transform = () => {
        return drugs.map(item=>{
            return[
                // <img src={item.Poster} style={{width:50 , height:50, borderRadius: "50%"}}/>,
                item.daroo_name,
                item.daroo_shekl,
                item.daroo_noeKhatar,
                item.daroo_noskhe,
                item.daroo_bime,
                item.daroo_tolidkonande,
                item.daroo_gheimat
            ]
        })
    }

    return (
        <div>
            <PageTitle title={"لیست داروها"}/>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <MUIDataTable
                        title="داروها ها"
                        data={transform()}
                        columns={["نام دارو","شکل دارویی","خطر دارو","نسخه یا otc","تحت بیمه","تولیدکننده","قیمت"]}
                        options={{
                            filterType: "checkbox",
                        }}
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default DrugApi;
