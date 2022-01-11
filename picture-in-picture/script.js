const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // Catch Erro here
        console.log('whoops, error here: ', error);
    }
}

button.addEventListener('click', async() =>{
    // Disable button
    button.disabled = true;
    //starting picture in picture
    await videoElement.requestPictureInPicture();
    // reset Button
    button.disable = false;
} )


//On load
selectMediaStream();