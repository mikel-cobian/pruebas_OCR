
const regex= /[a-zA-Z0-9]{9}[a-zA-Z0-9]{2}[0-9]{6}/g;

$("#js-upload-submit").click(function (e) 
{

  Tesseract.recognize(
    'img/demo3.jpg',
    // 'https://tesseract.projectnaptha.com/img/eng_bw.png',
    'eng',
    { logger: m => console.log(m) }
  ).then(({ data: { text } }) => {
    
    console.log(text);

    var filteredVim = text.match(regex);
    
    console.log(filteredVim);
    
  })
})

