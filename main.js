const express = require("express");
const db = require('./mysql');
const app = express();
const port = 3001;
const bcrypt = require("bcryptjs");
var cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require("jsonwebtoken");
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const moment = require('moment-timezone'); // 날짜 포맷을 위한 선언

app.use(express.json());
app.set("port", port);
app.use(cors());
app.use(cookieParser());




// 로그인 전 메인
app.get('/api', (req, res) => {
  db.query(`SELECT Lectures.Title, Lectures.LectureimageURL, COUNT(Payments.LectureID), Lectures.LectureID
  FROM Lectures LEFT JOIN Payments ON Lectures.LectureID = Payments.LectureID
  GROUP BY Lectures.LectureID ORDER BY COUNT(Payments.LectureID) DESC;`, (err, rows1) => {
    if (err) {
      console.log(err);
      res.json ({
        code : 401,
        message : "잘못된 요청입니다."
      })
    } else {
      db.query(`SELECT Title, LectureimageURL, StartDate, LectureID FROM Lectures ORDER BY StartDate DESC;`, (err, rows2) => {
        if (err) {
          console.log(err);
          res.json({
            code : 401,
            message : "잘못된 요청입니다."
          })
        } else {
          db.query(`SELECT CategoryID, CategoryName, CategoryURL FROM category;`, (err, row3) => {
            if (err) {
              console.log(err);
              res.json({
                code : 401,
                message : "잘못된 요청입니다."
              })
            } else {
              if (!res.headersSent) { // 중복을 방지하기 위해 응답을 한 번만 보낸다.
                res.json({
                  code : 200,
                  message : "응답 성공",
                  "popularlecture" : rows1,
                  "latestlecture" : rows2,
                  "category" : row3
                });
              }
            }
          })
        }
      });
    }
  });
});

// 카테고리
app.get('/api/category', (req, res) => {
  const categoryid = req.query.CategoryID;
  db.query(`SELECT Category.CategoryName, Lectures.Title, Lectures.LectureimageURL, Lectures.LectureID, Lectures.Price, Category.CategoryID
    FROM CoursesCategory LEFT JOIN Lectures 
    ON CoursesCategory.LectureID = Lectures.LectureID
    LEFT JOIN Category ON CoursesCategory.CategoryID = Category.CategoryID
    WHERE Category.CategoryID = ${categoryid};`, (err, rows) => {
    if (err) {
      console.log(err);
      res.json ({
        code : 401,
        message : "잘못된 요청입니다."
      })
    } else {
      if (!res.headersSent) { // 중복을 방지하기 위해 응답을 한 번만 보낸다.
        res.json({
          code : 200,
          message : "응답 성공",
          "categorylist" : rows
        });
      }
    }
  });
});

// 회원가입
app.post('/api/signup', (req, res) => {
  const userid = req.body.UserID;
  const email = req.body.Email;
  const nickname = req.body.Nickname;
  const password = req.body.Password;
  const sql = 'INSERT INTO User(UserID, Password, Email, UserType, Nickname) VALUES (?, ?, ?, "student",?)';
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.Password, salt);
  const values = [userid, hash, email, nickname];
  console.log(password);
  db.query(sql, values, (err, rows) => {
    if (err) {
      console.log(err);
      res.json({
        code : 401,
        message : "잘못된 요청입니다."
      })
    } else {
      if (!res.headersSent) { // 중복을 방지하기 위해 응답을 한 번만 보낸다.
        res.json({
          code : 200,
          message : "사용자가 등록되었습니다.",
          "userinfo" : rows
        });
      }
    }
  });
});

// 아이디 중복 확인
app.post('/api/signup/checkid', (req, res) => {
  const userid = req.body.UserID;
  const sql = `SELECT UserID FROM User WHERE UserID = ?`;
  const values = [userid];

  try {
    db.query(sql, values, (err, rows) => {
      if (err) {
        res.json({
          code: 401,
          message: "잘못된 요청입니다(2)."
        });
      } else {
        if (!res.headersSent) { // 중복을 방지하기 위해 응답을 한 번만 보낸다.
          if (rows.length > 0) { // 이메일 중복일 경우
            res.json({ isDuplicate: true });
          } else { // 이메일 중복이 아닌 경우
            res.json({ isDuplicate: false });
          }
        }
      }
    });
  } catch (error) {
    console.error("에러 발생:", error);
    res.json({
      code: 500,
      message: "서버 오류 발생"
    });
  }
});

