var name='reka';
document.write (name);
var name=' ramya';
document.write (name);
var name=' ,geetha';
document.write (name+"<br>");
var v=10.5;
document.write(typeof(v)+"<br>");
var a;
a += 'jdp';
document.write(a);
var arr =['sahithi',1,true];
//document.write(arr);//
document.write(typeof(arr)+"<br>");
var arr=['a','b','c','d'];
document.write(arr[1]+"<br>");
document.write(arr[3]+"<br>");
var obj={
	'name':'hari',
	'rollno':123,
	'branch':'cse',
}
console.log(obj.name);
console.log(obj.rollno);
console.log(obj.branch);
var obj=[{
	'name':'hari',
	'rollno':123,
	'branch':'cse',
},
{
	'name':'ram',
	'rollno':234,
	'branch':'ece',
}]
console.log(obj[0].name+obj[0].rollno+obj[0].branch);
console.log(obj[1].name+obj[1].rollno+obj[1].branch);

for (var i=0;i<obj.length;i++){
      for (var key in obj[i]){
        document.write(obj[i][key])
	}
}
