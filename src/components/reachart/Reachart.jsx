import { LineChart, Line,  XAxis, YAxis } from 'recharts';



const Reachart = () => {


    const dataNum = [
        { name: 'Alice', student: 85, math:83 },
        { name: 'Bob', student: 90 , math:83},
        { name: 'Carol', student: 75 , math:76},
        { name: 'Dave', student: 80 , math:82},
        { name: 'Eve', student: 95 , math:90},
        { name: 'Frank', student: 82 , math:82},
        { name: 'Grace', student: 70 , math:60},
        { name: 'Henry', student: 87 , math:89},
        { name: 'Irene', student: 93 , math:95},    
        { name: 'Jack', student: 78 , math:75},
      ];
    return (
        <div>
            <LineChart width={800} height={400} data={dataNum}>
            <XAxis dataKey={'name'}/>
            <YAxis></YAxis>
            <Line dataKey='student' stroke='red' ></Line>
            <Line dataKey='math' stroke='green' ></Line>
            </LineChart>
        </div>
    );
};

export default Reachart;