// 닉네임 중복 확인
app.post('/api/signup/checknickname', (req, res) => {
  
  const nickname = req.body.Nickname;
  const sql = `SELECT Nickname FROM User WHERE Nickname = ?`;
  const values = [nickname];

  try {
    db.query(sql, values, (err, rows) => {
      if (err) {
        res.json({
          code: 401,
          message: "잘못된 요청입니다(2)."
        });
        console.log(err);
      } else {
        if (!res.headersSent) { // 중복을 방지하기 위해 응답을 한 번만 보낸다.
          if (rows.length > 0) { // 닉네임 중복일 경우
            res.json({ isDuplicate: true });
            
          } else { // 닉네임 중복이 아닌 경우
            res.json({ isDuplicate: false });
          }
        }
      }
    });
  } catch (error) {
    console.error("에러 발생:", error);
    res.json({
      code: 401,
      message: "서버 오류 발생"
    });
  }
});

// 로그인 ( <- 비밀번호 )
app.post('/api/login', (req, res) => {
  const userid = req.body.UserID;
  const password = req.body.Password;
  const sql = `SELECT * FROM User WHERE UserID = ?;`;
  const values = [userid]
  
  db.query(sql, values, (err, rows) => {
    if (err) {
      console.log(err);
      res.json({
        code : 401,
        message : "잘못된 요청입니다."
      })
    } else { 
      // 비밀번호
      const isPasswordCorrect = bcrypt?.compareSync( // 서로 비교하여 true, false 값으로 반환
        req.body.Password, // 사용자가 입력한 비밀번호
        rows[0]?.Password // DB에 저장된 비밀번호 
      )
      if (!res.headersSent) { // 중복을 방지하기 위해 응답을 한 번만 보낸다.
        if (isPasswordCorrect) {
          const {Password, ...other} = rows[0]; // Password를 제외한 나머지를 저장
          const token = jwt.sign({ id: userid }, "jwtkey"); // token

          res.cookie("access_token", token, {
            httpOnly: true,
          })
          .status(200)
          .json({
            code : 200,
            message: "로그인이 완료되었습니다.",
            "userinfo" :  other
          })

        } else {
          res.json({
            code : 401,
            message : "아이디 또는 비밀번호가 존재하지 않습니다."
          })
        }
        
      }
    }
  });
});

// 로그인 후 메인 페이지
app.get('/api/user', (req, res) => {
  const userid = req.body.UserID;
  const sql = `SELECT UserID FROM User WHERE UserID = ?`;
  const values = [userid];
  db.query(sql, values, (err, rows) => {
    if (err) {
      console.log(err);
      res.json({
        code : 401,
        message : "잘못된 요청입니다."
      })
    }else {
      if (!res.headersSent) { // 중복을 방지하기 위해 응답을 한 번만 보낸다.
        db.query(`SELECT Lectures.Title, Lectures.LectureimageURL, Lectures.LectureID COUNT(Payments.LectureID) AS COUNT
        FROM Lectures LEFT JOIN Payments ON Lectures.LectureID = Payments.LectureID
        GROUP BY Lectures.LectureID ORDER BY COUNT(Payments.LectureID) DESC;`, (err, rows1) => {
      if (err) {
        console.log(err);
        res.json({
          code : 401,
          message : "잘못된 요청입니다."
        })
      } else {
        db.query(`SELECT Title, LectureimageURL, Lectures.LectureID, StartDate FROM Lectures ORDER BY StartDate DESC;`, (err, rows2) => {
          if (err) {
            console.log(err);
            res.json({
              code : 401,
              message : "잘못된 요청입니다."
            })
          } else {
            if (!res.headersSent) { // 중복을 방지하기 위해 응답을 한 번만 보낸다.
              res.json({
                code : 200,
                message : "응답 성공",
                "userinfo" : rows,
                "popularlecture" : rows1,
                "latestlecture" : rows2
              });
              }
            }
          });
        }
      });
      }
    }
  });
});

// 강의 메인 페이지(전체 목록)
app.get('/api/lectures', (req, res) => {
  db.query(`SELECT Title, LectureimageURL, Price, LectureID FROM Lectures ORDER BY StartDate DESC;`, (err, rows) => {
    if (err) {
      console.log(err);
      res.json({
        code : 401,
        message : "잘못된 요청입니다."
      })
    } else {
      if (!res.headersSent) { // 중복을 방지하기 위해 응답을 한 번만 보낸다.
        res.json({
          code : 200,
          message : "응답 성공",
          "lectureslist" : rows
        });
      }
    }
  });
});

