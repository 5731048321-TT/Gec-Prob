import React ,{Component} from 'react';
class Information extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
        }
    }
    componentDidMount() {
        fetch('http://13.229.251.3:3001/api/Information').then((Response)=>Response.json()).then((res)=>{console.log(res)
        this.setState({data:res,})})
        
    }

    render(){
        let rows = [];
        if(this.state.data.length!==0){
            for (var i = 0; i < this.state.data.length; i++){
                let rowID = `row${i}`
                let cell = []
                cell.push(<td key={`col1${i}`}>{(this.state.data.length>i)?this.state.data[i].student_id:""}</td>)
                cell.push(<td key={`col2${i}`}>{(this.state.data.length>i)?this.state.data[i].student_name:""}</td>)
                cell.push(<td key={`col3${i}`}>{(this.state.data.length>i)?this.state.data[i].department_name:""}</td>)
                cell.push(<td key={`col4${i}`}>{(this.state.data.length>i)?this.state.data[i].faculty_name:""}</td>)
                cell.push(<td key={`col5${i}`}>{(this.state.data.length>i)?this.state.data[i].course_id:""}</td>)
                cell.push(<td key={`col6${i}`}>{(this.state.data.length>i)?this.state.data[i].course_name:""}</td>)
                cell.push(<td key={`col7${i}`}>{(this.state.data.length>i)?this.state.data[i].year:""}</td>)
                cell.push(<td key={`col8${i}`}>{(this.state.data.length>i)?this.state.data[i].semester:""}</td>)
                cell.push(<td key={`col9${i}`}>{(this.state.data.length>i)?this.state.data[i].grade:""}</td>)
                cell.push(<td key={`col10${i}`}>{(this.state.data.length>i)?this.state.data[i].instructor_name:""}</td>)
                cell.push(<td key={`col11${i}`}>{(this.state.data.length>i)?this.state.data[i].room:""}</td>)
                rows.push(<tr key={i} id={rowID}>{cell}</tr>)
            }
        }
        return(
            <div className="container">
                <div>
                    Information student
                </div>
                <br></br>
                <br></br>
                <div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <td>student_id</td>
                                <td>student_name</td>
                                <td>department</td>
                                <td>faculty</td>
                                <td>course id</td>
                                <td>course name</td>
                                <td>year</td>
                                <td>semester</td>
                                <td>grade</td>
                                <td>instructor</td>
                                <td>room</td>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </table>
                   
                </div>
                <br></br>
                <br></br>
            </div>
        );
    }
}
export default (Information);