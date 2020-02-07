var data =  { 0:{
  user : 1,
  job  : 'call center'
},
1:{
  user : 2,
  job  : 'programmer'
}
};


var arr  = [],
keys = Object.keys(data);

for(var i=0,n=keys.length;i<n;i++){
var key  = keys[i];
arr[key] = data[key];
}