// 검색
app.get('/api/search', (req, res) => {
  const search = req.query.Searchword;
  const sql = `SELECT Title, LectureImageURL, Price FROM Lectures WHERE Title LIKE '%${search}%';`;
  db.query(sql, (err, rows1) => {
    if (err) {
      console.log(err);
      res.json({
        code : 401,
        message : "잘못된 요청입니다."
      })
    } else {
      db.query(`SELECT COUNT(*) AS COUNT FROM Lectures WHERE Title LIKE '%${search}%';`, (err, rows2) => {
        if (err) {
          console.log(err);
          res.json({
            code : 401,
            message : "잘못된 요청입니다."
          })
        } else {
          if (!res.headersSent) { // 중복을 방지하기 위해 응답을 한 번만 보낸다.
            console.log('results: ', rows1);
            res.json({
              code : 200,
              message : "검색 성공",
              "searchword" : search,
              "searchresults" : rows1,
              "searchesnumber" : rows2
            });
          }
        }
      });
    }
  });
});

// 강의 상세 페이지
app.get('/api/lecturesinfo', (req, res) => {
  const lectureid = req.query.LectureID;
  db.query(`SELECT Lectures.Title, Lectures.Description, Lectures.instructorID, Lectures.PreviewURL, Lectures.Price, Category.CategoryName
  FROM Lectures LEFT JOIN CoursesCategory ON Lectures.LectureID = CoursesCategory.LectureID
  LEFT JOIN Category ON CoursesCategory.CategoryID = Category.CategoryID WHERE Lectures.LectureID = ${lectureid};`, (err, rows1) => {
    if (err) {
      console.log(err);
      res.json({
        code : 401,
        message : "잘못된 요청입니다."
      })
    } else {
      db.query(`SELECT Instructor.InstructorName,
      Instructor.ProfileURL, Instructor.InstructorEmail, Instructor.Qualifications, Instructor.Description
      FROM Lectures LEFT JOIN Instructor 
      ON Lectures.instructorID = Instructor.InstructorID WHERE LectureID = ${lectureid};`, (err, rows2) => {
    if (err) {
      console.log(err);
      res.json({
        code : 401,
        message : "잘못된 요청입니다."
      })
    } else {
      // 커리큘럼 정보 가져오기
      db.query(`SELECT Lectures.Title, Lectures.LectureImageURL, LectureTOC.*
      FROM Lectures LEFT JOIN LectureTOC ON Lectures.LectureID = LectureTOC.LectureID
      WHERE Lectures.LectureID = ${lectureid};`, (err, rows3) => {
    if (err) {
      console.log(err);
      res.json({
        code : 401,
        message : "잘못된 요청입니다."
      })
    } else {
      if (!res.headersSent) { // 중복을 방지하기 위해 응답을 한 번만 보낸다.
        res.json({
          code : 200,
          message : "응답 성공",
          "lectureintroduction" : rows1,
          "instructor" : rows2,
          "curriculum" : rows3
        });
      }
    }
  });
    }
  });
    }
  });
});

// 수강평 리스트
app.get('/api/lecturesinfo/reviewlist', (req, res) => {
  const lectureid = req.query.LectureID;
  db.query(`SELECT User.Nickname, Lectures.LectureID, Review.Review, User.ImageURL, User.UserID, Review.ReviewID, Review.ReviewDate
  FROM Review LEFT JOIN Lectures ON Review.LectureID = Lectures.LectureID
  LEFT JOIN User ON Review.UserID = User.UserID
  WHERE Lectures.LectureID = ${lectureid} ORDER BY Review.ReviewDate DESC;`, (err, rows) => {
    if (err) {
      console.log(err);
      res.json({
        code : 401,
        message : "잘못된 요청입니다."
      })
    } else {
      if (!res.headersSent) { // 중복을 방지하기 위해 응답을 한 번만 보낸다.
        res.json({
          code : 200,
          message : "응답 성공",
          "review" : rows
        });
      }
    }
  });
});

// 수강평 작성 여부
app.post('/api/reviewcheck', (req, res) => {
  const lectureid = req.body.LectureID;   
  const userid = req.body.UserID;
  const sql = 'SELECT * FROM Review WHERE UserID = ? AND LectureID = ?';
  const values = [userid, lectureid];
  
    db.query(sql, values, (err, rows) => {
      if (err) {
        console.log(err);
        res.json({
          code : 401,
          message : "잘못된 요청입니다."
        })
      } else {
        if (!res.headersSent) { // 중복을 방지하기 위해 응답을 한 번만 보낸다.
          if (rows.length > 0) { // 결제가 되어있을 경우
            res.json({ 
              code: 200,
              isReviewCheck: true
            });
          } else { // 결제가 안되어있을 경우
            res.json({
              code: 200,
              isReviewCheck: false
            });
          } 
          
        }
      }
    });
});

