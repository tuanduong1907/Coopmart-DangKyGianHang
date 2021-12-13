// Add Image Comment Section

const imgInput = document.getElementById('image_input');
const uploadImgBtn = document.getElementById('upload-img-btn')
const sendFileBtn = document.querySelector('.btn btn-upload-item')

uploadImgBtn.addEventListener('click', function(e) {
    imgInput.click()
}) 
var uploaded_image;

image_input.addEventListener('change', function() {
const reader = new FileReader();
reader.addEventListener('load', () => {
    uploaded_image = reader.result;
    document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`;
});
reader.readAsDataURL(this.files[0]);
});

const cancelBtn = document.querySelector('.upload-cancel')
const imgUpload = document.querySelector('.img-uploaded')
cancelBtn.addEventListener('click', function() {
    document.querySelector("#display_image").style.backgroundImage = '';

})

function btUploadFile(event) {
    event.stopPropagation();
}

uploadImgBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    document.querySelector("#display_image").style.backgroundImage = `url()`;
}) 


// Option Upload
const optionUploads = document.querySelectorAll('.container__body-info-item')
optionUploads.forEach((optionUpload)=> {
    optionUpload.onclick = function(e) {
        e.stopPropagation();
    document.querySelector("#display_image").style.backgroundImage = '';

    }
})