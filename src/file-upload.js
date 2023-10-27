window.onload = () => {
    const uploadFile = document.getElementById("reg-form-file-input")
    const uploadText = document.getElementById("reg-form-file-input-text")

    uploadFile.addEventListener("change", function () {
        if (uploadFile.value) {
            uploadText.innerText = uploadFile.value.match(/[\/\\]([\w\d\s\.\-(\)]+)$/)[1];
        } else {
            uploadText.innerText = "Прикрепите файл с техзаданием";
        }
    })
}