// 수강평 작성
app.post('/api/lecturesinfo/reviewadd', (req, res) => {
  const lectureid = req.body.LectureID;
  const userid = req.body.UserID;
  const review = req.body.Review;
  const today = new Date();
  const sql = `INSERT INTO Review(LectureID, UserID, Review, ReviewDate) VALUES (?, ?, ?, ?);`;
  const values = [lectureid, userid, review, today];
  db.query(sql, values, (err, rows) => {
    if (err) {
      console.log(err);
      res.json({
        code : 401,
        message : "잘못된 요청입니다."
      })
    } else {
      if (!res.headersSent) { // 중복을 방지하기 위해 응답을 한 번만 보낸다.
        res.json({
          code : 200,
          message : "수강평을 등록했습니다.",
          "lectures" : lectureid,
          "reviewuser" : userid,
          "review" : review,
          "date" : today,
        });
      }
    }
  });
});

// 수강평 수정
app.put('/api/lecturesinfo/reviewupdate', (req, res) => {
  const review = req.body.Review;
  const reviewid = req.body.ReviewID;
  db.query(`UPDATE Review SET Review = '${review}' WHERE ReviewID = ${reviewid};`, (err, rows) => {
    if (err) {
      console.log(err);
      res.json({
        code : 401,
        message : "잘못된 요청입니다."
      })
    } else {
      if (!res.headersSent) { // 중복을 방지하기 위해 응답을 한 번만 보낸다.
        res.json({
          code : 200,
          message : "수강평을 수정했습니다.",
          "reviewid" : reviewid,
          "review" : review
        });
      }
    }
  });
});

// 수강평 삭제
app.delete('/api/lecturesinfo/reviewdelete', (req, res) => {
  const reviewid = req.body.ReviewID;
  db.query(`DELETE FROM Review WHERE ReviewID = ${reviewid};`, (err, rows) => {
    if (err) {
      console.log(err);
      res.json({
        code : 401,
        message : "잘못된 요청입니다."
      })
    } else {
      if (!res.headersSent) { // 중복을 방지하기 위해 응답을 한 번만 보낸다.
        res.json({
          code : 200,
          message : "수강평을 삭제했습니다."
        })
      }
    }
  });
});

// 결제 강의 정보 가져오기
app.post('/api/lectureinfopay', (req, res) => {
  const lectureid = req.body.LectureID;

    db.query(`SELECT Title, LectureImageURL, Price FROM Lectures WHERE LectureID = ${lectureid};`, (err, rows) => {
      if (err) {
        console.log(err);
        res.json({
          code : 401,
          message : "잘못된 요청입니다."
        })
      } else {
        if (!res.headersSent) { // 중복을 방지하기 위해 응답을 한 번만 보낸다.
          res.json({
            code : 200,
            message : "요청 성공",
            "lecture" : rows
          });
        }
      }
    });
});

// 결제
app.post('/api/lecturespay', (req, res) => {
  const lectureid = req.body.LectureID;
  const userid = req.body.UserID;
  const name = req.body.Name;
  const cellphone = req.body.Cellphone;
  const email = req.body.Email;
  const amount = req.body.Amount;
  const payment = req.body.Payment;

  const sql = `INSERT INTO Payments (LectureID, UserID, PaymentDate, Name, Cellphone, Email, Amount, Payment)
  VALUES (?, ?, NOW(), ?, ?, ?, ?, ?);`;
  const values = [lectureid, userid, name, cellphone, email, amount, payment];
  db.query(sql, values, (err, rows) => {
    if (err) {
      console.log(err);
      res.json({
        code : 401,
        message : "잘못된 요청입니다."
      })
    } else {
      if (err) {
        console.log(err);
        res.json({
          code : 401,
          message : "잘못된 요청입니다."
        })
      } else {
        db.query(`INSERT INTO Enrollments (UserID, LectureID, EnrollmentDate) VALUES ('${userid}', ${lectureid}, NOW());`, (err, rows) => {
          if(err) {
            console.log(err);
            res.json({
              code : 401,
              message : "잘못된 요청입니다."
            })
          } else {
            if (!res.headersSent) { // 중복을 방지하기 위해 응답을 한 번만 보낸다.
            res.json({
              code : 200,
              message : "결제 성공",
              "paymentlecture" : lectureid,
              "name" : name,
              "cellphone" : cellphone,
              "email" : email,
              "payment" : payment,
              "amount" : amount
            });
          }
          }
        })
      }
      
    }
  });
});

