import ReactTable from 'react-table'
import 'react-table/react-table.css'
import React, {Component} from "react";
import {getCertificates} from "../Utils/apiConnect";


class Certificates extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data : []
        }
    }
    componentDidMount() {
        getCertificates().then(data => {
            this.setState({data: data});
        });
    }

    render() {


        const columns = [
            {
                Header: 'Certificate Id', // Custom header components!
                accessor: 'certificateId',
                Cell: props => <a href={`display/certificate/${props.value}`}>{props.value}</a> // Custom cell components!
            }, {
                Header: 'Name',
                accessor: 'candidateName' // String-based value accessors!
            }, {
                Header: 'Course Name',
                accessor: 'courseName',
                Cell: props => <span>{props.value}</span> // Custom cell components!
            }, {
                Header: 'Assign Date',
                accessor: 'assignDate' // Custom value accessors!
            }
        ]

        return <ReactTable
            data={this.state.data}
            columns={columns}
        />
    }
}


export default Certificates
