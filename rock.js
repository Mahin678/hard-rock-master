const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener("click", () => {
    let getInputTitle  =  document.getElementById('inputs').value;
     const titleApi = `https://api.lyrics.ovh/suggest/${getInputTitle}`;
    fetch(titleApi)
    .then(response => response.json())
    .then(json =>  displayValue(json))
}) 
function displayValue(info){

 const gets =   info.data[0];
 const getTitle = gets.title;
 const getAtristName =gets.artist.name; 
 document.getElementById('Title').innerText=getTitle;
 document.getElementById('ArtistName').innerText=getAtristName;

 const gets1 =   info.data[1];
 const getTitle1 =gets1.title;
 const getAtristName1 =gets1.artist.name; 
 document.getElementById('Title1').innerText=getTitle1;
 document.getElementById('ArtistName1').innerText=getAtristName1;

 const gets2 =   info.data[2];
 const getTitle2 =gets2.title;
 const getAtristName2 =gets2.artist.name; 
 document.getElementById('Title2').innerText=getTitle2;
 document.getElementById('ArtistName2').innerText=getAtristName2;

 const gets3 =   info.data[3];
 const getTitle3 =gets3.title;
 const getAtristName3 =gets3.artist.name; 
 document.getElementById('Title3').innerText=getTitle3;
 document.getElementById('ArtistName3').innerText=getAtristName3;

 const gets4 =   info.data[4];
 const getTitle4 =gets4.title;
 const getAtristName4 =gets4.artist.name; 
 document.getElementById('Title4').innerText=getTitle4;
 document.getElementById('ArtistName4').innerText=getAtristName4;

 const gets5 =   info.data[5];
 const getTitle5 =gets5.title;
 const getAtristName5 =gets5.artist.name; 
 document.getElementById('Title5').innerText=getTitle5;
 document.getElementById('ArtistName5').innerText=getAtristName5;

 const gets6 =   info.data[6];
  const getTitle6 =gets6.title;
 const getAtristName6 =gets6.artist.name; 
  document.getElementById('Title6').innerText=getTitle6;
  document.getElementById('ArtistName6').innerText=getAtristName6;

 const gets7 =   info.data[6];
  const getTitle7 =gets7.title;
 const getAtristName7 =gets7.artist.name; 
  document.getElementById('Title7').innerText=getTitle7;
  document.getElementById('ArtistName7').innerText=getAtristName7;
 
  const gets8 =   info.data[7];
  const getTitle8 =gets8.title;
 const getAtristName8 =gets8.artist.name; 
  document.getElementById('Title8').innerText=getTitle8;
  document.getElementById('ArtistName8').innerText=getAtristName8;

  const gets9 =   info.data[8];
  const getTitle9 =gets9.title;
 const getAtristName9 =gets9.artist.name; 
  document.getElementById('Title9').innerText=getTitle9;
  document.getElementById('ArtistName9').innerText=getAtristName9;


 showtheLyrics('btn1' ,getAtristName,getTitle)
 showtheLyrics('btn2' ,getAtristName1,getTitle1);
 showtheLyrics('btn3' ,getAtristName2,getTitle2);
 showtheLyrics('btn4' ,getAtristName3,getTitle3);
 showtheLyrics('btn5' ,getAtristName4,getTitle4);
 showtheLyrics('btn6' ,getAtristName5,getTitle5);
 showtheLyrics('btn7' ,getAtristName6,getTitle6);
 showtheLyrics('btn8' ,getAtristName7,getTitle7);
 showtheLyrics('btn9' ,getAtristName8,getTitle8);
 showtheLyrics('btn10' ,getAtristName9,getTitle9);


function showtheLyrics(id ,artistName,titleName ){
  const holds = document.getElementById(id);
  holds.addEventListener("click", function(){
    loadSong(artistName,titleName)
    document.getElementById('show-current-song').innerText=titleName;
    document.getElementById('show-current-artist').innerText=artistName;
  })
}
}  

function  loadSong(id1, id2){
   const fetchUrl = `https://api.lyrics.ovh/v1/${id1}/${id2}`
       fetch(fetchUrl)
        .then(response => response.json())
        .then(json => displayLyrics(json));  
 }
  function  displayLyrics(songs){
      const showLyrics =   document.getElementById('lyrics-show');
      const shows = songs.lyrics;
      showLyrics.innerText=shows;
  }