import React from 'react';
import PropTypes from "prop-types";

//EJEMPLO DE DATA
/* const data = [
    { label: 'S', x: 0, y: 0 },  
    { label: 'M', x: 1, y: 4 },  
    { label: 'T', x: 2, y: 3 },  
    { label: 'W', x: 3, y: 1 },  
    { label: 'TH', x: 4, y: 4 },  
    { label: 'F', x: 5, y: 5 },  
    { label: 'S', x: 6, y: 4 }  
  ]; */

//EJEMPLO DE DATA
/* const information = [{
    divId: string,               id del contenedor
    precision: int,              cantidad de decimales con los que se mostrara la información
    strokeWidth: float,          ancho de la línea,
    strokeColor: string,         color de la línea en HEX
    fillColor: string,           color de debajo de la línea en HEX
    degradeFill:boolean          para saber si aplicamos un degrade a la línea
  }]; */


const STROKE = 1;

export const LineChart = ({
    data,
    height,
    width,
    horizontalGuides: numberOfHorizontalGuides,
    verticalGuides: numberOfVerticalGuides,
    precision
}) => {

    const FONT_SIZE = width / 50;
    const maximumXFromData = Math.max(...data.map(e => e.x)); //MAXIMA INFORMACION EN X
    const maximumYFromData = Math.max(...data.map(e => e.y)); //MAXIMA INFORMACION EN Y

    const digits =
        parseFloat(maximumYFromData.toString()).toFixed(precision).length + 1; //CANTIDAD DE DIGITOS EN LOS LABELS DE Y


    const padding = (FONT_SIZE + digits) * 3; //PADING DE LAS LINEAS CARTESIANAS |_
    const chartWidth = width - padding * 2; //DISTANCIA ENTRE EL TEXTO EN X
    const chartHeight = height - padding * 2; //DISTANCIA ENTRE EL TEXTO EN Y


    const points = data
        .map(element => {
            const x = (element.x / maximumXFromData) * chartWidth + padding;
            const y =
                chartHeight - (element.y / maximumYFromData) * chartHeight + padding;
            return `${x},${y}`;
        })
        .join(" ");

    //EJE CARTESIANO X E Y |_
    const Axis = ({ points }) => (
        <polyline fill="none" stroke="#ffffff" strokeWidth=".9" points={points} />
    );

    const XAxis = () => (
        <Axis
            points={`${padding},${height - padding} ${width - padding},${height -
                padding}`}
        />
    );

    const YAxis = () => (
        <Axis points={`${padding},${padding} ${padding},${height - padding}`} />
    );


    //LINEAS DEL GRAFICO
    const VerticalGuides = () => {
        const guideCount = numberOfVerticalGuides || data.length - 1;

        const startY = padding;
        const endY = height - padding;

        return new Array(guideCount).fill(0).map((_, index) => {
            const ratio = (index + 1) / guideCount;

            const xCoordinate = padding + ratio * (width - padding * 2);

            return (
                <React.Fragment key={index}>
                    <polyline
                        fill="none"
                        stroke="#EDEDED"
                        strokeWidth=".1"
                        points={`${xCoordinate},${startY} ${xCoordinate},${endY}`}
                    />
                </React.Fragment>
            );
        });
    };

    const HorizontalGuides = () => {
        const startX = padding;
        const endX = width - padding;

        return new Array(numberOfHorizontalGuides).fill(0).map((_, index) => {
            const ratio = (index + 1) / numberOfHorizontalGuides;

            const yCoordinate = chartHeight - chartHeight * ratio + padding;

            return (
                <React.Fragment key={index}>
                    <polyline
                        fill="none"
                        stroke="#EDEDED"
                        strokeWidth=".1"
                        points={`${startX},${yCoordinate} ${endX},${yCoordinate}`}
                    />
                </React.Fragment>
            );
        });
    };


    ///INFORMACION DE LOS LABELS
    const LabelsXAxis = () => {
        const y = height - padding + FONT_SIZE * 2;

        return data.map((element, index) => {
            const x =
                (element.x / maximumXFromData) * chartWidth + padding - FONT_SIZE / 2;
            return (
                <text
                    key={index}
                    x={x}
                    y={y}
                    style={{
                        fill: "#ffffff",
                        fontSize: "12px",
                        fontFamily: "Helvetica"
                    }}
                >
                    {element.label}
                </text>
            );
        });
    };

    const LabelsYAxis = () => {
        const PARTS = numberOfHorizontalGuides;
        return new Array(PARTS + 1).fill(0).map((_, index) => {
            const x = FONT_SIZE;
            const ratio = index / numberOfHorizontalGuides;

            const yCoordinate =
                chartHeight - chartHeight * ratio + padding + FONT_SIZE / 2;
            return (
                <text
                    key={index}
                    x={x}
                    y={yCoordinate}
                    style={{
                        fill: "#ffffff",
                        fontSize: "12px",
                        fontFamily: "Helvetica"
                    }}
                >
                    {parseFloat(maximumYFromData * (index / PARTS)).toFixed(precision)}
                </text>
            );
        });
    };

    return (
        <svg
            viewBox={`0 0 ${width} ${height}`}
        //style={{ border: "0.5px solid #ccc" }}
        >
            <XAxis />
            {/* <LabelsXAxis /> */}
            <YAxis />
            <LabelsYAxis />
            {numberOfVerticalGuides && <VerticalGuides />}
            <HorizontalGuides />

            <polyline
                // fill="#426892"
                fill="none"
                fillOpacity="0.2"
                stroke="#ffffff"               
                strokeWidth={STROKE}
                points={points}
                strokeLinecap="round"
            />
        </svg>
    );
};

LineChart.defaultProps = {
    height: 200,
    width: 500,
    horizontalGuides: 4,
    verticalGuides: null,
    precision: 2
};

LineChart.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.number,
            label: PropTypes.string
        })
    ).isRequired,
    height: PropTypes.number,
    width: PropTypes.number,
    horizontalGuides: PropTypes.number,
    verticalGuides: PropTypes.number,
    precision: PropTypes.number
};

//   export default LineChart;