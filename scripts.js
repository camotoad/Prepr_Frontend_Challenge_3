$('#mode').on('click', ()=>{
    if($('body').hasClass('dark')){
        $('body').removeClass('dark');
        $('header').addClass('bg-white');
        $('#side').addClass('bg-white');
        $('#categories').addClass('bg-ws');
        $('#categories2').addClass('bg-ws');

    } else {
        $('body').addClass('dark');
        $('header').removeClass('bg-white');
        $('#side').removeClass('bg-white');
        $('#categories').removeClass('bg-ws');
        $('#categories2').removeClass('bg-ws');
    }

    return false;
});

$('#side-bar').on('click',()=>{
    if($('#side').hasClass('side-bar-open')){
        $('#side').removeClass('side-bar-open');
    } else {
        $('#side').addClass('side-bar-open')
    }
});

$('#profile-nav').on('click',()=>{
    if($('#right-nav').hasClass('profile-nav-open')){
        $('#right-nav').removeClass('profile-nav-open');
    } else {
        $('#right-nav').addClass('profile-nav-open')
    }
});

const image_drop_area = document.querySelector("#img_drop_area");
var uploaded_image;

image_drop_area.addEventListener('dragover', (event) => {
    event.stopPropagation();
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
  });

image_drop_area.addEventListener('drop', (event) => {
    event.stopPropagation();
    event.preventDefault();
    fileList = event.dataTransfer.files;
    
    readImage(fileList[0]);
  });

  readImage = (file) => {
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
      uploaded_image = event.target.result;
      document.querySelector("#img_drop_area").style.backgroundImage = `url(${uploaded_image})`;     
    });
    reader.readAsDataURL(file);
  }

// function imgFunc(file){
//     let src = URL.createObjectURL(file);
//     document.querySelector("#img_drop_area").style.backgroundImage = `url(${file.URL})`;
// }

document.getElementById('myImage').onchange = (e) =>{
    let target = e.target.files[0];
    let src = URL.createObjectURL(target);
    console.log(src);
    document.querySelector("#img_drop_area").style.backgroundImage = `url(${src})`;
}