// 결제 여부
app.post('/api/paycheck', (req, res) => {
  const lectureid = req.body.LectureID;   
  const userid = req.body.UserID;
  const sql = 'SELECT * FROM Enrollments WHERE UserID = ? AND LectureID = ?';
  const values = [userid, lectureid];
  
    db.query(sql, values, (err, rows) => {
      if (err) {
        console.log(err);
        res.json({
          code : 401,
          message : "잘못된 요청입니다."
        })
      } else {
        if (!res.headersSent) { // 중복을 방지하기 위해 응답을 한 번만 보낸다.
          if (rows.length > 0) { // 결제가 되어있을 경우
            res.json({ 
              code: 200,
              isCheck: true
            });
          } else { // 결제가 안되어있을 경우
            res.json({
              code: 200,
              isCheck: false
            });
          } 
          
        }
      }
    });
});

// 내 강의실
app.get('/api/erollments', (req, res) => {
  const userid = req.query.UserID;
  const sql = `SELECT Lectures.Title, Enrollments.Check, Enrollments.AttendanceRate, Lectures.LectureImageURL, Enrollments.LectureID
  FROM Lectures LEFT JOIN Enrollments ON Lectures.LectureID = Enrollments.LectureID
  WHERE Enrollments.UserID = ?;`;
  const values = userid;
  db.query(sql, values, (err, rows) => {
    if (err) {
      console.log(err);
      res.json({
        code : 401,
        message : "잘못된 요청입니다."
      })
    } else {
      if (!res.headersSent) { // 중복을 방지하기 위해 응답을 한 번만 보낸다.
        res.json({
          code : 200,
          message : "결제 성공",
          "user" : userid,
          "mylectures" : rows
        });
      }
    }
  });
});

// 마이 페이지 정보 가져오기
app.post('/api/userinfo', (req, res) => {
  const userid = req.body.UserID;

  db.query(`SELECT * FROM User WHERE UserID = '${userid}';`, (err, rows1) => {
    if (err) {
      console.log(err);
      res.json({
        code : 401,
        message : "잘못된 요청입니다."
      })
    } else {
      if (!res.headersSent) { // 중복을 방지하기 위해 응답을 한 번만 보낸다.
        res.json({
          code : 200,
          message : "요청 성공",
          "profile" : rows1
        });
      }
    }
  });
});

// 마이 페이지 정보 업데이트
app.put('/api/userupdate', (req, res) => {
  const imageurl = req.body.ImageURL;
  const userid = req.body.UserID;
  const password = req.body.Password;
  const nickname = req.body.Nickname;
  
  //const sql = `UPDATE User SET ImageURL = ?, Nickname = ? WHERE UserID = ?;`
  //console.log(sql);
  //const values = [imageurl, nickname, userid];

  if (imageurl) {
    db.query(` UPDATE User SET ImageURL = '${imageurl}' WHERE UserID = '${userid}' `, (err, rows1) => {
      if (err) {
        console.log(err);
        res.json({
          code : 401,
          message : "잘못된 요청입니다."
        })
      } else {
        if (!res.headersSent) { // 중복을 방지하기 위해 응답을 한 번만 보낸다.
          res.json({
            code : 200,
            message : "프로필 이미지 수정 성공",
            "profile" : imageurl,
            "nickname" : nickname,
            "password" : password
          });
        }
      }
    });
  }
  if (nickname) {
    console.log(nickname);
    db.query(`UPDATE User SET Nickname = '${nickname}' WHERE UserID = '${userid}'`, (err, rows1) => {
      if (err) {
        console.log(err);
        res.json({
          code : 401,
          message : "잘못된 요청입니다."
        })
      } else {
        if (!res.headersSent) { // 중복을 방지하기 위해 응답을 한 번만 보낸다.
          res.json({
            code : 200,
            message : "닉네임 수정 성공",
            "profile" : imageurl,
            "nickname" : nickname,
            "password" : password
          });
        }
      }
    });
  }
  if (password) {
    db.query(`UPDATE User SET Password = '${password}' WHERE UserID = '${userid}';`, (err, rows2) => {
      if (err) {
        console.log(err);
        res.json({
          code : 401,
          message : "잘못된 요청입니다."
        })
      } else {
        if (!res.headersSent) { // 중복을 방지하기 위해 응답을 한 번만 보낸다.
          res.json({
            code : 200,
            message : "비밀번호 변경 성공",
            "password" : password
          });
        }
      }
    });
  }

  {/**
  if (!password) { // 패스워드가 없을 경우
    db.query(sql, values, (err, rows1) => {
        if (err) {
          console.log(err);
          res.json({
            code : 401,
            message : "잘못된 요청입니다."
          })
        } else {
          if (!res.headersSent) { // 중복을 방지하기 위해 응답을 한 번만 보낸다.
            res.json({
              code : 200,
              message : "수정 성공",
              "rows1" : rows1,
              "profile" : imageurl,
              "nickname" : nickname
            });
          }
        }
      });
  } else { // 패스워드가 있을 경우
    db.query(`UPDATE User SET Password = '${password}' WHERE UserID = '${userid}';`, (err, rows2) => {
        if (err) {
          console.log(err);
          res.json({
            code : 401,
            message : "잘못된 요청입니다."
          })
        } else {
          if (!res.headersSent) { // 중복을 방지하기 위해 응답을 한 번만 보낸다.
            res.json({
              code : 200,
              message : "비밀번호 변경 성공",
              "password" : password
            });
          }
        }
      });
    }
     */}

});

