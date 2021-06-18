import React, { useEffect, useState, useRef } from 'react';
import PageTitle from "../../components/PageTitle/PageTitle";
import { toast } from "react-toastify";
import Axios from "axios"
import MUIDataTable from "mui-datatables";
import { Button, Grid, IconButton } from "@material-ui/core";
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import { green } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import PriceForm from './PriceForm';
import { useDrugDispatch, useDrugState } from '../../context/DrugContext'
import { setInputNum, setFactorInfo, setBool, setClickDrug, setNameSabt } from '../../context/DrugContext'
import { getFactor, newRizFactor } from '../../api/api_drug';
import SyncIcon from '@material-ui/icons/Sync';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import moment from 'jalali-moment'

const FactorForm = (props) => {

    const drugDispatch = useDrugDispatch();
    const drugState = useDrugState();

    const inputRef = useRef();
    const [openPopup, setOpenPopup] = useState(false)
    const [home, setHome] = useState(false)
    const [drugs, setDrug] = useState([]);
    const [test, setTest] = useState([]);
    const [name, setName] = useState([]);
    const [sum, setSum] = useState([]);
    const [drugFactor, setDrugFactor] = useState([{}]);

    useEffect(() => {
        // console.log("props: ");
        // console.log(props.location.state);
        setBool(drugDispatch, false)
        setDrug(props.location.state || {})
        setInputNum(drugDispatch, props.location.state)

        getFactor((isOk, data) => {
            if (!isOk)
                return console.log(data.length - 1);
            const length = data.length - 1
            setFactorInfo(drugDispatch, data[length]);
        })
    }, [])
    const transform = () => {
        return drugState.arrInput.map((item, index) => {
            return [
                item.daroo_name,
                // item.daroo_shekl,
                // item.daroo_khatar,
                item.daroo_noskhe,
                item.daroo_bime,
                // item.daroo_tolidkonande,
                item.daroo_gheimat,
                <IconButton onClick={() => setOpenPopup(true)}>
                    <Icon style={{ color: green[500] }} fontSize="large"><AddCircleIcon /></Icon>
                </IconButton>,
                item.daroo_tedad,
                item.factor_id = drugState.factor.id,
                item.name_sabt = drugState.nameSabt,
                item.total = (item.daroo_tedad * item.daroo_gheimat),

            ]
        })

    };

    const onBackPressed = () => {
        let total = 0
        drugState.arrInput.map(itam => {
            total = total + itam.total
        })
        setSum(total)
        console.log('total');
        console.log(total);
    }

    const onPriceClick = () => {
        setOpenPopup(true)
    }
    const onUpdateFactor = () => {
        setBool(drugDispatch, true)
        props.history.push({
            pathname: "/app/DrugList",
        })
    }
    const onHandleSelect = (e) => {
        setNameSabt(drugDispatch, e.target.value)
        drugState.arrInput.map(item => {
            item.name_sabt = e.target.value
        })
    }


    // const columns = [
    //     {
    //         name: "نام دارو",
    //         label: "نام دارو",
    //         options: {
    //             filter: true,
    //             sort: true,
    //         }
    //     },
    //     {
    //         name: "شکل دارویی",
    //         label: "شکل دارویی",
    //         options: {
    //             filter: true,
    //             sort: false,
    //         }
    //     },
    //     {
    //         name: "خطر دارو",
    //         label: "خطر دارو",
    //         options: {
    //             filter: true,
    //             sort: false,
    //         }
    //     },
    //     {
    //         name: "نسخه یا otc",
    //         label: "نسخه یا otc",
    //         options: {
    //             filter: true,
    //             sort: false,
    //         }
    //     },
    //     {
    //         name: "تحت بیمه",
    //         label: "تحت بیمه",
    //         options: {
    //             filter: true,
    //             sort: false,
    //         }
    //     },
    //     {
    //         name: "تولیدکننده",
    //         label: "تولیدکننده",
    //         options: {
    //             filter: true,
    //             sort: false,
    //         }
    //     },
    //     {
    //         name: "قیمت",
    //         label: "قیمت",
    //         options: {
    //             filter: true,
    //             sort: false,
    //         }
    //     },
    //     {
    //         name: "ثبت تعداد",
    //         label: "ثبت تعداد",
    //         options: {
    //             filter: true,
    //             sort: true
    //         }
    //     },
    //     {
    //         name: "تعداد",
    //         options: {
    //             filterType: "checkbox",
    //             customBodyRender: (value, tableMeta, updateValue) => {
    //                 return (
    //                     <input
    //                         style={{ width: "50%" }}
    //                         ref={inputRef}
    //                         type="number"
    //                         value={value}
    //                         // how looks like onChange function?
    //                         // changed value must be saved in state of App component
    //                         // it's for validation and in the future sending this changed data
    //                         // to remote server and redux store
    //                         onChange={(e) => {
    //                             setInput(e.target.value)

    //                         }}
    //                     />
    //                 );
    //             }
    //         }
    //     }
    // ];

    const options = {
        filterType: "dropdown",
        // onRowClick: rowData => setClickDrug(drugDispatch , { ...rowData })
        onRowClick: rowData => {
            setClickDrug(drugDispatch, {
                daroo_name: rowData[0],
                daroo_shekl: rowData[1],
                daroo_khatar: rowData[2],
                daroo_noskhe: rowData[3],
                daroo_bime: rowData[4],
                daroo_tolidkonande: rowData[5],
                daroo_gheimat: rowData[6],
                daroo_tedad: rowData[7],

            })
        }
    };
    const onFactorClickTest = (home) => {
        // console.log(drugFactor);

        drugFactor.map(item => {
            newRizFactor(item, (isOk, data) => {
                if (!isOk)
                    return toast.error(data);
            })
            console.log("item: ");
            console.log(item);
        })

        console.log('home');
        console.log(home);
        if (home == true) {
            toast.success('فاکتور با موفقیت ثبت شد')
            props.history.push({
                pathname: "/app/DrugList",
            })
        }
    }
    const onFactorClick = (home) => {
        drugState.arrInput.map(item => {
            if(item.daroo_tedad == undefined || item.daroo_tedad== null || item.daroo_tedad=='' || item.daroo_tedad==0) 
                return toast.error('لطفا مقادیر مورد نیاز را وارد کنید')
            else{
                console.log('Start else');
                return setDrugFactor(drugFactor => {
                    return [...drugFactor, {
                        "daroo_name": item.daroo_name,
                        "daroo_noskhe": item.daroo_noskhe,
                        "daroo_bime": item.daroo_bime,
                        "daroo_gheimat": item.daroo_gheimat,
                        "daroo_tedad": item.daroo_tedad,
                        "factor_id": item.factor_id,
                        "name_sabt": item.name_sabt,
                        "daroo_id": item.id
                    }]
                })
            }
        })
        drugFactor.shift()
        onFactorClickTest(home)
        // drugState.arrInput.map(item => {
        //     return setDrugFactor(drugFactor => {
        //         return [...drugFactor, {
        //             "daroo_name": item.daroo_name,
        //             "daroo_noskhe": item.daroo_noskhe,
        //             "daroo_bime": item.daroo_bime,
        //             "daroo_gheimat": item.daroo_gheimat,
        //             "daroo_tedad": item.daroo_tedad,
        //             "factor_id": item.factor_id,
        //             "name_sabt": item.name_sabt,
        //             "daroo_id": item.id
        //         }]
        //     })

        // })

       
    }
    // await Promise.all(drugFactor.map(item => {
    //      datas = {
    //         "daroo_name": item.daroo_name,
    //         "daroo_noskhe": item.daroo_noskhe,
    //         "daroo_bime": item.daroo_bime,
    //         "daroo_gheimat": item.daroo_gheimat,
    //         "daroo_tedad": item.daroo_tedad,
    //         "factor_id": item.factor_id,
    //         "name_sabt": item.name_sabt,
    //         "daroo_id": item.daroo_id
    //     }
    //     newRizFactor(datas, (isOk, data) => {
    //         if (!isOk)
    //             return toast.error(data);
    //     })
    //     console.log("item: ");
    //     console.log(item);
    // }))

    // toast.success('فاکتور با موفقیت ثبت شد')
    // onFactorClickTest(drugFactor)

    const onSum = () => {
        let total = 0
        drugState.arrInput.map(itam => {
            total = total + itam.total
        })
        setSum(total)
        console.log('total');
        console.log(total);
    }
    const onTime = () => {
        moment.locale('fa', { useGregorianParser: true });
        let m = moment(drugState.factor.date).format('YYYY/MM/DD hh:mm:ss')
        return m
    }
    return (
        <div dir="rtl">
            <PageTitle title="ثبت فاکتور برای محصولات انتخابی" />
            <Grid container spacing={4}>
                <Grid item xs={6} dir='rtl'>
                    {!drugState.bool && <Button variant="outlined" color="primary">نام ثبت کننده فاکتور: {drugState.nameSabt}</Button>}
                </Grid>
            </Grid>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <MUIDataTable
                        title={`شماره فاکتور: ${drugState.factor.id}          تاریخ: ${onTime()}`}
                        data={transform()}
                        columns={["نام دارو", "نسخه یا ", "تحت بیمه", "قیمت", "ثبت تعداد", "تعداد"]}
                        options={options}
                    />
                </Grid>
                <Grid container spacing={4}>
                    <Grid item xs={12} dir='rtl'>
                        <Card >
                            <IconButton onClick={onSum} style={{ padding: '0 0 0 0' }}>
                                <SyncIcon style={{ color: '#c8d6e5', width: 20, height: 20 }} />
                            </IconButton>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    مبلغ قابل پرداخت:  {sum} تومان
                          </Typography>
                                <Typography color="textSecondary" gutterBottom Style={{ margin: '20 0 0 0' }}>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Grid item><Button variant="contained" color="secondary" disableElevation onClick={() => onFactorClick(home)}>ثبت جزئیات فاکتور</Button></Grid>
                <Grid item><Button variant="contained" color="secondary" disableElevation onClick={() => onFactorClick(!home)}>ثبت نهایی</Button></Grid>
                <Grid item><Button variant="contained" color="secondary" disableElevation onClick={onUpdateFactor}>افزودن داروی جدید</Button></Grid>
            </Grid>
            <PriceForm openPopup={openPopup} setOpenPopup={setOpenPopup} />
        </div>
    );
};

export default FactorForm;
