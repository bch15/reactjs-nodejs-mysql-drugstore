import React, { useEffect, useRef, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import Paper from '@material-ui/core/Paper';
import { getFactor } from '../../api/api_drug';
import moment from 'jalali-moment';


const ChartFactor = () => {

    const [drugs, setDrugs] = useState([])
    let tolid = [
        {
            date: '',
            factor_tedad: 0
        }
    ]
    useEffect(() => {
        getFactor((isOk, data) => {
            if (!isOk)
                return console.log(data.length - 1);
            setDrugs(data);
        })

    }, [])

    const onTime = (item) => {
        moment.locale('fa', { useGregorianParser: true });
        let m = moment(item).format('YYYY/MM/DD')
        return m
    }

    let sum = drugs.reduce(function (acc, curr) {
        let findIndex = acc.findIndex(item => item.date === curr.date);
        if (findIndex === -1) {
            acc.push({ date: onTime(curr.date), factor_tedad: 1 })
        } else {

            acc[findIndex].factor_tedad += 1
        }
        return acc;
    }, [])

    // console.log("sum:")
    // console.log(sum)

    //*Same name Tolidkonande*//
    var holder = {};

    sum.forEach(function (d) {
        if (holder.hasOwnProperty(d.date)) {
            holder[d.date] = holder[d.date] + d.factor_tedad;
        } else {
            holder[d.date] = d.factor_tedad;
        }
    });

    var obj2 = [];

    for (var prop in holder) {
        obj2.push({ date: prop, factor_tedad: holder[prop] });
    }

    console.log(obj2);
    //*End of Same name Tolidkonande*//

    const data = {
        labels: obj2.map(item => {
            return item.date

        }),
        datasets: [
            {
                label: 'تعداد فاکتور',
                data: obj2.map(item => {
                    return item.factor_tedad

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
                    text: 'تاریخ',
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
                    text: 'تعداد فاکتور',
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
                text: 'نمودار تعداد فاکتور بر اساس تاریخ ',
            },
        },
    };

    return (
        <div>
            <Paper>
                <div className='header' style={{ marginBottom: '3rem' }}>
                    <h1 className='title'>نمودار تعداد فاکتور بر اساس تاریخ </h1>
                </div>
                <Bar data={data} options={options} />
            </Paper>
        </div>
    );
}

export default ChartFactor;