// 비밀번호 가져오기
// 비밀번호
// const isPasswordCorrect = bcrypt.compareSync ( // 서로 비교하여 true, false 값으로 반환
// req.body.Password, // 사용자가 입력한 비밀번호
// rows1[0].Password // DB에 저장된 비밀번호 
// )

// if (isPasswordCorrect) { // 비밀번호가 일치할 경우
//   res.json({
//   code : 200,
//   message : "요청 성공",
//   "profile" : rows1
//   });
// } else {
//   res.json({
//     message : '비밀번호가 일치하지 않습니다.'
//   })
// }




// 해석 필요 ★★★★★★★★★★★★★★★
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = 'uploads/';
    // 디렉토리가 존재하지 않으면 생성
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath);
    }
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const sanitizedFileName = new Date().valueOf() + path.extname(file.originalname) // 파일명 겹치기 않게 하기 위함
    console.log(sanitizedFileName);
    cb(null, sanitizedFileName);
  }
});

const upload = multer({ storage });

// 마이 페이지 서버에 이미지 저장
app.post('/api/upload', upload.single('file'), function(req, res) {
  const file = req.file;
  console.log('file: ' + file.filename);
  res.status(200).json(file.filename);
})

// 업로드된 파일들을 제공할 정적 경로 설정
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // '/uploads'를 이름으로 온건 uploads에서 가져가라

// 예제 API 엔드포인트
app.get('/api/getImage/:filename', (req, res) => {
  const filename = req.params.filename;
  res.sendFile(path.join(__dirname, 'uploads', filename));
});




// 강의 재생 페이지
app.get('/api/erollments/play', (req, res) => {
  const tocid = req.query.TOCID;
  db.query(`SELECT Lectures.Title, Lectures.LectureImageURL, Lectures.LectureID, LectureTOC.Title AS TOCTitle, LecturesMaterial.*
  FROM Lectures LEFT JOIN LectureTOC ON Lectures.LectureID = LectureTOC.LectureID
  LEFT JOIN LecturesMaterial ON LectureTOC.TOCID = LecturesMaterial.TOCID
  WHERE LectureTOC.TOCID = ${tocid};`, (err, rows) => {
    if (err) {
      console.log(err);
      res.json({
        code : 401,
        message : "잘못된 요청입니다."
      })
    } else {
      if (!res.headersSent) { // 중복을 방지하기 위해 응답을 한 번만 보낸다.
        res.json({
          code : 200,
          message : "강의 재생 성공",
          "TOC" : rows
        });
      }
    }
  });
});

// 강의 재생률 업데이트
app.put(`/api/erollments/update`, (req, res) => {
  const attendancerate = req.body.AttendanceRate;
  const userid = req.body.UserID;
  const lectureid = req.body.LectureID;
  const sql = `UPDATE Enrollments SET AttendanceRate = ? WHERE UserID = ? AND LectureID = ?;`
  const values = [attendancerate, userid, lectureid]
  db.query(sql, values, (err, rows) => {
    if (err) {
      console.log(err);
      res.json({
        code : 401,
        message : "잘못된 요청입니다."
      })
    } else {
      if (!res.headersSent) { // 중복을 방지하기 위해 응답을 한 번만 보낸다.
        res.json({
          code : 200,
          message : "응답 완료",
          "attendancerate" : attendancerate,
          "userid" : userid,
          "lectureid" : lectureid
        });
      }
    }
  });
});

