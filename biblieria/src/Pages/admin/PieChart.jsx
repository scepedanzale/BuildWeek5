import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import { useSelector } from 'react-redux';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const PieChart = () => {

    const categories = useSelector(state => state.categorie.listaCategorie)
    console.log(categories);
   let newData = [];
    categories.forEach(category => {
        newData.push({ y: category.books.length, label: category.name});
    })
    console.log(newData);

    const options = {
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: "Books per Category"
        },
        data: [{
            type: "pie",
            startAngle: 75,
            toolTipContent: "<b>{label}</b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}%",
            dataPoints: newData,
            // [
            //     { y: 18, label: "Direct" },
            //     { y: 49, label: "Organic Search" },
            //     { y: 9, label: "Paid Search" },
            //     { y: 5, label: "Referral" },
            //     { y: 19, label: "Social" }
            // ]
        }]
    };

    return (
        <div>
            <CanvasJSChart options={options}
                /* onRef={ref => this.chart = ref} */
            />
            {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
        </div>
    );
};

export default PieChart;