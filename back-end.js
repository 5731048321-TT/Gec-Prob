const express = require('express');
const mysql = require('mysql');
const app = express();
const cors = require('cors');

var bodyParser = require('body-parser')

app.use(cors({
    origin: 'http://13.229.251.3:3000',
    credentials: true
}));

// parse application/x-www-form-urlencoded

// parse application/json
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));


app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
console.log("NODE_ENV: ", process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('front-end/build'));

    // Return the main index.html, so react-router render the route in the client
    app.get('/', (req, res) => {
        res.sendFile(path.resolve('front-end/build', 'index.html'));
    });
}

const host = "gecproblem.c34qfxmpyqqj.ap-southeast-1.rds.amazonaws.com"
const user = "gecprob"
const pswd = ""
const dbname = "GECProblem"

// config db ====================================
const pool = mysql.createPool({
    host: host,
    user: user,
    password: pswd,
    port: "3306",
    database: dbname
});

app.on('error', function (err) {
    console.log("[mysql error]", err);
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/api/course', (req, res) => {
    let queryString = `SELECT * from course`;
    pool.query(queryString, (err, rows, fields) => {
        if (err) throw err;
        res.json(rows);
    })
})
app.post('/api/teach',(req,res)=>{
    
    let queryString=`INSERT teach SET?`
    console.log(queryString, 'qs')
    pool.query(queryString,req.body,(err,rows,fields)=>{
            if(err) throw err;
        res.json(rows);
    });
})
app.post('/api/addCourse',(req,res)=>{
    
    let queryString=`INSERT course SET?`
    console.log(queryString, 'qs')
    pool.query(queryString,req.body,(err,rows,fields)=>{
            if(err) throw err;
        res.json(rows);
    });
})

app.get('/api/Information',(req,res)=>{
    let queryString;
    queryString=`select student.student_id ,student_name,
    department_name,faculty_name,
    course.course_id,course_name,enroll.year,enroll.semester,grade
    ,instructor_name,room
     from 
    ((((((student inner join department on student.department_id = department.department_id )
    inner join faculty on department.faculty_id = faculty.faculty_id)
    inner join enroll on student.student_id = enroll.student_id)
    inner join course on enroll.course_id=course.course_id)
    inner join teach on enroll.course_id=teach.course_id)
    inner join instructor on instructor.instructor_id=teach.instructor_id)`;
    pool.query(queryString,(err,rows,fields)=>{
        if(err) throw err;
        res.json(rows)
    });
})


app.listen(app.get('port'), () => {
    console.log(`Find the server at ${app.get('port')}/`) // eslint-disable-line no-console
})