// 커리큘럼 정보 가져오기
app.get('/api/curriculum', (req, res) => {
  const lectureid = req.query.LectureID;
  db.query(`SELECT Lectures.Title, Lectures.LectureImageURL, LectureTOC.*
      FROM Lectures LEFT JOIN LectureTOC ON Lectures.LectureID = LectureTOC.LectureID
      WHERE Lectures.LectureID = ${lectureid};`, (err, rows) => {
    if (err) {
      console.log(err);
      res.json({
        code : 401,
        message : "잘못된 요청입니다."
      })
    } else {
      if (!res.headersSent) { // 중복을 방지하기 위해 응답을 한 번만 보낸다.
        res.json({
          code : 200,
          message : "응답 성공",
          "curriculum" : rows
        });
      }
    }
  });
});

// 커뮤니티 메인 페이지
app.get('/api/community', (req, res) => {
  const type = req.query.Type;
  db.query(`SELECT User.Nickname, Community.CommunityDate, Community.Title, Community.Contents, Community.CommunityID
  FROM User LEFT JOIN Community ON User.UserID = Community.UserID
  WHERE Community.Type = ${type} ORDER BY Community.CommunityDate DESC;`, (err, rows) => {
    if (err) {
      console.log(err);
      res.json({
        code : 401,
        message : "잘못된 요청입니다."
      })
    } else {
      if (!res.headersSent) { // 중복을 방지하기 위해 응답을 한 번만 보낸다.
        res.json({
          code : 200,
          message : "응답 성공",
          "community" : type,
          "communitylist" : rows
        });
      }
    }
  });
});

// 문의사항 메인 페이지 (if type == 4)
app.get('/api/community/ask', (req, res) => {
  const userid = req.query.UserID;
  const type = req.query.Type;
  const sql = `SELECT User.Nickname, Community.CommunityDate, Community.Title, Community.Contents, Community.Type, Community.CommunityID
  FROM User LEFT JOIN Community ON User.UserID = Community.UserID WHERE Community.UserID = ? AND Community.Type = ?;`
  const values = [userid, type];
  db.query(sql, values, (err, rows) => {
    if (err) {
      console.log(err);
      res.json({
        code : 401,
        message : "잘못된 요청입니다."
      })
    } else {
      if (!res.headersSent) { // 중복을 방지하기 위해 응답을 한 번만 보낸다.
        res.json({
          code : 200,
          message : "문의사항 리스트",
          "communitylist" : rows
        });
      }
    }
  });
});

// 커뮤니티 상세 페이지
app.get(`/api/communityinfo`, (req, res) => {
  const communityid = req.query.CommunityID;
  db.query(`SELECT User.Nickname, Community.CommunityDate, Community.Title, Community.Contents, Community.Type
  FROM User LEFT JOIN Community ON User.UserID = Community.UserID
  WHERE CommunityID = ${communityid};`, (err, rows) => {
    if (err) {
      console.log(err);
      res.json({
        code : 401,
        message : "잘못된 요청입니다."
      })
    } else {
      if (!res.headersSent) { // 중복을 방지하기 위해 응답을 한 번만 보낸다.
        res.json({
          code : 200,
          message : "응답 성공",
          "communitycontents" : rows
        });
      }
    }
  });
});

// 커뮤니티 작성 페이지
app.post(`/api/community/add`, (req, res) => {
  const userid = req.body.UserID;
  const title = req.body.Title;
  const contents = req.body.Contents;
  const type = req.body.Type;
  const today = new Date();
  const formattedDate = moment(today).tz('Asia/Seoul').format('YYYY-MM-DD HH:mm:ss');
  const sql = `INSERT INTO Community(UserID, CommunityDate, Title, Contents, Type) VALUES (?, ?, ?, ?, ?);`
  const values = [userid, formattedDate, title, contents, type];
  db.query(sql, values, (err, rows) => {
    if (err) {
      console.log(err);
      res.json({
        code : 401,
        message : "잘못된 요청입니다."
      })
    } else {
      if (!res.headersSent) { // 중복을 방지하기 위해 응답을 한 번만 보낸다.
        res.json({
          code : 200,
          message : "글을 등록했습니다.",
          "board" : type,
          "communityuser" : userid,
          "title" : title,
          "contents" : contents,
          "date" : formattedDate
        });
      }
    }
  });
});

