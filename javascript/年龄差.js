/*
学生问老师年龄，老师说：“我像你这么大时，你才3岁，而你像我这么大时，我已经36岁了．”现在老师___岁，学生___岁．
设老师今年x岁，因为老师和学生的年龄和是：33+3=39（岁），则学生的岁数是39-x岁；
所以，x-（39-x）+x=36
3x-39=36
3x=36+39
3x=75
x=25
则学生的年龄是：39-25=14（岁）
答：现在老师25岁，学生14岁．
故答案为：25，14．
 */
// 程序实现
// 老师和学生年龄
function getTeacherAgeStudentAge(teacherAge, studentAge) {
  return studentAge + teacherAge;
}

// 获取老师年龄
function getTeacherAge(teacherAge, studentAge) {
  return (teacherAge + getTeacherAgeStudentAge(studentAge, teacherAge)) / 3;
}

// 获取学生年龄
function getStudentAge(teacherAge, studentAge) {
  return (
    getTeacherAgeStudentAge(studentAge, teacherAge) -
    getTeacherAge(teacherAge, studentAge)
  );
}
console.log(getTeacherAge(63, 3));
console.log(getStudentAge(63, 3));
