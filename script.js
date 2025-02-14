const imageInput = document.getElementById('image-input');
const sendButton = document.getElementById('send-button');
const resultDiv = document.getElementById('result');

sendButton.addEventListener('click', () => {
    const imageFile = imageInput.files[0];
    const formData = new FormData();
    formData.append('image', imageFile);

    fetch('https://api.github.com/repos/username/repo/contents/path/to/image/image_b.jpg', {
        method: 'PUT',
        headers: {
            'Authorization': 'token YOUR_GITHUB_TOKEN',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            message: 'add image B',
            content: formData
        })
    })
    .then(response => response.json())
    .then(data => {
        resultDiv.innerHTML = `Ảnh B đã được gửi lên github website thành công!`;
    })
    .catch(error => {
        resultDiv.innerHTML = `Lỗi gửi ảnh B lên github website: ${error.message}`;
    });
});
