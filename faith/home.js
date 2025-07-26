 function Link(){
    const arr = [`Front-end Development`,`Web Development`, `Graphic Design`,`HSE professional`];
    var mk = arr.length;
    var mks = "<ul>";
    for(i=0;i<mk;i++){
        mks += '<li>' + arr[i] + '</li>';
    }
    mks += "</ul>";
    document.getElementById('intro').innerHTML = mks;
 }