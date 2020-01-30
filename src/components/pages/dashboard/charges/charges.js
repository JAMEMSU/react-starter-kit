import React, { Component } from "react";
import axios from "axios";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Layout from "../../../layout";

const options = {
  chart: {
    type: "column",
    marginBottom: 100
  },
  title: {
    text: "Stacked column chart"
  },
  xAxis: {
    categories: []
  },
  yAxis: {
    min: 0,
    title: {
      text: "จำนวนเงิน"
    },
    stackLabels: {
      enabled: true,
      style: {
        fontWeight: "bold",
        color:
          // theme
          (Highcharts.defaultOptions.title.style &&
            Highcharts.defaultOptions.title.style.color) ||
          "gray"
      }
    }
  },
  legend: {
    align: "right",
    x: 1,
    verticalAlign: "bottom",
    y: 25,
    floating: true,
    backgroundColor:
      Highcharts.defaultOptions.legend.backgroundColor || "white",
    borderColor: "#CCC",
    borderWidth: 1,
    shadow: false
  },
  tooltip: {
    headerFormat: "<b>{point.x}</b><br/>",
    pointFormat: "{series.name}: {point.y}<br/>Total: {point.stackTotal}"
  },
  plotOptions: {
    column: {
      stacking: "normal",
      dataLabels: {
        enabled: false
      }
    }
  },
  series: []
};

function Sortingnames(list_name) {
  let sort_list = [];
  list_name.forEach(el => {
    if (sort_list.indexOf(el) === -1) sort_list.push(el);
  });
  return sort_list;
}

function CreateDataset(data, graph, label, key) {
  const horizontal = data.map(value => {
    return value[key];
  });

  const labels = Sortingnames(horizontal);
  const tmp_dataset = data.map((value, y) => {
    const indexarr = labels.indexOf(value[key]);
    const datasetarr = new Array(labels.length).fill(0);
    datasetarr[indexarr] = parseFloat(value[graph]);
    const obj_arr = {};
    obj_arr[label] = value[label];
    obj_arr["data"] = datasetarr;
    return obj_arr;
  });

  let unique = [];
  let obj = [];

  tmp_dataset.forEach(el => {
    if (unique.indexOf(el[label]) === -1) {
      unique.push(el[label]);
      obj.push(el);
    } else {
      for (let x = 0; x < el.data.length; x++) {
        if (el.data[x] > 0) {
          for (let y = 0; y < obj.length; y++) {
            if (obj[y][label] === el[label]) {
              obj[y].data[x] = el.data[x];
            }
          }
        }
      }
    }
  });

  const datasets = obj.map((value, i) => {
    return createdataset(value[label], value.data);
  });

  return datasets;
}

function createdataset(label, data, i) {
  return {
    name: label,
    data: data
  };
}

class Charges extends Component {
  constructor(props) {
    super(props);

    this.state = {
      charges: []
    };
  }

  async componentDidMount() {
    const result = await axios.get("http://localhost:3000/charges");
    this.setState({ charges: result.data });
  }

  render() {
    const charges_type_name = this.state.charges.map(charges => {
      return charges.charges_type_name;
    });
    const dataset = CreateDataset(
      this.state.charges,
      "Total",
      "charges_type_name",
      "project_name"
    );

    options.xAxis.categories = Sortingnames(charges_type_name);
    options.series = dataset;

    console.log(Sortingnames(charges_type_name));

    return (
      <Layout title="สรุปข้อมูลค่าใช้จ่าย">
        <div style={{ maxWidth: "1600px" }}>
          <HighchartsReact
            highcharts={Highcharts}
            options={options}
            containerProps={{ className: "chartContainer" }}
          />
        </div>
      </Layout>
    );
  }
}

export default Charges;
