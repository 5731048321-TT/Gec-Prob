import React,{Component} from 'react';

class AddCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    async onSubmit(e){
        e.preventDefault();
        var department_id;
        if(e.target.Department.value==="Mathematics and Computer Science"){
            department_id=1;
        }else if(e.target.Department.value==="Mechanical Engineering"){
            department_id=3
        }else if(e.target.Department.value==="Computer Engineering"){
            department_id=10;
        }

        var opts={
            "course_id": e.target.Course_id.value,
            "course_name": e.target.Course_name.value,
            "credit": e.target.Credit.value,
            "department_id": department_id
        }
        await fetch('http://13.229.251.3:3001/api/addCourse', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(opts)
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log('Created Gist:', data);
        })
            .catch((error) => {
                console.error(error);
        });
        // var teachData={
        //     "year" :e.target.Year.value,
        //     "semester":e.target.Semester.value,
        //     "course_id" :e.target.Course_id.value,
        //     "instructor_id" : e.target.Instructor_id.value
        // }
        // await fetch('http://13.229.251.3:3001/api/teach', {
        //     method: 'post',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(opts)
        // }).then(function (response) {
        //     return response.json();
        // }).then(function (data) {
        //     console.log('Created Gist:', data);
        // })
        //     .catch((error) => {
        //         console.error(error);
        // });


        window.location="/Course"
    }
    render(){



        return(
            <div className="container">
                <br></br>
                <br></br>
                <form onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="form-group col-sm-2 offset-sm-1">
                            <label for="Course_id">Course id</label>
                            <input type="text" className="form-control" id="Course_id" placeholder="Course id"></input>
                        </div>
                        <div className="form-group col-sm-2">
                            <label for="Course_name">Course name</label>
                            <input type="text" className="form-control" id="Course_name" placeholder="Course name"></input>
                        </div>
                        <div className="form-group col-sm-2">
                            <label for="Credit">Credit</label>
                            <input type="text" className="form-control" id="Credit" placeholder="Credit"></input>
                        </div>
                        
                        <div className="form-group col-sm-2">
                            <label for="Department">Department</label>
                            <select className="form-control" id="Department">
                            <option>Mathematics and Computer Science</option>
                            <option>Mechanical Engineering</option>
                            <option>Computer Engineering</option> 
                            {/* <option>4</option>
                            <option>5</option> */} 
                            </select>
                        </div>
                    {/* </div>
                    <div className="row">
                            <div className="form-group col-sm-2 offset-sm-2">
                                <label for="Instructor_id">Instructor id</label>
                                <input type="text" className="form-control" id="Instructor_id" placeholder="Instructor id"></input>
                            </div>
                            <div className="form-group col-sm-2">
                            <label for="Year">Year</label>
                            <input type="text" className="form-control" id="Year" placeholder="Year"></input>
                        </div>
                        <div className="form-group col-sm-2">
                            <label for="Semester">Semester</label>
                            <input type="text" className="form-control" id="Semester" placeholder="Semester"></input>
                    // </div>*/}
                        </div >
                     
                    <input className="btn btn-primary" type="submit" value="Add cousre"></input>
                </form>
                
                {'  '}
            </div>
        );
    }

}
export default (AddCourse);