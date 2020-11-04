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
} from "recharts";



const Graphs = (props) => {
  const graphData = props.graphData;
 
  return (
    <>
      <GraphsCont>
        <Header>
          {" "}
          Here are the results for letter:{" "}
          <strong> {props.selectedL.toUpperCase()} </strong>
        </Header>
        <BarChart width={600} height={400} data={graphData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amount" fill="#8884d8" />
        </BarChart>

        <AreaChart width={600} height={400} data={graphData}>
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

      </GraphsCont>
    </>
  );
};

const mapStateToProps = (state) => ({
  graphData: state.data.graphData,
  selectedL: state.data.input,
});

export default connect(mapStateToProps)(Graphs);
