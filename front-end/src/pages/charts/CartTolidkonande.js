import React, { useEffect, useRef, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import Paper from '@material-ui/core/Paper';
import { getDrugs } from '../../api/api_drug';


const CartTolidkonande = () => {

    const [drugs, setDrugs] = useState([])
    let tolid = [
        {
            daroo_tolidkonande: '',
            daroo_tedad: 0
        }
    ]
    useEffect(() => {
        getDrugs((isOk, data) => {
            if (!isOk)
                return console.log(data.message);
            setDrugs(data)
            // console.log("data");
            // console.log(data);
        })
    }, [])

    // let sum = drugs.map(item=>{
    //     let findIndex = tolid.findIndex(t=> t.daroo_tolidkonande === item.daroo_tolidkonande)
    //     if(findIndex === -1){
    //         tolid.push({daroo_tolidkonande: item.daroo_tolidkonande , daroo_tedad: 1})
    //     }
    //     else{
    //         tolid[findIndex].daroo_tedad += 1
    //     }
    //     return tolid
    // })

    let sum = drugs.reduce(function (acc, curr) {
        let findIndex = acc.findIndex(item => item.daroo_tolidkonande === curr.daroo_tolidkonande);
        if (findIndex === -1) {
            acc.push({ daroo_tolidkonande: curr.daroo_tolidkonande, daroo_tedad: 1 })
        } else {

            acc[findIndex].daroo_tedad += 1
        }
        return acc;
    }, [])

    console.log("sum:")
    console.log(sum)

    //*Same name Tolidkonande*//
    var holder = {};

    drugs.forEach(function (d) {
        if (holder.hasOwnProperty(d.daroo_tolidkonande)) {
            holder[d.daroo_tolidkonande] = holder[d.daroo_tolidkonande] + d.daroo_name;
        } else {
            holder[d.daroo_tolidkonande] = d.daroo_name;
        }
    });

    var obj2 = [];

    for (var prop in holder) {
        obj2.push({ daroo_tolidkonande: prop, daroo_name: holder[prop] });
    }

    console.log(obj2);
    //*End of Same name Tolidkonande*//

    const data = {
        labels: sum.map(item => {
            return item.daroo_tolidkonande

        }),
        datasets: [
            {
                label: 'تعداد محصول',
                data: sum.map(item => {
                    return item.daroo_tedad

                }),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 2,
            },
        ],
    };

    const options = {
        // indexAxis: 'y',
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'تولید کننده',
                    color: '#911',
                    font: {
                        family: 'Shabnam',
                        size: 20,
                        weight: 'bold',
                        lineHeight: 1.2,
                    },
                    padding: { top: 30, left: 0, right: 0, bottom: 0 }
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'تعداد محصول',
                    color: '#191',
                    font: {
                        family: 'Shabnam',
                        size: 20,
                        style: 'normal',
                        lineHeight: 1.2
                    },
                    padding: { top: 30, left: 0, right: 0, bottom: 0 }
                }
            }
        }
        ,
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
            },
            title: {
                display: true,
                text: 'نمودار تعداد محصول هر تولیدکننده',
            },
        },
    };

    return (
        <div>
            <Paper>
                <div className='header' style={{ marginBottom: '3rem' }}>
                    <h1 className='title'>نمودار تعداد محصول هر تولیدکننده</h1>
                </div>
                <Bar data={data} options={options} />
            </Paper>
        </div>
    );
}

export default CartTolidkonande;
