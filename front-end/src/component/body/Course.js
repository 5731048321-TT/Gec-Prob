import React,{Component} from 'react';

class Course extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
        }
        this.onClickAdd=this.onClickAdd.bind(this)
    }
    componentDidMount() {
        fetch('http://13.229.251.3:3001/api/course').then((Response)=>Response.json()).then((res)=>{console.log(res)
        this.setState({data:res,})})
        
    }

    onClickAdd(e){
        e.preventDefault()
        console.log(`click`);
        window.location="/AddCourse"
    }

    render(){
        let rows = [];
        if(this.state.data.length!==0){
            for (var i = 0; i < this.state.data.length; i++){
                let rowID = `row${i}`
                let cell = []
                cell.push(<td key={`col1${i}`}>{(this.state.data.length>i)?this.state.data[i].course_id:""}</td>)
                cell.push(<td key={`col2${i}`}>{(this.state.data.length>i)?this.state.data[i].course_name:""}</td>)
                cell.push(<td key={`col3${i}`}>{(this.state.data.length>i)?this.state.data[i].credit:""}</td>)
                rows.push(<tr key={i} id={rowID}>{cell}</tr>)
            }
        }
        return(
            <div className="container">
                <div>
                    Course
                </div>
                <br></br>
                <br></br>
                <div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <td>course_id</td>
                                <td>  course_name</td>
                                <td>  credit</td>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </table>
                    <input onClick={this.onClickAdd} className="btn btn-primary" type="submit" value="Add cousre"></input>
                    {/* {'  '}
                    <input className="btn btn-danger" type="submit" value="Delete cousre"></input> */}
                </div>
                <br></br>
                <br></br>
            </div>
        )
    }
}
export default (Course);