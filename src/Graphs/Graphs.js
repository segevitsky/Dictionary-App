import { connect } from "react-redux";
import { GraphsCont, Header } from "./graphsStyle";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";



const Graphs = (props) => {
  const graphData = props.graphData;
 
  return (
    <>
      <GraphsCont>
        <Header>
          {" "}
          Here are the results for :{" "}
          <strong> {props.selectedL.toUpperCase()} </strong>
        </Header>
    
        <ResponsiveContainer width="80%" height="80%">
        <BarChart width={500} height={300} data={graphData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name"/>
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amount" fill="#8884d8" />
        </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="80%" height="80%">
        <AreaChart width={500} height={300} data={graphData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="amount"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
        </ResponsiveContainer>

      </GraphsCont>
    </>
  );
};

const mapStateToProps = (state) => ({
  graphData: state.data.graphData,
  selectedL: state.data.input,
});

export default connect(mapStateToProps)(Graphs);
