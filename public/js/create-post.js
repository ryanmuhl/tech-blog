
const createPostHandler = async(event) => {
    event.preventDefault();

    document.location.replace('/dashboard/new-post')
}


document.querySelector('#create-new-post').addEventListener('click', createPostHandler);