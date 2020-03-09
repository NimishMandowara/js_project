class Student {
  //Get Record of student for specific id
  getRecord(id) {
    let students = new Map(JSON.parse(localStorage.getItem('Students')));
    return students.get(id);
  } //Adding New record


  addRecord(id, address, certification, achievement) {
    let students = new Map(JSON.parse(localStorage.getItem('Students')));
    let student = students.get(id);
    student.Address = address;
    student.Certification = certification;
    student.SpAch = achievement;
    students.set(id, student);
    localStorage.setItem('Students', JSON.stringify(Array.from(students)));
    var b = [];
    var c = [];
    students.forEach((v, i) => {
      let a = v.Certification;

      for (var j in a) // Adding Certification to Array
      {
        b.push({
          [a[j].toLowerCase()]: i
        });
      }

      console.log(v.SpAch);
      let d = v.SpAch;
      console.log(d); // Adding Special Achievements to Array

      for (var j in d) {
        c.push({
          [d[j].toLowerCase()]: i
        });
      }
    });
    var o = {}; //Convertinf array to json for certifications    

    for (var i = 0, l = b.length; i < l; i++) {
      var key = Object.keys(b[i]);

      if (!o[key]) {
        o[key] = [];
      }

      o[key].push(b[i][key]);
    }

    const ce = new Map();
    Object.keys(o).forEach(k => {
      ce.set(k, o[k]);
    });
    var p = {};

    for (var i = 0, l = c.length; i < l; i++) {
      var key = Object.keys(c[i]);

      if (!p[key]) {
        p[key] = [];
      }

      p[key].push(c[i][key]);
    }

    const mp = new Map();
    Object.keys(p).forEach(k => {
      mp.set(k, p[k]);
    });
    localStorage.setItem('certificates', JSON.stringify(Array.from(ce)));
    localStorage.setItem('spach', JSON.stringify(Array.from(mp)));
  }

  searchStudent(value) {}

}
