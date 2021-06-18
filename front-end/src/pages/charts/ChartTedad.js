import React, { useEffect, useRef, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import Paper from '@material-ui/core/Paper';
import { getRizFactor } from '../../api/api_drug';


const ChartTedad = () => {

    const [drugs, setDrugs] = useState([])

    useEffect(() => {
        getRizFactor((isOk, data) => {
            if (!isOk)
                return console.log(data.length - 1);
            setDrugs(data);
        })
    }, [])
    //*Same name Tedad*//
    var holder = {};

    drugs.forEach(function (d) {
        if (holder.hasOwnProperty(d.daroo_name)) {
            holder[d.daroo_name] = holder[d.daroo_name] + d.daroo_tedad;
        } else {
            holder[d.daroo_name] = d.daroo_tedad;
        }
    });

    var obj2 = [];

    for (var prop in holder) {
        obj2.push({ daroo_name: prop, daroo_tedad: holder[prop] });
    }

    console.log(obj2);
    //*End of Same name Tedad*//

    const data = {
        labels: obj2.map(item => {
            return item.daroo_name
            
        }),
        datasets: [
            {
                label: 'تعداد',
                data: obj2.map(item => {
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
        
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'محصول',
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
                    text: 'تعداد',
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
                text: 'نمودار تعداد فروش رفته هر محصول',
            },
        },
    };

    return (
        <div>
            <Paper>
                <div className='header' style={{marginBottom: '3rem'}}>
                    <h1 className='title'>نمودار تعداد کل فروش رفته هر محصول</h1>
                </div>
                <Bar data={data} options={options} />
            </Paper>
        </div>
    );
}

    export default ChartTedad;
