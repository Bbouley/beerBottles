for (var i = 99; i > 0; i --){
   if (i>2){
  console.log('There\'s ' + (i+1) + ' bottles of beer on the wall');
  console.log('There\'s ' + (i+1) + ' bottles of beer');
  console.log('You take one down and pass it around');
  console.log('Now there\'s ' + i + ' bottles of beer on the wall')}

   else if  (i === 2 ){
  console.log('There\'s ' + i + ' bottles of beer on the wall');
  console.log('There\'s ' + i + ' bottles of beer');
  console.log('You take one down and pass it around');
  console.log('Now there\'s ' + (i-1) + ' bottle of beer on the wall')}

   else if (i === 1)
  console.log('There\'s ' + i + ' bottle of beer on the wall');
  console.log('There\'s ' + i + ' bottle of beer');
  console.log('You take one down and pass it around');
  console.log('Now there\'s  no more bottles of beer on the wall');
}