// 커뮤니티 수정 페이지
app.put(`/api/community/update`, (req, res) => {
  const title = req.body.Title;
  const contents = req.body.Contents;
  const communityid = req.body.CommunityID;
  const sql = `UPDATE Community SET Title= ?, Contents = ? WHERE CommunityID = ?;`
  const values = [title, contents, communityid]
  db.query(sql, values, (err, rows) => {
    if (err) {
      console.log(err);
      res.json({
        code : 401,
        message : "잘못된 요청입니다."
      })
    } else {
      if (!res.headersSent) { // 중복을 방지하기 위해 응답을 한 번만 보낸다.
        res.json({
          code : 200,
          message : "글을 수정했습니다.",
          "title" : title,
          "contents" : contents
        });
      }
    }
  });
});

// 커뮤니티 삭제 페이지
app.delete(`/api/community/delete`, (req, res) => {
  const communityid = req.body.CommunityID;
  const sql = `DELETE FROM Community WHERE CommunityID = ?;`
  const values = communityid;
  db.query(sql, values, (err, rows) => {
    if (err) {
      console.log(err);
      res.json({
        code : 401,
        message : "잘못된 요청입니다."
      })
    } else {
      if (!res.headersSent) { // 중복을 방지하기 위해 응답을 한 번만 보낸다.
        res.json({
          code : 200,
          message : "글을 삭제했습니다."
        });
      }
    }
  });
});

// 댓글 리스트
app.get(`/api/community/commentlist`, (req, res) => {
  const communityid = req.query.CommunityID;
  const sql = `SELECT User.ImageURL, User.Nickname, Comments.CommentDate, Comments.Comment, User.UserID, Comments.CommentID
  FROM User LEFT JOIN Comments ON User.UserID = Comments.UserID WHERE Comments.CommunityID = ? ORDER BY Comments.CommentDate DESC;`
  const values = [communityid];
  db.query(sql, values, (err, rows) => {
    if (err) {
      console.log(err);
      res.json({
        code : 401,
        message : "잘못된 요청입니다."
      })
    } else {
      if (!res.headersSent) { // 중복을 방지하기 위해 응답을 한 번만 보낸다.
        res.json({
          code : 200,
          message : "응답 성공",
          "commentlist" : rows
        });
      }
    }
  });
});

// 댓글 작성
app.post(`/api/community/commentadd`, (req, res) => {
  const communityid = req.body.CommunityID;
  const userid = req.body.UserID;
  const comment = req.body.Comment;
  const sql = `INSERT INTO Comments(CommunityID, UserID, CommentDate, Comment) VALUES (?, ?, NOW(), ?);`;
  const values = [communityid, userid, comment];
  db.query(sql, values, (err, rows) => {
    if (err) {
      console.log(err);
      res.json({
        code : 401,
        message : "잘못된 요청입니다."
      })
    } else {
      if (!res.headersSent) { // 중복을 방지하기 위해 응답을 한 번만 보낸다.
        res.json({
          code : 200,
          message : "댓글을 등록했습니다.",
          "commentuser" : userid,
          "comment" : comment
        });
      }
    }
  });
});

// 댓글 수정
app.put(`/api/community/commentupdate`, (req, res) => {
  const comment = req.body.Comment;
  const commentid = req.body.CommentID;
  const sql = `UPDATE Comments SET Comment = ? WHERE CommentID = ?;`;
  const values = [comment, commentid]
  db.query(sql, values, (err, rows) => {
    if (err) {
      console.log(err);
      res.json({
        code : 401,
        message : "잘못된 요청입니다."
      })
    } else {
      if (!res.headersSent) { // 중복을 방지하기 위해 응답을 한 번만 보낸다.
        res.json({
          code : 200,
          message : "댓글을 수정했습니다.",
          "comment" : comment
        });
      }
    }
  });
});

// 댓글 삭제
app.delete(`/api/community/commentdelete`, (req, res) => {
  const commentid = req.body.CommentID;
  const sql = `DELETE FROM Comments WHERE CommentID = ?;`;
  const values = commentid;
  db.query(sql, values, (err, rows) => {
    if (err) { 
      console.log(err);
      res.json({
        code : 401,
        message : "잘못된 요청입니다."
      })
    } else {
      if (!res.headersSent) { // 중복을 방지하기 위해 응답을 한 번만 보낸다.
        res.json({
          code : 200,
          message : "댓글을 삭제했습니다."
        });
      }
    }
  });
});


app.listen(port, () => console.log("Listening on", port));