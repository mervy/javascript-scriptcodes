/*Preview de Imagens antes do Upload
<input type="file" name="files[]" id="inputMultipleImagesPreview"> 
<div id="galleryPreview"></div>
*/

$(document).ready(function () {
    $('#inputMultipleImagesPreview').change(function () {
        $("#galleryPreview").html('');
        for (var i = 0; i < $(this)[0].files.length; i++) { // $("#galleryPreview").append('<img src="' + window.URL.createObjectURL(this.files[i]) + '" width="100px" height="100px"/>');
            $("#galleryPreview").append('<img src="' + window.URL.createObjectURL(this.files[i]) + '" class="img-fluid"/>');

        }
    });
});


/*Preview de Imagens antes do Upload
<input type="file" accept="image/*" onchange="loadFile(event)" > 
<img id="output" width="100px" /> <br>
*/
var loadFile = function (event) {
    var output = document.getElementById('previewImageFrontCover');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
        URL.revokeObjectURL(output.src) // free memory
    }
};

